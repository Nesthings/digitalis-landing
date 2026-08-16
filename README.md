# Digitalis Labs - Landing Site

Sitio web oficial de Digitalis Labs, una startup con tres líneas de negocio:

1. **SaaS propios** - productos construidos in-house (Vetcore, Gymcore)
2. **Consultoría técnica** - DevOps, cloud y automatización
3. **Desarrollo a medida** - MVPs, integraciones y migraciones

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router, Server Components) |
| Styling | Tailwind CSS v4 |
| Animación | Motion (ex Framer Motion) |
| Iconos | Phosphor Icons (`@phosphor-icons/react/dist/ssr`) |
| Tipografía | Geist Sans + Geist Mono |

## Requisitos

Ver [REQUIREMENTS.md](./REQUIREMENTS.md).

## Puesta en marcha

```bash
npm install       # instala dependencias
npm run dev       # servidor de desarrollo (http://localhost:3000)
```

### Comandos

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción
npm run start     # sirve el build de producción
npm run lint      # eslint
```

## Estructura

```
src/
  app/                    # páginas y rutas
    blog/[slug]/          # detalle de posts
    productos/            # hub de SaaS (Vetcore, Gymcore)
    servicios/            # consultoría + desarrollo a medida
    casos-de-exito/       # casos con métricas
    nosotros/             # historia, timeline, equipo
    precios/              # planes con toggle y FAQ
    contacto/             # dos formularios + agendar llamada
  components/
    ui/                   # primitivas del block library (Button, Badge, Reveal, CtaSection, ...)
    navbar.tsx            # navbar con dropdown, menú móvil y toggle de tema
    footer.tsx            # footer con newsletter
    logo.tsx              # logo con variante claro/oscuro
    ...                   # secciones del home (hero, bifurcación, SaaS preview, ...)
  lib/                    # datos y utilidades (blog, cn)
public/placeholders/      # imágenes placeholder (reemplazar)
scripts/                  # generador de placeholders
```

## Placeholders pendientes

Todos los placeholders usan `/placeholders/*.svg` con un `alt` que describe exactamente qué
imagen va en su lugar. Buscá `[PLACEHOLDER:` en los `alt` para encontrar cada reemplazo pendiente:

1. Imagen hero (mockup del producto principal)
2. Screenshot de Vetcore y Gymcore
3. Logos de clientes (6)
4. Fotos de casos de éxito (6)
5. Fotos de equipo (4) y avatares de testimonios (3)
6. Portadas de blog (3)

## Logo

- `public/logo.png` - logo claro
- `public/logo-dark.png` - logo oscuro

Se sirven sin optimización (`unoptimized` en `next/image`) para máxima nitidez. Editá
`src/components/logo.tsx` si necesitás cambiar el nombre de archivo o el tamaño.

## Notas

- Los íconos de Phosphor se importan desde la entrada `dist/ssr` para compatibilidad con
  Server Components.
- Tema claro/oscuro con tokens CSS (`globals.css`) y `prefers-color-scheme` + toggle manual.
