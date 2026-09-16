# Sitio de Momentum Proyectos Creativos

One-pager estatico. Sin framework, sin build, sin dependencias. Se publica copiando la carpeta
`site/` tal cual a GitHub Pages, Cloudflare Pages o Netlify.

## Estructura

```
site/
  index.html          Todo el contenido. Cada seccion tiene un comentario que explica que editar.
  css/styles.css      Estilos. Los colores y fuentes estan al inicio, en la seccion TOKENS.
  js/main.js          Menu movil, filtros del portafolio y anio del footer. Nada mas.
  assets/
    img/portafolio/   Fotos del portafolio en WebP, maximo 1600 px de ancho.
    img/equipo/       Fotos de los fundadores, 600x600, recorte circular por CSS.
    img/              Mapa de Honduras.
    logos/            Logo Momentum en blanco, negro y color.
    logos/clientes/   Logos de clientes en PNG con fondo transparente. Se pintan en blanco por CSS.
```

## Como hacer los cambios mas comunes

Cambiar un texto: abre `index.html`, busca la seccion por su comentario y edita el texto.

Cambiar colores: abre `css/styles.css` y edita las variables de la seccion `1. TOKENS`.
Todo el sitio las usa. No hay colores sueltos en el resto del archivo.

Agregar una foto al portafolio:

1. Guarda la foto en `assets/img/portafolio/` en WebP o JPG, maximo 1600 px de ancho.
2. En `index.html`, seccion PORTAFOLIO, copia un bloque `<figure>` y cambia `src`, `alt`,
   `data-cat` y el texto del `<figcaption>`.
3. `data-cat` debe coincidir con uno de los `data-filter` de los botones de filtro.
4. Agrega `class="is-wide"` si quieres que ocupe dos columnas.

Agregar un cliente: guarda el logo en `assets/logos/clientes/` con fondo transparente y copia
un `<li>` en la seccion CLIENTES. Si no tienes el logo, usa `<li class="logos__text">Nombre</li>`.

Cambiar telefonos de WhatsApp: seccion CONTACTO, enlaces `wa.me/504XXXXXXXX`.

## Ver en local

```
cd site
python3 -m http.server 8000
```

Abre http://localhost:8000

## Pendientes

- Logos de Ron Zacapa y Jetstereo en PNG o SVG (hoy van como texto).
- Confirmar dominio momentumhn.com y donde esta registrado.
- Favicon dedicado (hoy usa el logo a color).
