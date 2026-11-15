// GO CHIQUI · sitio público
const T = {
  es: {
    inicio: 'Inicio', peloteros: 'Peloteros', mlb: 'Grandes Ligas', academia: 'La Academia', galeria: 'Galería', videos: 'Videos', contacto: 'Contacto', admin: 'Acceso Admin',
    acad: 'ACADEMIA DE BÉISBOL', conoce: 'Conoce Nuestros Peloteros', laAcad: 'La Academia', verTodos: 'Ver todos',
    p1: 'Evaluaciones Rapsodo', p2: 'Entrenamiento de Alto Nivel', p3: 'Formación Integral', p4: 'Desarrollo de Prospectos', p5: 'Proyección Profesional',
    hsPel: 'Peloteros', hsEval: 'Evaluaciones Rapsodo', hsProg: 'Progreso Promedio', hsMlb: 'En MLB',
    ultVideo: 'Último Video',
    mlbK: 'Orgullo GO CHIQUI', mlbH: 'De GO CHIQUI a Grandes Ligas', mlbP: 'Peloteros que se formaron con nosotros y llegaron a lo más alto del béisbol.',
    enMLB: 'En Grandes Ligas', firmados: 'Peloteros firmados', debut: 'Debut en MLB', firmado: 'Firmado',
    destK: 'Prospectos', destH: 'Peloteros Destacados', destP: 'Talento en desarrollo, evaluado con tecnología Rapsodo.',
    todosH: 'Nuestros Peloteros', todos: 'Todos', lanz: 'Lanzadores', bat: 'Bateadores',
    veloMax: 'Velo. Máxima', veloAvg: 'Velo. Promedio', rpm: 'RPM Promedio', spinEff: 'Spin Efficiency',
    edad: 'Edad', estatura: 'Estatura', peso: 'Peso', batea: 'Batea', lanza: 'Lanza', nac: 'Nacionalidad', grad: 'Graduación',
    resumen: 'Resumen', evals: 'Evaluaciones', stats: 'Estadísticas', evolucion: 'Evolución', comparar: 'Comparaciones', gal: 'Galería',
    verVideo: 'Ver Video', descargar: 'Descargar Reporte PDF',
    pitchTypes: 'Lanzamientos (Pitch Types)', freq: 'Frecuencia de Lanzamientos', lanzamientos: 'Lanzamientos',
    evo: 'Evolución de Velocidad Máxima', evoSpin: 'Evolución de RPM', evoEff: 'Evolución de Spin Efficiency', ultima: 'Última evaluación', fecha: 'Fecha', equipo: 'Equipo',
    sinEval: 'Este pelotero todavía no tiene evaluaciones publicadas.', sinVideo: 'Aún no hay videos', sinPel: 'Pronto presentaremos a nuestros peloteros.',
    acadK: 'Quiénes somos', acadH: 'La Academia', entren: 'Entrenadores', galH: 'Galería', galP: 'Entrenamientos, juegos y momentos de la academia.',
    vidH: 'Videos', vidP: 'Bullpens, prácticas y jugadas de nuestros peloteros.',
    sinGal: 'Pronto subiremos fotos y videos.', contH: 'Contacto', contP: 'Escríbenos para pruebas, visitas o información de la academia.',
    tel: 'Teléfono', correo: 'Correo', dir: 'Ubicación', porConf: 'Por confirmar', bateo: 'Bateo',
    noEnc: 'No encontramos este pelotero.', volver: 'Volver a peloteros', cmpA: 'Evaluación A', cmpB: 'Evaluación B', cambio: 'Cambio', metrica: 'Métrica',
    necesita2: 'Se necesitan al menos dos evaluaciones para comparar.', anios: 'años',
    historia: 'Nuestra Historia', comoLlegar: 'Cómo llegar', escribenos: 'Escríbenos', fundador: 'Fundador', trayectoria: 'Trayectoria', leerHist: 'Conoce nuestra historia', sede: 'Nuestra sede',
  },
  en: {
    inicio: 'Home', peloteros: 'Players', mlb: 'Big Leagues', academia: 'The Academy', galeria: 'Gallery', videos: 'Videos', contacto: 'Contact', admin: 'Admin Access',
    acad: 'BASEBALL ACADEMY', conoce: 'Meet Our Players', laAcad: 'The Academy', verTodos: 'See all',
    p1: 'Rapsodo Evaluations', p2: 'High-Level Training', p3: 'Well-Rounded Education', p4: 'Prospect Development', p5: 'Pro Pathway',
    hsPel: 'Players', hsEval: 'Rapsodo Evaluations', hsProg: 'Average Progress', hsMlb: 'In MLB',
    ultVideo: 'Latest Video',
    mlbK: 'GO CHIQUI Pride', mlbH: 'From GO CHIQUI to the Big Leagues', mlbP: 'Players who developed with us and reached the highest level of baseball.',
    enMLB: 'In the Big Leagues', firmados: 'Players signed', debut: 'MLB debut', firmado: 'Signed',
    destK: 'Prospects', destH: 'Featured Players', destP: 'Developing talent, evaluated with Rapsodo technology.',
    todosH: 'Our Players', todos: 'All', lanz: 'Pitchers', bat: 'Hitters',
    veloMax: 'Max Velo', veloAvg: 'Avg Velo', rpm: 'Avg Spin', spinEff: 'Spin Efficiency',
    edad: 'Age', estatura: 'Height', peso: 'Weight', batea: 'Bats', lanza: 'Throws', nac: 'Nationality', grad: 'Class of',
    resumen: 'Overview', evals: 'Evaluations', stats: 'Stats', evolucion: 'Progression', comparar: 'Compare', gal: 'Gallery',
    verVideo: 'Watch Video', descargar: 'Download PDF Report',
    pitchTypes: 'Pitch Types', freq: 'Pitch Usage', lanzamientos: 'Pitches',
    evo: 'Max Velocity Progression', evoSpin: 'Spin Rate Progression', evoEff: 'Spin Efficiency Progression', ultima: 'Latest evaluation', fecha: 'Date', equipo: 'Team',
    sinEval: 'This player has no published evaluations yet.', sinVideo: 'No videos yet', sinPel: 'Our players will be featured here soon.',
    acadK: 'Who we are', acadH: 'The Academy', entren: 'Coaches', galH: 'Gallery', galP: 'Training, games and academy moments.',
    vidH: 'Videos', vidP: 'Bullpens, practices and highlights from our players.',
    sinGal: 'Photos and videos coming soon.', contH: 'Contact', contP: 'Reach out for tryouts, visits or academy information.',
    tel: 'Phone', correo: 'Email', dir: 'Location', porConf: 'To be confirmed', bateo: 'Hitting',
    noEnc: 'Player not found.', volver: 'Back to players', cmpA: 'Evaluation A', cmpB: 'Evaluation B', cambio: 'Change', metrica: 'Metric',
    necesita2: 'At least two evaluations are needed to compare.', anios: 'yrs',
    historia: 'Our Story', comoLlegar: 'Get directions', escribenos: 'Email us', fundador: 'Founder', trayectoria: 'Timeline', leerHist: 'Read our story', sede: 'Our home',
  },
};
const ST = { lang: 'es', site: {}, stats: {}, lastVideo: null, coaches: [], players: null, alumni: null, media: null, filter: 'all', player: null, ptab: 'resumen', cmp: [null, null] };
{ let saved = null; try { saved = localStorage.getItem('gc_lang'); } catch { /* sin storage */ }
  ST.lang = saved === 'en' ? 'en' : 'es'; }
