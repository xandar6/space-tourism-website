# Space Tourism Website

A responsive multi-page website built from the Frontend Mentor Space Tourism challenge. The design system is complete; implementation of the website pages is the next project phase.

## Project structure

```text
assets/                 Shared imagery and icons
css/                    Compiled production CSS
design-system/          Documentation-only pages and assets
  css/                  Compiled documentation CSS
  js/                   Documentation example generation
  previews/             Isolated responsive component previews
  scss/                 Documentation Sass entry point and styles
js/
  components/           Reusable production JavaScript modules
  main.js               Production JavaScript entry point
scss/
  abstracts/            Compile-time Sass tokens such as breakpoints
  base/                 Reset, global styles, and design tokens
  components/           Reusable component styles
  layout/               Layout primitives
  utilities/            Single-purpose utilities and text presets
  main.scss             Production Sass entry point
index.html              Website home page
data.json               Destination, crew, and technology content
```

Shared components remain outside `design-system/` because the catalogue documents the same production CSS and JavaScript used by the website. Only documentation-specific code is contained within `design-system/`.

Future static website pages—`destination.html`, `crew.html`, and `technology.html`—will live beside `index.html`, keeping URLs short and relative asset paths consistent.

## Scripts

```bash
npm install
npm run sass
npm run sass:watch
npm run sass:build
npm run check
```

- `sass` compiles readable development CSS.
- `sass:watch` recompiles styles while files change.
- `sass:build` creates compressed CSS for deployment.
- `check` compiles Sass and validates every JavaScript entry point.

## Architecture

- CSS custom properties hold runtime design tokens and component configuration.
- Sass variables hold compile-time values, including shared breakpoints.
- Reusable components are independent of the documentation layer.
- Responsive component previews use isolated iframe viewports.
- JavaScript is organized as ES modules and initialized through `js/main.js`.
- Interactive controls include visible focus states and reduced-motion support.

## Challenge

This project is based on the [Frontend Mentor Space Tourism challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).
