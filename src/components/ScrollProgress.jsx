import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { tokens } from '../theme';

// Barra de progreso de scroll — señal premium, discreta, en clave de marca.
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX: reduce ? scrollYProgress : scaleX,
        transformOrigin: 'left',
        position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 1300,
        background: `linear-gradient(90deg, ${tokens.accentZ}, ${tokens.accentY})`,
      }}
    />
  );
}
