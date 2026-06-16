import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { tokens } from '../theme';
import { waURL, MSG } from '../utils/whatsapp';
import HeroShader from './HeroShader';
import HeroDataField from './HeroDataField';

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
      {/* Campo de datos animado — parte inferior del background, difuminado */}
      <Box aria-hidden sx={{
        position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 0,
        height: { xs: '52%', md: '60%' }, overflow: 'hidden', pointerEvents: 'none', opacity: 0.55,
        maskImage: 'linear-gradient(to top, #000 28%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, #000 28%, transparent 100%)',
      }}>
        <HeroDataField />
      </Box>
      {/* Shader del hero (fetch en runtime desde shaders.com, code-split) */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <HeroShader />
      </Box>

      {/* Scrim de legibilidad — oscurece la izquierda donde va el texto */}
      <Box aria-hidden sx={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `linear-gradient(90deg, ${tokens.bg}f2 0%, ${tokens.bg}b3 42%, ${tokens.bg}33 70%, transparent 100%)`,
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
    </Box>
  );
}
