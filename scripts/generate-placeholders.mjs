import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "placeholders");
mkdirSync(out, { recursive: true });

const ACCENT = "#2E5BFF";
const GRID = "#263044";

function wrap(svg) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n${svg}\n`;
}

function gradientDef(id, from, to) {
  return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="${from}"/>
    <stop offset="100%" stop-color="${to}"/>
  </linearGradient>`;
}

function gridPattern(id) {
  return `<pattern id="${id}" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M40 0H0V40" fill="none" stroke="${GRID}" stroke-opacity="0.35" stroke-width="1"/>
  </pattern>`;
}

// Abstract technical composition used for hero / product / case imagery
function abstractArt({ w, h, from, to, seed }) {
  const cx = Math.round(w * 0.62);
  const cy = Math.round(h * 0.42);
  const r = Math.round(Math.min(w, h) * 0.3);
  const d1 = "G" + seed;
  const d2 = "P" + seed;
  const ring = "R" + seed;
  const dot = "D" + seed;
  return wrap(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    ${gradientDef(d1, from, to)}
    ${gradientDef(d2, "#FFFFFF", "#E5E9F0")}
    ${gridPattern(d2 + "g")}
    <radialGradient id="${ring}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.22"/>
      <stop offset="70%" stop-color="${ACCENT}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${d1})"/>
  <rect width="${w}" height="${h}" fill="url(#${d2 + "g"})" opacity="0.5"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${ring})"/>
  <circle cx="${cx}" cy="${cy}" r="${Math.round(r * 0.55)}" fill="none" stroke="${ACCENT}" stroke-opacity="0.6" stroke-width="1.5"/>
  <circle cx="${cx}" cy="${cy}" r="${Math.round(r * 0.3)}" fill="none" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="1"/>
  <g fill="#FFFFFF">
    <rect x="${cx - 18}" y="${cy - 18}" width="10" height="10" rx="2" opacity="0.9"/>
    <rect x="${cx + 8}" y="${cy - 10}" width="6" height="6" rx="1.5" opacity="0.6"/>
    <rect x="${cx - 6}" y="${cy + 10}" width="8" height="8" rx="2" opacity="0.45"/>
    <circle cx="${cx + 16}" cy="${cy + 18}" r="3" opacity="0.5"/>
  </g>
  <path d="M0 ${h * 0.86} C ${w * 0.2} ${h * 0.78}, ${w * 0.45} ${h * 0.95}, ${w} ${h * 0.8} L${w} ${h} L0 ${h} Z" fill="#FFFFFF" fill-opacity="0.06"/>
  <g stroke="${ACCENT}" stroke-opacity="0.35" stroke-width="1.5">
    <path d="M0 ${h * 0.3} Q ${w * 0.3} ${h * 0.15}, ${w * 0.55} ${h * 0.35} T ${w} ${h * 0.25}"/>
    <path d="M0 ${h * 0.62} Q ${w * 0.25} ${h * 0.48}, ${w * 0.5} ${h * 0.66} T ${w} ${h * 0.56}"/>
  </g>
  <circle cx="${dot}" cy="${dot}" r="0" fill="none"/>
</svg>`);
}

// Initials avatar used for team / testimonial photos
function avatar({ initials, from, to, seed }) {
  const g = "A" + seed;
  return wrap(`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
  <defs>
    ${gradientDef(g, from, to)}
    <radialGradient id="${g}s" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="160" height="160" fill="url(#${g})"/>
  <rect width="160" height="160" fill="url(#${g}s)"/>
  <rect width="160" height="160" fill="none" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="2"/>
  <text x="80" y="80" text-anchor="middle" dominant-baseline="central" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-size="52" font-weight="600" fill="#FFFFFF">${initials}</text>
</svg>`);
}

// Client logo monogram mark
function logo({ glyph, from, to, seed }) {
  const g = "L" + seed;
  return wrap(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <defs>
    ${gradientDef(g, from, to)}
  </defs>
  <rect x="18" y="18" width="84" height="84" rx="18" fill="url(#${g})"/>
  <rect x="18" y="18" width="84" height="84" rx="18" fill="none" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="2"/>
  <text x="60" y="60" text-anchor="middle" dominant-baseline="central" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-size="34" font-weight="700" fill="#FFFFFF">${glyph}</text>
</svg>`);
}

