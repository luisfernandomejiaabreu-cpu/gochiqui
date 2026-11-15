// GO CHIQUI · sitio público
const PITCHER_PATH = 'M105.2,0.0 L103.2,1.8 L100.0,2.0 L94.2,7.2 L94.2,10.0 L93.0,12.8 L95.0,19.5 L94.8,21.0 L91.2,24.5 L87.5,26.8 L87.8,28.5 L89.2,29.8 L95.8,29.5 L98.5,31.5 L99.0,36.0 L106.0,47.8 L104.8,52.2 L102.0,55.8 L98.0,63.8 L97.0,67.8 L93.8,70.5 L92.0,73.5 L89.8,74.5 L88.0,73.8 L88.8,70.2 L90.8,68.0 L92.2,64.0 L91.8,57.8 L87.5,45.2 L83.5,41.5 L81.0,40.5 L75.2,40.0 L72.8,42.0 L69.2,43.2 L66.5,48.0 L65.2,56.2 L63.8,57.8 L60.5,58.2 L58.0,61.0 L58.5,63.5 L65.5,72.0 L71.2,73.0 L74.5,75.5 L79.2,92.5 L83.0,100.2 L80.5,100.8 L73.5,96.8 L70.8,96.5 L67.8,95.0 L57.2,95.2 L55.0,98.2 L51.8,100.5 L49.0,108.0 L45.2,113.2 L39.5,128.0 L38.8,133.2 L35.0,141.0 L34.8,147.2 L33.0,152.0 L33.5,155.5 L29.0,164.2 L26.5,165.0 L23.0,163.0 L20.5,160.2 L18.0,159.0 L15.8,159.0 L11.2,162.2 L10.0,164.8 L10.0,168.8 L12.2,173.5 L15.0,176.0 L16.8,179.2 L22.5,183.8 L27.2,193.2 L31.2,196.5 L35.0,196.8 L38.5,194.5 L40.8,190.0 L41.2,181.5 L44.8,169.2 L50.8,161.0 L53.5,153.8 L56.2,149.5 L57.5,145.8 L59.5,143.5 L61.2,139.8 L61.5,137.0 L62.5,136.0 L65.8,135.2 L70.2,137.2 L76.2,142.5 L89.0,149.5 L94.5,155.0 L97.0,162.5 L97.0,180.2 L96.0,182.8 L96.2,190.5 L95.0,193.8 L95.0,199.8 L96.8,202.5 L96.0,210.5 L97.2,212.8 L97.0,216.0 L98.5,219.2 L99.0,225.0 L102.0,233.2 L103.0,239.8 L105.2,243.5 L105.0,246.8 L106.8,251.5 L107.8,258.2 L133.2,258.8 L132.8,254.8 L129.8,248.5 L129.8,244.8 L127.5,238.8 L127.8,236.0 L125.2,225.5 L124.8,215.5 L128.0,206.0 L131.5,199.5 L133.8,193.0 L133.5,189.8 L138.0,179.0 L147.5,163.5 L152.8,152.0 L154.8,143.0 L154.8,134.5 L157.8,125.0 L159.8,114.0 L159.8,108.5 L160.8,106.0 L160.5,98.2 L161.8,95.0 L161.8,85.8 L160.8,83.2 L160.8,77.8 L159.8,73.8 L153.5,59.2 L151.0,55.5 L142.2,47.8 L139.5,41.2 L130.0,32.2 L127.8,15.8 L123.5,6.2 L113.0,0.0Z';
const T = {
  es: {
    inicio: 'Inicio', peloteros: 'Peloteros', mlb: 'Grandes Ligas', academia: 'La Academia', galeria: 'Galería', videos: 'Videos', contacto: 'Contacto', admin: 'Panel',
    tagline: 'Academia de béisbol, Bonao',
    heroH: 'Donde se afinan los brazos que llegan a Grandes Ligas',
    heroP: 'Escuela de pitcheo de Fausto «Chiqui» Mejía en La Salvia, Bonao. Más de dos décadas corrigiendo mecánicas y desarrollando prospectos.',
    verPel: 'Ver peloteros', nuestraHist: 'Nuestra historia', salieron: 'Salieron de La Salvia:', kick: 'La Salvia, Bonao, República Dominicana',
    hudT: 'Análisis de mecánica', toca: 'Toca para ver su historia', volverT: 'Volver', firma: 'Firma', debutT: 'Debut', hoy: 'Hoy', sinHist: 'Pronto agregaremos su historia.', movH: 'Mapa de movimiento', movP: 'Cuánto se mueve cada lanzamiento, en pulgadas.', qh: 'Quiebre horizontal (pulg.)', qv: 'Quiebre vertical (pulg.)', hudL: 'Rapsodo', hud1: 'en Grandes Ligas', hud2: 'prospectos por temporada', hud3: 'formando lanzadores desde', sinFoto: 'Foto pronto', paso: 'Paso',
    mEje: 'Eje de equilibrio', mRod: 'Elevación de rodilla', mSal: 'Trayectoria', mZona: 'Zona de strike',
    mlbH: 'De La Salvia a Grandes Ligas', mlbP: 'Lanzadores y jugadores que se formaron en GO CHIQUI y llegaron a las Mayores.',
    enMLB: 'Grandes Ligas', firmados: 'firmados con organizaciones', verLista: 'Ver la lista completa',
    colDeb: 'Debut', colNom: 'Pelotero', colPos: 'Posición', colEq: 'Equipo del debut', firmado: 'Firmado', firmasH: 'Firmas', deckT: 'De GO CHIQUI a Grandes Ligas', deckL: 'Egresados', verFoto: 'Ver foto', ant: 'Anterior', sig: 'Siguiente', desliza: 'Desliza para ver más →', firmasP: 'Prospectos de GO CHIQUI que firmaron con organizaciones de Grandes Ligas.', verFirmas: 'Ver todas las firmas', porConf: 'Por confirmar', equipoAct: 'Hoy',
    metH: 'Cómo trabajamos', metP: 'El mismo proceso con cada lanzador, de la primera sesión a la firma.',
    m1h: 'Evaluar', m1p: 'Cada lanzador pasa por Rapsodo: velocidad, giro y quiebre de cada lanzamiento.',
    m2h: 'Afinar', m2p: 'Se corrige la mecánica pieza por pieza, del balance al punto de salida.',
    m3h: 'Medir otra vez', m3p: 'Las sesiones se comparan para ver cuánto subió la velocidad y el giro.',
    m4h: 'Proyectar', m4p: 'Con los números en la mano, el prospecto llega listo ante los scouts.',
    fundador: 'Fundador', leerHist: 'Leer la historia completa',
    destH: 'Prospectos', destP: 'Talento en desarrollo, evaluado con Rapsodo.', verTodos: 'Ver todos los peloteros',
    todosH: 'Nuestros peloteros', todos: 'Todos', lanz: 'Lanzadores', bat: 'Jugadores de posición',
    veloMax: 'Velo. máxima', veloAvg: 'Velo. promedio', rpm: 'RPM promedio', spinEff: 'Spin efficiency',
    edad: 'Edad', estatura: 'Estatura', peso: 'Peso', batea: 'Batea', lanza: 'Lanza', nac: 'Nacionalidad', grad: 'Graduación',
    resumen: 'Resumen', evals: 'Evaluaciones', stats: 'Estadísticas', evolucion: 'Evolución', comparar: 'Comparar', gal: 'Galería',
    verVideo: 'Ver video', descargar: 'Descargar reporte PDF',
    pitchTypes: 'Lanzamientos', freq: 'Uso de lanzamientos', lanzamientos: 'lanzamientos', tipos: 'tipos',
    evo: 'Velocidad máxima por sesión', evoSpin: 'RPM por sesión', evoEff: 'Spin efficiency por sesión', ultima: 'Última evaluación', fecha: 'Fecha',
    sinEval: 'Este pelotero todavía no tiene evaluaciones publicadas.', sinVideo: 'Todavía no hay videos de este pelotero.', sinPel: 'Pronto presentaremos a nuestros prospectos.',
    histH: 'Nuestra historia', trayectoria: 'Trayectoria', entren: 'Entrenadores', sede: 'Sede', comoLlegar: 'Cómo llegar',
    galH: 'Galería', galP: 'Entrenamientos, juegos y momentos de la academia.', vidH: 'Videos', vidP: 'Bullpens, prácticas y jugadas de nuestros peloteros.',
    sinGal: 'Pronto subiremos fotos y videos.', contH: 'Visítanos en La Salvia', contP: 'Escríbenos para pruebas, visitas o información de la academia.',
    tel: 'Teléfono', correo: 'Correo', dir: 'Ubicación', escribenos: 'Escribir un correo', bateo: 'Bateo',
    noEnc: 'No encontramos este pelotero.', volver: 'Volver a peloteros', cmpA: 'Sesión A', cmpB: 'Sesión B', cambio: 'Cambio', metrica: 'Métrica',
    necesita2: 'Se necesitan al menos dos evaluaciones para comparar.', anios: 'años',
  },
  en: {
    inicio: 'Home', peloteros: 'Players', mlb: 'Big Leagues', academia: 'The Academy', galeria: 'Gallery', videos: 'Videos', contacto: 'Contact', admin: 'Admin',
    tagline: 'Baseball academy, Bonao',
    heroH: 'Where arms get tuned for the Big Leagues',
    heroP: 'The pitching school of Fausto «Chiqui» Mejía in La Salvia, Bonao. Over two decades fixing mechanics and developing prospects.',
    verPel: 'See players', nuestraHist: 'Our story', salieron: 'Came out of La Salvia:', kick: 'La Salvia, Bonao, Dominican Republic',
    hudT: 'Mechanics analysis', toca: 'Tap to see his story', volverT: 'Back', firma: 'Signed', debutT: 'Debut', hoy: 'Now', sinHist: 'His story is coming soon.', movH: 'Movement map', movP: 'How much each pitch moves, in inches.', qh: 'Horizontal break (in.)', qv: 'Vertical break (in.)', hudL: 'Rapsodo', hud1: 'in the Big Leagues', hud2: 'prospects per season', hud3: 'developing pitchers since', sinFoto: 'Photo soon', paso: 'Step',
    mEje: 'Balance line', mRod: 'Knee lift', mSal: 'Pitch path', mZona: 'Strike zone',
    mlbH: 'From La Salvia to the Big Leagues', mlbP: 'Pitchers and players who trained at GO CHIQUI and reached the Majors.',
    enMLB: 'Big Leagues', firmados: 'signed with organizations', verLista: 'See the full list', firmasH: 'Signings', deckT: 'From GO CHIQUI to the Big Leagues', deckL: 'Alumni', verFoto: 'Show photo', ant: 'Previous', sig: 'Next', desliza: 'Swipe to see more →', firmasP: 'GO CHIQUI prospects who signed with Major League organizations.', verFirmas: 'See all signings', firmado: 'Signed',
    colDeb: 'Debut', colNom: 'Player', colPos: 'Position', colEq: 'Debut team', firmado: 'Signed', porConf: 'To be confirmed', equipoAct: 'Now',
    metH: 'How we work', metP: 'The same process with every pitcher, from the first session to signing day.',
    m1h: 'Evaluate', m1p: 'Every pitcher goes through Rapsodo: velocity, spin and break on each pitch.',
    m2h: 'Tune', m2p: 'Mechanics are fixed piece by piece, from balance to release point.',
    m3h: 'Measure again', m3p: 'Sessions are compared to see how much velocity and spin went up.',
    m4h: 'Project', m4p: 'With the numbers in hand, the prospect is ready for the scouts.',
    fundador: 'Founder', leerHist: 'Read the full story',
    destH: 'Prospects', destP: 'Developing talent, evaluated with Rapsodo.', verTodos: 'See all players',
    todosH: 'Our players', todos: 'All', lanz: 'Pitchers', bat: 'Position players',
    veloMax: 'Max velo', veloAvg: 'Avg velo', rpm: 'Avg spin', spinEff: 'Spin efficiency',
    edad: 'Age', estatura: 'Height', peso: 'Weight', batea: 'Bats', lanza: 'Throws', nac: 'Nationality', grad: 'Class of',
    resumen: 'Overview', evals: 'Evaluations', stats: 'Stats', evolucion: 'Progression', comparar: 'Compare', gal: 'Gallery',
    verVideo: 'Watch video', descargar: 'Download PDF report',
    pitchTypes: 'Pitch types', freq: 'Pitch usage', lanzamientos: 'pitches', tipos: 'types',
    evo: 'Max velocity by session', evoSpin: 'Spin rate by session', evoEff: 'Spin efficiency by session', ultima: 'Latest evaluation', fecha: 'Date',
    sinEval: 'This player has no published evaluations yet.', sinVideo: 'No videos of this player yet.', sinPel: 'Our prospects will be featured here soon.',
    histH: 'Our story', trayectoria: 'Timeline', entren: 'Coaches', sede: 'Home', comoLlegar: 'Get directions',
    galH: 'Gallery', galP: 'Training, games and academy moments.', vidH: 'Videos', vidP: 'Bullpens, practices and highlights from our players.',
    sinGal: 'Photos and videos coming soon.', contH: 'Visit us in La Salvia', contP: 'Reach out for tryouts, visits or academy information.',
    tel: 'Phone', correo: 'Email', dir: 'Location', escribenos: 'Send an email', bateo: 'Hitting',
    noEnc: 'Player not found.', volver: 'Back to players', cmpA: 'Session A', cmpB: 'Session B', cambio: 'Change', metrica: 'Metric',
    necesita2: 'At least two evaluations are needed to compare.', anios: 'yrs',
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
const PCOL = ['#FF2E4C', '#2E6BFF', '#FFB020', '#59C2FF', '#34D399', '#A78BFA', '#94A3B8'];

const IC = {
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8zM10 15V9l5.2 3z"/></svg>',
  tt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2.1-2.8V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.7z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-7-2a2 2 0 0 1 4 0v2h-4z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
};
const FLAG_SM = '<svg viewBox="0 0 30 20"><rect width="15" height="10" fill="#002d62"/><rect x="15" width="15" height="10" fill="#ce1126"/><rect y="10" width="15" height="10" fill="#ce1126"/><rect x="15" y="10" width="15" height="10" fill="#002d62"/><rect x="13" width="4" height="20" fill="#fff"/><rect y="8" width="30" height="4" fill="#fff"/></svg>';

const SIL = (cls = 'sil') => `<svg class="${cls}" viewBox="0 0 180 259" aria-hidden="true"><defs><linearGradient id="silg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#9FB8F0"/></linearGradient></defs><g transform="translate(180 0) scale(-1 1)"><path d="${PITCHER_PATH}" fill="url(#silg)"/></g></svg>`;
const BATS = '<svg class="sil bats" viewBox="0 0 120 120" aria-hidden="true"><g fill="#E8EEFF"><path d="M18 8l9-6 70 92-4 10-9-2z"/><path d="M102 8l-9-6-70 92 4 10 9-2z"/></g><circle cx="60" cy="86" r="17" fill="#fff"/><path d="M50 73c5 7 5 19 0 26M70 73c-5 7-5 19 0 26" fill="none" stroke="#FF2E4C" stroke-width="2.4" stroke-dasharray="2.4 2.4"/></svg>';
// Ilustración de la portada: el lanzador del logo con el análisis de su mecánica
function heroDeck(al) {
  const withPh = (l) => l.filter((a) => a.photo);
  const items = [...withPh(mlbOf(al)), ...withPh(firmasOf(al))].slice(0, 12);
  if (items.length < 2) return '';
  return `<div class="deck" data-cur="0" aria-roledescription="carrusel">
    ${items.map((a, i) => `<a class="dk-card" href="#grandes-ligas" data-i="${i}" aria-hidden="${i ? 'true' : 'false'}" tabindex="${i ? -1 : 0}">
      <img src="${esc(a.photo)}" alt="${esc(a.name)}" ${i > 2 ? 'loading="lazy"' : ''}>
      <span class="dk-cap">${a.status === 'MLB' ? '<span class="badge-mlb">MLB</span>' : `<span class="badge-sig">${t('firmado')}</span>`}
        <b>${esc(a.name)}</b><small>${esc(a.status === 'MLB' ? [a.debut_team, a.debut_year].filter(Boolean).join(' · ') : [a.signed_by, a.signed_year].filter(Boolean).join(' · '))}</small></span></a>`).join('')}
    <div class="dk-dots" role="group">${items.map((a, i) => `<button type="button" class="${i ? '' : 'on'}" data-dk="${i}" aria-label="${t('verFoto')} ${i + 1}: ${esc(a.name)}"></button>`).join('')}</div>
  </div>`;
}
function deckGo(d, n) {
  const cards = d.querySelectorAll('.dk-card'), len = cards.length; n = ((n % len) + len) % len; d.dataset.cur = n;
  cards.forEach((c, i) => { const o = (i - n + len) % len; c.className = 'dk-card p' + (o < 3 ? o : o === len - 1 ? 'x' : 'h'); c.setAttribute('aria-hidden', String(o !== 0)); c.tabIndex = o ? -1 : 0; });
  d.querySelectorAll('.dk-dots button').forEach((b, i) => b.classList.toggle('on', i === n));
}
function mechArt() {
  return `<svg class="mech" viewBox="0 0 640 540" role="img" aria-label="${esc(t('heroH'))}">
    <defs><linearGradient id="bodyg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#8FAAE8"/></linearGradient></defs>
    <g class="floor">${[0, 1, 2, 3, 4, 5].map((i) => `<line x1="${320 - 60 * (i + 1) * 1.6}" y1="540" x2="${320 - 18 * (i + 1)}" y2="470"/><line x1="${320 + 60 * (i + 1) * 1.6}" y1="540" x2="${320 + 18 * (i + 1)}" y2="470"/>`).join('')}<line x1="0" y1="490" x2="640" y2="490"/><line x1="0" y1="512" x2="640" y2="512"/></g>
    <line class="ln draw" style="--d:.2s" x1="243" y1="34" x2="243" y2="505"/>
    <g class="body" transform="translate(130 40) scale(1.75) translate(180 0) scale(-1 1)"><path d="${PITCHER_PATH}" fill="url(#bodyg)"/></g>
    <path class="arc draw" style="--d:.5s" d="M340.8,222.7 A46,46 0 0,0 392,252.3"/>
    <g class="zone pop" style="--d:1.5s"><rect x="548" y="150" width="72" height="100" rx="2"/>
      <line x1="572" y1="150" x2="572" y2="250"/><line x1="596" y1="150" x2="596" y2="250"/><line x1="548" y1="183.3" x2="620" y2="183.3"/><line x1="548" y1="216.7" x2="620" y2="216.7"/></g>
    <path class="traj draw" style="--d:.9s" d="M326,128 C400,70 520,90 584,200"/>
    <circle class="dot pop" style="--d:2.1s" cx="584" cy="200" r="7"/><circle class="ring" cx="584" cy="200" r="7"/>
    <circle class="dot pop" style="--d:.9s" cx="326" cy="128" r="5"/>
    <g class="pop" style="--d:1.3s"><text class="lbl" x="452" y="74" text-anchor="middle">${esc(t('mSal'))}</text></g>
    <g class="pop" style="--d:.9s"><line class="lead" x1="394" y1="256" x2="420" y2="292"/><text class="lbl" x="424" y="304">${esc(t('mRod'))}</text></g>
    <g class="pop" style="--d:1.8s"><text class="lbl" x="584" y="274" text-anchor="middle">${esc(t('mZona'))}</text></g>
    <g class="pop" style="--d:.4s"><text class="lbl2" x="243" y="526" text-anchor="middle">${esc(t('mEje'))}</text></g>
  </svg>`;
}
function measureArt() {
  $$('.mech .draw').forEach((p) => { if (p.getTotalLength && !p.classList.contains('ln')) p.style.setProperty('--len', Math.ceil(p.getTotalLength())); });
}

// ---------- encabezado y pie ----------
function header() {
  $('#brand').innerHTML = `<img src="${esc(LOGO())}" alt=""><span class="brand-t"><b>GO CHIQUI</b><span>${t('tagline')}</span></span>`;
  $('#brand').setAttribute('aria-label', 'GO CHIQUI, ' + t('inicio'));
  const r = route().name;
  $('#nav').innerHTML = [['inicio', 'inicio'], ['peloteros', 'peloteros'], ['grandes-ligas', 'mlb'], ['academia', 'academia'], ['galeria', 'galeria'], ['videos', 'videos'], ['contacto', 'contacto']]
    .map(([h, k]) => `<a href="#${h}" class="${r === h || (h === 'peloteros' && r === 'jugador') ? 'on' : ''}" ${r === h ? 'aria-current="page"' : ''}>${t(k)}</a>`).join('');
  const s = ST.site;
  const soc = [
    [s.instagram, 'https://instagram.com/' + String(s.instagram || '').replace(/^@/, ''), IC.ig, 'Instagram'],
    [s.youtube, /^https?:/.test(s.youtube || '') ? s.youtube : 'https://youtube.com/@' + String(s.youtube || '').replace(/^@/, ''), IC.yt, 'YouTube'],
    [s.tiktok, 'https://tiktok.com/@' + String(s.tiktok || '').replace(/^@/, ''), IC.tt, 'TikTok'],
  ].filter((x) => x[0]).map(([, href, ic, l]) => `<a href="${esc(href)}" target="_blank" rel="noopener" aria-label="${l}">${ic}</a>`).join('');
  $('#social').innerHTML = soc;
  $('#adminBtn').innerHTML = `${IC.lock}<span>${t('admin')}</span>`;
  $('#langBtn').textContent = ST.lang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = ST.lang;
  $('#foot').innerHTML = `<div class="wrap"><div class="fl"><img src="${esc(LOGO())}" alt=""><div>© ${new Date().getFullYear()} GO CHIQUI Dominicana<br>${t('tagline')}</div></div><div class="social">${soc}</div></div>`;
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
function donut(parts, label, size = 168) {
  const total = parts.reduce((s, p) => s + p.n, 0) || 1, R = 60, C = 2 * Math.PI * R; let off = 0;
  const segs = parts.map((p) => { const len = (p.n / total) * C; const s = `<circle r="${R}" cx="80" cy="80" fill="none" stroke="${p.c}" stroke-width="20" stroke-dasharray="${Math.max(len - 2, 0)} ${C - len + 2}" stroke-dashoffset="${-off}" transform="rotate(-90 80 80)"/>`; off += len; return s; });
  return `<svg viewBox="0 0 160 160" width="${size}" height="${size}" aria-hidden="true"><circle r="${R}" cx="80" cy="80" fill="none" stroke="#EEF2F8" stroke-width="20"/>${segs.join('')}
    <text class="donut-t" x="80" y="84" text-anchor="middle">${parts.reduce((s, p) => s + p.n, 0)}</text><text class="donut-s" x="80" y="102" text-anchor="middle">${esc(label)}</text></svg>`;
}
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
function alumniCard(a) {
  const ps = posShort(a.position), pitcher = isPitcher(a.position) || /HP$/.test(ps) || !a.position;
  const rows = [
    [t('firma'), a.signed_by ? `${a.signed_by}${a.signed_year ? ' (' + a.signed_year + ')' : ''}` : ''],
    [t('debutT'), a.debut_team ? `${a.debut_team}${a.debut_year ? ' (' + a.debut_year + ')' : ''}` : ''],
    [t('hoy'), a.current_team || ''],
  ].filter((r) => r[1]);
  return `<button class="flip" type="button" aria-pressed="false" aria-label="${esc(a.name)}: ${esc(t('toca'))}">
    <span class="flip-in">
      <span class="pcard face front">
        <span class="art">${a.photo ? `<img class="photo" src="${esc(a.photo)}" alt="" loading="lazy">` : pitcher ? SIL() : BATS}</span>
        <span class="tl">${a.debut_year ? esc(a.debut_year) : '—'}<small>${a.debut_year ? t('colDeb') : t('porConf')}</small></span>
        <span class="tr">${a.status === 'MLB' ? '<span class="badge-mlb">MLB</span>' : `<span class="badge-sig">${t('firmado')}</span>`}</span>
        <span class="bt"><span class="h3">${esc(a.name)}</span>
          <span class="meta">${ps ? `<span class="chip-pos">${esc(ps)}</span>` : ''}<span>${esc(a.debut_team || a.signed_by || a.position || '')}</span></span>
          <span class="hint">${t('toca')}</span></span>
      </span>
      <span class="pcard face back">
        <span class="b-head">${ps ? `<span class="chip-pos">${esc(ps)}</span>` : ''}${a.status === 'MLB' ? '<span class="badge-mlb">MLB</span>' : `<span class="badge-sig">${t('firmado')}</span>`}</span>
        <span class="h3">${esc(a.name)}</span>
        <span class="b-pos">${esc(a.position || '')}</span>
        ${rows.length ? `<span class="b-rows">${rows.map(([l, v]) => `<span><small>${esc(l)}</small><b>${esc(v)}</b></span>`).join('')}</span>` : ''}
        <span class="b-bio">${a.bio ? esc(a.bio) : `<em>${t('sinHist')}</em>`}</span>
        <span class="hint">${t('volverT')}</span>
      </span>
    </span>
  </button>`;
}
const mlbOf = (l) => (l || []).filter((a) => a.status === 'MLB');
const firmasOf = (l) => (l || []).filter((a) => a.status !== 'MLB').sort((a, b) => (b.signed_year || 0) - (a.signed_year || 0) || (a.sort || 0) - (b.sort || 0));
function signCard(a) {
  const ps = posShort(a.position);
  return `<div class="pcard sig">
    <div class="art">${a.photo ? `<img class="photo" src="${esc(a.photo)}" alt="${esc(a.name)}" loading="lazy">` : isPitcher(a.position) || !a.position ? SIL() : BATS}</div>
    <div class="tl">${a.signed_year ? esc(a.signed_year) : '—'}<small>${t('firma')}</small></div>
    <div class="bt"><h3>${esc(a.name)}</h3>
      <div class="meta">${ps ? `<span class="chip-pos">${esc(ps)}</span>` : ''}<span>${esc(a.signed_by || '')}</span></div></div></div>`;
}
function firmasSec(list, more) {
  if (!list.length) return '';
  return `<section class="sec" id="firmas"><div class="wrap">
    <div class="sec-h"><div><h2>${t('firmasH')}</h2><p>${t('firmasP')}</p></div></div>
    ${carousel(list.map(signCard).join(''), 'sm')}${more ? `<p style="margin-top:26px"><a class="link" href="#grandes-ligas">${t('verFirmas')} →</a></p>` : ''}</div></section>`;
}
function carousel(items, cls = '') {
  return `<div class="carousel">
    <button class="car-btn prev" type="button" data-car="-1" aria-label="${t('ant')}">‹</button>
    <div class="rail ${cls}" tabindex="0">${items}</div>
    <button class="car-btn next" type="button" data-car="1" aria-label="${t('sig')}">›</button>
    <p class="car-hint">${t('desliza')}</p></div>`;
}
function alumniGrid(list) { return carousel(list.map(alumniCard).join('')); }
function counts() {
  const list = ST.alumni || [], mlb = list.filter((a) => a.status === 'MLB').length, signed = Number(ST.site.signed_count) || list.length;
  return `<div class="big-count"><div><b>${mlb}</b>${t('enMLB')}</div><div><b>${signed}${ST.site.signed_count ? '+' : ''}</b>${t('firmados')}</div></div>`;
}
function playerCard(p) {
  const s = p.latest ? evalSummary(p.latest) : {};
  const hit = p.latest && p.latest.kind === 'hitting' ? p.latest.hitting || {} : null;
  const stats = hit ? [['AVG', hit.avg], ['HR', hit.hr], ['OBP', hit.obp]]
    : [['MPH', s.veloMax != null ? num(s.veloMax) : null], ['RPM', s.spin != null ? Math.round(s.spin) : null], ['Spin %', s.spinEff != null ? num(s.spinEff) : null]];
  const ps = posShort(p.position);
  return `<a class="pcard" href="#jugador-${esc(p.id)}">
    <div class="art">${p.photo ? `<img class="photo" src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy">` : isPitcher(p.position) || !p.position ? SIL() : BATS}</div>
    <div class="tl">${p.age ? esc(p.age) : '—'}<small>${t('edad')}</small></div>
    <div class="bt"><h3>${esc(p.name)}</h3>
      <div class="meta">${ps ? `<span class="chip-pos">${esc(ps)}</span>` : ''}<span>${esc(posName(p.position))}</span></div>
      ${p.latest ? `<div class="stats">${stats.map(([l, v]) => `<div><b>${v == null || v === '' ? '—' : esc(v)}</b><span>${esc(l)}</span></div>`).join('')}</div>` : ''}
    </div></a>`;
}

// ---------- vistas ----------
function vHome() {
  const s = ST.site, al = ST.alumni || [];
  const mlb = al.filter((a) => a.status === 'MLB').length;
  const players = ((ST.players || []).filter((p) => p.featured).length ? ST.players.filter((p) => p.featured) : ST.players || []).slice(0, 4);
  const hist = S_('history').split(/\n\s*\n/).filter(Boolean);
  return `
  <section class="hero">
    <div class="wrap hero-in">
      <div><span class="kick"><i></i>${t('kick')}</span><h1>${t('heroH')}</h1><p class="sub">${t('heroP')}</p>
        <div class="cta"><a class="btn btn-red" href="#peloteros">${t('verPel')}</a><a class="btn btn-glass" href="#academia">${t('nuestraHist')}</a></div></div>
      <div class="hud">
        ${(() => { const dk = heroDeck(al); return dk ? `<div class="hud-top"><span>${t('deckT')}</span><b>${t('deckL')}</b></div>${dk}` : `<div class="hud-top"><span>${t('hudT')}</span><b>${t('hudL')}</b></div>${s.hero_player ? `<img src="${esc(s.hero_player)}" alt="" style="max-height:480px;margin:0 auto">` : mechArt()}`; })()}
        <div class="hud-stats"><div><b>${mlb}</b><span>${t('hud1')}</span></div><div><b>80</b><span>${t('hud2')}</span></div><div><b>1998</b><span>${t('hud3')}</span></div></div>
      </div>
    </div>
  </section>
  ${firmasSec(firmasOf(al).slice(0, 12), true)}
  <section class="sec band"><div class="wrap">
    <div class="sec-h"><div><h2>${t('mlbH')}</h2><p>${t('mlbP')}</p></div>${counts()}</div>
    ${alumniGrid(mlbOf(al))}
    <p style="margin-top:26px"><a class="link" href="#grandes-ligas">${t('verLista')} →</a></p>
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-h"><div><h2>${t('metH')}</h2><p>${t('metP')}</p></div></div>
    <ol class="steps">${[1, 2, 3, 4].map((n) => `<li class="step"><i>${t('paso')} ${n}</i><h3>${t('m' + n + 'h')}</h3><p>${t('m' + n + 'p')}</p></li>`).join('')}</ol>
  </div></section>
  ${s.founder_name ? `<section class="sec band"><div class="wrap founder-sec">${founderArt()}
    <div><p class="quote">${esc(hist[0] || S_('about'))}</p><p class="more">${esc(S_('about'))}</p><a class="btn btn-blue" href="#academia">${t('leerHist')}</a></div></div></section>` : ''}
  ${players.length ? `<section class="sec"><div class="wrap"><div class="sec-h"><div><h2>${t('destH')}</h2><p>${t('destP')}</p></div><a class="btn btn-glass" href="#peloteros">${t('verTodos')}</a></div>
    <div class="cards">${players.map(playerCard).join('')}</div></div></section>` : ''}
  ${vContact()}`;
}
function founderArt() {
  const s = ST.site;
  return `<figure class="f-art photo-on">${s.founder_photo ? `<img class="photo" src="${esc(s.founder_photo)}" alt="${esc(s.founder_name)}">` : `<img class="cut" src="/img/chiqui.png" alt="${esc(s.founder_name)}">`}
    <figcaption><b>${esc(s.founder_name)}</b><span>${esc(S_('founder_role'))}</span></figcaption></figure>`;
}
function vPlayers() {
  const list = (ST.players || []).filter((p) => ST.filter === 'all' || (ST.filter === 'p' ? isPitcher(p.position) : !isPitcher(p.position)));
  return `<section class="sec"><div class="wrap">
    <div class="sec-h"><div><h2>${t('todosH')}</h2></div>
      <div class="filters" role="group">${[['all', 'todos'], ['p', 'lanz'], ['h', 'bat']].map(([f, k]) => `<button class="chip ${ST.filter === f ? 'on' : ''}" data-filter="${f}" aria-pressed="${ST.filter === f}">${t(k)}</button>`).join('')}</div></div>
    ${list.length ? `<div class="cards">${list.map(playerCard).join('')}</div>` : `<div class="empty-n">${t('sinPel')}</div>`}
  </div></section>`;
}
function vAlumni() {
  return `<section class="sec"><div class="wrap">
    <div class="sec-h"><div><h2>${t('mlbH')}</h2><p>${t('mlbP')}</p></div>${counts()}</div>
    ${alumniGrid(mlbOf(ST.alumni))}</div></section>
  ${firmasSec(firmasOf(ST.alumni), false)}`;
}
function vAcademy() {
  const hist = S_('history').split(/\n\s*\n/).filter(Boolean);
  const tl = S_('timeline').split('\n').map((l) => l.split('|').map((x) => x.trim())).filter((x) => x[0]);
  const s = ST.site;
  return `<section class="sec"><div class="wrap">
    <div class="sec-h"><div><h2>${t('histH')}</h2><p>${esc(S_('about'))}</p></div></div>
    <div class="hist-grid">
      <div class="hist">${hist.map((p, i) => `<p class="${i === 0 ? 'first' : ''}">${esc(p)}</p>`).join('')}</div>
      <aside>${s.founder_name ? founderArt() : ''}
        ${s.address ? `<div class="place"><small>${t('sede')}</small><b>${esc(s.address)}</b><small>República Dominicana</small>${s.maps_url ? `<a class="btn btn-red btn-sm" style="margin-top:12px;width:fit-content" href="${esc(s.maps_url)}" target="_blank" rel="noopener"><span class="icon">${IC.pin}</span>${t('comoLlegar')}</a>` : ''}</div>` : ''}
      </aside>
    </div></div></section>
  ${tl.length ? `<section class="sec band"><div class="wrap"><div class="sec-h"><div><h2>${t('trayectoria')}</h2></div></div>
    <div class="tline">${tl.map(([a, b, c]) => `<div class="tl-i"><div class="tl-y">${esc(a)}</div><h4>${esc(b || '')}</h4><p>${esc(c || '')}</p></div>`).join('')}</div></div></section>` : ''}
  ${ST.coaches.length ? `<section class="sec"><div class="wrap"><div class="sec-h"><div><h2>${t('entren')}</h2></div></div>
    <div class="grid g3">${ST.coaches.map((c) => `<div class="coach">${avatar(c.name, c.photo, 60)}<div><h4>${esc(c.name)}</h4><div style="color:var(--muted);font-size:15px">${esc(c.role || '')}</div></div></div>`).join('')}</div></div></section>` : ''}`;
}
function galleryGrid(items) {
  return `<div class="gal">${items.map((m) => `<figure>${m.kind === 'video'
    ? `<video src="${esc(m.url)}" preload="metadata" controls playsinline></video>`
    : `<img src="${esc(m.url)}" alt="${esc(m.caption || '')}" loading="lazy" data-zoom="${esc(m.url)}">`}${m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : ''}</figure>`).join('')}</div>`;
}
function vGallery(kind) {
  const items = (ST.media || []).filter((m) => (kind === 'video' ? m.kind === 'video' : m.kind !== 'video'));
  const [h, p] = kind === 'video' ? [t('vidH'), t('vidP')] : [t('galH'), t('galP')];
  return `<section class="sec"><div class="wrap"><div class="sec-h"><div><h2>${h}</h2><p>${p}</p></div></div>
    ${items.length ? galleryGrid(items) : `<div class="empty-n">${t('sinGal')}</div>`}</div></section>`;
}
function vContact() {
  const s = ST.site, wa = (s.whatsapp || '').replace(/\D/g, '');
  const ig = s.instagram ? s.instagram.replace(/^@/, '') : '';
  const rows = [
    [t('correo'), s.email, s.email ? 'mailto:' + s.email : null], ['Instagram', ig ? '@' + ig : '', ig ? 'https://instagram.com/' + ig : null],
    [t('tel'), s.phone, s.phone ? 'tel:' + s.phone.replace(/[^\d+]/g, '') : null], ['WhatsApp', s.whatsapp, wa ? 'https://wa.me/' + wa : null], [t('dir'), s.address, s.maps_url || null],
  ].filter((x) => x[1]);
  return `<section class="sec"><div class="wrap"><div class="contact-box">
    <div><div class="sec-h" style="margin-bottom:0"><div><h2>${t('contH')}</h2><p>${t('contP')}</p></div></div>
      <div class="cta">${s.maps_url ? `<a class="btn btn-red" href="${esc(s.maps_url)}" target="_blank" rel="noopener"><span class="icon">${IC.pin}</span>${t('comoLlegar')}</a>` : ''}
        ${s.email ? `<a class="btn btn-glass" href="mailto:${esc(s.email)}"><span class="icon">${IC.mail}</span>${t('escribenos')}</a>` : ''}${wa ? `<a class="btn btn-glass" href="https://wa.me/${wa}" target="_blank" rel="noopener">WhatsApp</a>` : ''}</div></div>
    <div class="c-list">${rows.map(([l, v, href]) => href ? `<a href="${esc(href)}" ${/^https/.test(href) ? 'target="_blank" rel="noopener"' : ''}><span>${esc(l)}</span><b>${esc(v)}</b></a>` : `<div><span>${esc(l)}</span><b>${esc(v)}</b></div>`).join('')}</div>
  </div></div></section>`;
}

// ---------- perfil del pelotero ----------
function pitchTypeTable(e) {
  const cols = PITCH_FIELDS.filter(([k]) => k !== 'count' && (k === 'type' || (e.pitches || []).some((r) => r[k] != null && r[k] !== '')));
  const short = { es: { type: 'Tipo', velo: 'Velo. prom', veloMax: 'Velo. máx', spin: 'RPM', spinEff: 'Spin eff.', vb: 'Quiebre vert.', hb: 'Quiebre horiz.', gyro: 'Gyro', relH: 'Salida altura', relS: 'Salida lado', strike: 'Strike %' },
    en: { type: 'Type', velo: 'Avg velo', veloMax: 'Max velo', spin: 'Spin', spinEff: 'Spin eff.', vb: 'Vert. break', hb: 'Horiz. break', gyro: 'Gyro', relH: 'Release height', relS: 'Release side', strike: 'Strike %' } }[ST.lang];
  return `<div class="scroll-x"><table class="pt"><thead><tr>${cols.map(([k]) => `<th>${esc(short[k])}</th>`).join('')}</tr></thead><tbody>
    ${(e.pitches || []).map((r, i) => `<tr>${cols.map(([k]) => k === 'type' ? `<td><span class="ptype"><i style="background:${PCOL[i % PCOL.length]}"></i>${esc(r.type || '—')}</span></td>`
      : `<td>${r[k] == null || r[k] === '' ? '—' : k === 'spin' ? Math.round(r[k]).toLocaleString('en-US') : /spinEff|strike/.test(k) ? num(r[k]) + '%' : esc(r[k])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function movementChart(e) {
  const pts = (e.pitches || []).map((r, i) => ({ k: r.type || '—', x: Number(r.hb), y: Number(r.vb), c: PCOL[i % PCOL.length] }))
    .filter((p) => r_ok(p.x) && r_ok(p.y));
  function r_ok(v) { return v !== null && !isNaN(v) && isFinite(v); }
  if (!pts.length) return '';
  const R = Math.max(20, Math.ceil(Math.max(...pts.map((p) => Math.max(Math.abs(p.x), Math.abs(p.y)))) / 5) * 5 + 5);
  const S = 360, C = S / 2, k = (C - 26) / R, X = (v) => C + v * k, Y = (v) => C - v * k;
  let g = '';
  for (let v = -R; v <= R; v += 5) {
    if (v === 0) continue;
    g += `<line class="mv-g" x1="${X(v)}" y1="${Y(-R)}" x2="${X(v)}" y2="${Y(R)}"/><line class="mv-g" x1="${X(-R)}" y1="${Y(v)}" x2="${X(R)}" y2="${Y(v)}"/>`;
    if (v % 10 === 0) g += `<text class="mv-t" x="${X(v)}" y="${C + 14}" text-anchor="middle">${v}</text><text class="mv-t" x="${C - 6}" y="${Y(v) + 4}" text-anchor="end">${v}</text>`;
  }
  [10, 20].filter((r) => r <= R).forEach((r) => { g += `<circle class="mv-r" cx="${C}" cy="${C}" r="${r * k}"/>`; });
  g += `<line class="mv-a" x1="${X(-R)}" y1="${C}" x2="${X(R)}" y2="${C}"/><line class="mv-a" x1="${C}" y1="${Y(-R)}" x2="${C}" y2="${Y(R)}"/>`;
  pts.forEach((p) => { g += `<g class="mv-p"><circle cx="${X(p.x)}" cy="${Y(p.y)}" r="16" fill="${p.c}" opacity=".18"/><circle cx="${X(p.x)}" cy="${Y(p.y)}" r="8" fill="${p.c}" stroke="#04060D" stroke-width="2"/><title>${esc(p.k)}: ${num(p.x)} / ${num(p.y)}</title></g>`; });
  return `<div class="box mv-box"><h3>${t('movH')}</h3><p class="mv-sub">${t('movP')}</p>
    <div class="mv-wrap"><figure class="mv-fig"><svg class="mv" viewBox="0 0 ${S} ${S}" role="img" aria-label="${esc(t('movH'))}">${g}</svg>
      <figcaption class="mv-x">${t('qh')} →</figcaption><span class="mv-y">↑ ${t('qv')}</span></figure>
      <div class="legend">${pts.map((p) => `<div><i style="background:${p.c}"></i>${esc(p.k)}<span>${num(p.x)}″ / ${num(p.y)}″</span></div>`).join('')}</div></div></div>`;
}
function freqPanel(e) {
  const rows = (e.pitches || []).filter((r) => r.type);
  const hasCount = rows.some((r) => Number(r.count) > 0);
  const parts = rows.map((r, i) => ({ k: r.type, n: hasCount ? Number(r.count) || 0 : 1, c: PCOL[i % PCOL.length] }));
  const tot = parts.reduce((s, p) => s + p.n, 0) || 1;
  return `<div class="donut-w">${donut(parts, hasCount ? t('lanzamientos') : t('tipos'))}<div class="legend">${parts.map((p) => `<div><i style="background:${p.c}"></i>${esc(p.k)}<span>${num((p.n / tot) * 100)}%</span></div>`).join('')}</div></div>`;
}
function printReport(p, ev) {
  const pitch = ev.filter((e) => e.kind !== 'hitting'), last = pitch[pitch.length - 1];
  const w = window.open('', '_blank'); if (!w) return;
  const cols = last ? PITCH_FIELDS.filter(([k]) => last.pitches.some((r) => r[k] != null)) : [];
  w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${esc(p.name)} · GO CHIQUI</title><style>
    body{font:13px Arial,sans-serif;color:#0A1A3A;margin:30px}h1{margin:0;font-size:30px;text-transform:uppercase}.h{display:flex;gap:18px;align-items:center;border-bottom:3px solid #CE1126;padding-bottom:12px;margin-bottom:14px}
    .h img{width:84px}.k{display:flex;gap:24px;margin:10px 0}.k b{display:block;font-size:18px}table{width:100%;border-collapse:collapse;margin:8px 0 18px}th,td{border:1px solid #CDD6E4;padding:5px;text-align:center}th{background:#0B2A5B;color:#fff;font-size:11px}h2{color:#CE1126;font-size:16px;margin:16px 0 4px}
    .chart{width:100%;max-width:640px}.chart .grid-l{stroke:#E1E7F0}.chart .ax{fill:#55678A;font-size:11px}.chart .ln{fill:none;stroke:#CE1126;stroke-width:2.5}.chart .dot{fill:#fff;stroke:#CE1126;stroke-width:2.5}.chart .lbl{fill:#fff;font:700 12px Arial}</style></head><body>
    <div class="h"><img src="${location.origin}${esc(LOGO())}"><div><div style="font-weight:700;font-size:12px">GO CHIQUI Dominicana, academia de béisbol</div><h1>${esc(p.name)}</h1><div>${esc(p.position || '')}</div></div></div>
    <div class="k"><div>${t('edad')}<b>${p.age ?? '—'}</b></div><div>${t('estatura')}<b>${esc(p.height || '—')}</b></div><div>${t('peso')}<b>${esc(p.weight || '—')} lbs</b></div><div>${t('batea')}<b>${esc(hand(p.bats) || '—')}</b></div><div>${t('lanza')}<b>${esc(hand(p.throws) || '—')}</b></div></div>
    ${last ? `<h2>${t('ultima')}: ${fmtDate(last.date, ST.lang)}</h2><table><tr>${cols.map((f) => `<th>${esc(f[ST.lang === 'es' ? 1 : 2])}</th>`).join('')}</tr>
      ${last.pitches.map((r) => `<tr>${cols.map(([k]) => `<td>${esc(r[k] ?? '—')}</td>`).join('')}</tr>`).join('')}</table>` : ''}
    ${pitch.length > 1 ? `<h2>${t('evo')}</h2>${lineChart([{ points: pitch.map((e) => ({ x: fmtDate(e.date, ST.lang), y: evalSummary(e).veloMax })) }], { unit: 'MPH' })}` : ''}
    <script>setTimeout(()=>print(),500)<\/script></body></html>`);
  w.document.close();
}
async function vPlayer(id) {
  if (!ST.player || ST.player.player.id !== id) {
    try { if (!id) throw 0; ST.player = await api('public/players/' + encodeURIComponent(id)); if (!ST.player || !ST.player.player) throw 0; ST.ptab = 'resumen'; ST.cmp = [null, null]; }
    catch { return `<div class="wrap" style="padding:80px 28px"><div class="empty-n"><p>${t('noEnc')}</p><a class="btn btn-blue" style="margin-top:16px" href="#peloteros">${t('volver')}</a></div></div>`; }
  }
  const { player: p, evaluations: ev, media } = ST.player;
  const pitch = ev.filter((e) => e.kind !== 'hitting'), hit = ev.filter((e) => e.kind === 'hitting');
  const last = pitch[pitch.length - 1], s = last ? evalSummary(last) : {}, lastHit = hit[hit.length - 1];
  const video = (media || []).find((m) => m.kind === 'video');
  const noEval = `<div class="empty-n">${t('sinEval')}</div>`;
  const tiles = last ? `<div class="grid g4">
      <div class="tile">${I.gauge}<div><div class="l">${t('veloAvg')}</div><div class="v">${num(s.velo)}<small>MPH</small></div></div></div>
      <div class="tile hot">${I.gauge}<div><div class="l">${t('veloMax')}</div><div class="v">${num(s.veloMax)}<small>MPH</small></div></div></div>
      <div class="tile">${I.spin}<div><div class="l">${t('rpm')}</div><div class="v">${s.spin != null ? Math.round(s.spin).toLocaleString('en-US') : '—'}</div></div></div>
      <div class="tile">${I.layers}<div><div class="l">${t('spinEff')}</div><div class="v">${num(s.spinEff)}<small>%</small></div></div></div></div>` : '';
  const hitTiles = lastHit ? `<h3 style="font-size:26px;text-transform:uppercase;color:#fff;margin:28px 0 14px">${t('bateo')}</h3><div class="grid g4">${HIT_FIELDS.filter(([k]) => lastHit.hitting[k] != null && lastHit.hitting[k] !== '')
    .map(([k, l]) => `<div class="tile"><div><div class="l">${esc(l)}</div><div class="v">${esc(lastHit.hitting[k])}</div></div></div>`).join('')}</div>` : '';
  const chart = (k, title, unit) => `<div class="box" style="margin-top:20px"><h3>${title}</h3>${lineChart([{ points: pitch.map((e) => ({ x: fmtDate(e.date, ST.lang), y: evalSummary(e)[k] })) }], { unit })}</div>`;
  let body = '';
  switch (ST.ptab) {
    case 'resumen':
      body = last || lastHit ? tiles + (last ? `<div class="two"><div class="box"><h3>${t('pitchTypes')}</h3>${pitchTypeTable(last)}</div><div class="box"><h3>${t('freq')}</h3>${freqPanel(last)}</div></div>${movementChart(last)}` : '') + hitTiles : noEval; break;
    case 'evals':
      body = pitch.length ? `<div class="box scroll-x"><table class="tbl"><thead><tr><th>${t('fecha')}</th><th>Rapsodo</th><th class="num">${t('veloAvg')}</th><th class="num">${t('veloMax')}</th><th class="num">RPM</th><th class="num">Spin eff.</th></tr></thead><tbody>
        ${pitch.slice().reverse().map((e, i, arr) => { const a = evalSummary(e), prev = arr[i + 1] ? evalSummary(arr[i + 1]) : null;
          const d = (k) => (prev && a[k] != null && prev[k] != null && a[k] !== prev[k] ? `<span class="delta ${a[k] > prev[k] ? 'up' : 'dn'}">${a[k] > prev[k] ? '+' : ''}${num(a[k] - prev[k])}</span>` : '');
          return `<tr><td>${fmtDate(e.date, ST.lang)}</td><td>${e.device === 'pro2' ? 'PRO 2.0' : e.device === 'pitching' ? 'Pitching' : '—'}</td><td class="num">${num(a.velo)}${d('velo')}</td><td class="num">${num(a.veloMax)}${d('veloMax')}</td><td class="num">${a.spin != null ? Math.round(a.spin) : '—'}${d('spin')}</td><td class="num">${num(a.spinEff)}${d('spinEff')}</td></tr>`; }).join('')}
        </tbody></table></div>` : noEval; break;
    case 'stats':
      body = last ? `<div class="box"><p style="color:var(--muted);margin-bottom:10px">${t('ultima')}: <b style="color:#fff">${fmtDate(last.date, ST.lang)}</b>, Rapsodo ${last.device === 'pro2' ? 'PRO 2.0' : 'Pitching'}</p>${pitchTypeTable(last)}</div>${hitTiles}` : hitTiles || noEval; break;
    case 'evo':
      body = pitch.length ? chart('veloMax', t('evo'), 'MPH') + chart('spin', t('evoSpin'), 'RPM') + chart('spinEff', t('evoEff'), '%') : noEval; break;
    case 'cmp': {
      if (pitch.length < 2) { body = `<div class="empty-n">${t('necesita2')}</div>`; break; }
      const ia = ST.cmp[0] ?? 0, ib = ST.cmp[1] ?? pitch.length - 1, A = evalSummary(pitch[ia]), B = evalSummary(pitch[ib]);
      const opt = (sel) => pitch.map((e, i) => `<option value="${i}" ${i === sel ? 'selected' : ''}>${fmtDate(e.date, ST.lang)}</option>`).join('');
      const row = (l, k, d = 1) => { const dv = A[k] != null && B[k] != null ? B[k] - A[k] : null; return `<tr><td>${l}</td><td class="num">${num(A[k], d)}</td><td class="num">${num(B[k], d)}</td><td class="num">${dv == null ? '—' : `<span class="delta ${dv >= 0 ? 'up' : 'dn'}" style="font-size:14px">${dv >= 0 ? '+' : ''}${num(dv, d)}</span>`}</td></tr>`; };
      body = `<div class="box"><div class="cmp-sel"><label>${t('cmpA')}<select data-cmp="0">${opt(ia)}</select></label><label>${t('cmpB')}<select data-cmp="1">${opt(ib)}</select></label></div>
        <table class="tbl"><thead><tr><th>${t('metrica')}</th><th class="num">A</th><th class="num">B</th><th class="num">${t('cambio')}</th></tr></thead><tbody>
        ${row(t('veloAvg') + ' (MPH)', 'velo')}${row(t('veloMax') + ' (MPH)', 'veloMax')}${row('RPM', 'spin', 0)}${row(t('spinEff') + ' (%)', 'spinEff')}</tbody></table></div>`; break;
    }
    default: body = media && media.length ? galleryGrid(media) : `<div class="empty-n">${t('sinVideo')}</div>`;
  }
  const facts = [[t('edad'), p.age], [t('estatura'), p.height], [t('peso'), p.weight ? p.weight + ' lbs' : null], [t('batea'), p.bats ? handS(p.bats) : null], [t('lanza'), p.throws ? handS(p.throws) : null], [t('grad'), p.gradYear]].filter((f) => f[1]);
  return `<div class="wrap" style="padding-bottom:80px">
    <nav class="crumb"><a href="#peloteros">${t('peloteros')}</a> / ${esc(p.name)}</nav>
    <div class="prof">
      <div class="pcard"><div class="art">${p.photo ? `<img class="photo" src="${esc(p.photo)}" alt="${esc(p.name)}">` : isPitcher(p.position) || !p.position ? SIL() : BATS}</div>${posShort(p.position) ? `<div class="tr"><span class="chip-pos">${esc(posShort(p.position))}</span></div>` : ''}</div>
      <div><h1>${esc(p.name)}${p.featured ? `<i class="ok" aria-hidden="true">${IC.check}</i>` : ''}</h1>
        <div class="role">${posAbbr(p.position) ? `<b>${esc(posAbbr(p.position))}</b>` : ''}${esc(posName(p.position))}</div>
        ${facts.length ? `<div class="facts">${facts.map(([l, v]) => `<div>${esc(l)}<b>${esc(v)}</b></div>`).join('')}</div>` : ''}
        ${p.nationality ? `<div class="nat">${/dominic/i.test(p.nationality) ? FLAG_SM : ''}${esc(p.nationality)}</div>` : ''}
        ${p.bio ? `<p style="margin-top:14px;color:#33456A;max-width:40em">${esc(p.bio)}</p>` : ''}
      </div>
      <div class="prof-act">
        ${video ? `<button class="btn btn-red" data-play="${esc(video.url)}"><span class="icon">${I.play}</span>${t('verVideo')}</button>` : ''}
        <button class="btn btn-glass" data-act="report"><span class="icon">${IC.dl}</span>${t('descargar')}</button>
      </div>
    </div>
    <div class="tabs" role="tablist">${[['resumen', 'resumen'], ['evals', 'evals'], ['stats', 'stats'], ['evo', 'evolucion'], ['cmp', 'comparar'], ['gal', 'gal']].map(([k, l]) => `<button class="tab ${ST.ptab === k ? 'on' : ''}" role="tab" aria-selected="${ST.ptab === k}" data-ptab="${k}">${t(l)}</button>`).join('')}</div>
    ${body}
  </div>`;
}

// ---------- render ----------
let renderSeq = 0;
async function render() {
  const seq = ++renderSeq, r = route();
  header();
  $('#nav').classList.remove('open'); $('#burger').setAttribute('aria-expanded', 'false');
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
  measureArt();
}
document.addEventListener('click', (e) => {
  const f = e.target.closest('[data-filter]'); if (f) { ST.filter = f.dataset.filter; render(); return; }
  const dd = e.target.closest('[data-dk]'); if (dd) { const d = dd.closest('.deck'); d.dataset.hold = String(Date.now() + 8000); deckGo(d, Number(dd.dataset.dk)); return; }
  const cb = e.target.closest('[data-car]'); if (cb) holdRail(cb.parentElement.querySelector('.rail'));
  if (cb) { const r = cb.parentElement.querySelector('.rail'), c = r.firstElementChild; r.scrollBy({ left: Number(cb.dataset.car) * ((c ? c.offsetWidth : 260) + 18) * (innerWidth > 700 ? 2 : 1), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); return; }
  const fl = e.target.closest('.flip'); if (fl) { const on = !fl.classList.contains('on'); fl.classList.toggle('on', on); fl.setAttribute('aria-pressed', String(on)); return; }
  const pt = e.target.closest('[data-ptab]'); if (pt) { ST.ptab = pt.dataset.ptab; render(); return; }
  const pl = e.target.closest('[data-play]'); if (pl) { playVideo(pl.dataset.play); return; }
  if (e.target.closest('[data-act=report]') && ST.player) { printReport(ST.player.player, ST.player.evaluations); return; }
  const z = e.target.closest('[data-zoom]');
  if (z) { const d = document.createElement('div'); d.className = 'light'; d.innerHTML = `<img src="${esc(z.dataset.zoom)}" alt="">`; d.onclick = () => d.remove(); document.body.appendChild(d); }
});
document.addEventListener('pointermove', (e) => {
  const c = e.target.closest && e.target.closest('.pcard'); if (!c) return;
  const r = c.getBoundingClientRect(); c.style.setProperty('--x', ((e.clientX - r.left) / r.width) * 100 + '%'); c.style.setProperty('--y', ((e.clientY - r.top) / r.height) * 100 + '%');
});
document.addEventListener('change', (e) => { const c = e.target.dataset.cmp; if (c !== undefined) { ST.cmp[+c] = +e.target.value; render(); } });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') $('.light')?.remove(); });
$('#langBtn').onclick = () => { ST.lang = ST.lang === 'es' ? 'en' : 'es'; try { localStorage.setItem('gc_lang', ST.lang); } catch { /* */ } render(); };
$('#burger').onclick = () => { const o = $('#nav').classList.toggle('open'); $('#burger').setAttribute('aria-expanded', String(o)); };
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
loadSite().then(render);

// ---------- rotación automática de los carruseles ----------
const holdRail = (r, ms = 7000) => { if (r) r.dataset.hold = String(Date.now() + ms); };
['pointerdown', 'wheel', 'focusin'].forEach((ev) => document.addEventListener(ev, (e) => { const r = e.target.closest && e.target.closest('.rail, .carousel'); if (r) holdRail(r.classList.contains('rail') ? r : r.querySelector('.rail')); }, { passive: true }));
document.addEventListener('mouseover', (e) => { const r = e.target.closest && e.target.closest('.carousel'); if (r) holdRail(r.querySelector('.rail'), 2500); });
setInterval(() => {
  if (document.hidden || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.rail').forEach((r) => {
    if (Number(r.dataset.hold || 0) > Date.now() || r.querySelector('.flip.on') || r.scrollWidth <= r.clientWidth + 4) return;
    const box = r.getBoundingClientRect(); if (box.bottom < 0 || box.top > innerHeight) return;
    const step = (r.firstElementChild ? r.firstElementChild.offsetWidth : 250) + parseFloat(getComputedStyle(r).columnGap || 16);
    if (r.scrollLeft + r.clientWidth >= r.scrollWidth - 8) r.scrollTo({ left: 0, behavior: 'smooth' });
    else r.scrollBy({ left: step, behavior: 'smooth' });
  });
}, 3500);

// ---------- portada: pila de fotos que rota ----------
let dkX = null;
document.addEventListener('pointerdown', (e) => { const d = e.target.closest && e.target.closest('.deck'); dkX = d ? [d, e.clientX] : null; if (d) d.dataset.hold = String(Date.now() + 8000); });
document.addEventListener('pointerup', (e) => { if (!dkX) return; const [d, x] = dkX, dx = e.clientX - x; dkX = null; if (Math.abs(dx) > 40) { d.dataset.swiped = '1'; deckGo(d, Number(d.dataset.cur) + (dx < 0 ? 1 : -1)); } });
document.addEventListener('click', (e) => { const d = e.target.closest && e.target.closest('.deck'); if (d && d.dataset.swiped) { d.dataset.swiped = ''; e.preventDefault(); e.stopPropagation(); } }, true);
document.addEventListener('mouseover', (e) => { const d = e.target.closest && e.target.closest('.deck'); if (d) d.dataset.hold = String(Date.now() + 2500); });
new MutationObserver(() => document.querySelectorAll('.deck:not([data-ready])').forEach((d) => { d.dataset.ready = '1'; deckGo(d, 0); })).observe(document.body, { childList: true, subtree: true });
setInterval(() => {
  if (document.hidden || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.deck').forEach((d) => { if (Number(d.dataset.hold || 0) > Date.now()) return; const b = d.getBoundingClientRect(); if (b.bottom < 0 || b.top > innerHeight) return; deckGo(d, Number(d.dataset.cur) + 1); });
}, 3200);
