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
mig3 = [
  ["UPDATE alumni SET position=?, debut_year=?, debut_team=?, needs_review=0, bio=COALESCE(bio, ?) WHERE id='al-lgarcia' AND needs_review=1",
   ['Lanzador derecho (RP)', 2013, 'Philadelphia Phillies',
    'Luis Amado García, «Amadito» o «Compa G». Nació el 30 de enero de 1987 en Santo Domingo. Lanzador relevista derecho de 6\'2" y 240 lb. Debutó en Grandes Ligas el 10 de julio de 2013 con los Philadelphia Phillies, con una entrada en blanco frente a los Washington Nationals.']],
]
mig4 = [
  ["UPDATE alumni SET position=?, debut_year=?, debut_team=?, needs_review=0, bio=COALESCE(bio, ?) WHERE id='al-lsantos' AND needs_review=1",
   ['Lanzador derecho (RP)', 2017, 'Toronto Blue Jays',
    'Luis Gustavo Santos Paulino, «El Nito». Nació el 11 de febrero de 1991 en Bonao. Lanzador derecho; debutó en Grandes Ligas el 2 de septiembre de 2017 con los Toronto Blue Jays y lanzó con ellos en 2017 y 2018.']],
]
mig5 = [
  ["UPDATE alumni SET position=?, debut_year=?, debut_team=?, signed_year=?, signed_by=?, needs_review=0, bio=COALESCE(bio, ?) WHERE id='al-arosario' AND needs_review=1",
   ['Receptor (C)', 2016, 'St. Louis Cardinals', 2005, 'Los Angeles Angels',
    'Alberto Rosario nació el 10 de enero de 1987 en Bonao. Receptor que batea y lanza a la derecha, 6\'0" y 190 lb. Firmó en 2005 con los Angels y tras 11 temporadas en ligas menores debutó en Grandes Ligas el 9 de julio de 2016 con los St. Louis Cardinals ante los Brewers, con un sencillo y una carrera impulsada en su primer turno. Jugó con St. Louis en 2016 y 2017.']],
]
tail = '''
// ---------- base de datos: se crea sola y se actualiza ----------
const SCHEMA = %s;
const SEED = %s;
const MIGRATIONS = [{ id: 'bio_v1', steps: %s }, { id: 'contacto_v1', steps: %s }, { id: 'lgarcia_v1', steps: %s }, { id: 'lsantos_v1', steps: %s }, { id: 'arosario_v1', steps: %s }];
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
''' % (json.dumps(S, ensure_ascii=False, indent=1), json.dumps(D, ensure_ascii=False, indent=1), json.dumps(mig, ensure_ascii=False, indent=1), json.dumps(mig2, ensure_ascii=False, indent=1), json.dumps(mig3, ensure_ascii=False, indent=1), json.dumps(mig4, ensure_ascii=False, indent=1), json.dumps(mig5, ensure_ascii=False, indent=1))
import os as _os
_os.makedirs(R + '/functions/api', exist_ok=True)
open(R + '/functions/api/[[path]].js', 'w').write(api + tail)
if _os.path.exists(R + '/public/_worker.js'): _os.remove(R + '/public/_worker.js')
print('ok')
