import { Box, Container, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { tokens } from '../theme';
import { pasos } from '../data';
import { Reveal } from './Reveal';
import { GridField } from './brand';

const EASE = [0.16, 1, 0.3, 1];
const NODE = 56;

export default function ComoTrabajamos() {
  const reduce = useReducedMotion();

  return (
    <Box id="proceso" component="section" sx={{
      position: 'relative', overflow: 'hidden',
      py: { xs: 9, md: 14 }, bgcolor: tokens.surface, borderBlock: `1px solid ${tokens.border}`,
    }}>
      <GridField size={56} opacity={0.4} mask="radial-gradient(ellipse 90% 70% at 70% 10%, #000 10%, transparent 80%)" />

      <Container sx={{ position: 'relative' }}>
        <Reveal>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, flexWrap: 'wrap', mb: 2 }}>
            <Typography variant="h2" sx={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: tokens.text, textWrap: 'balance' }}>
              Cómo trabajamos.
            </Typography>
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, color: tokens.faint, whiteSpace: 'nowrap' }}>
              [ 4 pasos ]
            </Typography>
          </Box>
          <Typography sx={{ color: tokens.muted, fontSize: 18, maxWidth: 540 }}>
            Cuatro pasos claros, de la primera conversación al sitio en vivo.
          </Typography>
        </Reveal>

        <Box sx={{
          mt: { xs: 6, md: 8 }, position: 'relative',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          columnGap: 3.5, rowGap: 5,
        }}>
          {/* Spine vertical — móvil */}
          <Box
            aria-hidden
            component={motion.div}
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={reduce ? {} : { scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: EASE }}
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'absolute', left: NODE / 2 - 1, top: NODE / 2, bottom: NODE / 2, width: 2,
              transformOrigin: 'top',
              background: `linear-gradient(${tokens.accentZ}, ${tokens.border})`,
            }}
          />

          {pasos.map((p, i) => (
            <Box key={p.n} sx={{ position: 'relative' }}>
              {/* Conector horizontal — desktop, por segmento entre nodos */}
              {i < pasos.length - 1 && (
                <Box
                  aria-hidden
                  component={motion.div}
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={reduce ? {} : { scaleX: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.12 }}
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute', top: NODE / 2 - 1, left: NODE / 2,
                    width: 'calc(100% + 28px)', height: 2, transformOrigin: 'left',
                    background: `linear-gradient(90deg, ${tokens.accentZ}, ${tokens.accentZ}40)`,
                    zIndex: 0,
                  }}
                />
              )}

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.12 }}
              >
                <Box
                  sx={{
                    width: NODE, height: NODE, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${tokens.border}`, bgcolor: tokens.bg,
                    fontFamily: '"JetBrains Mono", monospace', fontSize: 19, fontWeight: 500,
                    color: tokens.accentY, mb: 3, position: 'relative', zIndex: 1,
                    transition: 'border-color .3s ease, box-shadow .3s ease, transform .3s ease',
                    '&:hover': {
                      borderColor: tokens.accentY,
                      boxShadow: `0 0 0 4px ${tokens.accentY}14, 0 0 24px ${tokens.accentZ}33`,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {p.n}
                  <Box aria-hidden sx={{
                    position: 'absolute', inset: -1, borderRadius: '50%',
                    border: `1px solid ${tokens.accentZ}`, opacity: 0.35,
                  }} />
                </Box>
                <Typography variant="h5" sx={{ fontSize: 21, color: tokens.text, mb: 1 }}>
                  {p.titulo}
                </Typography>
                <Typography sx={{ color: tokens.muted, fontSize: 15, lineHeight: 1.6, maxWidth: 260 }}>
                  {p.texto}
                </Typography>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
