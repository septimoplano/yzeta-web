import { lazy, Suspense } from 'react';
import { useReducedMotion } from 'framer-motion';

// Code-split: pixi.js + shaders es pesado, fuera del bundle principal.
const Preview = lazy(() =>
  import('shaders/react').then((m) => ({ default: m.Preview })),
);

const SHADER_ID = '16b8d002-b295-4b3e-9356-7c72990f9b45';

// Desactivado hasta tener licencia de shaders.com. Poner true para reactivar.
const ENABLED = false;

export default function HeroShader() {
  const reduce = useReducedMotion();
  // Oculto sin licencia + respeta reduced-motion. Fallback: grid del hero.
  if (!ENABLED || reduce) return null;

  return (
    <Suspense fallback={null}>
      <Preview
        shader={SHADER_ID}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </Suspense>
  );
}
