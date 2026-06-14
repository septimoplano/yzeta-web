import { Box, Container, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { tokens } from '../theme';
import { pasos } from '../data';
import { Reveal } from './Reveal';

const EASE = [0.16, 1, 0.3, 1];

export default function ComoTrabajamos() {
  const reduce = useReducedMotion();

  return (
    <Box id="proceso" component="section" sx={{ py: { xs: 9, md: 14 }, bgcolor: tokens.surface, borderBlock: `1px solid ${tokens.border}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: tokens.text, maxWidth: 680, textWrap: 'balance' }}>
            Cómo trabajamos.
          </Typography>
          <Typography sx={{ mt: 2, color: tokens.muted, fontSize: 18, maxWidth: 540 }}>
            Cuatro pasos claros, de la primera conversación al sitio en vivo.
          </Typography>
        </Reveal>

        <Box sx={{ mt: 7, position: 'relative' }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 3.5 },
          }}>
            {pasos.map((p, i) => (
              <motion.div
                key={p.n}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.12 }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{
                    width: 68, height: 68, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${tokens.border}`, bgcolor: tokens.bg,
                    fontFamily: '"JetBrains Mono", monospace', fontSize: 22, fontWeight: 500,
                    color: tokens.accentY, mb: 2.5, position: 'relative', zIndex: 1,
                  }}>
                    {p.n}
                  </Box>
                  <Typography variant="h5" sx={{ fontSize: 21, color: tokens.text, mb: 1 }}>
                    {p.titulo}
                  </Typography>
                  <Typography sx={{ color: tokens.muted, fontSize: 15, lineHeight: 1.6 }}>
                    {p.texto}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
