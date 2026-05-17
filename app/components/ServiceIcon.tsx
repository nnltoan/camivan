'use client';

/**
 * ServiceIcon — 6 SVG icons hand-crafted to represent each Cami Van service.
 * Stroke-based, monochrome (currentColor) so they inherit parent text color
 * for both light + dark mode + gradient orb backgrounds.
 *
 * All icons share a 24×24 viewBox, stroke-width 1.6, rounded line caps for
 * a soft editorial feel that matches Fraunces typography.
 *
 * Pass `className` to size (defaults to w-7 h-7 inside the orb).
 */

type ServiceSlug =
  | 'microblading'
  | 'lip-blush'
  | 'eyeliner'
  | 'mens-pmu'
  | 'noi-mi'
  | 'cham-soc-da';

interface Props {
  slug: string;
  className?: string;
}

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function ServiceIcon({ slug, className = 'w-7 h-7' }: Props) {
  const props = { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', className, ...STROKE };

  switch (slug as ServiceSlug) {
    case 'microblading':
      // Two arched eyebrow strokes with hair-stroke detail above
      return (
        <svg {...props} aria-label="Microblading">
          <path d="M3.5 13c2.5-3 6-4.5 9-4.5s5 1 8 3.5" />
          <path d="M5 10.5l1-1.5M8 9l.6-1.6M11 8l.4-1.8M14 8l.7-1.6M17.5 9l1.2-1.5" opacity="0.7" />
        </svg>
      );

    case 'lip-blush':
      // Stylized lip silhouette — top cupid's bow + bottom curve
      return (
        <svg {...props} aria-label="Lip blush">
          <path d="M3.5 11.5c1-1.8 2.8-2.8 4.5-2.8 1.4 0 2.8.8 4 2 1.2-1.2 2.6-2 4-2 1.7 0 3.5 1 4.5 2.8" />
          <path d="M3.5 11.5c1.5 3.5 4.5 5.5 8.5 5.5s7-2 8.5-5.5" />
          <path d="M9 12.5h6" opacity="0.5" />
        </svg>
      );

    case 'eyeliner':
      // Eye almond with extended winged line on the outer corner
      return (
        <svg {...props} aria-label="Eyeliner">
          <path d="M3 13c2-3 5-4.5 8.5-4.5s6.5 1.5 9.5 4.5" />
          <circle cx="11.5" cy="12" r="2" />
          <path d="M16.5 11l4.5-3" strokeWidth="2" />
        </svg>
      );

    case 'mens-pmu':
      // Bold masculine brow stroke + "M" peak silhouette for men's PMU
      return (
        <svg {...props} aria-label="Men's PMU brows">
          <path d="M3.5 11c2.5-2.5 6-3.5 8.5-3.5s5.5 1 8.5 3.5" strokeWidth="2.2" />
          <path d="M5 9l1-1.5M9 7.5l.6-1.8M13 7.5l.6-1.8M17 8.2l1-1.6" opacity="0.7" />
          <path d="M8 17h2l2-3 2 3h2" strokeWidth="1.4" />
        </svg>
      );

    case 'noi-mi':
      // Eye with radiating lashes (lash extensions)
      return (
        <svg {...props} aria-label="Lash extensions">
          <path d="M3 14c2-3 5-4.5 9-4.5s7 1.5 9 4.5" />
          <circle cx="12" cy="13" r="1.8" />
          <path d="M5 9l-1.2-2M8 7.5l-.5-2.2M12 7l0-2.3M16 7.5l.5-2.2M19 9l1.2-2" />
        </svg>
      );

    case 'cham-soc-da':
      // Water droplet (hydration) with sparkle for "glow"
      return (
        <svg {...props} aria-label="Skin care">
          <path d="M12 3.5c-3 4-5 7-5 9.5a5 5 0 0 0 10 0c0-2.5-2-5.5-5-9.5z" />
          <path d="M9 14a3 3 0 0 0 1.5 2.3" opacity="0.6" />
          <path d="M18 6.5l.6 1.4 1.4.6-1.4.6L18 10.5l-.6-1.4-1.4-.6 1.4-.6z" strokeWidth="1.2" opacity="0.85" />
        </svg>
      );

    default:
      // Fallback — small flower
      return (
        <svg {...props} aria-label="Service">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
        </svg>
      );
  }
}
