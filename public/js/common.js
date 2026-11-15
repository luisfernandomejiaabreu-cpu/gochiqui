// GO CHIQUI · utilidades compartidas
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const num = (v, d = 1) => (v === null || v === undefined || v === '' || isNaN(v) ? '—' : Number(v).toFixed(d).replace(/\.0+$/, ''));
const initials = (n) => String(n || '?').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
const fmtDate = (d, lang = 'es') => {
  if (!d) return '—';
  const x = new Date(d + 'T12:00:00');
  return isNaN(x) ? d : x.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-DO', { day: 'numeric', month: 'short', year: 'numeric' });
};

async function api(path, opts = {}) {
  const o = { method: opts.method || 'GET', headers: {}, credentials: 'same-origin' };
  if (opts.body !== undefined) { o.headers['content-type'] = 'application/json'; o.body = JSON.stringify(opts.body); }
  const r = await fetch('/api/' + path, o);
  let data = null; try { data = await r.json(); } catch { /* vacío */ }
  if (!r.ok) { const e = new Error((data && data.error) || 'Error ' + r.status); e.status = r.status; throw e; }
  return data;
}
async function uploadFile(file, kind) {
  const r = await fetch(`/api/admin/upload?kind=${kind}&name=${encodeURIComponent(file.name)}`, {
    method: 'POST', body: file, headers: { 'content-type': file.type || 'application/octet-stream' }, credentials: 'same-origin',
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || 'No se pudo subir el archivo');
  return d;
}

let toastT;
function toast(msg) {
  let t = $('#toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 3200);
}

function avatar(name, photo, size = 48, radius = '50%') {
  return `<div class="avatar" style="width:${size}px;height:${size}px;border-radius:${radius};font-size:${Math.round(size * 0.38)}px">${
    photo ? `<img src="${esc(photo)}" alt="${esc(name)}" loading="lazy">` : esc(initials(name))}</div>`;
}

// Iconos (trazos simples)
const I = {
  bars: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V14M10 20V9M16 20V4M22 20H2"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/></svg>',
  ball: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M7 4.5c2 4 2 11 0 15M17 4.5c-2 4-2 11 0 15"/></svg>',
  gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3.5 17a9 9 0 1 1 17 0"/><path d="M12 13l4.5-4.5"/><circle cx="12" cy="13" r="1.4" fill="currentColor"/></svg>',
  spin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 7a5 5 0 1 0 5 5"/><path d="M12 11a1 1 0 1 0 1 1"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 5 9-5"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M8 15h8M8 18h5"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.6c2.8.2 4.8 2 5.5 5.4"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M12 14v4M8 21h8"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg>',
};

// Gráfica de líneas en SVG. series: [{points:[{x:label,y:number}], cls:'ln'|'ln2'}]
function lineChart(series, { h = 220, unit = '', highlightLast = true } = {}) {
  const all = series.flatMap((s) => s.points).filter((p) => p.y != null && !isNaN(p.y));
  if (all.length < 1) return '<div class="empty">Sin datos todavía</div>';
  const labels = series[0].points.map((p) => p.x);
  const W = 640, P = { l: 44, r: 20, t: 26, b: 34 };
  let lo = Math.min(...all.map((p) => p.y)), hi = Math.max(...all.map((p) => p.y));
  if (lo === hi) { lo -= 1; hi += 1; }
  const pad = (hi - lo) * 0.18; lo -= pad; hi += pad;
  const n = Math.max(labels.length, 1);
  const X = (i) => P.l + (n === 1 ? (W - P.l - P.r) / 2 : (i * (W - P.l - P.r)) / (n - 1));
  const Y = (v) => P.t + (1 - (v - lo) / (hi - lo)) * (h - P.t - P.b);
  let g = '';
  for (let k = 0; k <= 4; k++) {
    const v = lo + ((hi - lo) * k) / 4, y = Y(v);
    g += `<line class="grid-l" x1="${P.l}" x2="${W - P.r}" y1="${y}" y2="${y}"/><text class="ax" x="${P.l - 8}" y="${y + 4}" text-anchor="end">${num(v, 1)}</text>`;
  }
  const step = Math.ceil(n / 7);
  labels.forEach((l, i) => { if (i % step === 0 || i === n - 1) g += `<text class="ax" x="${X(i)}" y="${h - 10}" text-anchor="${n > 1 && i === 0 ? 'start' : n > 1 && i === n - 1 ? 'end' : 'middle'}">${esc(l)}</text>`; });
  series.forEach((s) => {
    const pts = s.points.map((p, i) => (p.y == null || isNaN(p.y) ? null : [X(i), Y(p.y), p.y])).filter(Boolean);
    if (pts.length > 1) g += `<path class="${s.cls || 'ln'}" d="M${pts.map((p) => p[0] + ',' + p[1]).join(' L')}"/>`;
    pts.forEach((p) => { g += `<circle class="${s.cls === 'ln2' ? 'dot2' : 'dot'}" cx="${p[0]}" cy="${p[1]}" r="4.5"><title>${num(p[2], 1)} ${unit}</title></circle>`; });
    if (highlightLast && pts.length && (s.cls || 'ln') === 'ln') {
      const p = pts[pts.length - 1], txt = `${num(p[2], 1)} ${unit}`, w = txt.length * 7.4 + 14, x = Math.min(Math.max(p[0] - w / 2, P.l), W - P.r - w);
      g += `<rect x="${x}" y="${p[1] - 30}" width="${w}" height="20" rx="4" fill="#e11d2e"/><text class="lbl" x="${x + w / 2}" y="${p[1] - 16}" text-anchor="middle">${esc(txt)}</text>`;
    }
  });
  return `<svg class="chart" viewBox="0 0 ${W} ${h}" role="img">${g}</svg>`;
}

// Resumen de una evaluación de pitcheo: lanzamiento principal = el de mayor velocidad
function evalSummary(e) {
  const rows = (e.pitches || []).filter((r) => r && (r.velo != null || r.veloMax != null));
  if (!rows.length) return {};
  const main = rows.reduce((a, r) => ((r.velo ?? r.veloMax ?? 0) > (a.velo ?? a.veloMax ?? 0) ? r : a), rows[0]);
  const maxes = rows.map((r) => r.veloMax ?? r.velo).filter((v) => v != null);
  return { velo: main.velo, veloMax: maxes.length ? Math.max(...maxes) : null, spin: main.spin, spinEff: main.spinEff, type: main.type };
}

const PITCH_FIELDS = [
  ['type', 'Tipo', 'Type'], ['count', '#', '#'], ['velo', 'Velo. Prom (MPH)', 'Avg Velo (MPH)'], ['veloMax', 'Velo. Máx (MPH)', 'Max Velo (MPH)'],
  ['spin', 'RPM', 'Spin (RPM)'], ['spinEff', 'Spin Eff. %', 'Spin Eff. %'], ['vb', 'Break Vert. (in)', 'Vert. Break (in)'],
  ['hb', 'Break Horiz. (in)', 'Horiz. Break (in)'], ['gyro', 'Gyro (°)', 'Gyro (°)'], ['relH', 'Release Altura (ft)', 'Release Height (ft)'],
  ['relS', 'Release Lado (ft)', 'Release Side (ft)'], ['strike', 'Strike %', 'Strike %'],
];
const HIT_FIELDS = [['avg', 'AVG'], ['hits', 'H'], ['hr', 'HR'], ['rbi', 'CI / RBI'], ['obp', 'OBP'], ['slg', 'SLG'], ['exitVelo', 'Exit Velo Máx (MPH)']];
