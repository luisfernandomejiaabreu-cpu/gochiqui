# GO CHIQUI Dominicana · Academia de Béisbol

Sitio web público y panel de administración de la academia GO CHIQUI (La Salvia, Bonao).

Se publica solo en **Cloudflare Pages** cada vez que hay un cambio en la rama `main`.

## Configuración en Cloudflare Pages
- Comando de compilación: *(vacío)*
- Directorio de salida: `public`
- Vinculaciones: `DB` → D1 `gochiqui-db` · `MEDIA` → R2 `gochiqui-media`
- Secretos: `ADMIN_PASSWORD`, `SESSION_SECRET` (y opcional `ANTHROPIC_API_KEY` para leer PDF de Rapsodo)

## Estructura
- `public/` — el sitio (`index.html`), el panel (`admin.html`), estilos, scripts e imágenes. `public/_worker.js` es la API.
- `src/api.js` — código fuente de la API.
- `schema.sql`, `seed.sql`, `build/textos.json` — base de datos y textos iniciales.
- `build/build.py` — genera `public/_worker.js` (`python3 build/build.py`).

La base de datos se crea y se actualiza sola la primera vez que se abre la web.
