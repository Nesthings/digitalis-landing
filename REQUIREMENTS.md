# Requisitos del proyecto

## Requisitos del sistema

| Requisito | Mínimo | Recomendado |
|---|---|---|
| Node.js | 20.0 | 20.x LTS o superior |
| npm | 10.0 | 10.x |
| Sistema operativo | Linux / macOS / Windows | - |

## Dependencias

### Producción

| Paquete | Versión | Propósito |
|---|---|---|
| `next` | 16.3.0 | Framework React con App Router |
| `react` / `react-dom` | 19.2.8 | UI runtime |
| `tailwindcss` | ^4 | Styling utility-first |
| `@tailwindcss/postcss` | ^4 | Plugin PostCSS para Tailwind v4 |
| `motion` | ^13.1.0 | Animaciones y micro-interacciones |
| `@phosphor-icons/react` | ^2.1.10 | Iconografía |
| `geist` | ^1.7.2 | Tipografía Geist Sans + Mono |
| `clsx` | ^2.1.1 | Combinación condicional de clases |
| `tailwind-merge` | ^3.6.0 | Merge de clases Tailwind sin conflictos |

### Desarrollo

| Paquete | Versión | Propósito |
|---|---|---|
| `typescript` | ^5 | Tipado estático |
| `eslint` | ^9 | Linting |
| `eslint-config-next` | 16.3.0 | Config ESLint de Next.js |
| `@types/node` | ^20 | Tipos de Node |
| `@types/react` / `@types/react-dom` | ^19 | Tipos de React |

## Instalación

```bash
npm install
```

## Scripts

| Script | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en http://localhost:3000 |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Ejecuta ESLint |

## Configuración de entorno

No se requieren variables de entorno para desarrollo.

## Despliegue

Cualquier plataforma compatible con Next.js (Vercel, Netlify, Node.js self-hosted).
El proyecto usa rutas estáticas (SSG) para todas las páginas, por lo que el build de
producción es 100% estático salvo los formularios de contacto (client-side, sin backend).
