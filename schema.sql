-- GO CHIQUI Dominicana · Esquema de base de datos (Cloudflare D1)

CREATE TABLE IF NOT EXISTS players (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  photo_key TEXT,
  birth_date TEXT,
  nationality TEXT DEFAULT 'República Dominicana',
  position TEXT,
  height TEXT,
  weight INTEGER,
  bats TEXT,
  throws TEXT,
  grad_year INTEGER,
  bio TEXT,
  consent INTEGER DEFAULT 0,      -- autorización del jugador o tutor
  published INTEGER DEFAULT 0,    -- visible en la web pública
  featured INTEGER DEFAULT 0,     -- aparece como destacado
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS evaluations (
  id TEXT PRIMARY KEY,
  player_id TEXT NOT NULL,
  date TEXT NOT NULL,
  device TEXT DEFAULT 'manual',   -- pitching | pro2 | manual
  kind TEXT DEFAULT 'pitching',   -- pitching | hitting
  pdf_key TEXT,                   -- PDF original (privado)
  pitches_json TEXT DEFAULT '[]',
  hitting_json TEXT DEFAULT '{}',
  public_fields_json TEXT DEFAULT '["velo","veloMax","spin","spinEff","vb","hb"]',
  notes TEXT,
  published INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_eval_player ON evaluations(player_id, date);

CREATE TABLE IF NOT EXISTS alumni (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT,
  status TEXT DEFAULT 'MLB',      -- MLB | Firmado
  signed_year INTEGER,
  signed_by TEXT,
  debut_year INTEGER,
  debut_team TEXT,
  current_team TEXT,
  bio TEXT,
  photo_key TEXT,
  needs_review INTEGER DEFAULT 0,
  published INTEGER DEFAULT 1,
  sort INTEGER DEFAULT 100
);

CREATE TABLE IF NOT EXISTS coaches (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  bio TEXT,
  photo_key TEXT,
  sort INTEGER DEFAULT 100
);

CREATE TABLE IF NOT EXISTS media (
  id TEXT PRIMARY KEY,
  key TEXT NOT NULL,
  kind TEXT DEFAULT 'image',      -- image | video
  caption TEXT,
  player_id TEXT,
  published INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT
);

CREATE TABLE IF NOT EXISTS news (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT,
  image_key TEXT,
  body TEXT,
  published INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);
