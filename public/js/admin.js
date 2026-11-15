// GO CHIQUI · panel del administrador
const A = { tab: 'dashboard', players: [], evals: [], alumni: [], coaches: [], media: [], settings: {}, stats: null, ai: false, rap: null, evFilter: '', cmp: ['', ''], period: 'all' };
const POSITIONS = ['Lanzador derecho (RHP)', 'Lanzador zurdo (LHP)', 'Receptor (C)', 'Primera base (1B)', 'Segunda base (2B)', 'Tercera base (3B)', 'Campocorto (SS)', 'Jardinero (OF)', 'Utility'];
const isPitcher = (pos) => /lanz|pitch|rhp|lhp/i.test(pos || '');
const MENU = [
  ['dashboard', 'Dashboard', 'home'], ['peloteros', 'Peloteros', 'user'], ['rapsodo', 'Evaluaciones Rapsodo', 'pdf'],
  ['evaluaciones', 'Evaluaciones', 'check'], ['comparaciones', 'Comparaciones', 'swap'], ['grandes-ligas', 'Grandes Ligas', 'trophy'],
  ['entrenadores', 'Entrenadores', 'users'], ['galeria', 'Videos y Multimedia', 'video'], ['configuracion', 'Configuración', 'gear'],
];
Object.assign(I, {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 12l3 3 5-6"/></svg>',
  swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h14l-4-4M20 16H6l4 4"/></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16V4M7 9l5-5 5 5M4 20h16"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  out: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 17l5-5-5-5M15 12H3"/></svg>',
  print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2"/><rect x="6" y="14" width="12" height="7"/></svg>',
});
const playerName = (id) => (A.players.find((p) => p.id === id) || {}).name || '—';
const statusTag = (on, a = 'Publicado', b = 'Borrador') => `<span class="tag ${on ? 'tag-green' : 'tag-amber'}">${on ? a : b}</span>`;

// ---------- modal genérico ----------
function closeModal() { $('.modal-bg')?.remove(); }
function openForm(title, fields, values = {}, saveLabel = 'Guardar') {
  return new Promise((resolve) => {
    const bg = document.createElement('div'); bg.className = 'modal-bg';
    const field = (f) => {
      const v = values[f.k] ?? f.def ?? '';
      const cls = f.full ? 'full' : '';
      if (f.type === 'check') return `<label class="check ${cls}"><input type="checkbox" name="${f.k}" ${v ? 'checked' : ''}> ${esc(f.label)}</label>`;
      if (f.type === 'photo') return `<label class="f ${cls}">${esc(f.label)}<div class="photo-in">${avatar(values.name || '?', values[f.preview] || null, 56)}<input class="in" type="file" accept="image/*" name="${f.k}"></div></label>`;
      if (f.type === 'select') return `<label class="f ${cls}">${esc(f.label)}<select class="in" name="${f.k}">${f.options.map((o) => { const [val, lab] = Array.isArray(o) ? o : [o, o]; return `<option value="${esc(val)}" ${String(val) === String(v) ? 'selected' : ''}>${esc(lab)}</option>`; }).join('')}</select></label>`;
      if (f.type === 'textarea') return `<label class="f full">${esc(f.label)}<textarea class="in" name="${f.k}">${esc(v)}</textarea></label>`;
      if (f.type === 'note') return `<div class="full muted" style="font-size:13px">${f.html}</div>`;
      return `<label class="f ${cls}">${esc(f.label)}<input class="in" name="${f.k}" type="${f.type || 'text'}" value="${esc(v)}" ${f.ph ? `placeholder="${esc(f.ph)}"` : ''} ${f.step ? `step="${f.step}"` : ''}></label>`;
    };
    bg.innerHTML = `<form class="modal"><div class="modal-h"><h3>${esc(title)}</h3><button type="button" class="x" data-x>×</button></div>
      <div class="modal-b">${fields.map(field).join('')}</div>
      <div class="modal-f"><button type="button" class="btn btn-dark" data-x>Cancelar</button><button class="btn btn-red" type="submit">${esc(saveLabel)}</button></div></form>`;
    document.body.appendChild(bg);
    bg.addEventListener('click', (e) => { if (e.target.closest('[data-x]') || e.target === bg) { closeModal(); resolve(null); } });
    bg.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const out = {};
      fields.forEach((f) => {
        const el = bg.querySelector(`[name="${f.k}"]`); if (!el) return;
        if (f.type === 'check') out[f.k] = el.checked;
        else if (f.type === 'photo') out[f.k] = el.files[0] || null;
        else out[f.k] = el.value.trim();
      });
      const btn = bg.querySelector('[type=submit]'); btn.disabled = true; btn.innerHTML = '<span class="spinner"></span>';
      resolve({ values: out, done: closeModal, fail: () => { btn.disabled = false; btn.textContent = saveLabel; } });
    });
  });
}
function confirmBox(msg, { ok = 'Eliminar', extra } = {}) {
  return new Promise((resolve) => {
    const bg = document.createElement('div'); bg.className = 'modal-bg';
    bg.innerHTML = `<div class="modal" style="max-width:440px"><div class="modal-h"><h3>Confirmar</h3></div>
      <div style="padding:22px">${esc(msg)}${extra ? `<label class="check" style="margin-top:14px"><input type="checkbox" id="cbx"> ${esc(extra)}</label>` : ''}</div>
      <div class="modal-f"><button class="btn btn-dark" data-r="0">Cancelar</button><button class="btn btn-red" data-r="1">${esc(ok)}</button></div></div>`;
    document.body.appendChild(bg);
    bg.addEventListener('click', (e) => { const b = e.target.closest('[data-r]'); if (!b) return; const x = $('#cbx', bg)?.checked; bg.remove(); resolve(b.dataset.r === '1' ? { extra: x } : null); });
  });
}

// ---------- datos ----------
async function loadAll() {
  const [players, evals, alumni, coaches, media, settings, stats] = await Promise.all([
    api('admin/players'), api('admin/evaluations'), api('admin/alumni'), api('admin/coaches'), api('admin/media'), api('admin/settings'), api('admin/stats'),
  ]);
  Object.assign(A, { players, evals, alumni, coaches, media, settings, stats });
}
async function refresh() { try { await loadAll(); } catch (e) { toast(e.message); } render(); }

// ---------- login ----------
function loginView(msg) {
  $('#root').innerHTML = `<div class="login"><form class="card" id="lf">
    <img src="/img/logo.png" alt=""><h1>GO<span class="red">CHIQUI</span></h1><div class="muted">Panel del Administrador</div>
    <div style="display:grid;gap:12px;margin-top:22px;text-align:left">
      <label class="f">Contraseña<input class="in" type="password" id="pw" autocomplete="current-password" required></label>
      ${msg ? `<div class="note">${esc(msg)}</div>` : ''}
      <button class="btn btn-red" style="justify-content:center">Entrar</button>
      <a href="/" class="muted" style="text-align:center;font-size:13px">← Volver al sitio</a>
    </div></form></div>`;
  $('#pw').focus();
  $('#lf').onsubmit = async (e) => {
    e.preventDefault();
    try { await api('login', { method: 'POST', body: { password: $('#pw').value } }); boot(); }
    catch (er) { loginView(er.message); }
  };
}

