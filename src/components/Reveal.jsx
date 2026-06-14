import { motion, useReducedMotion } from 'framer-motion';

// Reveal sobre contenido YA visible: el default no oculta nada estructuralmente.
// Si JS/headless no dispara, el contenido sigue presente (opacity arranca visible
// en reduced-motion). Ease-out exponencial, sin bounce.
const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 24, as = 'div', ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag {...rest}>{children}</Tag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

// Contenedor con stagger para listas de hijos
export function RevealGroup({ children, stagger = 0.1, ...rest }) {
  const reduce = useReducedMotion();
  if (reduce) return <div {...rest}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
