// src/utils/flags.ts
// Proveedor universal de banderas vectoriales SVG para todos los sistemas operativos (Windows, Mac, Linux, etc.)

export const COUNTRY_SVGS: Record<string, string> = {
  colombia: `<svg class="flag-svg" viewBox="0 0 900 600" aria-label="Bandera de Colombia"><rect width="900" height="300" fill="#FCD116"/><rect y="300" width="900" height="150" fill="#003893"/><rect y="450" width="900" height="150" fill="#CE1126"/></svg>`,
  
  "republica dominicana": `<svg class="flag-svg" viewBox="0 0 900 600" aria-label="Bandera de República Dominicana"><rect width="900" height="600" fill="#FFFFFF"/><rect width="400" height="250" fill="#002D62"/><rect x="500" width="400" height="250" fill="#CE1126"/><rect y="350" width="400" height="250" fill="#CE1126"/><rect x="500" y="350" width="400" height="250" fill="#002D62"/><rect x="400" width="100" height="600" fill="#FFFFFF"/><rect y="250" width="900" height="100" fill="#FFFFFF"/></svg>`,
  "república dominicana": `<svg class="flag-svg" viewBox="0 0 900 600" aria-label="Bandera de República Dominicana"><rect width="900" height="600" fill="#FFFFFF"/><rect width="400" height="250" fill="#002D62"/><rect x="500" width="400" height="250" fill="#CE1126"/><rect y="350" width="400" height="250" fill="#CE1126"/><rect x="500" y="350" width="400" height="250" fill="#002D62"/><rect x="400" width="100" height="600" fill="#FFFFFF"/><rect y="250" width="900" height="100" fill="#FFFFFF"/></svg>`,
  dominicana: `<svg class="flag-svg" viewBox="0 0 900 600" aria-label="Bandera de República Dominicana"><rect width="900" height="600" fill="#FFFFFF"/><rect width="400" height="250" fill="#002D62"/><rect x="500" width="400" height="250" fill="#CE1126"/><rect y="350" width="400" height="250" fill="#CE1126"/><rect x="500" y="350" width="400" height="250" fill="#002D62"/><rect x="400" width="100" height="600" fill="#FFFFFF"/><rect y="250" width="900" height="100" fill="#FFFFFF"/></svg>`,

  mexico: `<svg class="flag-svg" viewBox="0 0 900 600" aria-label="Bandera de México"><rect width="300" height="600" fill="#006847"/><rect x="300" width="300" height="600" fill="#FFFFFF"/><rect x="600" width="300" height="600" fill="#CE1126"/><circle cx="450" cy="300" r="45" fill="#8B5A2B" opacity="0.85"/><circle cx="450" cy="295" r="30" fill="#006847" opacity="0.65"/></svg>`,
  méxico: `<svg class="flag-svg" viewBox="0 0 900 600" aria-label="Bandera de México"><rect width="300" height="600" fill="#006847"/><rect x="300" width="300" height="600" fill="#FFFFFF"/><rect x="600" width="300" height="600" fill="#CE1126"/><circle cx="450" cy="300" r="45" fill="#8B5A2B" opacity="0.85"/><circle cx="450" cy="295" r="30" fill="#006847" opacity="0.65"/></svg>`,

  "puerto rico": `<svg class="flag-svg" viewBox="0 0 900 600" aria-label="Bandera de Puerto Rico"><rect width="900" height="120" fill="#ED0000"/><rect y="120" width="900" height="120" fill="#FFFFFF"/><rect y="240" width="900" height="120" fill="#ED0000"/><rect y="360" width="900" height="120" fill="#FFFFFF"/><rect y="480" width="900" height="120" fill="#ED0000"/><polygon points="0,0 420,300 0,600" fill="#0050F0"/><polygon points="140,210 156,260 210,260 166,290 183,340 140,310 97,340 114,290 70,260 124,260" fill="#FFFFFF"/></svg>`,

  china: `<svg class="flag-svg" viewBox="0 0 900 600" aria-label="Bandera de China"><rect width="900" height="600" fill="#DE2910"/><polygon points="150,90 168,144 225,144 179,177 197,231 150,198 103,231 121,177 75,144 132,144" fill="#FFDE00"/><circle cx="300" cy="60" r="15" fill="#FFDE00"/><circle cx="360" cy="120" r="15" fill="#FFDE00"/><circle cx="360" cy="210" r="15" fill="#FFDE00"/><circle cx="300" cy="270" r="15" fill="#FFDE00"/></svg>`,

  incognito: `<div class="flag-svg-incognito">?</div>`,
  incógnito: `<div class="flag-svg-incognito">?</div>`
};

export function getCountryFlagSvg(country: string = '', fallbackEmoji: string = ''): string {
  const key = country.trim().toLowerCase();
  if (COUNTRY_SVGS[key]) {
    return COUNTRY_SVGS[key];
  }
  // Mapear por emoji
  if (fallbackEmoji === '🇨🇴') return COUNTRY_SVGS['colombia'];
  if (fallbackEmoji === '🇩🇴') return COUNTRY_SVGS['republica dominicana'];
  if (fallbackEmoji === '🇲🇽') return COUNTRY_SVGS['mexico'];
  if (fallbackEmoji === '🇵🇷') return COUNTRY_SVGS['puerto rico'];
  if (fallbackEmoji === '🇨🇳') return COUNTRY_SVGS['china'];
  if (fallbackEmoji === '❓') return COUNTRY_SVGS['incognito'];

  return fallbackEmoji || '';
}
