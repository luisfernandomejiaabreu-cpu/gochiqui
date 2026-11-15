# Genera public/_worker.js a partir de la API, el esquema, los datos iniciales y los textos.
import json, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
api = open(R + '/src/api.js').read()
api = api.replace('export async function onRequest(', 'async function handle(').replace('// GO CHIQUI · API (Cloudflare Pages Functions)', '// GO CHIQUI · API (Cloudflare Pages Functions). Generado por build/build.py desde src/api.js')
def stmts(sql):
    sql = '\n'.join(l for l in sql.splitlines() if not l.strip().startswith('--'))
    return [x.strip() for x in sql.split(';') if x.strip()]
S = stmts(open(R + '/schema.sql').read()); D = stmts(open(R + '/seed.sql').read())
tx = json.load(open(R + '/build/textos.json'))
mig = [
  ["UPDATE settings SET value=? WHERE key='about_es' AND value=?", [tx['about_es'], tx['old_about_es']]],
  ["UPDATE settings SET value=? WHERE key='about_en' AND value=?", [tx['about_en'], tx['old_about_en']]],
  ["UPDATE settings SET value=? WHERE key='address' AND (value='República Dominicana' OR value='')", [tx['address']]],
  ["UPDATE settings SET value=? WHERE key='instagram' AND value=''", [tx['instagram']]],
] + [["INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)", [k, tx[k]]] for k in
     ['founder_name', 'founder_role_es', 'founder_role_en', 'history_es', 'history_en', 'timeline_es', 'timeline_en', 'about_es', 'about_en', 'address', 'instagram']]
mig2 = [
  ["UPDATE settings SET value=? WHERE key='email' AND (value='' OR value IS NULL)", [tx['email']]],
  ["INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)", ['email', tx['email']]],
  ["INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)", ['maps_url', tx['maps_url']]],
]
tail = '''
// ---------- base de datos: se crea sola y se actualiza ----------
const SCHEMA = %s;
const SEED = %s;
const MIGRATIONS = [{ id: 'bio_v1', steps: %s }, { id: 'contacto_v1', steps: %s }];
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
''' % (json.dumps(S, ensure_ascii=False, indent=1), json.dumps(D, ensure_ascii=False, indent=1), json.dumps(mig, ensure_ascii=False, indent=1), json.dumps(mig2, ensure_ascii=False, indent=1))
import os as _os
_os.makedirs(R + '/functions/api', exist_ok=True)
open(R + '/functions/api/[[path]].js', 'w').write(api + tail)
if _os.path.exists(R + '/public/_worker.js'): _os.remove(R + '/public/_worker.js')
print('ok')