// ---------- shell ----------
function shell(title, sub, body) {
  const logo = A.settings.logo || '/img/logo.png';
  return `<div class="shell">
    <aside class="side" id="side">
      <a href="/" class="brand"><img src="${esc(logo)}" alt=""><div class="wordmark">GO<span>CHIQUI</span><small>DOMINICANA</small></div></a>
      <nav class="menu">${MENU.map(([k, l, i]) => `<a href="#${k}" class="${A.tab === k ? 'on' : ''}">${I[i]}${l}</a>`).join('')}</nav>
      <div class="rap-badge"><b><span>R</span>apsodo<sup>®</sup></b><div>Integración de Reportes ${A.ai ? '· IA activa' : ''}</div></div>
    </aside>
    <div class="main">
      <div class="bar"><div style="display:flex;align-items:center;gap:12px"><button class="btn btn-dark btn-sm mtoggle" id="mt"><span class="icon">${I.menu}</span></button>
        <div><h1>${esc(title)}</h1><p>${esc(sub)}</p></div></div>
        <div class="who">${avatar('GO', null, 38)}<div><b>Administrador</b><div class="muted">GO Chiqui</div></div>
          <button class="btn btn-dark btn-sm" id="logout" title="Salir"><span class="icon">${I.out}</span></button></div></div>
      <div class="content">${body}</div>
    </div></div>`;
}