const t = (k) => T[ST.lang][k] || T.es[k] || k;
const hand = (v) => (ST.lang === 'en' ? { D: 'R', Z: 'L', A: 'S' }[v] || v : { D: 'Derecho', Z: 'Zurdo', A: 'Ambos' }[v] || v);
const handS = (v) => (ST.lang === 'en' ? { D: 'R', Z: 'L', A: 'S' }[v] || v : { D: 'Der.', Z: 'Zur.', A: 'Amb.' }[v] || v);
const S_ = (k) => ST.site[k + '_' + ST.lang] || ST.site[k + '_es'] || ST.site[k] || '';
const isPitcher = (pos) => /lanz|pitch|rhp|lhp|^p$/i.test(pos || '');
const posAbbr = (pos) => ((pos || '').match(/\(([^)]+)\)/) || [])[1] || '';
const posName = (pos) => (pos || '').replace(/\s*\([^)]*\)/, '');
const LOGO = () => ST.site.logo || '/img/logo.png';
const PCOL = ['#e11d2e', '#8b5cf6', '#f59e0b', '#3b82f6', '#22c55e', '#06b6d4', '#ec4899'];

const IC = {
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8zM10 15V9l5.2 3z"/></svg>',
  tt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2.1-2.8V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.7z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-7-2a2 2 0 0 1 4 0v2h-4z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 15V3M7 8l5-5 5 5M4 21h16"/></svg>',
};
const FLAG_SM = '<svg viewBox="0 0 30 20"><rect width="15" height="10" fill="#002d62"/><rect x="15" width="15" height="10" fill="#ce1126"/><rect y="10" width="15" height="10" fill="#ce1126"/><rect x="15" y="10" width="15" height="10" fill="#002d62"/><rect x="13" width="4" height="20" fill="#fff"/><rect y="8" width="30" height="4" fill="#fff"/></svg>';
const FLAG_BG = '<svg class="flagbg" viewBox="0 0 300 200" aria-hidden="true"><defs><clipPath id="fc"><path d="M10 20 C80 0 150 40 290 14 L290 178 C150 204 80 164 10 184Z"/></clipPath></defs><g clip-path="url(#fc)"><rect width="150" height="100" fill="#002d62"/><rect x="150" width="150" height="100" fill="#ce1126"/><rect y="100" width="150" height="100" fill="#ce1126"/><rect x="150" y="100" width="150" height="100" fill="#002d62"/><rect x="132" width="36" height="200" fill="#fff"/><rect y="82" width="300" height="36" fill="#fff"/></g></svg>';

// ---------- encabezado y pie ----------
function header() {
  $('#brand').innerHTML = `<img src="${esc(LOGO())}" alt="GO CHIQUI"><div class="wordmark">GO<span>CHIQUI</span><small>DOMINICANA</small><em>${t('acad')}</em></div>`;
  const r = route().name;
  $('#nav').innerHTML = [['inicio', 'inicio'], ['peloteros', 'peloteros'], ['grandes-ligas', 'mlb'], ['academia', 'academia'], ['galeria', 'galeria'], ['videos', 'videos'], ['contacto', 'contacto']]
    .map(([h, k]) => `<a href="#${h}" class="${r === h || (h === 'peloteros' && r === 'jugador') ? 'on' : ''}">${t(k)}</a>`).join('');
  const s = ST.site;
  const soc = [
    [s.instagram, 'https://instagram.com/' + String(s.instagram || '').replace(/^@/, ''), IC.ig, 'Instagram'],
    [s.youtube, /^https?:/.test(s.youtube || '') ? s.youtube : 'https://youtube.com/@' + String(s.youtube || '').replace(/^@/, ''), IC.yt, 'YouTube'],
    [s.tiktok, 'https://tiktok.com/@' + String(s.tiktok || '').replace(/^@/, ''), IC.tt, 'TikTok'],
  ].filter((x) => x[0]);
  $('#social').innerHTML = soc.map(([, href, ic, l]) => `<a href="${esc(href)}" target="_blank" rel="noopener" aria-label="${l}">${ic}</a>`).join('');
  $('#adminBtn').innerHTML = `${IC.lock}<span>${t('admin')}</span>`;
  $('#langBtn').textContent = ST.lang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = ST.lang;
  $('#foot').innerHTML = `<div class="wrap"><div style="display:flex;align-items:center;gap:12px"><img src="${esc(LOGO())}" alt=""><div>© ${new Date().getFullYear()} GO CHIQUI Dominicana · ${t('acad')}</div></div><div class="social" style="display:flex">${$('#social').innerHTML}</div></div>`;
}
function route() {
  const h = (location.hash || '#inicio').slice(1);
  if (h.startsWith('jugador-')) return { name: 'jugador', id: h.slice(8) };
  return { name: h || 'inicio' };
}

