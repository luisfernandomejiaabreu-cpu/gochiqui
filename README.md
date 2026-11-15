# GO CHIQUI Dominicana · Academia de Béisbol

Sitio web público y panel de administración de la academia GO CHIQUI (La Salvia, Bonao).

Se publica solo en **Cloudflare Pages** cada vez que hay un cambio en la rama `main`.

## Configuración en Cloudflare Pages
- Comando de compilación: *(vacío)*
- Directorio de salida: `public`
- Vinculaciones: `DB` → D1 `gochiqui-db` · `MEDIA` → R2 `gochiqui-media`
- Secretos: `ADMIN_PASSWORD`, `SESSION_SECRET` (y opcional `ANTHROPIC_API_KEY` para leer PDF de Rapsodo)

## Estructura
- `public/` — el sitio (`index.html`), el panel (`admin.html`), estilos, scripts e imágenes.
- `functions/api/[[path]].js` — la API (Cloudflare Pages Functions), generada.
- `src/api.js` — código fuente de la API.
- `schema.sql`, `seed.sql`, `build/textos.json` — base de datos y textos iniciales.
- `build/build.py` — genera `functions/api/[[path]].js` (`python3 build/build.py`).

La base de datos se crea y se actualiza sola la primera vez que se abre la web.

_Publicación automática: cada cambio en `main` se publica solo en gochiqui.pages.dev._