const files = {
  "hero-image.svg": abstractArt({ w: 1440, h: 1080, from: "#101828", to: "#1D2B4A", seed: 1 }),
  "product-vetcore.svg": abstractArt({ w: 1200, h: 900, from: "#0F2E5C", to: "#173E75", seed: 2 }),
  "product-gymcore.svg": abstractArt({ w: 1200, h: 900, from: "#0E3B3A", to: "#165454", seed: 3 }),
  "case-1.svg": abstractArt({ w: 1200, h: 760, from: "#1D2440", to: "#2C3560", seed: 4 }),
  "case-2.svg": abstractArt({ w: 1200, h: 760, from: "#331B2E", to: "#4A2844", seed: 5 }),
  "case-3.svg": abstractArt({ w: 1200, h: 760, from: "#1B2E26", to: "#28463B", seed: 6 }),
  "case-4.svg": abstractArt({ w: 1200, h: 760, from: "#2E241B", to: "#483A28", seed: 7 }),
  "case-5.svg": abstractArt({ w: 1200, h: 760, from: "#241B2E", to: "#38284A", seed: 8 }),
  "case-6.svg": abstractArt({ w: 1200, h: 760, from: "#1B2E33", to: "#28464D", seed: 9 }),
  "team-1.svg": avatar({ initials: "AD", from: "#2E5BFF", to: "#1D3FBF", seed: 1 }),
  "team-2.svg": avatar({ initials: "MC", from: "#0E7490", to: "#155E75", seed: 2 }),
  "team-3.svg": avatar({ initials: "LR", from: "#7C3AED", to: "#5B21B6", seed: 3 }),
  "team-4.svg": avatar({ initials: "SP", from: "#0F766E", to: "#115E59", seed: 4 }),
  "avatar-1.svg": avatar({ initials: "JR", from: "#1D4ED8", to: "#1E40AF", seed: 5 }),
  "avatar-2.svg": avatar({ initials: "LM", from: "#B45309", to: "#92400E", seed: 6 }),
  "avatar-3.svg": avatar({ initials: "CP", from: "#4F46E5", to: "#4338CA", seed: 7 }),
  "client-1.svg": logo({ glyph: "H", from: "#2E5BFF", to: "#1D3FBF", seed: 1 }),
  "client-2.svg": logo({ glyph: "V", from: "#0E7490", to: "#155E75", seed: 2 }),
  "client-3.svg": logo({ glyph: "A", from: "#7C3AED", to: "#5B21B6", seed: 3 }),
  "client-4.svg": logo({ glyph: "P", from: "#0F766E", to: "#115E59", seed: 4 }),
  "client-5.svg": logo({ glyph: "M", from: "#B45309", to: "#92400E", seed: 5 }),
  "client-6.svg": logo({ glyph: "C", from: "#DC2626", to: "#B91C1C", seed: 6 }),
  "blog-1.svg": abstractArt({ w: 1200, h: 800, from: "#101828", to: "#1D2B4A", seed: 10 }),
  "blog-2.svg": abstractArt({ w: 1200, h: 800, from: "#1D2440", to: "#2C3560", seed: 11 }),
  "blog-3.svg": abstractArt({ w: 1200, h: 800, from: "#1B2E26", to: "#28463B", seed: 12 }),
  "cta-background.svg": abstractArt({ w: 1600, h: 900, from: "#0D1B45", to: "#13275E", seed: 13 }),
};

let count = 0;
for (const [name, content] of Object.entries(files)) {
  writeFileSync(join(out, name), content);
  count++;
}
console.log(`Generated ${count} placeholder assets in public/placeholders/`);
