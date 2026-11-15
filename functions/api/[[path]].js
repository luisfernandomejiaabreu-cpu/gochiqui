// GO CHIQUI · API (Cloudflare Pages Functions). Generado por build/build.py desde src/api.js
// Bindings: DB (D1), MEDIA (R2). Secrets: ADMIN_PASSWORD, SESSION_SECRET, ANTHROPIC_API_KEY (opcional)

const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', ...headers } });
const err = (msg, status = 400) => json({ error: msg }, status);
const uid = (p = '') => p + crypto.randomUUID().replace(/-/g, '').slice(0, 16);
const b = (v) => (v ? 1 : 0);
const parse = (s, d) => { try { return s ? JSON.parse(s) : d; } catch { return d; } };

function ageFrom(birth) {
  if (!birth) return null;
  const d = new Date(birth + 'T00:00:00Z'); if (isNaN(d)) return null;
  const n = new Date(); let a = n.getUTCFullYear() - d.getUTCFullYear();
  if (n.getUTCMonth() < d.getUTCMonth() || (n.getUTCMonth() === d.getUTCMonth() && n.getUTCDate() < d.getUTCDate())) a--;
  return a;
}

// ---------- sesión ----------
const enc = new TextEncoder();
async function hmac(secret, msg) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(msg));
  return [...new Uint8Array(sig)].map((x) => x.toString(16).padStart(2, '0')).join('');
}
function safeEq(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let r = 0; for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i); return r === 0;
}
const secretOf = (env) => env.SESSION_SECRET || ('gc:' + (env.ADMIN_PASSWORD || ''));
async function makeSession(env) {
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 7; // 7 días
  return exp + '.' + (await hmac(secretOf(env), 'admin.' + exp));
}
async function isAdmin(request, env) {
  const c = request.headers.get('cookie') || '';
  const m = c.match(/(?:^|;\s*)gc_session=([^;]+)/); if (!m) return false;
  const [exp, sig] = decodeURIComponent(m[1]).split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  return safeEq(sig, await hmac(secretOf(env), 'admin.' + exp));
}
const cookie = (v, maxAge) => `gc_session=${encodeURIComponent(v)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;

// ---------- proyecciones públicas ----------
const pubPlayer = (p) => ({
  id: p.id, name: p.name, photo: p.photo_key ? '/api/file/' + p.photo_key : null, age: ageFrom(p.birth_date),
  nationality: p.nationality, position: p.position, height: p.height, weight: p.weight, bats: p.bats, throws: p.throws,
  gradYear: p.grad_year, bio: p.bio, featured: !!p.featured,
});
function pubEval(e) {
  const fields = parse(e.public_fields_json, []);
  const keep = new Set(['type', 'count', ...fields]);
  const pitches = parse(e.pitches_json, []).map((r) => Object.fromEntries(Object.entries(r).filter(([k]) => keep.has(k))));
  return { id: e.id, playerId: e.player_id, date: e.date, device: e.device, kind: e.kind, pitches, hitting: parse(e.hitting_json, {}), fields };
}
const adminEval = (e) => ({
  id: e.id, playerId: e.player_id, date: e.date, device: e.device, kind: e.kind, pdfKey: e.pdf_key,
  pitches: parse(e.pitches_json, []), hitting: parse(e.hitting_json, {}), publicFields: parse(e.public_fields_json, []),
  notes: e.notes, published: !!e.published, createdAt: e.created_at,
});
const fileUrl = (k) => (k ? '/api/file/' + k : null);
const pubAlumni = (a) => ({ ...a, photo: fileUrl(a.photo_key), needs_review: !!a.needs_review, published: !!a.published });

async function settings(env) {
  const { results } = await env.DB.prepare('SELECT key, value FROM settings').all();
  const s = Object.fromEntries(results.map((r) => [r.key, r.value]));
  s.logo = fileUrl(s.logo_key); s.hero = fileUrl(s.hero_key); s.hero_player = fileUrl(s.hero_player_key); s.founder_photo = fileUrl(s.founder_photo_key);
  return s;
}

// ---------- extracción Rapsodo con Claude ----------
const EXTRACT_PROMPT = `Eres un asistente que lee reportes de Rapsodo (Pitching o PRO 2.0) de una academia de béisbol.
Devuelve SOLO un objeto JSON válido, sin texto adicional, con esta forma:
{"playerName": string|null, "date": "YYYY-MM-DD"|null, "device": "pitching"|"pro2",
 "pitches": [{"type": string, "count": number|null, "velo": number|null, "veloMax": number|null, "spin": number|null,
   "spinEff": number|null, "vb": number|null, "hb": number|null, "gyro": number|null, "relH": number|null,
   "relS": number|null, "strike": number|null}]}