// ---------- datos ----------
async function loadSite() {
  try { const d = await api('public/site'); ST.site = d.settings || {}; ST.coaches = d.coaches || []; ST.stats = d.stats || {}; ST.lastVideo = d.lastVideo; }
  catch { ST.site = {}; }
}
async function loadPlayers() { if (!ST.players) try { ST.players = await api('public/players'); } catch { ST.players = []; } }
async function loadAlumni() { if (!ST.alumni) try { ST.alumni = await api('public/alumni'); } catch { ST.alumni = []; } }
async function loadMedia() { if (!ST.media) try { ST.media = await api('public/media'); } catch { ST.media = []; } }

// ---------- componentes ----------
function playVideo(url) {
  const d = document.createElement('div'); d.className = 'light';
  d.innerHTML = `<video src="${esc(url)}" controls autoplay playsinline></video>`;
  d.onclick = (e) => { if (e.target === d) d.remove(); };
  document.body.appendChild(d);
}
function donut(parts, label, size = 170) {
  const total = parts.reduce((s, p) => s + p.n, 0) || 1, R = 62, C = 2 * Math.PI * R; let off = 0;
  const segs = parts.map((p) => { const len = (p.n / total) * C; const s = `<circle r="${R}" cx="80" cy="80" fill="none" stroke="${p.c}" stroke-width="22" stroke-dasharray="${Math.max(len - 1.5, 0)} ${C - len + 1.5}" stroke-dashoffset="${-off}" transform="rotate(-90 80 80)"/>`; off += len; return s; });
  return `<svg viewBox="0 0 160 160" width="${size}" height="${size}"><circle r="${R}" cx="80" cy="80" fill="none" stroke="#14295a" stroke-width="22"/>${segs.join('')}
    <text x="80" y="80" text-anchor="middle" fill="#fff" style="font:700 italic 34px var(--head)">${parts.reduce((s, p) => s + p.n, 0)}</text><text x="80" y="100" text-anchor="middle" fill="#9aaccc" style="font:600 11px var(--body)">${esc(label)}</text></svg>`;
}
const BATS = '<svg class="sil bats" viewBox="0 0 120 120" aria-hidden="true"><g fill="#fff"><path d="M18 8l9-6 70 92-4 10-9-2z"/><path d="M102 8l-9-6-70 92 4 10 9-2z"/></g><circle cx="60" cy="86" r="17" fill="#fff"/><path d="M50 73c5 7 5 19 0 26M70 73c-5 7-5 19 0 26" fill="none" stroke="#e11d2e" stroke-width="2.4" stroke-dasharray="2.4 2.4"/></svg>';
function posShort(pos) {
  const p = (pos || '').toLowerCase(), ab = posAbbr(pos);
  if (/lanz|pitch/.test(p)) return /zurd|lhp/.test(p) ? 'LHP' : 'RHP';
  if (ab) return ab;
  if (/receptor|catcher/.test(p)) return 'C';
  if (/jardin|outfield/.test(p)) return /central/.test(p) ? 'CF' : 'OF';
  if (/campocorto/.test(p)) return 'SS';
  if (/primera/.test(p)) return '1B'; if (/segunda/.test(p)) return '2B'; if (/tercera/.test(p)) return '3B';
  return '';
}
function alumniBlock(limit) {
  const list = ST.alumni || [];
  const show = limit ? list.slice(0, limit) : list;
  return `<div class="alumni">${show.map((a) => {
    const ps = posShort(a.position), pitcher = isPitcher(a.position) || /HP$/.test(ps);
    const art = a.photo ? `<img class="ph-img" src="${esc(a.photo)}" alt="${esc(a.name)}" loading="lazy">`
      : `${a.debut_year ? `<span class="al-yr">${esc(a.debut_year)}</span>` : ''}${pitcher || !a.position ? `<img class="sil" src="/img/pitcher.png" alt="">` : BATS}`;
    return `<div class="al">
      <div class="al-ph ${a.photo ? 'has' : ''}">${art}
        ${a.status !== 'MLB' ? `<span class="tag tag-blue badge">${t('firmado')}</span>` : '<span class="badge mlb">MLB</span>'}
        ${ps ? `<span class="al-pos">${esc(ps)}</span>` : ''}</div>
      <div class="al-bd"><h3>${esc(a.name)}</h3><div class="pos">${esc(a.position || '')}</div>
      <div class="deb">${a.debut_year ? `<b>${esc(a.debut_year)}</b>${t('debut')} · ${esc(a.debut_team || '')}`
        : a.signed_by ? `${t('firmado')}: ${esc(a.signed_by)} ${a.signed_year ? '(' + esc(a.signed_year) + ')' : ''}` : `<span class="dim">${t('porConf')}</span>`}
        ${a.current_team ? `<div class="dim" style="margin-top:4px">${t('equipo')}: ${esc(a.current_team)}</div>` : ''}</div></div>
    </div>`; }).join('')}</div>`;
}
function playerCard(p) {
  const s = p.latest ? evalSummary(p.latest) : {};
  const hit = p.latest && p.latest.kind === 'hitting' ? p.latest.hitting || {} : null;
  const stats = hit ? [['AVG', hit.avg], ['HR', hit.hr], ['OBP', hit.obp]]
    : [[t('veloMax'), s.veloMax != null ? num(s.veloMax) : null], ['RPM', s.spin != null ? Math.round(s.spin) : null], ['Spin %', s.spinEff != null ? num(s.spinEff) : null]];
  return `<a class="pc" href="#jugador-${esc(p.id)}">
    <div class="ph">${avatar(p.name, p.photo, 100, '0')}</div>
    <div class="bd"><h3>${esc(p.name)}</h3>
      <div class="meta">${esc(p.position || '')}${p.age ? ` · ${p.age} ${t('anios')}` : ''}${p.height ? ` · ${esc(p.height)}` : ''}</div>
      ${p.latest ? `<div class="stats">${stats.map(([l, v]) => `<div><b>${v == null || v === '' ? '—' : esc(v)}</b><span>${esc(l)}</span></div>`).join('')}</div>` : ''}
    </div></a>`;
}

