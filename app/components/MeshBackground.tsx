'use client';

/**
 * MeshBackground — fixed full-viewport gradient mesh, drifts slowly.
 * - Pure CSS (no JS animation work).
 * - Disabled by `prefers-reduced-motion` via the global rule in globals.css.
 * - z -10 so all content sits above; pointer-events none.
 */

export default function MeshBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 opacity-50 pointer-events-none animate-mesh-drift"
      style={{
        background: [
          'radial-gradient(circle at 20% 25%, #FDF5E6 0%, transparent 45%)',
          'radial-gradient(circle at 80% 15%, #F5EBDC 0%, transparent 50%)',
          'radial-gradient(circle at 65% 80%, rgba(205, 133, 63, 0.18) 0%, transparent 55%)',
          'radial-gradient(circle at 30% 75%, rgba(139, 69, 19, 0.10) 0%, transparent 50%)',
        ].join(', '),
      }}
    />
  );
}