Reglas: una fila por tipo de lanzamiento (Fastball, Slider, Changeup, etc.). velo y veloMax en MPH; spin en RPM;
spinEff y strike en porcentaje (0-100, sin el símbolo %); vb y hb en pulgadas (break vertical y horizontal, con signo);
gyro en grados; relH y relS en pies. Si un valor no aparece, usa null. No inventes datos.`;

async function extractRapsodo(env, pdfKey) {
  if (!env.ANTHROPIC_API_KEY) return { error: 'no_api_key' };
  const obj = await env.MEDIA.get(pdfKey); if (!obj) return { error: 'pdf_not_found' };
  const bytes = new Uint8Array(await obj.arrayBuffer());
  let bin = ''; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({
      model: env.ANTHROPIC_MODEL || 'claude-sonnet-5-5', max_tokens: 3000,
      messages: [{ role: 'user', content: [
        { type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: btoa(bin) } },
        { type: 'text', text: EXTRACT_PROMPT },
      ] }],
    }),
  });
  if (!r.ok) return { error: 'api_error', detail: (await r.text()).slice(0, 400) };
  const out = await r.json();
  const text = (out.content || []).map((c) => c.text || '').join('');
  const m = text.match(/\{[\s\S]*\}/); if (!m) return { error: 'parse_error' };
  try { return { data: JSON.parse(m[0]) }; } catch { return { error: 'parse_error' }; }
}

// ---------- router ----------
async function handle({ request, env, params }) {
  const url = new URL(request.url);
  const parts = (params.path || []).map(decodeURIComponent);
  const [a0, a1, a2] = parts;
  const M = request.method;
  const body = async () => { try { return await request.json(); } catch { return {}; } };
  if (!env.DB) return err('Falta el binding DB (D1). Revisa wrangler.toml.', 500);

  try {
    // ----- archivos públicos (fotos y videos) -----
    if (a0 === 'file') {
      const key = parts.slice(1).join('/');
      if (!key.startsWith('public/')) return err('No encontrado', 404);
      const obj = await env.MEDIA.get(key, request.headers.has('range') ? { range: request.headers } : undefined);
      if (!obj) return err('No encontrado', 404);
      const h = new Headers(); obj.writeHttpMetadata(h); h.set('etag', obj.httpEtag);
      h.set('cache-control', 'public, max-age=86400'); h.set('accept-ranges', 'bytes');
      if (obj.range) {
        const { offset = 0, length } = obj.range;
        h.set('content-range', `bytes ${offset}-${offset + length - 1}/${obj.size}`);
        return new Response(obj.body, { status: 206, headers: h });
      }
      return new Response(obj.body, { headers: h });
    }

    // ----- sesión -----
    if (a0 === 'login' && M === 'POST') {
      const { password } = await body();
      if (!env.ADMIN_PASSWORD) return err('Configura el secreto ADMIN_PASSWORD.', 500);
      await new Promise((r) => setTimeout(r, 400));
      if (!safeEq(String(password || ''), env.ADMIN_PASSWORD)) return err('Contraseña incorrecta', 401);
      return json({ ok: true }, 200, { 'set-cookie': cookie(await makeSession(env), 604800) });
    }
    if (a0 === 'logout') return json({ ok: true }, 200, { 'set-cookie': cookie('', 0) });

    // ----- público -----
    if (a0 === 'public' && M === 'GET') {
      if (a1 === 'site') {
        const { results: coaches } = await env.DB.prepare('SELECT * FROM coaches ORDER BY sort, name').all();
        const n = async (q) => (await env.DB.prepare(q).first())?.n || 0;
        const { results: ev } = await env.DB.prepare(
          `SELECT e.player_id, e.date, e.pitches_json FROM evaluations e JOIN players p ON p.id=e.player_id
           WHERE e.kind='pitching' ORDER BY e.date`).all();
        const by = {};
        for (const e of ev) {
          const mx = Math.max(...parse(e.pitches_json, []).map((r) => Number(r.veloMax ?? r.velo)).filter((v) => !isNaN(v)));
          if (isFinite(mx)) (by[e.player_id] = by[e.player_id] || []).push(mx);
        }
        const deltas = Object.values(by).filter((l) => l.length > 1).map((l) => l[l.length - 1] - l[0]);
        const stats = {
          players: await n('SELECT COUNT(*) n FROM players'),
          evaluations: await n('SELECT COUNT(*) n FROM evaluations'),
          mlb: await n("SELECT COUNT(*) n FROM alumni WHERE status='MLB' AND published=1"),
          progress: deltas.length ? Math.round((deltas.reduce((a, b) => a + b, 0) / deltas.length) * 10) / 10 : null,
          improved: deltas.length ? Math.round((deltas.filter((d) => d > 0).length / deltas.length) * 100) : null,
        };
        const lastVideo = await env.DB.prepare("SELECT * FROM media WHERE kind='video' AND published=1 ORDER BY created_at DESC LIMIT 1").first();
        return json({ settings: await settings(env), stats, lastVideo: lastVideo ? { ...lastVideo, url: fileUrl(lastVideo.key) } : null,
          coaches: coaches.map((c) => ({ ...c, photo: fileUrl(c.photo_key) })) });
      }
      if (a1 === 'players' && !a2) {
        const { results } = await env.DB.prepare('SELECT * FROM players WHERE published=1 AND consent=1 ORDER BY featured DESC, name').all();
        const { results: last } = await env.DB.prepare(
          `SELECT e.* FROM evaluations e JOIN players p ON p.id=e.player_id
           WHERE e.published=1 AND p.published=1 AND p.consent=1 ORDER BY e.date DESC`).all();
        const latest = {}; for (const e of last) if (!latest[e.player_id]) latest[e.player_id] = pubEval(e);
        return json(results.map((p) => ({ ...pubPlayer(p), latest: latest[p.id] || null })));
      }
      if (a1 === 'players' && a2) {
        const p = await env.DB.prepare('SELECT * FROM players WHERE id=? AND published=1 AND consent=1').bind(a2).first();
        if (!p) return err('No encontrado', 404);
        const { results } = await env.DB.prepare('SELECT * FROM evaluations WHERE player_id=? AND published=1 ORDER BY date').bind(a2).all();
        const { results: media } = await env.DB.prepare('SELECT * FROM media WHERE player_id=? AND published=1 ORDER BY created_at DESC').bind(a2).all();
        return json({ player: pubPlayer(p), evaluations: results.map(pubEval), media: media.map((m) => ({ ...m, url: fileUrl(m.key) })) });
      }
      if (a1 === 'alumni') {
        const { results } = await env.DB.prepare('SELECT * FROM alumni WHERE published=1 ORDER BY sort, name').all();
        return json(results.map(pubAlumni));
      }
      if (a1 === 'news') {
        const { results } = await env.DB.prepare('SELECT * FROM news WHERE published=1 ORDER BY date DESC, created_at DESC LIMIT 100').all();
        return json(results.map((x) => ({ ...x, image: fileUrl(x.image_key) })));
      }
      if (a1 === 'media') {
        const { results } = await env.DB.prepare('SELECT * FROM media WHERE published=1 ORDER BY created_at DESC LIMIT 200').all();
        return json(results.map((m) => ({ ...m, url: fileUrl(m.key) })));
      }
      return err('No encontrado', 404);
    }

    // ----- administración (requiere sesión) -----
    if (a0 !== 'admin') return err('No encontrado', 404);
    if (!(await isAdmin(request, env))) return err('No autorizado', 401);
    if (a1 === 'me') return json({ ok: true, ai: !!env.ANTHROPIC_API_KEY });

    // subir archivo a R2
    if (a1 === 'upload' && M === 'POST') {
      const kind = url.searchParams.get('kind') || 'photo';
      const name = (url.searchParams.get('name') || 'archivo').replace(/[^\w.\-]+/g, '_').slice(-80);
      const ct = request.headers.get('content-type') || 'application/octet-stream';
      const prefix = kind === 'pdf' ? 'private/rapsodo/' : kind === 'video' ? 'public/videos/' : 'public/photos/';
      const key = prefix + new Date().toISOString().slice(0, 10) + '-' + uid() + '-' + name;
      await env.MEDIA.put(key, request.body, { httpMetadata: { contentType: ct } });
      return json({ key, url: key.startsWith('public/') ? '/api/file/' + key : '/api/admin/pdf/' + key });
    }
    if (a1 === 'pdf' && M === 'GET') {
      const key = parts.slice(2).join('/');
      const obj = await env.MEDIA.get(key); if (!obj) return err('No encontrado', 404);
      return new Response(obj.body, { headers: { 'content-type': 'application/pdf', 'cache-control': 'private, no-store' } });
    }
    if (a1 === 'extract' && M === 'POST') {
      const { pdfKey } = await body();
      return json(await extractRapsodo(env, pdfKey));
    }

    if (a1 === 'stats') {
      const one = async (q) => (await env.DB.prepare(q).first())?.n || 0;
      const { results: evals } = await env.DB.prepare(
        'SELECT e.*, p.name AS player_name FROM evaluations e LEFT JOIN players p ON p.id=e.player_id ORDER BY e.date DESC').all();
      const { results: positions } = await env.DB.prepare('SELECT position, COUNT(*) AS n FROM players GROUP BY position').all();
      return json({
        players: await one('SELECT COUNT(*) n FROM players'),
        evaluations: evals.length,
        pdfs: await one("SELECT COUNT(*) n FROM evaluations WHERE pdf_key IS NOT NULL AND pdf_key<>''"),
        alumni: await one("SELECT COUNT(*) n FROM alumni WHERE status='MLB'"),
        positions,
        evals: evals.map((e) => ({ ...adminEval(e), playerName: e.player_name })),
      });
    }

    if (a1 === 'settings') {
      if (M === 'GET') return json(await settings(env));
      if (M === 'PUT') {
        const data = await body();
        const stmt = env.DB.prepare('INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value');
        await env.DB.batch(Object.entries(data).filter(([k]) => /^[a-z_]{1,40}$/.test(k)).map(([k, v]) => stmt.bind(k, v == null ? '' : String(v))));
        return json({ ok: true });
      }
    }

    // CRUD genérico
    const TABLES = {
      players: ['name', 'photo_key', 'birth_date', 'nationality', 'position', 'height', 'weight', 'bats', 'throws', 'grad_year', 'bio', 'consent', 'published', 'featured'],
      alumni: ['name', 'position', 'status', 'signed_year', 'signed_by', 'debut_year', 'debut_team', 'current_team', 'bio', 'photo_key', 'needs_review', 'published', 'sort'],
      coaches: ['name', 'role', 'bio', 'photo_key', 'sort'],
      media: ['key', 'kind', 'caption', 'player_id', 'published'],
      news: ['title', 'date', 'image_key', 'body', 'published'],
    };
    const BOOLS = new Set(['consent', 'published', 'featured', 'needs_review']);
    const NUMS = new Set(['weight', 'grad_year', 'signed_year', 'debut_year', 'sort']);
    const clean = (cols, d) => cols.filter((c) => c in d).map((c) => [c,
      BOOLS.has(c) ? b(d[c]) : NUMS.has(c) ? (d[c] === '' || d[c] == null ? null : Number(d[c])) : (d[c] === '' ? null : d[c])]);

    if (TABLES[a1]) {
      const T = a1, cols = TABLES[T];
      if (M === 'GET') {
        const order = T === 'media' ? 'created_at DESC' : T === 'news' ? 'date DESC, created_at DESC' : T === 'players' ? 'name' : 'sort, name';
        const { results } = await env.DB.prepare(`SELECT * FROM ${T} ORDER BY ${order}`).all();
        return json(results.map((r) => ({ ...r, photo: fileUrl(r.photo_key), image: fileUrl(r.image_key), url: r.key ? fileUrl(r.key) : undefined, age: r.birth_date ? ageFrom(r.birth_date) : undefined })));
      }
      if (M === 'POST' || M === 'PUT') {
        const d = await body();
        if (cols.includes('name') && !d.name) return err('El nombre es obligatorio');
        if (T === 'news' && !d.title) return err('El título es obligatorio');
        const kv = clean(cols, d);
        if (M === 'POST') {
          const id = uid(T.slice(0, 2) + '-');
          await env.DB.prepare(`INSERT INTO ${T} (id, ${kv.map((x) => x[0]).join(',')}) VALUES (?, ${kv.map(() => '?').join(',')})`)
            .bind(id, ...kv.map((x) => x[1])).run();
          return json({ id });
        }
        if (!a2) return err('Falta id');
        const extra = T === 'players' ? ", updated_at=datetime('now')" : '';
        await env.DB.prepare(`UPDATE ${T} SET ${kv.map((x) => x[0] + '=?').join(',')}${extra} WHERE id=?`).bind(...kv.map((x) => x[1]), a2).run();
        return json({ ok: true });
      }
      if (M === 'DELETE' && a2) {
        if (T === 'news') {
          const x = await env.DB.prepare('SELECT image_key FROM news WHERE id=?').bind(a2).first();
          if (x?.image_key) await env.MEDIA.delete(x.image_key);
        }
        if (T === 'media') {
          const m = await env.DB.prepare('SELECT key FROM media WHERE id=?').bind(a2).first();
          if (m?.key) await env.MEDIA.delete(m.key);
        }
        if (T === 'players') {
          const { results } = await env.DB.prepare('SELECT pdf_key FROM evaluations WHERE player_id=?').bind(a2).all();
          for (const r of results) if (r.pdf_key) await env.MEDIA.delete(r.pdf_key);
          await env.DB.prepare('DELETE FROM evaluations WHERE player_id=?').bind(a2).run();
        }
        await env.DB.prepare(`DELETE FROM ${T} WHERE id=?`).bind(a2).run();
        return json({ ok: true });
      }
    }

    if (a1 === 'evaluations') {
      if (M === 'GET') {
        const q = a2 ? env.DB.prepare('SELECT * FROM evaluations WHERE player_id=? ORDER BY date').bind(a2)
                     : env.DB.prepare('SELECT * FROM evaluations ORDER BY date DESC');
        return json((await q.all()).results.map(adminEval));
      }
      if (M === 'POST' || M === 'PUT') {
        const d = await body();
        if (!d.playerId || !d.date) return err('Selecciona el pelotero y la fecha');
        const vals = [d.playerId, d.date, d.device || 'manual', d.kind || 'pitching', d.pdfKey || null,
          JSON.stringify(d.pitches || []), JSON.stringify(d.hitting || {}), JSON.stringify(d.publicFields || []), d.notes || null, b(d.published)];
        if (M === 'POST') {
          const id = uid('ev-');
          await env.DB.prepare(`INSERT INTO evaluations (id, player_id, date, device, kind, pdf_key, pitches_json, hitting_json, public_fields_json, notes, published)
            VALUES (?,?,?,?,?,?,?,?,?,?,?)`).bind(id, ...vals).run();
          return json({ id });
        }
        await env.DB.prepare(`UPDATE evaluations SET player_id=?, date=?, device=?, kind=?, pdf_key=?, pitches_json=?, hitting_json=?,
          public_fields_json=?, notes=?, published=? WHERE id=?`).bind(...vals, a2).run();
        return json({ ok: true });
      }
      if (M === 'PATCH' && a2) {
        const d = await body();
        await env.DB.prepare('UPDATE evaluations SET published=? WHERE id=?').bind(b(d.published), a2).run();
        return json({ ok: true });
      }
      if (M === 'DELETE' && a2) {
        const e = await env.DB.prepare('SELECT pdf_key FROM evaluations WHERE id=?').bind(a2).first();
        if (e?.pdf_key && url.searchParams.get('pdf') === '1') await env.MEDIA.delete(e.pdf_key);
        await env.DB.prepare('DELETE FROM evaluations WHERE id=?').bind(a2).run();
        return json({ ok: true });
      }
    }
    return err('No encontrado', 404);
  } catch (e) {
    return err('Error del servidor: ' + (e && e.message ? e.message : String(e)), 500);
  }
}

// ---------- base de datos: se crea sola y se actualiza ----------
const SCHEMA = [
 "CREATE TABLE IF NOT EXISTS players (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  photo_key TEXT,\n  birth_date TEXT,\n  nationality TEXT DEFAULT 'República Dominicana',\n  position TEXT,\n  height TEXT,\n  weight INTEGER,\n  bats TEXT,\n  throws TEXT,\n  grad_year INTEGER,\n  bio TEXT,\n  consent INTEGER DEFAULT 0,      -- autorización del jugador o tutor\n  published INTEGER DEFAULT 0,    -- visible en la web pública\n  featured INTEGER DEFAULT 0,     -- aparece como destacado\n  created_at TEXT DEFAULT (datetime('now')),\n  updated_at TEXT DEFAULT (datetime('now'))\n)",
 "CREATE TABLE IF NOT EXISTS evaluations (\n  id TEXT PRIMARY KEY,\n  player_id TEXT NOT NULL,\n  date TEXT NOT NULL,\n  device TEXT DEFAULT 'manual',   -- pitching | pro2 | manual\n  kind TEXT DEFAULT 'pitching',   -- pitching | hitting\n  pdf_key TEXT,                   -- PDF original (privado)\n  pitches_json TEXT DEFAULT '[]',\n  hitting_json TEXT DEFAULT '{}',\n  public_fields_json TEXT DEFAULT '[\"velo\",\"veloMax\",\"spin\",\"spinEff\",\"vb\",\"hb\"]',\n  notes TEXT,\n  published INTEGER DEFAULT 0,\n  created_at TEXT DEFAULT (datetime('now'))\n)",
 "CREATE INDEX IF NOT EXISTS idx_eval_player ON evaluations(player_id, date)",
 "CREATE TABLE IF NOT EXISTS alumni (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  position TEXT,\n  status TEXT DEFAULT 'MLB',      -- MLB | Firmado\n  signed_year INTEGER,\n  signed_by TEXT,\n  debut_year INTEGER,\n  debut_team TEXT,\n  current_team TEXT,\n  bio TEXT,\n  photo_key TEXT,\n  needs_review INTEGER DEFAULT 0,\n  published INTEGER DEFAULT 1,\n  sort INTEGER DEFAULT 100\n)",
 "CREATE TABLE IF NOT EXISTS coaches (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  role TEXT,\n  bio TEXT,\n  photo_key TEXT,\n  sort INTEGER DEFAULT 100\n)",
 "CREATE TABLE IF NOT EXISTS media (\n  id TEXT PRIMARY KEY,\n  key TEXT NOT NULL,\n  kind TEXT DEFAULT 'image',      -- image | video\n  caption TEXT,\n  player_id TEXT,\n  published INTEGER DEFAULT 1,\n  created_at TEXT DEFAULT (datetime('now'))\n)",
 "CREATE TABLE IF NOT EXISTS settings (\n  key TEXT PRIMARY KEY,\n  value TEXT\n)",
 "CREATE TABLE IF NOT EXISTS news (\n  id TEXT PRIMARY KEY,\n  title TEXT NOT NULL,\n  date TEXT,\n  image_key TEXT,\n  body TEXT,\n  published INTEGER DEFAULT 1,\n  created_at TEXT DEFAULT (datetime('now'))\n)"
];
const SEED = [
 "INSERT OR IGNORE INTO alumni (id, name, position, status, debut_year, debut_team, needs_review, sort) VALUES\n ('al-neris',      'Héctor Neris',         'Lanzador derecho (RP)', 'MLB', 2014, 'Philadelphia Phillies', 0, 1),\n ('al-seranthony', 'Seranthony Domínguez', 'Lanzador derecho (RP)', 'MLB', 2018, 'Philadelphia Phillies', 0, 2),\n ('al-soto',       'Gregory Soto',         'Lanzador zurdo (RP)',   'MLB', 2019, 'Detroit Tigers',        0, 3),\n ('al-betances',   'Dellin Betances',      'Lanzador derecho (RP)', 'MLB', 2011, 'New York Yankees',      0, 4),\n ('al-lagares',    'Juan Lagares',         'Jardinero central',     'MLB', 2013, 'New York Mets',         0, 5),\n ('al-wperalta',   'Wily Peralta',         'Lanzador derecho',      'MLB', 2012, 'Milwaukee Brewers',     0, 6),\n ('al-jperalta',   'Joel Peralta',         'Lanzador derecho (RP)', 'MLB', 2005, 'Los Angeles Angels',    0, 7),\n ('al-jmartinez',  'Justin Martínez',      'Lanzador derecho (RP)', 'MLB', 2023, 'Arizona Diamondbacks',  0, 8),\n ('al-lgarcia',    'Luis García',          'Lanzador derecho (RP)', 'MLB', 2013, 'Philadelphia Phillies', 0, 9),\n ('al-lsantos',    'Luis Santos',          NULL, 'MLB', NULL, NULL, 1, 10),\n ('al-arosario',   'Alberto Rosario',      NULL, 'MLB', NULL, NULL, 1, 11),\n ('al-carela',     'Juan Carela',          'Lanzador derecho', 'Firmado', NULL, NULL, 1, 12)",
 "INSERT OR IGNORE INTO settings (key, value) VALUES\n ('hero_title', 'GO CHIQUI'),\n ('hero_sub_es', 'Desarrollamos talento dominicano con tecnología, disciplina y proyección al béisbol profesional.'),\n ('hero_sub_en', 'We develop Dominican talent through technology, discipline and a clear path to professional baseball.'),\n ('about_es', 'GO CHIQUI Dominicana es una academia de béisbol dedicada a formar peloteros completos: en el terreno, en el gimnasio y en la vida. Evaluamos a cada prospecto con tecnología Rapsodo y seguimos su progreso sesión a sesión.'),\n ('about_en', 'GO CHIQUI Dominicana is a baseball academy dedicated to developing complete players: on the field, in the gym and in life. Every prospect is evaluated with Rapsodo technology and tracked session by session.'),\n ('phone', ''),\n ('whatsapp', ''),\n ('email', ''),\n ('address', 'República Dominicana'),\n ('instagram', ''),\n ('signed_count', '')"
];
const MIGRATIONS = [{ id: 'bio_v1', steps: [
 [
  "UPDATE settings SET value=? WHERE key='about_es' AND value=?",
  [
   "GO CHIQUI Dominicana es la academia de béisbol fundada por Fausto «Chiqui» Mejía en La Salvia, Bonao. Por más de dos décadas ha formado lanzadores y peloteros con una escuela de pitcheo reconocida dentro y fuera de la República Dominicana.",
   "GO CHIQUI Dominicana es una academia de béisbol dedicada a formar peloteros completos: en el terreno, en el gimnasio y en la vida. Evaluamos a cada prospecto con tecnología Rapsodo y seguimos su progreso sesión a sesión."
  ]
 ],
 [
  "UPDATE settings SET value=? WHERE key='about_en' AND value=?",
  [
   "GO CHIQUI Dominicana is the baseball academy founded by Fausto «Chiqui» Mejía in La Salvia, Bonao. For more than two decades it has developed pitchers and players through a pitching school recognized in the Dominican Republic and abroad.",
   "GO CHIQUI Dominicana is a baseball academy dedicated to developing complete players: on the field, in the gym and in life. Every prospect is evaluated with Rapsodo technology and tracked session by session."
  ]
 ],
 [
  "UPDATE settings SET value=? WHERE key='address' AND (value='República Dominicana' OR value='')",
  [
   "La Salvia, Bonao, Monseñor Nouel"
  ]
 ],
 [
  "UPDATE settings SET value=? WHERE key='instagram' AND value=''",
  [
   "go_chiqui"
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "founder_name",
   "Fausto «Chiqui» Mejía"
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "founder_role_es",
   "Fundador y entrenador de pitcheo"
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "founder_role_en",
   "Founder and pitching coach"
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "history_es",
   "La historia de GO CHIQUI está unida a la de su fundador, Fausto «Chiqui» Mejía, un exlanzador dominicano que convirtió una lesión en una de las escuelas de pitcheo más respetadas de la República Dominicana.\n\nEn 1989 fue firmado como lanzador por los Atléticos de Oakland, de la mano del inmortal de Cooperstown Juan Marichal. Una rotura en el hombro terminó su carrera como jugador a los cuatro años. Después estudió Administración de Empresas y trabajó dos años en una constructora en Bonao.\n\nEn 1998, jugando béisbol aficionado en Doble A, coincidió con Joel Peralta, un lanzador que Oakland había dejado libre. Chiqui vio su potencial, lo ayudó a pulir su mecánica y Peralta volvió a firmar con el béisbol organizado. Ese éxito marcó el inicio de su vocación como entrenador.\n\nAsí nació su programa en el sector La Salvia de Bonao, provincia Monseñor Nouel. Con los años creció hasta tener instalaciones propias, incluido el Estadio 40 Aniversario de La Salvia y áreas techadas de entrenamiento. Su capacidad para corregir mecánicas y aumentar la velocidad de los lanzadores le ganó el apodo de «afinador de mecánicas» y fama nacional e internacional. Incluso ha rechazado ofertas de organizaciones de Grandes Ligas para mantenerse independiente en su complejo de Bonao.\n\nAdemás de dirigir la academia, preside la Asociación de Béisbol de Monseñor Nouel, donde impulsa torneos juveniles y el desarrollo deportivo de toda la provincia. Cada temporada se forman en GO CHIQUI alrededor de 80 prospectos."
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "history_en",
   "The story of GO CHIQUI is tied to that of its founder, Fausto «Chiqui» Mejía, a former Dominican pitcher who turned an injury into one of the most respected pitching schools in the Dominican Republic.\n\nIn 1989 he was signed as a pitcher by the Oakland Athletics, through Hall of Famer Juan Marichal. A torn shoulder ended his playing career after four years. He then studied Business Administration and worked for two years at a construction company in Bonao.\n\nIn 1998, while playing Double-A amateur baseball, he crossed paths with Joel Peralta, a pitcher Oakland had released. Chiqui saw his potential, helped him refine his mechanics, and Peralta signed again with organized baseball. That success marked the start of his calling as a coach.\n\nThat is how his program was born in La Salvia, Bonao, in Monseñor Nouel province. Over the years it grew into its own facilities, including the 40 Aniversario Stadium in La Salvia and covered training areas. His ability to fix mechanics and add velocity earned him the nickname «the mechanics tuner» and national and international recognition. He has even turned down offers from Major League organizations to stay independent at his Bonao complex.\n\nBesides running the academy, he presides over the Monseñor Nouel Baseball Association, promoting youth tournaments and sports development across the province. Around 80 prospects train at GO CHIQUI every season."
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "timeline_es",
   "1989 | Firma con Oakland | Firmado como lanzador por los Atléticos de Oakland, de la mano de Juan Marichal.\n4 años después | Fin como jugador | Una rotura en el hombro termina su carrera. Estudia Administración de Empresas.\n1998 | El punto de inflexión | Ayuda a Joel Peralta a pulir su mecánica y volver a firmar. Nace su vocación de entrenador.\nLa Salvia, Bonao | Nace GO CHIQUI | Funda su programa y construye instalaciones propias, incluido el Estadio 40 Aniversario.\nHoy | Un legado | Alrededor de 80 prospectos por temporada y la presidencia de la Asociación de Béisbol de Monseñor Nouel."
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "timeline_en",
   "1989 | Signs with Oakland | Signed as a pitcher by the Oakland Athletics, through Juan Marichal.\n4 years later | End of playing career | A torn shoulder ends his career. He studies Business Administration.\n1998 | The turning point | Helps Joel Peralta refine his mechanics and sign again. His coaching calling begins.\nLa Salvia, Bonao | GO CHIQUI is born | He founds his program and builds his own facilities, including the 40 Aniversario Stadium.\nToday | A legacy | Around 80 prospects every season and the presidency of the Monseñor Nouel Baseball Association."
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "about_es",
   "GO CHIQUI Dominicana es la academia de béisbol fundada por Fausto «Chiqui» Mejía en La Salvia, Bonao. Por más de dos décadas ha formado lanzadores y peloteros con una escuela de pitcheo reconocida dentro y fuera de la República Dominicana."
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "about_en",
   "GO CHIQUI Dominicana is the baseball academy founded by Fausto «Chiqui» Mejía in La Salvia, Bonao. For more than two decades it has developed pitchers and players through a pitching school recognized in the Dominican Republic and abroad."
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "address",
   "La Salvia, Bonao, Monseñor Nouel"
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "instagram",
   "go_chiqui"
  ]
 ]
] }, { id: 'contacto_v1', steps: [
 [
  "UPDATE settings SET value=? WHERE key='email' AND (value='' OR value IS NULL)",
  [
   "Chiquibaseball@gmail.com"
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "email",
   "Chiquibaseball@gmail.com"
  ]
 ],
 [
  "INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)",
  [
   "maps_url",
   "https://share.google/AuFNDPnD8y6MmkSxs"
  ]
 ]
] }, { id: 'lgarcia_v1', steps: [
 [
  "UPDATE alumni SET position=?, debut_year=?, debut_team=?, needs_review=0, bio=COALESCE(bio, ?) WHERE id='al-lgarcia' AND needs_review=1",
  [
   "Lanzador derecho (RP)",
   2013,
   "Philadelphia Phillies",
   "Luis Amado García, «Amadito» o «Compa G». Nació el 30 de enero de 1987 en Santo Domingo. Lanzador relevista derecho de 6'2\" y 240 lb. Debutó en Grandes Ligas el 10 de julio de 2013 con los Philadelphia Phillies, con una entrada en blanco frente a los Washington Nationals."
  ]
 ]
] }];
let dbReady = false;
async function ensureDb(env) {
  if (dbReady) return;
  await env.DB.batch(SCHEMA.map((s) => env.DB.prepare(s)));
  const done = await env.DB.prepare("SELECT value FROM settings WHERE key='seeded'").first();
  if (!done) await env.DB.batch([...SEED, "INSERT OR REPLACE INTO settings (key, value) VALUES ('seeded', '1')"].map((s) => env.DB.prepare(s)));
  for (const m of MIGRATIONS) {
    const k = 'mig_' + m.id;
    if (await env.DB.prepare('SELECT value FROM settings WHERE key=?').bind(k).first()) continue;
    await env.DB.batch([...m.steps.map(([q, p]) => env.DB.prepare(q).bind(...p)), env.DB.prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (?, '1')").bind(k)]);
  }
  dbReady = true;
}

export async function onRequest(context) {
  const { env } = context;
  if (!env.DB) return err('Falta conectar la base de datos (binding DB). Revisa Configuración > Vinculaciones.', 500);
  if (!env.MEDIA) return err('Falta conectar el almacenamiento R2 (binding MEDIA). Revisa Configuración > Vinculaciones.', 500);
  try { await ensureDb(env); } catch (e) { return err('No se pudo preparar la base de datos: ' + e.message, 500); }
  return handle(context);
}