// ---------- vistas ----------
function vHome() {
  const s = ST.site, st = ST.stats || {};
  const feat = (ST.players || []).filter((p) => p.featured);
  const players = (feat.length ? feat : ST.players || []).slice(0, 4);
  const plus = (v) => (v ? '+' + v : '0');
  const prog = st.progress != null ? `${st.progress >= 0 ? '+' : ''}${num(st.progress)}<small style="font-size:18px"> MPH</small>` : '—';
  const vis = s.hero_player ? `${FLAG_BG}<img class="player" src="${esc(s.hero_player)}" alt="">`
    : s.hero ? `<img class="photo" src="${esc(s.hero)}" alt="">`
    : `<img class="crest" src="${esc(LOGO())}" alt="GO CHIQUI">`;
  const v = ST.lastVideo;
  return `
  <section class="hero"><div class="hero-bg"></div><div class="streaks"></div>
    <div class="wrap hero-grid">
      <div class="hero-txt">
        <h1>GO<span>CHIQUI</span></h1><div class="dom">DOMINICANA</div><div class="acad">${t('acad')}</div>
        <p class="lead">${esc(S_('hero_sub'))}</p>
        <div class="cta"><a class="btn btn-red" href="#peloteros">${t('conoce')} <span class="icon">${I.arrow}</span></a>
          <a class="btn btn-outline" href="#academia">${t('laAcad')} <span class="icon">${I.play}</span></a></div>
      </div>
      <div class="hero-vis">${vis}</div>
      <div class="hstats">
        <div class="hstat">${I.users}<div><b>${plus(st.players)}</b><span>${t('hsPel')}</span></div></div>
        <div class="hstat">${I.bars}<div><b>${plus(st.evaluations)}</b><span>${t('hsEval')}</span></div></div>
        <div class="hstat">${I.up}<div><b>${prog}</b><span>${t('hsProg')}</span></div></div>
        <div class="hstat"><div class="mlb-ic">${I.ball}</div><div><b>${st.mlb ?? 0}</b><span>${t('hsMlb')}</span></div></div>
      </div>
    </div>
    <div class="wrap hero-foot ${v ? '' : 'novid'}">
      <div class="pillars">${[['target', 'p1'], ['dumbbell', 'p2'], ['cap', 'p3'], ['bars', 'p4'], ['trophy', 'p5']].map(([i, k]) => `<div class="pillar">${I[i]}<span>${t(k)}</span></div>`).join('')}</div>
      ${v ? `<div class="vcard" data-play="${esc(v.url)}"><div class="vthumb"><video src="${esc(v.url)}#t=1" preload="metadata" muted playsinline></video><div class="pl"><i>${I.play}</i></div></div>
        <div><h4>${t('ultVideo')}</h4><p>${esc(v.caption || 'GO CHIQUI')}</p></div></div>` : ''}
    </div>
  </section>
  <section class="sec"><div class="wrap">
    <div class="sec-h"><div><div class="kicker">${t('mlbK')}</div><h2>${t('mlbH')}</h2><p>${t('mlbP')}</p></div><a href="#grandes-ligas" class="btn btn-dark">${t('verTodos')}</a></div>
    ${alumniBlock(8)}
  </div></section>
  <section class="sec alt"><div class="wrap">
    <div class="sec-h"><div><div class="kicker">${t('destK')}</div><h2>${t('destH')}</h2><p>${t('destP')}</p></div><a href="#peloteros" class="btn btn-dark">${t('verTodos')}</a></div>
    ${players.length ? `<div class="players">${players.map(playerCard).join('')}</div>` : `<div class="card empty">${t('sinPel')}</div>`}
  </div></section>
  ${vAcademy(true)}${vContact(true)}`;
}
function vPlayers() {
  const list = (ST.players || []).filter((p) => ST.filter === 'all' || (ST.filter === 'p' ? isPitcher(p.position) : !isPitcher(p.position)));
  return `<section class="sec"><div class="wrap">
    <div class="sec-h"><div><div class="kicker">GO CHIQUI</div><h2>${t('todosH')}</h2></div>
      <div class="filters">${[['all', 'todos'], ['p', 'lanz'], ['h', 'bat']].map(([f, k]) => `<button class="chip ${ST.filter === f ? 'on' : ''}" data-filter="${f}">${t(k)}</button>`).join('')}</div></div>
    ${list.length ? `<div class="players">${list.map(playerCard).join('')}</div>` : `<div class="card empty">${t('sinPel')}</div>`}
  </div></section>`;
}
function vAlumni() {
  const list = ST.alumni || [], mlb = list.filter((a) => a.status === 'MLB').length, signed = Number(ST.site.signed_count) || list.length;
  return `<section class="sec"><div class="wrap">
    <div class="sec-h"><div><div class="kicker">${t('mlbK')}</div><h2>${t('mlbH')}</h2><p>${t('mlbP')}</p></div></div>
    <div class="grid g2" style="margin-bottom:22px"><div class="tile hot">${I.trophy}<div><div class="v">${mlb}</div><div class="l">${t('enMLB')}</div></div></div>
      <div class="tile">${I.users}<div><div class="v">${signed}${ST.site.signed_count ? '+' : ''}</div><div class="l">${t('firmados')}</div></div></div></div>
    ${alumniBlock(0)}</div></section>`;
}
function founderCard(big) {
  const s = ST.site; if (!s.founder_name) return '';
  return `<div class="founder ${big ? 'big' : ''}">
    <div class="fph">${s.founder_photo ? `<img src="${esc(s.founder_photo)}" alt="${esc(s.founder_name)}">` : `<img class="lg" src="${esc(LOGO())}" alt="">`}</div>
    <div><div class="kicker">${t('fundador')}</div><h3>${esc(s.founder_name)}</h3><div class="muted">${esc(S_('founder_role'))}</div></div></div>`;
}
function coachesBlock() {
  return ST.coaches.length ? `<h3 class="it" style="font-size:26px;margin:28px 0 14px">${t('entren')}</h3><div class="grid g3">${ST.coaches.map((c) => `<div class="coach">${avatar(c.name, c.photo, 56)}<div><h4>${esc(c.name)}</h4><div class="muted" style="font-size:14px">${esc(c.role || '')}</div></div></div>`).join('')}</div>` : '';
}
function vAcademy(compact) {
  if (compact) {
    return `<section class="sec" id="acad"><div class="wrap about">
      <div><div class="kicker">${t('acadK')}</div><h2 class="it" style="font-size:clamp(34px,5vw,54px);margin-bottom:16px">${t('acadH')}</h2>
        <p style="font-size:18px;color:#d6deee;white-space:pre-line">${esc(S_('about'))}</p>
        <a class="btn btn-red" href="#academia" style="margin-top:20px">${t('leerHist')} <span class="icon">${I.arrow}</span></a></div>
      <div>${founderCard(false)}</div></div></section>`;
  }
  const hist = S_('history').split(/\n\s*\n/).filter(Boolean);
  const tl = S_('timeline').split('\n').map((l) => l.split('|').map((x) => x.trim())).filter((x) => x[0]);
  return `<section class="sec acad-page"><div class="wrap">
    <div class="sec-h"><div><div class="kicker">${t('acadK')}</div><h2>${t('historia')}</h2><p>${esc(S_('about'))}</p></div></div>
    <div class="hist-grid">
      <div class="panel-x hist">${hist.map((p, i) => `<p class="${i === 0 ? 'first' : ''}">${esc(p)}</p>`).join('')}</div>
      <aside>${founderCard(true)}
        ${ST.site.address ? `<div class="panel-x place"><div class="kicker">${t('sede')}</div><b>${esc(ST.site.address)}</b><span class="muted">República Dominicana</span>${ST.site.maps_url ? `<a class="btn btn-red btn-sm" style="margin-top:10px;width:fit-content" href="${esc(ST.site.maps_url)}" target="_blank" rel="noopener"><span class="icon">${IC.pin}</span>${t('comoLlegar')}</a>` : ''}</div>` : ''}</aside>
    </div>
    ${tl.length ? `<h3 class="it" style="font-size:30px;margin:44px 0 18px">${t('trayectoria')}</h3><div class="tline">${tl.map(([a, b, c]) => `<div class="tl-i"><div class="tl-y">${esc(a)}</div><div class="tl-d"><h4>${esc(b || '')}</h4><p>${esc(c || '')}</p></div></div>`).join('')}</div>` : ''}
    ${coachesBlock()}
  </div></section>`;
}
function galleryGrid(items) {
  return `<div class="gal">${items.map((m) => `<figure>${m.kind === 'video'
    ? `<video src="${esc(m.url)}" preload="metadata" controls playsinline></video>`
    : `<img src="${esc(m.url)}" alt="${esc(m.caption || '')}" loading="lazy" data-zoom="${esc(m.url)}">`}${m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : ''}</figure>`).join('')}</div>`;
}
function vGallery(kind) {
  const items = (ST.media || []).filter((m) => (kind === 'video' ? m.kind === 'video' : m.kind !== 'video'));
  const [h, p] = kind === 'video' ? [t('vidH'), t('vidP')] : [t('galH'), t('galP')];
  return `<section class="sec"><div class="wrap"><div class="sec-h"><div><div class="kicker">GO CHIQUI</div><h2>${h}</h2><p>${p}</p></div></div>
    ${items.length ? galleryGrid(items) : `<div class="card empty">${t('sinGal')}</div>`}</div></section>`;
}
function vContact(compact) {
  const s = ST.site, wa = (s.whatsapp || '').replace(/\D/g, '');
  const items = [
    [t('tel'), s.phone], ['WhatsApp', s.whatsapp, wa ? `https://wa.me/${wa}` : null], [t('correo'), s.email, s.email ? 'mailto:' + s.email : null],
    ['Instagram', s.instagram ? '@' + s.instagram.replace(/^@/, '') : '', s.instagram ? 'https://instagram.com/' + s.instagram.replace(/^@/, '') : null], [t('dir'), s.address, s.maps_url || null],
  ].filter((x) => x[1]);
  return `<section class="sec ${compact ? 'alt' : ''}"><div class="wrap"><div class="sec-h"><div><div class="kicker">GO CHIQUI</div><h2>${t('contH')}</h2><p>${t('contP')}</p></div></div>
    <div class="contact">${items.map(([l, v, href]) => `<div class="card"><span class="muted">${esc(l)}</span>${href ? `<a href="${esc(href)}" target="_blank" rel="noopener"><b>${esc(v)}</b></a>` : `<b>${esc(v)}</b>`}</div>`).join('') || '<div class="card empty">—</div>'}</div>
    <div class="cta-row">${s.maps_url ? `<a class="btn btn-red" href="${esc(s.maps_url)}" target="_blank" rel="noopener"><span class="icon">${IC.pin}</span>${t('comoLlegar')}</a>` : ''}
      ${s.email ? `<a class="btn btn-dark" href="mailto:${esc(s.email)}"><span class="icon">${IC.mail}</span>${t('escribenos')}</a>` : ''}${wa ? `<a class="btn btn-dark" href="https://wa.me/${wa}" target="_blank" rel="noopener">WhatsApp</a>` : ''}</div>
  </div></section>`;
}

