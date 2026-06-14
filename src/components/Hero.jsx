import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { tokens } from '../theme';
import { waURL, MSG } from '../utils/whatsapp';

const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay) => reduce
    ? {}
    : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: EASE, delay } };

  const scrollToServicios = () =>
    document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box
      id="top"
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: '92vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 12, md: 0 },
      }}
    >
      {/* Grid técnico de fondo */}
      <Box aria-hidden sx={{
        position: 'absolute', inset: '-40px 0',
        backgroundImage: `linear-gradient(${tokens.border} 1px, transparent 1px), linear-gradient(90deg, ${tokens.border} 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        opacity: 0.35,
        maskImage: 'radial-gradient(ellipse 80% 70% at 30% 40%, #000 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 30% 40%, #000 30%, transparent 100%)',
        animation: reduce ? 'none' : 'yz-grid-drift 8s linear infinite alternate',
      }} />
      {/* Halo teal sutil, no glow SaaS — direccional y tenue */}
      <Box aria-hidden sx={{
        position: 'absolute', top: '8%', right: '-10%',
        width: 520, height: 520, borderRadius: '50%',
        background: `radial-gradient(circle, ${tokens.accentZ}22 0%, transparent 65%)`,
        filter: 'blur(8px)', pointerEvents: 'none',
      }} />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 880 }}>
          <motion.div {...rise(0.1)}>
            <Typography variant="h1" sx={{
              fontSize: 'clamp(2.6rem, 7vw, 5.2rem)',
              color: tokens.text,
              textWrap: 'balance',
            }}>
              Tu negocio en digital.{' '}
              <Box component="span" sx={{ color: tokens.accentY }}>Sin excusas.</Box>
            </Typography>
          </motion.div>

          <motion.div {...rise(0.2)}>
            <Typography sx={{
              mt: 3, fontSize: { xs: 17, md: 20 }, color: tokens.muted,
              maxWidth: 620, lineHeight: 1.6, textWrap: 'pretty',
            }}>
              Desarrollo web para empresas del Gran Conce que quieren resultados reales.
              Sitios, agendamiento y tiendas online. Precio fijo, sin humo.
            </Typography>
          </motion.div>

          <motion.div {...rise(0.32)}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.8} sx={{ mt: 5 }}>
              <Button
                size="large" variant="contained" color="primary"
                href={waURL(MSG.asesoria)} target="_blank" rel="noopener"
                startIcon={<WhatsAppIcon />}
              >
                Agendar asesoría gratuita
              </Button>
              <Button
                size="large" variant="outlined"
                onClick={scrollToServicios}
                endIcon={<ArrowDownwardIcon />}
              >
                Ver servicios
              </Button>
            </Stack>
          </motion.div>

          <motion.div {...rise(0.46)}>
            <Stack
              direction="row" flexWrap="wrap"
              divider={<Box component="span" sx={{ color: tokens.accentY }}>·</Box>}
              spacing={2}
              sx={{
                mt: 5, fontFamily: '"JetBrains Mono", monospace', fontSize: 13,
                color: tokens.faint, rowGap: 1,
              }}
            >
              {['Concepción · Gran Conce', '5–10 días hábiles', 'Precio fijo'].map((t) => (
                <Box component="span" key={t}>{t}</Box>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Container>

      {/* Marca de registro — coordenada de Concepción. Local + técnico. */}
      <Box aria-hidden sx={{
        display: { xs: 'none', md: 'block' },
        position: 'absolute', bottom: 28, right: 32, zIndex: 1,
        fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: tokens.faint, opacity: 0.7,
        letterSpacing: '0.05em',
      }}>
        36.83°S · 73.05°W
      </Box>

      {/* Indicador de scroll */}
      <Box aria-hidden sx={{
        display: { xs: 'none', md: 'flex' },
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 1,
        flexDirection: 'column', alignItems: 'center', gap: 1,
      }}>
        <Box component="span" sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: tokens.faint, letterSpacing: '0.15em' }}>
          SCROLL
        </Box>
        <Box sx={{ position: 'relative', width: 1, height: 36, bgcolor: tokens.border, overflow: 'hidden' }}>
          <Box sx={{
            position: 'absolute', top: 0, left: 0, width: 1, height: 12, bgcolor: tokens.accentY,
            animation: reduce ? 'none' : 'yz-scrollcue 1.8s ease-in-out infinite',
          }} />
        </Box>
      </Box>

      {/* Fade hacia la siguiente sección */}
      <Box aria-hidden sx={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: `linear-gradient(transparent, ${tokens.bg})`, pointerEvents: 'none',
      }} />
    </Box>
  );
}