// ---------- vistas ----------
function donut(parts) {
  const total = parts.reduce((s, p) => s + p.n, 0) || 1, R = 70, C = 2 * Math.PI * R;
  let off = 0;
  const segs = parts.map((p) => { const len = (p.n / total) * C; const s = `<circle r="${R}" cx="90" cy="90" fill="none" stroke="${p.c}" stroke-width="26" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-off}" transform="rotate(-90 90 90)"/>`; off += len; return s; });
  return `<svg viewBox="0 0 180 180" width="170" height="170"><circle r="${R}" cx="90" cy="90" fill="none" stroke="#14295a" stroke-width="26"/>${segs.join('')}
    <text x="90" y="88" text-anchor="middle" fill="#fff" style="font:700 34px var(--head)">${parts.reduce((s, p) => s + p.n, 0)}</text><text x="90" y="110" text-anchor="middle" fill="#9aaccc" style="font:500 12px var(--body)">Peloteros</text></svg>`;
}
function vDashboard() {
  const st = A.stats || { players: 0, evaluations: 0, pdfs: 0, alumni: 0, evals: [], positions: [] };
  const days = { '30': 30, '90': 90, '365': 365 }[A.period];
  const cutoff = days ? new Date(Date.now() - days * 864e5).toISOString().slice(0, 10) : '';
  const inP = (e) => !cutoff || e.date >= cutoff;
  const pEvals = A.evals.filter(inP);
  const pitchEvals = pEvals.filter((e) => e.kind !== 'hitting');
  // progreso promedio (última - primera velo máx por pelotero)
  const by = {}; pitchEvals.forEach((e) => (by[e.playerId] = by[e.playerId] || []).push(e));
  const deltas = Object.values(by).map((l) => l.sort((a, b) => a.date.localeCompare(b.date))).filter((l) => l.length > 1)
    .map((l) => (evalSummary(l[l.length - 1]).veloMax ?? NaN) - (evalSummary(l[0]).veloMax ?? NaN)).filter((d) => !isNaN(d));
  const prog = deltas.length ? deltas.reduce((a, b) => a + b, 0) / deltas.length : null;
  // velocidad máxima promedio por mes
  const months = {}; pitchEvals.forEach((e) => { const m = e.date.slice(0, 7), v = evalSummary(e).veloMax; if (v != null) (months[m] = months[m] || []).push(v); });
  const mk = Object.keys(months).sort().slice(-8);
  const mName = (m) => new Date(m + '-15').toLocaleDateString('es-DO', { month: 'short', year: '2-digit' });
  // posiciones
  const groups = { Lanzadores: 0, Infielders: 0, Outfielders: 0, Catchers: 0, Utility: 0 };
  A.players.forEach((p) => { const s = p.position || ''; if (isPitcher(s)) groups.Lanzadores++; else if (/receptor|catcher|\(c\)/i.test(s)) groups.Catchers++; else if (/jardin|outfield|\(of\)/i.test(s)) groups.Outfielders++; else if (/base|campocorto|\(ss\)|\(1b\)|\(2b\)|\(3b\)/i.test(s)) groups.Infielders++; else groups.Utility++; });
  const colors = ['#e11d2e', '#8b5cf6', '#3b82f6', '#22c55e', '#9aaccc'];
  const parts = Object.entries(groups).map(([k, n], i) => ({ k, n, c: colors[i] }));
  const tot = A.players.length || 1;
  return shell('Dashboard Administrativo', 'Gestión completa de la academia', `
    <div style="display:flex;justify-content:flex-end;margin-bottom:-6px"><select class="in" id="period" style="width:auto">${[['30', 'Últimos 30 días'], ['90', 'Últimos 90 días'], ['365', 'Último año'], ['all', 'Todo el tiempo']].map(([v, l]) => `<option value="${v}" ${A.period === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
    <div class="grid g4">
      <div class="kpi k-blue">${I.users}<div><b>${st.players}</b><span>Peloteros</span></div></div>
      <div class="kpi k-red">${I.bars}<div><b>${pEvals.length}</b><span>Evaluaciones</span></div></div>
      <div class="kpi k-green">${I.up}<div><b>${prog == null ? '—' : (prog >= 0 ? '+' : '') + num(prog)}<small style="font-size:16px"> MPH</small></b><span>Progreso promedio</span></div></div>
      <div class="kpi k-violet">${I.pdf}<div><b>${pEvals.filter((e) => e.pdfKey).length}</b><span>Reportes (PDF)</span></div></div>
    </div>
    <div class="dash2">
      <div class="card panel"><h3>Evolución General de Velocidad Máxima</h3>
        ${mk.length ? lineChart([{ points: mk.map((m) => ({ x: mName(m), y: months[m].reduce((a, b) => a + b, 0) / months[m].length })) }], { unit: 'MPH' }) : '<div class="empty">Sube tu primer reporte de Rapsodo para ver la evolución.</div>'}</div>
      <div class="card panel"><h3>Distribución por Posición</h3><div class="donut-w">${donut(parts)}
        <div class="legend">${parts.map((p) => `<div><i style="background:${p.c}"></i>${p.k} (${Math.round((p.n / tot) * 100)}%)</div>`).join('')}</div></div></div>
    </div>
    <div class="dash2">
      <div class="card panel"><div class="ph-row"><h3>Evaluaciones Recientes</h3><a href="#evaluaciones" class="btn btn-dark btn-sm">Ver todas</a></div>
        ${st.evals.filter(inP).length ? `<div class="scroll-x"><table class="tbl"><thead><tr><th>Fecha</th><th>Pelotero</th><th>Tipo</th><th class="num">Velo. Máx</th><th>Estado</th></tr></thead><tbody>
          ${st.evals.filter(inP).slice(0, 6).map((e) => `<tr><td>${fmtDate(e.date)}</td><td><b>${esc(e.playerName || '—')}</b></td><td>${e.kind === 'hitting' ? 'Hitting' : 'Pitching'}</td><td class="num">${e.kind === 'hitting' ? esc(e.hitting.exitVelo ?? '—') : num(evalSummary(e).veloMax)} MPH</td><td>${statusTag(e.published)}</td></tr>`).join('')}
        </tbody></table></div>` : '<div class="empty">Todavía no hay evaluaciones.</div>'}</div>
      <div class="card panel"><h3>Accesos Rápidos</h3><div class="quick">
        <a class="btn btn-red" href="#rapsodo"><span class="icon">${I.upload}</span>Subir Reporte Rapsodo (PDF)</a>
        <button class="btn btn-dark" data-act="new-player"><span class="icon">${I.plus}</span>Crear Nuevo Pelotero</button>
        <button class="btn btn-dark" data-act="new-alumni"><span class="icon">${I.trophy}</span>Agregar Egresado MLB</button>
        <a class="btn btn-dark" href="/" target="_blank"><span class="icon">${I.arrow}</span>Ver sitio público</a>
      </div>${!A.ai ? '<div class="note" style="margin-top:14px">La lectura automática de PDF está apagada. Agrega el secreto ANTHROPIC_API_KEY en Cloudflare para activarla. Mientras tanto puedes escribir los datos a mano.</div>' : ''}</div>
    </div>`);
}

function vPlayers() {
  const cnt = (id) => A.evals.filter((e) => e.playerId === id).length;
  return shell('Peloteros', 'Expedientes individuales de cada prospecto.', `
    <div class="card panel"><div class="ph-row"><h3>${A.players.length} peloteros</h3><button class="btn btn-red btn-sm" data-act="new-player"><span class="icon">${I.plus}</span>Nuevo pelotero</button></div>
    ${A.players.length ? `<div class="scroll-x"><table class="tbl"><thead><tr><th></th><th>Nombre</th><th>Posición</th><th class="num">Edad</th><th>B/L</th><th class="num">Evals</th><th>Web pública</th><th></th></tr></thead><tbody>
      ${A.players.map((p) => `<tr><td>${avatar(p.name, p.photo, 40)}</td><td><b>${esc(p.name)}</b>${p.featured ? ' <span class="tag tag-red">Destacado</span>' : ''}</td><td>${esc(p.position || '—')}</td><td class="num">${p.age ?? '—'}</td><td>${esc(p.bats || '—')}/${esc(p.throws || '—')}</td><td class="num">${cnt(p.id)}</td>
        <td>${p.published && p.consent ? statusTag(true, 'Visible') : !p.consent ? '<span class="tag tag-red">Sin autorización</span>' : statusTag(false, '', 'Oculto')}</td>
        <td><div class="actions">${p.published && p.consent ? `<a class="btn btn-dark btn-sm" href="/#jugador-${esc(p.id)}" target="_blank">Ver</a>` : ''}
          <label class="btn btn-dark btn-sm photo-btn" title="Subir foto"><span class="icon">${I.upload}</span>Foto<input type="file" accept="image/*" data-photo="players" data-id="${p.id}"></label>
          <button class="btn btn-dark btn-sm" data-act="report" data-id="${p.id}" title="Ficha imprimible"><span class="icon">${I.print}</span></button>
          <button class="btn btn-dark btn-sm" data-act="edit-player" data-id="${p.id}">Editar</button>
          <button class="btn btn-dark btn-sm" data-act="del-player" data-id="${p.id}">Eliminar</button></div></td></tr>`).join('')}
    </tbody></table></div>` : '<div class="empty"><h4>Aún no hay peloteros</h4>Crea el primer expediente para empezar.</div>'}</div>`);
}

const playerFields = () => [
  { k: 'name', label: 'Nombre completo *', full: true },
  { k: 'photo', label: 'Fotografía', type: 'photo', preview: 'photo', full: true },
  { k: 'birth_date', label: 'Fecha de nacimiento', type: 'date' },
  { k: 'nationality', label: 'Nacionalidad', def: 'República Dominicana' },
  { k: 'position', label: 'Posición', type: 'select', options: ['', ...POSITIONS] },
  { k: 'grad_year', label: 'Año de graduación', type: 'number' },
  { k: 'height', label: 'Estatura', ph: `6'2"` },
  { k: 'weight', label: 'Peso (lbs)', type: 'number' },
  { k: 'bats', label: 'Batea', type: 'select', options: ['', ['D', 'Derecho'], ['Z', 'Zurdo'], ['A', 'Ambidiestro']] },
  { k: 'throws', label: 'Lanza', type: 'select', options: ['', ['D', 'Derecho'], ['Z', 'Zurdo']] },
  { k: 'bio', label: 'Información deportiva', type: 'textarea' },
  { k: 'consent', label: 'Tengo autorización del jugador (o de su tutor si es menor) para publicar su perfil', type: 'check', full: true },
  { k: 'published', label: 'Mostrar en la web pública', type: 'check' },
  { k: 'featured', label: 'Pelotero destacado', type: 'check' },
  { k: '_n', type: 'note', html: 'La fecha de nacimiento nunca se publica: en la web solo aparece la edad.' },
];
async function savePhotoField(v, current) {
  if (v.photo) { const up = await uploadFile(v.photo, 'photo'); return up.key; }
  return current || null;
}
async function editPlayer(p = {}) {
  const r = await openForm(p.id ? 'Editar pelotero' : 'Nuevo pelotero', playerFields(), p); if (!r) return;
  try {
    const v = r.values; if (!v.name) throw new Error('El nombre es obligatorio');
    const data = { ...v, photo_key: await savePhotoField(v, p.photo_key) }; delete data.photo; delete data._n;
    if (p.id) await api('admin/players/' + p.id, { method: 'PUT', body: data }); else await api('admin/players', { method: 'POST', body: data });
    r.done(); toast('Pelotero guardado'); refresh();
  } catch (e) { r.fail(); toast(e.message); }
}

function vEvaluations() {
  const list = A.evals.filter((e) => !A.evFilter || e.playerId === A.evFilter);
  return shell('Evaluaciones', 'Sesiones guardadas. Decide cuáles se publican.', `
    <div class="card panel"><div class="ph-row"><h3>${list.length} evaluaciones</h3>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><select class="in" id="evf" style="width:auto"><option value="">Todos los peloteros</option>${A.players.map((p) => `<option value="${p.id}" ${A.evFilter === p.id ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select>
      <a class="btn btn-red btn-sm" href="#rapsodo"><span class="icon">${I.plus}</span>Nueva</a></div></div>
    ${list.length ? `<div class="scroll-x"><table class="tbl"><thead><tr><th>Fecha</th><th>Pelotero</th><th>Tipo</th><th>Fuente</th><th class="num">Velo. Máx</th><th class="num">RPM</th><th>Estado</th><th></th></tr></thead><tbody>
      ${list.map((e) => { const s = evalSummary(e); return `<tr><td>${fmtDate(e.date)}</td><td><b>${esc(playerName(e.playerId))}</b></td><td>${e.kind === 'hitting' ? 'Hitting' : 'Pitching'}</td>
        <td>${e.device === 'pro2' ? 'Rapsodo PRO 2.0' : e.device === 'pitching' ? 'Rapsodo Pitching' : 'Manual'}</td><td class="num">${num(s.veloMax)}</td><td class="num">${s.spin != null ? Math.round(s.spin) : '—'}</td>
        <td><button class="pill-btn" data-act="toggle-eval" data-id="${e.id}" title="Cambiar estado">${statusTag(e.published)}</button></td>
        <td><div class="actions">${e.pdfKey ? `<a class="btn btn-dark btn-sm" href="/api/admin/pdf/${esc(e.pdfKey)}" target="_blank"><span class="icon">${I.pdf}</span>PDF</a>` : ''}
          <button class="btn btn-dark btn-sm" data-act="edit-eval" data-id="${e.id}">Editar</button><button class="btn btn-dark btn-sm" data-act="del-eval" data-id="${e.id}">Eliminar</button></div></td></tr>`; }).join('')}
    </tbody></table></div>` : '<div class="empty"><h4>No hay evaluaciones</h4>Sube un reporte de Rapsodo o crea una evaluación manual.</div>'}</div>`);
}

// ---------- Rapsodo ----------
const DEFAULT_PUBLIC = ['velo', 'veloMax', 'spin', 'spinEff', 'vb', 'hb'];
const blankRow = () => ({ type: '', count: null, velo: null, veloMax: null, spin: null, spinEff: null, vb: null, hb: null, gyro: null, relH: null, relS: null, strike: null });
function newRap() { return { step: 1, pdfKey: null, fileName: '', detected: '', msg: '', data: { playerId: '', date: new Date().toISOString().slice(0, 10), device: 'pitching', kind: 'pitching', pitches: [blankRow()], hitting: {}, publicFields: DEFAULT_PUBLIC.slice(), notes: '', published: false } }; }
const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z ]/g, ' ').replace(/\s+/g, ' ').trim();
function matchPlayer(name) {
  const n = norm(name); if (!n) return '';
  let best = '', score = 0; const toks = n.split(' ');
  A.players.forEach((p) => { const pn = norm(p.name); if (pn === n) { best = p.id; score = 99; return; }
    const s = toks.filter((t) => t.length > 1 && pn.split(' ').includes(t)).length; if (s > score) { score = s; best = p.id; } });
  return score >= 2 || (score >= 1 && toks.length === 1) ? best : '';
}
function vRapsodo() {
  const R = A.rap || (A.rap = newRap());
  const steps = ['Subir PDF', 'Extraer Datos', 'Revisar', 'Guardar'];
  const stepper = `<div class="steps">${steps.map((s, i) => `<div class="step ${R.step === i + 1 ? 'on' : R.step > i + 1 ? 'done' : ''}"><i>${i + 1}</i>${s}</div>`).join('')}</div>`;
  let body = '';
  if (R.step === 1) {
    body = `<div class="card panel"><label class="drop" id="drop">${I.pdf}<h3>Sube el reporte de Rapsodo</h3><div class="muted">(Pitching o PRO 2.0) · Arrastra y suelta el archivo aquí o haz clic para seleccionar · PDF</div>
      <input type="file" accept="application/pdf" id="pdfIn" hidden><div style="margin-top:16px"><span class="btn btn-red">Seleccionar archivo</span></div></label>
      <div style="text-align:center;margin-top:14px"><button class="btn btn-dark btn-sm" data-act="manual">O escribir los datos a mano</button></div>
      ${!A.ai ? '<div class="note" style="margin-top:14px">Lectura automática apagada (falta ANTHROPIC_API_KEY). El PDF se guarda igual y tú copias los números en la tabla.</div>' : ''}</div>`;
  } else if (R.step === 2) {
    body = `<div class="card empty" style="padding:70px 20px"><span class="spinner"></span><h4 style="margin-top:16px">${esc(R.msg || 'Procesando…')}</h4><div>${esc(R.fileName)}</div></div>`;
  } else if (R.step === 3) {
    const d = R.data, s = evalSummary(d), pitch = d.kind !== 'hitting';
    body = `${R.msg ? `<div class="${R.msgOk ? 'ok-note' : 'note'}">${esc(R.msg)}</div>` : ''}
    <div class="rev">
      <div class="card panel"><h3>Reporte original</h3>${R.pdfKey ? `<iframe class="pdfv" src="/api/admin/pdf/${esc(R.pdfKey)}#view=FitH" title="PDF"></iframe><a class="btn btn-dark btn-sm" style="margin-top:10px" href="/api/admin/pdf/${esc(R.pdfKey)}" target="_blank">Abrir PDF</a>` : '<div class="empty">Evaluación manual (sin PDF)</div>'}</div>
      <div class="card panel" style="display:grid;gap:14px;grid-template-columns:minmax(0,1fr)">
        <div class="grid g2">
          <label class="f">Pelotero *<select class="in" data-b="playerId"><option value="">— Selecciona —</option>${A.players.map((p) => `<option value="${p.id}" ${d.playerId === p.id ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select>
            ${R.detected ? `<span style="font-size:12px">Detectado en el PDF: <b>${esc(R.detected)}</b>${!d.playerId ? ' — <a href="#" class="red" data-act="create-detected">crear pelotero</a>' : ''}</span>` : ''}</label>
          <label class="f">Fecha *<input class="in" type="date" data-b="date" value="${esc(d.date)}"></label>
          <label class="f">Equipo / Fuente<select class="in" data-b="device"><option value="pitching" ${d.device === 'pitching' ? 'selected' : ''}>Rapsodo Pitching</option><option value="pro2" ${d.device === 'pro2' ? 'selected' : ''}>Rapsodo PRO 2.0</option><option value="manual" ${d.device === 'manual' ? 'selected' : ''}>Manual</option></select></label>
          <label class="f">Tipo de sesión<select class="in" data-b="kind" data-rerender="1"><option value="pitching" ${pitch ? 'selected' : ''}>Pitcheo</option><option value="hitting" ${!pitch ? 'selected' : ''}>Bateo</option></select></label>
        </div>
        ${pitch ? `<div class="grid g4" id="sumTiles">${sumTiles(s)}</div>
        <div><div class="ph-row"><h3 style="font-size:20px">Datos extraídos del reporte</h3><button class="btn btn-dark btn-sm" data-act="add-row"><span class="icon">${I.plus}</span>Fila</button></div>
        <div class="scroll-x"><table class="tbl etbl"><thead><tr>${PITCH_FIELDS.map((f) => `<th>${esc(f[1])}</th>`).join('')}<th></th></tr></thead><tbody>
          ${d.pitches.map((r, i) => `<tr>${PITCH_FIELDS.map(([k]) => `<td><input class="${k === 'type' ? 't' : ''}" data-row="${i}" data-k="${k}" value="${esc(r[k] ?? '')}" ${k === 'type' ? '' : 'inputmode="decimal"'}></td>`).join('')}<td><button class="x" data-act="del-row" data-i="${i}" title="Quitar">×</button></td></tr>`).join('')}
        </tbody></table></div></div>
        <div><div class="muted" style="font-size:13px;margin-bottom:8px">Estadísticas que se mostrarán al público (el PDF completo siempre es privado):</div>
          <div class="fields-pub">${PITCH_FIELDS.filter(([k]) => k !== 'type' && k !== 'count').map(([k, l]) => `<label class="check"><input type="checkbox" data-pub="${k}" ${d.publicFields.includes(k) ? 'checked' : ''}> ${esc(l)}</label>`).join('')}</div></div>`
        : `<div class="grid g4">${HIT_FIELDS.map(([k, l]) => `<label class="f">${esc(l)}<input class="in" data-hit="${k}" value="${esc(d.hitting[k] ?? '')}"></label>`).join('')}</div>`}
        <label class="f">Notas internas<textarea class="in" data-b="notes" style="min-height:60px">${esc(d.notes || '')}</textarea></label>
        <label class="check"><input type="checkbox" data-b="published" ${d.published ? 'checked' : ''}> Publicar esta evaluación en el perfil del pelotero</label>
        <div style="display:flex;justify-content:flex-end;gap:10px"><button class="btn btn-dark" data-act="rap-cancel">Cancelar</button><button class="btn btn-red" data-act="rap-save">Guardar Evaluación</button></div>
      </div></div>`;
  } else {
    body = `<div class="card empty" style="padding:60px 20px"><h4 class="red" style="font-size:30px">¡Evaluación guardada!</h4><p>${esc(playerName(R.data.playerId))} · ${fmtDate(R.data.date)} · ${R.data.published ? 'Publicada' : 'Guardada como borrador'}</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:18px;flex-wrap:wrap"><button class="btn btn-red" data-act="rap-new">Subir otro reporte</button><a class="btn btn-dark" href="#evaluaciones">Ver evaluaciones</a></div></div>`;
  }
  return shell('Evaluaciones Rapsodo', R.editId ? 'Editar evaluación' : 'Nueva Evaluación', stepper + body);
}
function sumTiles(s) {
  return `<div class="tile">${I.gauge}<div><div class="l">Velo. Prom.</div><div class="v" style="font-size:26px">${num(s.velo)}<small>MPH</small></div></div></div>
    <div class="tile hot">${I.gauge}<div><div class="l">Velo. Máx.</div><div class="v" style="font-size:26px">${num(s.veloMax)}<small>MPH</small></div></div></div>
    <div class="tile">${I.spin}<div><div class="l">RPM Prom.</div><div class="v" style="font-size:26px">${s.spin != null ? Math.round(s.spin) : '—'}</div></div></div>
    <div class="tile">${I.layers}<div><div class="l">Spin Eff.</div><div class="v" style="font-size:26px">${num(s.spinEff)}<small>%</small></div></div></div>`;
}
async function handlePdf(file) {
  if (!file || !/pdf$/i.test(file.type || file.name)) return toast('Selecciona un archivo PDF');
  const R = A.rap = newRap(); R.fileName = file.name; R.step = 2; R.msg = 'Subiendo el PDF…'; render();
  try {
    const up = await uploadFile(file, 'pdf'); R.pdfKey = up.key; R.data.device = 'pitching';
    if (A.ai) {
      R.msg = 'Leyendo el reporte con IA…'; render();
      const x = await api('admin/extract', { method: 'POST', body: { pdfKey: up.key } });
      if (x.data) {
        const d = x.data; R.detected = d.playerName || '';
        R.data.playerId = matchPlayer(d.playerName); if (d.date) R.data.date = d.date; if (d.device) R.data.device = d.device === 'pro2' ? 'pro2' : 'pitching';
        R.data.pitches = (d.pitches || []).map((r) => ({ ...blankRow(), ...r })); if (!R.data.pitches.length) R.data.pitches = [blankRow()];
        R.msg = 'Datos extraídos. Revisa cada número contra el PDF antes de guardar.'; R.msgOk = true;
      } else { R.msg = 'No se pudieron extraer los datos automáticamente (' + (x.error || 'error') + '). Escríbelos en la tabla.'; }
    } else R.msg = 'PDF guardado. Copia los datos del reporte en la tabla.';
  } catch (e) { R.msg = e.message; if (!R.pdfKey) { R.step = 1; render(); return toast(e.message); } }
  R.step = 3; render();
}
async function saveRap() {
  const R = A.rap, d = R.data;
  if (!d.playerId) return toast('Selecciona el pelotero');
  if (!d.date) return toast('Indica la fecha');
  const clean = d.pitches.filter((r) => Object.entries(r).some(([k, v]) => v !== null && v !== '' && k !== 'type') || r.type)
    .map((r) => Object.fromEntries(Object.entries(r).map(([k, v]) => [k, k === 'type' ? v : v === '' || v == null ? null : Number(String(v).replace(',', '.'))])));
  const hitting = Object.fromEntries(Object.entries(d.hitting).filter(([, v]) => v !== ''));
  const body = { ...d, pitches: clean, hitting, pdfKey: R.pdfKey };
  try {
    if (R.editId) await api('admin/evaluations/' + R.editId, { method: 'PUT', body }); else await api('admin/evaluations', { method: 'POST', body });
    R.step = 4; await loadAll(); render();
  } catch (e) { toast(e.message); }
}

function vCompare() {
  const [a, b] = A.cmp;
  const ev = (id) => A.evals.filter((e) => e.playerId === id && e.kind !== 'hitting').sort((x, y) => x.date.localeCompare(y.date));
  const ea = ev(a), eb = ev(b);
  const dates = [...new Set([...ea, ...eb].map((e) => e.date))].sort();
  const series = (list, cls) => ({ cls, points: dates.map((dt) => { const e = list.find((x) => x.date === dt); return { x: fmtDate(dt), y: e ? evalSummary(e).veloMax : null }; }) });
  const last = (l) => (l.length ? evalSummary(l[l.length - 1]) : {});
  const first = (l) => (l.length ? evalSummary(l[0]) : {});
  const sel = (i) => `<select class="in" data-cmp="${i}"><option value="">— Pelotero —</option>${A.players.map((p) => `<option value="${p.id}" ${A.cmp[i] === p.id ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select>`;
  const row = (l, k, d = 1) => `<td class="num">${num(last(l)[k], d)}</td><td class="num dim">${l.length > 1 ? (last(l)[k] - first(l)[k] >= 0 ? '+' : '') + num(last(l)[k] - first(l)[k], d) : '—'}</td>`;
  return shell('Comparaciones', 'Compara la evolución de dos peloteros (o el mismo en distintas fechas).', `
    <div class="card panel"><div class="grid g2"><label class="f"><span><i style="display:inline-block;width:10px;height:10px;background:#e11d2e;border-radius:50%"></i> Pelotero A</span>${sel(0)}</label><label class="f"><span><i style="display:inline-block;width:10px;height:10px;background:#60a5fa;border-radius:50%"></i> Pelotero B</span>${sel(1)}</label></div></div>
    ${a || b ? `<div class="card panel"><h3>Velocidad Máxima por fecha</h3>${lineChart([series(ea, 'ln'), series(eb, 'ln2')], { unit: 'MPH', highlightLast: false })}</div>
    <div class="card panel scroll-x"><table class="tbl"><thead><tr><th>Métrica (última evaluación)</th><th class="num">A</th><th class="num">Cambio A</th><th class="num">B</th><th class="num">Cambio B</th></tr></thead><tbody>
      <tr><td>Velo. Promedio (MPH)</td>${row(ea, 'velo')}${row(eb, 'velo')}</tr><tr><td>Velo. Máxima (MPH)</td>${row(ea, 'veloMax')}${row(eb, 'veloMax')}</tr>
      <tr><td>RPM</td>${row(ea, 'spin', 0)}${row(eb, 'spin', 0)}</tr><tr><td>Spin Efficiency (%)</td>${row(ea, 'spinEff')}${row(eb, 'spinEff')}</tr>
      <tr><td>Evaluaciones</td><td class="num">${ea.length}</td><td></td><td class="num">${eb.length}</td><td></td></tr></tbody></table></div>` : '<div class="card empty">Selecciona uno o dos peloteros.</div>'}`);
}

const alumniFields = [
  { k: 'name', label: 'Nombre *', full: true }, { k: 'photo', label: 'Foto (con permiso del jugador)', type: 'photo', preview: 'photo', full: true },
  { k: 'position', label: 'Posición' }, { k: 'status', label: 'Estado', type: 'select', options: [['MLB', 'Llegó a Grandes Ligas'], ['Firmado', 'Firmado (ligas menores)']] },
  { k: 'signed_year', label: 'Año en que firmó', type: 'number' }, { k: 'signed_by', label: 'Organización que lo firmó' },
  { k: 'debut_year', label: 'Año de debut en MLB', type: 'number' }, { k: 'debut_team', label: 'Equipo del debut' },
  { k: 'current_team', label: 'Equipo actual (opcional)' }, { k: 'sort', label: 'Orden en la lista', type: 'number' },
  { k: 'bio', label: 'Trayectoria', type: 'textarea' },
  { k: 'needs_review', label: 'Datos por confirmar', type: 'check' }, { k: 'published', label: 'Mostrar en la web', type: 'check', def: true },
];
function vAlumni() {
  return shell('Grandes Ligas', 'Egresados de la academia que firmaron o llegaron a MLB.', `
    <div class="card panel"><div class="ph-row"><h3>${A.alumni.length} egresados · ${A.alumni.filter((a) => a.status === 'MLB').length} en MLB</h3><button class="btn btn-red btn-sm" data-act="new-alumni"><span class="icon">${I.plus}</span>Agregar</button></div>
    <div class="ok-note" style="margin-bottom:12px">Las fotos se ven en la web como tarjetas de jugador. Usa fotos verticales (de pie o de medio cuerpo) que tengas permiso de usar.</div>
    ${A.alumni.some((a) => a.needs_review) ? '<div class="note" style="margin-bottom:12px">Hay egresados marcados "por confirmar": hay varios peloteros con ese nombre en MLB. Completa su posición y debut.</div>' : ''}
    <div class="scroll-x"><table class="tbl"><thead><tr><th></th><th>Nombre</th><th>Posición</th><th>Estado</th><th>Debut MLB</th><th>Web</th><th></th></tr></thead><tbody>
    ${A.alumni.map((a) => `<tr><td>${a.photo ? `<img class="al-thumb" src="${esc(a.photo)}" alt="">` : '<div class="al-thumb">Sin foto</div>'}</td><td><b>${esc(a.name)}</b>${a.needs_review ? ' <span class="tag tag-amber">Por confirmar</span>' : ''}</td><td>${esc(a.position || '—')}</td><td>${esc(a.status)}</td>
      <td>${a.debut_year ? esc(a.debut_year) + ' · ' + esc(a.debut_team || '') : '—'}</td><td>${statusTag(a.published, 'Visible', 'Oculto')}</td>
      <td><div class="actions"><label class="btn btn-red btn-sm photo-btn"><span class="icon">${I.upload}</span>${a.photo ? 'Cambiar foto' : 'Subir foto'}<input type="file" accept="image/*" data-photo="alumni" data-id="${a.id}"></label><button class="btn btn-dark btn-sm" data-act="edit-alumni" data-id="${a.id}">Editar</button><button class="btn btn-dark btn-sm" data-act="del-alumni" data-id="${a.id}">Eliminar</button></div></td></tr>`).join('')}
    </tbody></table></div></div>`);
}
async function editRecord(table, fields, rec = {}, title) {
  const r = await openForm(title, fields, rec); if (!r) return;
  try {
    const v = r.values; if (!v.name) throw new Error('El nombre es obligatorio');
    const data = { ...v }; delete data.photo;
    if (fields.some((f) => f.type === 'photo')) data.photo_key = await savePhotoField(v, rec.photo_key);
    if (rec.id) await api(`admin/${table}/${rec.id}`, { method: 'PUT', body: data }); else await api('admin/' + table, { method: 'POST', body: data });
    r.done(); toast('Guardado'); refresh();
  } catch (e) { r.fail(); toast(e.message); }
}

const coachFields = [{ k: 'name', label: 'Nombre *', full: true }, { k: 'photo', label: 'Foto', type: 'photo', preview: 'photo', full: true }, { k: 'role', label: 'Rol (ej. Coach de pitcheo)' }, { k: 'sort', label: 'Orden', type: 'number' }, { k: 'bio', label: 'Descripción', type: 'textarea' }];
function vCoaches() {
  return shell('Entrenadores', 'Equipo técnico de la academia.', `<div class="card panel"><div class="ph-row"><h3>${A.coaches.length} entrenadores</h3><button class="btn btn-red btn-sm" data-act="new-coach"><span class="icon">${I.plus}</span>Agregar</button></div>
    ${A.coaches.length ? `<table class="tbl"><tbody>${A.coaches.map((c) => `<tr><td style="width:56px">${avatar(c.name, c.photo, 42)}</td><td><b>${esc(c.name)}</b><div class="muted">${esc(c.role || '')}</div></td><td><div class="actions"><button class="btn btn-dark btn-sm" data-act="edit-coach" data-id="${c.id}">Editar</button><button class="btn btn-dark btn-sm" data-act="del-coach" data-id="${c.id}">Eliminar</button></div></td></tr>`).join('')}</tbody></table>` : '<div class="empty">Agrega a los entrenadores de la academia.</div>'}</div>`);
}

function vGallery() {
  return shell('Videos y Multimedia', 'Fotos y videos para la galería y los perfiles.', `
    <div class="card panel"><h3>Subir fotos o videos</h3><div class="grid g3" style="align-items:end">
      <label class="f">Archivos<input class="in" type="file" id="mFiles" accept="image/*,video/*" multiple></label>
      <label class="f">Pelotero (opcional)<select class="in" id="mPlayer"><option value="">— Galería general —</option>${A.players.map((p) => `<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select></label>
      <label class="f">Descripción<input class="in" id="mCap" placeholder="Ej. Bullpen de marzo"></label></div>
      <div style="margin-top:12px;display:flex;gap:10px;align-items:center"><button class="btn btn-red" data-act="upload-media"><span class="icon">${I.upload}</span>Subir</button><span class="muted" id="mStat" style="font-size:13px">Videos: mejor clips cortos (menos de 100 MB).</span></div></div>
    <div class="card panel"><h3>${A.media.length} archivos</h3>${A.media.length ? `<div class="gal-a">${A.media.map((m) => `<figure>${m.kind === 'video' ? `<video src="${esc(m.url)}" controls preload="metadata"></video>` : `<img src="${esc(m.url)}" alt="" loading="lazy">`}
      <figcaption><span>${esc(m.caption || '')}${m.player_id ? `<br><span class="muted">${esc(playerName(m.player_id))}</span>` : ''}</span><span style="display:flex;gap:4px"><button class="pill-btn" data-act="toggle-media" data-id="${m.id}">${statusTag(m.published, 'Visible', 'Oculto')}</button><button class="x" style="font-size:20px" data-act="del-media" data-id="${m.id}" title="Eliminar">×</button></span></figcaption></figure>`).join('')}</div>` : '<div class="empty">Sin archivos todavía.</div>'}</div>`);
}

const settingFields = [
  { k: 'logo', label: 'Logo (si quieres cambiar el oficial)', type: 'photo', preview: 'logo', full: true },
  { k: 'hero_player', label: 'Pelotero de portada (PNG sin fondo, se ve como en el diseño)', type: 'photo', preview: 'hero_player', full: true },
  { k: 'hero', label: 'O foto de portada normal (con fondo)', type: 'photo', preview: 'hero', full: true },
  { k: 'hero_sub_es', label: 'Frase de portada (español)', type: 'textarea' }, { k: 'hero_sub_en', label: 'Frase de portada (inglés)', type: 'textarea' },
  { k: 'about_es', label: 'Resumen de la academia (español)', type: 'textarea' }, { k: 'about_en', label: 'Resumen de la academia (inglés)', type: 'textarea' },
  { k: 'founder_photo', label: 'Foto del fundador', type: 'photo', preview: 'founder_photo', full: true },
  { k: 'founder_name', label: 'Nombre del fundador' }, { k: 'founder_role_es', label: 'Cargo del fundador (español)' },
  { k: 'history_es', label: 'Biografía / historia (español). Deja una línea en blanco entre párrafos', type: 'textarea' },
  { k: 'history_en', label: 'Biografía / historia (inglés)', type: 'textarea' },
  { k: 'timeline_es', label: 'Línea de tiempo (español). Una por línea: Año | Título | Texto', type: 'textarea' },
  { k: 'timeline_en', label: 'Línea de tiempo (inglés)', type: 'textarea' },
  { k: 'phone', label: 'Teléfono' }, { k: 'whatsapp', label: 'WhatsApp (con código, ej. 18095551234)' }, { k: 'email', label: 'Correo' }, { k: 'instagram', label: 'Instagram (@usuario)' }, { k: 'youtube', label: 'YouTube (@canal o enlace)' }, { k: 'tiktok', label: 'TikTok (@usuario)' },
  { k: 'address', label: 'Ubicación', full: true }, { k: 'maps_url', label: 'Enlace de Google Maps (botón Cómo llegar)', full: true }, { k: 'signed_count', label: 'Total de peloteros firmados (opcional)', type: 'number' },
];
function vSettings() {
  const s = A.settings;
  return shell('Configuración', 'Textos, contacto e imagen de la academia.', `<div class="card panel"><div class="ph-row"><h3>Datos del sitio</h3><button class="btn btn-red btn-sm" data-act="edit-settings">Editar</button></div>
    <table class="tbl"><tbody>${settingFields.map((f) => `<tr><td class="muted" style="width:260px">${esc(f.label)}</td><td>${f.type === 'photo' ? (s[f.k] ? `<img src="${esc(s[f.k])}" style="height:48px;border-radius:6px">` : '<span class="dim">Sin imagen</span>') : esc(String(s[f.k] || '—').slice(0, 160)) + (String(s[f.k] || '').length > 160 ? '…' : '')}</td></tr>`).join('')}</tbody></table></div>
    <div class="card panel"><h3>Seguridad</h3><p class="muted">La contraseña del panel se cambia en Cloudflare (secreto ADMIN_PASSWORD). La lectura automática de Rapsodo está <b style="color:#fff">${A.ai ? 'activa' : 'apagada'}</b>.</p></div>`);
}
async function editSettings() {
  const r = await openForm('Configuración del sitio', settingFields, { ...A.settings, name: 'GO' }); if (!r) return;
  try {
    const v = { ...r.values };
    if (v.logo) v.logo_key = (await uploadFile(v.logo, 'photo')).key; delete v.logo;
    if (v.hero) v.hero_key = (await uploadFile(v.hero, 'photo')).key; delete v.hero;
    if (v.hero_player) v.hero_player_key = (await uploadFile(v.hero_player, 'photo')).key; delete v.hero_player;
    if (v.founder_photo) v.founder_photo_key = (await uploadFile(v.founder_photo, 'photo')).key; delete v.founder_photo;
    await api('admin/settings', { method: 'PUT', body: v }); r.done(); toast('Configuración guardada'); refresh();
  } catch (e) { r.fail(); toast(e.message); }
}

// Ficha imprimible del pelotero
function printReport(id) {
  const p = A.players.find((x) => x.id === id); if (!p) return;
  const ev = A.evals.filter((e) => e.playerId === id && e.kind !== 'hitting').sort((a, b) => a.date.localeCompare(b.date));
  const last = ev[ev.length - 1];
  const w = window.open('', '_blank'); if (!w) return toast('Permite ventanas emergentes para imprimir');
  const rows = ev.map((e) => { const s = evalSummary(e); return `<tr><td>${fmtDate(e.date)}</td><td>${num(s.velo)}</td><td>${num(s.veloMax)}</td><td>${s.spin != null ? Math.round(s.spin) : '—'}</td><td>${num(s.spinEff)}</td></tr>`; }).join('');
  const pt = last ? `<table><thead><tr>${PITCH_FIELDS.map((f) => `<th>${esc(f[1])}</th>`).join('')}</tr></thead><tbody>${last.pitches.map((r) => `<tr>${PITCH_FIELDS.map(([k]) => `<td>${esc(r[k] ?? '—')}</td>`).join('')}</tr>`).join('')}</tbody></table>` : '<p>Sin evaluaciones.</p>';
  w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Ficha · ${esc(p.name)}</title><style>
    body{font:13px Arial,sans-serif;color:#0a1838;margin:30px}h1{font-size:30px;margin:0;font-style:italic;text-transform:uppercase}.h{display:flex;align-items:center;gap:18px;border-bottom:4px solid #e11d2e;padding-bottom:14px;margin-bottom:16px}
    .h img{width:70px}.k{display:flex;gap:24px;margin:10px 0}.k b{display:block;font-size:18px}table{width:100%;border-collapse:collapse;margin:8px 0 18px}th,td{border:1px solid #ccd3e2;padding:5px 6px;text-align:center}th{background:#0a1838;color:#fff;font-size:11px}h2{font-size:16px;color:#e11d2e;margin:18px 0 4px}
    .chart{width:100%;max-width:640px}.chart .grid-l{stroke:#dde3ef}.chart .ax{fill:#556;font-size:11px}.chart .ln{fill:none;stroke:#e11d2e;stroke-width:2.5}.chart .dot{fill:#fff;stroke:#e11d2e;stroke-width:2.5}.chart .lbl{fill:#fff;font:700 12px Arial}</style></head><body>
    <div class="h"><img src="${location.origin}/img/logo.png"><div><div style="font-weight:700;letter-spacing:.2em;font-size:11px">GO CHIQUI DOMINICANA · FICHA DEL PELOTERO</div><h1>${esc(p.name)}</h1><div>${esc(p.position || '')}</div></div></div>
    <div class="k"><div>Edad<b>${p.age ?? '—'}</b></div><div>Estatura<b>${esc(p.height || '—')}</b></div><div>Peso<b>${esc(p.weight || '—')} lbs</b></div><div>Batea/Lanza<b>${esc(p.bats || '—')}/${esc(p.throws || '—')}</b></div><div>Graduación<b>${esc(p.grad_year || '—')}</b></div></div>
    <h2>Última evaluación ${last ? '· ' + fmtDate(last.date) : ''}</h2>${pt}
    <h2>Historial</h2><table><thead><tr><th>Fecha</th><th>Velo. Prom</th><th>Velo. Máx</th><th>RPM</th><th>Spin Eff. %</th></tr></thead><tbody>${rows || '<tr><td colspan="5">—</td></tr>'}</tbody></table>
    ${ev.length > 1 ? '<h2>Evolución de velocidad máxima</h2>' + lineChart([{ points: ev.map((e) => ({ x: fmtDate(e.date), y: evalSummary(e).veloMax })) }], { unit: 'MPH' }) : ''}
    <p style="color:#889;font-size:11px;margin-top:24px">Generado ${new Date().toLocaleDateString('es-DO')} · gochiqui</p><script>setTimeout(()=>print(),400)<\/script></body></html>`);
  w.document.close();
}

// ---------- render y eventos ----------
function render() {
  const views = { dashboard: vDashboard, peloteros: vPlayers, rapsodo: vRapsodo, evaluaciones: vEvaluations, comparaciones: vCompare, 'grandes-ligas': vAlumni, entrenadores: vCoaches, galeria: vGallery, configuracion: vSettings };
  $('#root').innerHTML = (views[A.tab] || vDashboard)();
  const drop = $('#drop');
  if (drop) {
    $('#pdfIn').onchange = (e) => handlePdf(e.target.files[0]);
    ['dragover', 'dragenter'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('over'); }));
    ['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, () => drop.classList.remove('over')));
    drop.addEventListener('drop', (e) => { e.preventDefault(); handlePdf(e.dataTransfer.files[0]); });
  }
}
function onTab() { A.tab = (location.hash || '#dashboard').slice(1) || 'dashboard'; render(); window.scrollTo(0, 0); }

document.addEventListener('click', async (e) => {
  if (e.target.closest('#mt')) { $('#side').classList.toggle('open'); return; }
  if (e.target.closest('#logout')) { await api('logout', { method: 'POST' }).catch(() => {}); loginView(); return; }
  const el = e.target.closest('[data-act]'); if (!el) return;
  const act = el.dataset.act, id = el.dataset.id;
  if (el.tagName === 'A' && act === 'create-detected') e.preventDefault();
  const find = (list) => list.find((x) => x.id === id);
  switch (act) {
    case 'new-player': return editPlayer();
    case 'edit-player': return editPlayer(find(A.players));
    case 'del-player': { const p = find(A.players); if (await confirmBox(`¿Eliminar a ${p.name}? También se borrarán sus evaluaciones y PDF.`)) { await api('admin/players/' + id, { method: 'DELETE' }); toast('Eliminado'); refresh(); } return; }
    case 'report': return printReport(id);
    case 'new-alumni': return editRecord('alumni', alumniFields, { status: 'MLB', published: 1 }, 'Agregar egresado');
    case 'edit-alumni': return editRecord('alumni', alumniFields, find(A.alumni), 'Editar egresado');
    case 'del-alumni': if (await confirmBox('¿Eliminar este egresado?')) { await api('admin/alumni/' + id, { method: 'DELETE' }); refresh(); } return;
    case 'new-coach': return editRecord('coaches', coachFields, {}, 'Agregar entrenador');
    case 'edit-coach': return editRecord('coaches', coachFields, find(A.coaches), 'Editar entrenador');
    case 'del-coach': if (await confirmBox('¿Eliminar este entrenador?')) { await api('admin/coaches/' + id, { method: 'DELETE' }); refresh(); } return;
    case 'toggle-eval': { const ev = find(A.evals); await api('admin/evaluations/' + id, { method: 'PATCH', body: { published: !ev.published } }); toast(!ev.published ? 'Publicada' : 'Ahora es borrador'); refresh(); return; }
    case 'del-eval': { const r = await confirmBox('¿Eliminar esta evaluación?', { extra: 'Borrar también el PDF original' }); if (r) { await api(`admin/evaluations/${id}${r.extra ? '?pdf=1' : ''}`, { method: 'DELETE' }); refresh(); } return; }
    case 'edit-eval': { const ev = find(A.evals); A.rap = { ...newRap(), step: 3, editId: id, pdfKey: ev.pdfKey, data: JSON.parse(JSON.stringify({ ...ev, pitches: ev.pitches.length ? ev.pitches : [blankRow()] })) }; location.hash = 'rapsodo'; if (A.tab === 'rapsodo') render(); return; }
    case 'manual': A.rap = newRap(); A.rap.step = 3; A.rap.data.device = 'manual'; return render();
    case 'add-row': A.rap.data.pitches.push(blankRow()); return render();
    case 'del-row': A.rap.data.pitches.splice(+el.dataset.i, 1); if (!A.rap.data.pitches.length) A.rap.data.pitches.push(blankRow()); return render();
    case 'rap-cancel': A.rap = newRap(); return render();
    case 'rap-new': A.rap = newRap(); return render();
    case 'rap-save': return saveRap();
    case 'create-detected': {
      const r = await openForm('Nuevo pelotero', playerFields(), { name: A.rap.detected }); if (!r) return;
      try { const v = r.values; const data = { ...v, photo_key: await savePhotoField(v) }; delete data.photo; delete data._n;
        const res = await api('admin/players', { method: 'POST', body: data }); r.done(); await loadAll(); A.rap.data.playerId = res.id; render(); } catch (er) { r.fail(); toast(er.message); }
      return;
    }
    case 'upload-media': {
      const files = [...$('#mFiles').files]; if (!files.length) return toast('Selecciona archivos');
      el.disabled = true;
      try { for (let i = 0; i < files.length; i++) { const f = files[i]; $('#mStat').textContent = `Subiendo ${i + 1} de ${files.length}…`;
        const kind = f.type.startsWith('video') ? 'video' : 'image'; const up = await uploadFile(f, kind === 'video' ? 'video' : 'photo');
        await api('admin/media', { method: 'POST', body: { key: up.key, kind, caption: $('#mCap').value, player_id: $('#mPlayer').value || null, published: true } }); }
        toast('Archivos subidos'); refresh(); } catch (er) { toast(er.message); el.disabled = false; }
      return;
    }
    case 'toggle-media': { const m = find(A.media); await api('admin/media/' + id, { method: 'PUT', body: { ...m, published: !m.published } }); refresh(); return; }
    case 'del-media': if (await confirmBox('¿Eliminar este archivo?')) { await api('admin/media/' + id, { method: 'DELETE' }); refresh(); } return;
    case 'edit-settings': return editSettings();
  }
});
// Edición en vivo del formulario de Rapsodo (sin re-dibujar mientras escribes)
document.addEventListener('input', (e) => {
  const t = e.target, R = A.rap; if (!R || A.tab !== 'rapsodo') return;
  if (t.dataset.row !== undefined) { R.data.pitches[+t.dataset.row][t.dataset.k] = t.value; const s = $('#sumTiles'); if (s) s.innerHTML = sumTiles(evalSummary({ pitches: R.data.pitches.map((r) => Object.fromEntries(Object.entries(r).map(([k, v]) => [k, k === 'type' || v === '' || v == null ? v || null : Number(String(v).replace(',', '.'))]))) })); }
  else if (t.dataset.hit) R.data.hitting[t.dataset.hit] = t.value;
  else if (t.dataset.b && t.type !== 'checkbox') R.data[t.dataset.b] = t.value;
});
document.addEventListener('change', async (e) => {
  const t = e.target;
  if (t.dataset.photo && t.files && t.files[0]) {
    const table = t.dataset.photo, rec = (table === 'alumni' ? A.alumni : A.players).find((x) => x.id === t.dataset.id);
    try { toast('Subiendo foto…'); const up = await uploadFile(t.files[0], 'photo');
      await api(`admin/${table}/${rec.id}`, { method: 'PUT', body: { name: rec.name, photo_key: up.key } }); toast('Foto guardada. Ya se ve en la web.'); refresh(); }
    catch (er) { toast(er.message); }
    return;
  }
  if (t.id === 'evf') { A.evFilter = t.value; render(); return; }
  if (t.id === 'period') { A.period = t.value; render(); return; }
  if (t.dataset.cmp !== undefined) { A.cmp[+t.dataset.cmp] = t.value; render(); return; }
  const R = A.rap; if (!R) return;
  if (t.dataset.pub) { const f = R.data.publicFields; t.checked ? f.includes(t.dataset.pub) || f.push(t.dataset.pub) : f.splice(f.indexOf(t.dataset.pub), 1); }
  else if (t.dataset.b === 'published') R.data.published = t.checked;
  else if (t.dataset.b) { R.data[t.dataset.b] = t.value; if (t.dataset.rerender) render(); }
});
window.addEventListener('hashchange', onTab);

async function boot() {
  try { const me = await api('admin/me'); A.ai = !!me.ai; }
  catch (e) { return loginView(e.status === 401 ? '' : e.message); }
  try { await loadAll(); } catch (e) { toast(e.message); }
  onTab();
}
boot();