// ---------- perfil del pelotero ----------
function pitchTypeTable(e) {
  const cols = PITCH_FIELDS.filter(([k]) => k !== 'count' && (k === 'type' || (e.pitches || []).some((r) => r[k] != null && r[k] !== '')));
  const L = ST.lang === 'es' ? 1 : 2;
  const short = { velo: 'Velo. Prom', veloMax: 'Velo. Máx', spin: 'RPM', spinEff: 'Spin Eff.', vb: 'Vert. Break', hb: 'Horiz. Break', gyro: 'Gyro', relH: 'Rel. Altura', relS: 'Rel. Lado', strike: 'Strike %' };
  return `<div class="scroll-x"><table class="pt"><thead><tr>${cols.map((c) => `<th>${esc(c[0] === 'type' ? c[L] : ST.lang === 'es' ? short[c[0]] : c[2])}</th>`).join('')}</tr></thead><tbody>
    ${(e.pitches || []).map((r, i) => `<tr>${cols.map(([k]) => k === 'type' ? `<td><span class="ptype" style="background:${PCOL[i % PCOL.length]}">${esc(r.type || '—')}</span></td>`
      : `<td>${r[k] == null || r[k] === '' ? '—' : k === 'spin' ? Math.round(r[k]).toLocaleString('en-US') : /spinEff|strike/.test(k) ? num(r[k]) + '%' : esc(r[k])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function freqPanel(e) {
  const rows = (e.pitches || []).filter((r) => r.type);
  const hasCount = rows.some((r) => Number(r.count) > 0);
  const parts = rows.map((r, i) => ({ k: r.type, n: hasCount ? Number(r.count) || 0 : 1, c: PCOL[i % PCOL.length] }));
  const tot = parts.reduce((s, p) => s + p.n, 0) || 1;
  return `<div class="donut-w">${donut(parts, hasCount ? t('lanzamientos') : 'Tipos')}<div class="legend">${parts.map((p) => `<div><i style="background:${p.c}"></i>${esc(p.k)}<span>${num((p.n / tot) * 100)}%</span></div>`).join('')}</div></div>`;
}
function printReport(p, ev) {
  const pitch = ev.filter((e) => e.kind !== 'hitting'), last = pitch[pitch.length - 1];
  const w = window.open('', '_blank'); if (!w) return;
  w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${esc(p.name)} · GO CHIQUI</title><style>
    body{font:13px Arial,sans-serif;color:#0a1838;margin:30px}h1{margin:0;font-size:30px;font-style:italic;text-transform:uppercase}.h{display:flex;gap:18px;align-items:center;border-bottom:4px solid #e11d2e;padding-bottom:12px;margin-bottom:14px}
    .h img{width:90px}.k{display:flex;gap:24px;margin:10px 0}.k b{display:block;font-size:18px}table{width:100%;border-collapse:collapse;margin:8px 0 18px}th,td{border:1px solid #ccd3e2;padding:5px;text-align:center}th{background:#0a1838;color:#fff;font-size:11px}h2{color:#e11d2e;font-size:16px;margin:16px 0 4px}
    .chart{width:100%;max-width:640px}.chart .grid-l{stroke:#dde3ef}.chart .ax{fill:#556;font-size:11px}.chart .ln{fill:none;stroke:#e11d2e;stroke-width:2.5}.chart .dot{fill:#fff;stroke:#e11d2e;stroke-width:2.5}.chart .lbl{fill:#fff;font:700 12px Arial}</style></head><body>
    <div class="h"><img src="${location.origin}${esc(LOGO())}"><div><div style="font-weight:700;letter-spacing:.2em;font-size:11px">GO CHIQUI DOMINICANA · ACADEMIA DE BÉISBOL</div><h1>${esc(p.name)}</h1><div>${esc(p.position || '')}</div></div></div>
    <div class="k"><div>${t('edad')}<b>${p.age ?? '—'}</b></div><div>${t('estatura')}<b>${esc(p.height || '—')}</b></div><div>${t('peso')}<b>${esc(p.weight || '—')} lbs</b></div><div>${t('batea')}<b>${esc(hand(p.bats) || '—')}</b></div><div>${t('lanza')}<b>${esc(hand(p.throws) || '—')}</b></div></div>
    ${last ? `<h2>${t('ultima')} · ${fmtDate(last.date, ST.lang)}</h2><table><tr>${PITCH_FIELDS.filter(([k]) => last.pitches.some((r) => r[k] != null)).map((f) => `<th>${esc(f[ST.lang === 'es' ? 1 : 2])}</th>`).join('')}</tr>
      ${last.pitches.map((r) => `<tr>${PITCH_FIELDS.filter(([k]) => last.pitches.some((x) => x[k] != null)).map(([k]) => `<td>${esc(r[k] ?? '—')}</td>`).join('')}</tr>`).join('')}</table>` : ''}
    ${pitch.length > 1 ? `<h2>${t('evo')}</h2>${lineChart([{ points: pitch.map((e) => ({ x: fmtDate(e.date, ST.lang), y: evalSummary(e).veloMax })) }], { unit: 'MPH' })}` : ''}
    <script>setTimeout(()=>print(),500)<\/script></body></html>`);
  w.document.close();
}
async function vPlayer(id) {
  if (!ST.player || ST.player.player.id !== id) {
    try { ST.player = await api('public/players/' + encodeURIComponent(id)); ST.ptab = 'resumen'; ST.cmp = [null, null]; }
    catch { return `<div class="wrap"><div class="card empty" style="margin:60px 0"><h4>${t('noEnc')}</h4><a class="btn btn-dark" href="#peloteros">${t('volver')}</a></div></div>`; }
  }
  const { player: p, evaluations: ev, media } = ST.player;
  const pitch = ev.filter((e) => e.kind !== 'hitting'), hit = ev.filter((e) => e.kind === 'hitting');
  const last = pitch[pitch.length - 1], s = last ? evalSummary(last) : {}, lastHit = hit[hit.length - 1];
  const video = (media || []).find((m) => m.kind === 'video');
  const parts = p.name.trim().split(/\s+/), lastName = parts.length > 1 ? parts.pop() : '', firstName = parts.join(' ');
  const noEval = `<div class="card empty">${t('sinEval')}</div>`;
  const tiles = last ? `<div class="grid g4">
      <div class="tile">${I.gauge}<div><div class="l">${t('veloAvg')}</div><div class="v">${num(s.velo)}<small>MPH</small></div></div></div>
      <div class="tile hot">${I.gauge}<div><div class="l">${t('veloMax')}</div><div class="v">${num(s.veloMax)}<small>MPH</small></div></div></div>
      <div class="tile">${I.spin}<div><div class="l">${t('rpm')}</div><div class="v">${s.spin != null ? Math.round(s.spin).toLocaleString('en-US') : '—'}</div></div></div>
      <div class="tile">${I.layers}<div><div class="l">${t('spinEff')}</div><div class="v">${num(s.spinEff)}<small>%</small></div></div></div></div>` : '';
  const hitTiles = lastHit ? `<h3 class="it" style="font-size:24px;margin:22px 0 12px">${t('bateo')}</h3><div class="grid g4">${HIT_FIELDS.filter(([k]) => lastHit.hitting[k] != null && lastHit.hitting[k] !== '')
    .map(([k, l]) => `<div class="tile"><div><div class="l">${esc(l)}</div><div class="v">${esc(lastHit.hitting[k])}</div></div></div>`).join('')}</div>` : '';
  const chart = (k, title, unit) => `<div class="panel-x pp" style="margin-top:16px"><h3>${title}</h3>${lineChart([{ points: pitch.map((e) => ({ x: fmtDate(e.date, ST.lang), y: evalSummary(e)[k] })) }], { unit })}</div>`;
  let body = '';
  switch (ST.ptab) {
    case 'resumen':
      body = last || lastHit ? tiles + (last ? `<div class="two"><div class="panel-x pp"><h3>${t('pitchTypes')}</h3>${pitchTypeTable(last)}</div><div class="panel-x pp"><h3>${t('freq')}</h3>${freqPanel(last)}</div></div>` : '') + hitTiles : noEval; break;
    case 'evals':
      body = ev.length ? `<div class="panel-x scroll-x"><table class="tbl"><thead><tr><th>${t('fecha')}</th><th>Rapsodo</th><th class="num">${t('veloAvg')}</th><th class="num">${t('veloMax')}</th><th class="num">RPM</th><th class="num">Spin Eff.</th></tr></thead><tbody>
        ${pitch.slice().reverse().map((e, i, arr) => { const a = evalSummary(e), prev = arr[i + 1] ? evalSummary(arr[i + 1]) : null;
          const d = (k) => (prev && a[k] != null && prev[k] != null && a[k] !== prev[k] ? `<span class="delta ${a[k] > prev[k] ? 'up' : 'dn'}">${a[k] > prev[k] ? '+' : ''}${num(a[k] - prev[k])}</span>` : '');
          return `<tr><td>${fmtDate(e.date, ST.lang)}</td><td>${e.device === 'pro2' ? 'PRO 2.0' : e.device === 'pitching' ? 'Pitching' : '—'}</td><td class="num">${num(a.velo)}${d('velo')}</td><td class="num">${num(a.veloMax)}${d('veloMax')}</td><td class="num">${a.spin != null ? Math.round(a.spin) : '—'}${d('spin')}</td><td class="num">${num(a.spinEff)}${d('spinEff')}</td></tr>`; }).join('')}
        </tbody></table></div>` : noEval; break;
    case 'stats':
      body = last ? `<div class="panel-x pp"><div class="muted" style="margin-bottom:8px">${t('ultima')}: <b style="color:#fff">${fmtDate(last.date, ST.lang)}</b> · Rapsodo ${last.device === 'pro2' ? 'PRO 2.0' : 'Pitching'}</div>${pitchTypeTable(last)}</div>${hitTiles}` : hitTiles || noEval; break;
    case 'evo':
      body = pitch.length ? chart('veloMax', t('evo'), 'MPH') + chart('spin', t('evoSpin'), 'RPM') + chart('spinEff', t('evoEff'), '%') : noEval; break;
    case 'cmp': {
      if (pitch.length < 2) { body = `<div class="card empty">${t('necesita2')}</div>`; break; }
      const ia = ST.cmp[0] ?? 0, ib = ST.cmp[1] ?? pitch.length - 1, A = evalSummary(pitch[ia]), B = evalSummary(pitch[ib]);
      const opt = (sel) => pitch.map((e, i) => `<option value="${i}" ${i === sel ? 'selected' : ''}>${fmtDate(e.date, ST.lang)}</option>`).join('');
      const row = (l, k, d = 1) => { const dv = A[k] != null && B[k] != null ? B[k] - A[k] : null; return `<tr><td>${l}</td><td class="num">${num(A[k], d)}</td><td class="num">${num(B[k], d)}</td><td class="num">${dv == null ? '—' : `<span class="delta ${dv >= 0 ? 'up' : 'dn'}" style="font-size:14px">${dv >= 0 ? '+' : ''}${num(dv, d)}</span>`}</td></tr>`; };
      body = `<div class="panel-x pp"><div class="cmp-sel"><label>${t('cmpA')}<br><select data-cmp="0">${opt(ia)}</select></label><label>${t('cmpB')}<br><select data-cmp="1">${opt(ib)}</select></label></div>
        <table class="tbl"><thead><tr><th>${t('metrica')}</th><th class="num">A</th><th class="num">B</th><th class="num">${t('cambio')}</th></tr></thead><tbody>
        ${row(t('veloAvg') + ' (MPH)', 'velo')}${row(t('veloMax') + ' (MPH)', 'veloMax')}${row('RPM', 'spin', 0)}${row(t('spinEff') + ' (%)', 'spinEff')}</tbody></table></div>`; break;
    }
    default: body = media && media.length ? galleryGrid(media) : `<div class="card empty">${t('sinVideo')}</div>`;
  }
  const facts = [[t('edad'), p.age], [t('estatura'), p.height], [t('peso'), p.weight ? p.weight + ' lbs' : null], [t('batea'), p.bats ? handS(p.bats) : null], [t('lanza'), p.throws ? handS(p.throws) : null]].filter((f) => f[1]);
  return `<div class="wrap">
    <div class="crumb"><a href="#peloteros">${t('peloteros')}</a> › <b style="color:#fff">${esc(p.name)}</b></div>
    <div class="panel-x prof">
      <div class="ph">${avatar(p.name, p.photo, 230, '0')}</div>
      <div><h1>${esc(firstName)} <span>${esc(lastName)}</span>${p.featured ? `<i class="ok">${IC.check}</i>` : ''}</h1>
        <div class="role">${posAbbr(p.position) ? `<b>${esc(posAbbr(p.position))}</b><span>|</span>` : ''}${esc(posName(p.position))}</div>
        ${facts.length ? `<div class="facts">${facts.map(([l, v]) => `<div>${esc(l)}<b>${esc(v)}</b></div>`).join('')}</div>` : ''}
        ${p.nationality ? `<div class="nat">${/dominic/i.test(p.nationality) ? FLAG_SM : ''}<div><span>${t('nac')}</span><b>${esc(p.nationality)}</b></div></div>` : ''}
        ${p.bio ? `<p style="margin-top:12px;color:#d6deee">${esc(p.bio)}</p>` : ''}
      </div>
      <div class="prof-act">
        ${video ? `<button class="btn btn-line-red" data-play="${esc(video.url)}"><span class="icon">${I.play}</span>${t('verVideo')}</button>` : ''}
        <button class="btn btn-dark" data-act="report"><span class="icon">${IC.dl}</span>${t('descargar')}</button>
      </div>
    </div>
    <div class="tabs">${[['resumen', 'resumen'], ['evals', 'evals'], ['stats', 'stats'], ['evo', 'evolucion'], ['cmp', 'comparar'], ['gal', 'gal']].map(([k, l]) => `<button class="tab ${ST.ptab === k ? 'on' : ''}" data-ptab="${k}">${t(l)}</button>`).join('')}</div>
    <div style="padding-bottom:60px">${body}</div>
  </div>`;
}

// ---------- render ----------
let renderSeq = 0;
async function render() {
  const seq = ++renderSeq, r = route();
  header();
  $('#nav').classList.remove('open');
  const needs = { inicio: [loadPlayers, loadAlumni], peloteros: [loadPlayers], 'grandes-ligas': [loadAlumni], galeria: [loadMedia], videos: [loadMedia] }[r.name] || [];
  await Promise.all(needs.map((f) => f()));
  let html;
  switch (r.name) {
    case 'peloteros': html = vPlayers(); break;
    case 'jugador': html = await vPlayer(r.id); break;
    case 'grandes-ligas': html = vAlumni(); break;
    case 'academia': html = vAcademy(); break;
    case 'galeria': html = vGallery('image'); break;
    case 'videos': html = vGallery('video'); break;
    case 'contacto': html = vContact(); break;
    default: html = vHome();
  }
  if (seq !== renderSeq) return;
  $('#app').innerHTML = html;
}
document.addEventListener('click', (e) => {
  const f = e.target.closest('[data-filter]'); if (f) { ST.filter = f.dataset.filter; render(); return; }
  const pt = e.target.closest('[data-ptab]'); if (pt) { ST.ptab = pt.dataset.ptab; render(); return; }
  const pl = e.target.closest('[data-play]'); if (pl) { playVideo(pl.dataset.play); return; }
  if (e.target.closest('[data-act=report]') && ST.player) { printReport(ST.player.player, ST.player.evaluations); return; }
  const z = e.target.closest('[data-zoom]');
  if (z) { const d = document.createElement('div'); d.className = 'light'; d.innerHTML = `<img src="${esc(z.dataset.zoom)}" alt="">`; d.onclick = () => d.remove(); document.body.appendChild(d); }
});
document.addEventListener('change', (e) => { const c = e.target.dataset.cmp; if (c !== undefined) { ST.cmp[+c] = +e.target.value; render(); } });
$('#langBtn').onclick = () => { ST.lang = ST.lang === 'es' ? 'en' : 'es'; try { localStorage.setItem('gc_lang', ST.lang); } catch { /* */ } render(); };
$('#burger').onclick = () => $('#nav').classList.toggle('open');
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
loadSite().then(render);
