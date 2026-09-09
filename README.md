# Portfolio — Next.js

Sitio de una sola página (single-page portfolio) con desplazamiento fluido, modo
oscuro/claro y todo el contenido editable desde un solo archivo JSON.

## 1. Requisitos

- Node.js 18.18 o superior (recomendado 20+)
- Visual Studio Code con la extensión de ESLint (opcional pero recomendada)

## 2. Instalación

Abre esta carpeta en Visual Studio Code, abre una terminal integrada
(`Ctrl + ñ` o `Terminal > New Terminal`) y ejecuta:

```bash
npm install
npm run dev
```

Luego abre [http://localhost:3000](http://localhost:3000) en tu navegador.
Los cambios que hagas se reflejan al instante (hot reload).

## 3. Cómo editar el contenido (sin tocar código)

Todo el texto del sitio —tu nombre, rol, biografía, trayectoria, habilidades y
proyectos— vive en:

```
data/content.json
```

Edita ese archivo y guarda; el sitio se actualiza solo. No necesitas tocar
ningún componente para cambiar textos, agregar un proyecto nuevo o ajustar tu
biografía.

## 4. Cómo poner tu CV descargable

1. Copia tu CV en PDF dentro de la carpeta `public/`.
2. Nómbralo exactamente `cv.pdf`.
3. Borra `public/cv-placeholder.txt`.

El botón "Descargar CV (PDF)" ya apunta a `/cv.pdf`, así que funcionará
automáticamente.

## 5. Estructura del proyecto

```
app/
  layout.tsx        -> fuentes, metadata y proveedor de tema (dark/light)
  page.tsx           -> ensambla todas las secciones en la página única
  globals.css        -> estilos globales y la cuadrícula de fondo
components/
  Hero.tsx           -> cabecera con nombre, rol y botones de acción
  About.tsx          -> sección "Sobre mí"
  Timeline.tsx        -> línea de tiempo de trayectoria/educación
  Skills.tsx          -> habilidades agrupadas por categoría
  Projects.tsx        -> cuadrícula de tarjetas de proyectos
  Contact.tsx          -> formulario de contacto + enlaces directos
  ThemeToggle.tsx      -> botón de modo oscuro/claro
  ThemeProvider.tsx    -> wrapper de next-themes
data/
  content.json         -> todo el contenido editable del sitio
public/
  cv.pdf (lo agregas tú) -> tu currículum descargable
```

## 6. Agregar un proyecto nuevo

Añade un objeto más al arreglo `projects` en `data/content.json`:

```json
{
  "name": "Nombre del proyecto",
  "description": "Qué hace y qué tecnologías usa.",
  "tags": ["Tecnología 1", "Tecnología 2"],
  "github": "https://github.com/tu-usuario/repo",
  "demo": "https://tu-demo.com"
}
```

Si no tienes enlace de GitHub o demo, deja el valor como cadena vacía `""` y
ese botón simplemente no se mostrará en la tarjeta.

## 7. Despliegue

El proyecto está listo para desplegarse en [Vercel](https://vercel.com)
(el creador de Next.js) de forma gratuita: conecta tu repositorio de GitHub
y Vercel detecta la configuración automáticamente. También funciona en
Netlify o cualquier hosting que soporte Node.js.

## 8. Personalizar colores y tipografía

La paleta (cobre, turquesa, fondo tipo placa de circuito) y las fuentes
(Space Grotesk para títulos, IBM Plex Sans para texto) están centralizadas en
`tailwind.config.ts` y `app/layout.tsx`. Cambia los valores hexadecimales en
`tailwind.config.ts` si quieres otra paleta.
