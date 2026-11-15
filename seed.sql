-- Datos iniciales: egresados en Grandes Ligas y textos del sitio.
-- needs_review = 1 → hay varios peloteros con ese nombre; confirmar datos en el panel.

INSERT OR IGNORE INTO alumni (id, name, position, status, debut_year, debut_team, needs_review, sort) VALUES
 ('al-neris',      'Héctor Neris',         'Lanzador derecho (RP)', 'MLB', 2014, 'Philadelphia Phillies', 0, 1),
 ('al-seranthony', 'Seranthony Domínguez', 'Lanzador derecho (RP)', 'MLB', 2018, 'Philadelphia Phillies', 0, 2),
 ('al-soto',       'Gregory Soto',         'Lanzador zurdo (RP)',   'MLB', 2019, 'Detroit Tigers',        0, 3),
 ('al-betances',   'Dellin Betances',      'Lanzador derecho (RP)', 'MLB', 2011, 'New York Yankees',      0, 4),
 ('al-lagares',    'Juan Lagares',         'Jardinero central',     'MLB', 2013, 'New York Mets',         0, 5),
 ('al-wperalta',   'Wily Peralta',         'Lanzador derecho',      'MLB', 2012, 'Milwaukee Brewers',     0, 6),
 ('al-jperalta',   'Joel Peralta',         'Lanzador derecho (RP)', 'MLB', 2005, 'Los Angeles Angels',    0, 7),
 ('al-jmartinez',  'Justin Martínez',      'Lanzador derecho (RP)', 'MLB', 2023, 'Arizona Diamondbacks',  0, 8),
 ('al-lgarcia',    'Luis García',          'Lanzador derecho (RP)', 'MLB', 2013, 'Philadelphia Phillies', 0, 9),
 ('al-lsantos',    'Luis Santos',          'Lanzador derecho (RP)', 'MLB', 2017, 'Toronto Blue Jays', 0, 10),
 ('al-arosario',   'Alberto Rosario',      NULL, 'MLB', NULL, NULL, 1, 11),
 ('al-carela',     'Juan Carela',          'Lanzador derecho', 'Firmado', NULL, NULL, 1, 12);

INSERT OR IGNORE INTO settings (key, value) VALUES
 ('hero_title', 'GO CHIQUI'),
 ('hero_sub_es', 'Desarrollamos talento dominicano con tecnología, disciplina y proyección al béisbol profesional.'),
 ('hero_sub_en', 'We develop Dominican talent through technology, discipline and a clear path to professional baseball.'),
 ('about_es', 'GO CHIQUI Dominicana es una academia de béisbol dedicada a formar peloteros completos: en el terreno, en el gimnasio y en la vida. Evaluamos a cada prospecto con tecnología Rapsodo y seguimos su progreso sesión a sesión.'),
 ('about_en', 'GO CHIQUI Dominicana is a baseball academy dedicated to developing complete players: on the field, in the gym and in life. Every prospect is evaluated with Rapsodo technology and tracked session by session.'),
 ('phone', ''),
 ('whatsapp', ''),
 ('email', ''),
 ('address', 'República Dominicana'),
 ('instagram', ''),
 ('signed_count', '');
