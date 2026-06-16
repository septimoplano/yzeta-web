import { lazy, Suspense } from 'react';
import { useReducedMotion } from 'framer-motion';

// Code-split: pixi.js + shaders es pesado, fuera del bundle principal.
const Preview = lazy(() =>
  import('shaders/react').then((m) => ({ default: m.Preview })),
);

const SHADER_ID = '16b8d002-b295-4b3e-9356-7c72990f9b45';

export default function HeroShader() {
  const reduce = useReducedMotion();
  // Respeta reduced-motion: sin shader animado, queda el grid de fallback.
  if (reduce) return null;

  return (
    <Suspense fallback={null}>
      <Preview
        shader={SHADER_ID}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </Suspense>
  );
}
