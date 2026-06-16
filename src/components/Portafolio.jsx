import { Box, Container, Typography, Stack } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { tokens } from '../theme';
import { proyectos } from '../data';
import { Reveal } from './Reveal';

const EASE = [0.16, 1, 0.3, 1];

function Placeholder({ nombre }) {
  return (
    <Box sx={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: `repeating-linear-gradient(135deg, ${tokens.surface2} 0 18px, ${tokens.surface} 18px 36px)`,
    }}>
      <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.accentY, fontSize: 20, fontWeight: 500 }}>
        {nombre}
      </Typography>
    </Box>
  );
}

export default function Portafolio() {
  const reduce = useReducedMotion();

  return (
    <Box id="portafolio" component="section" sx={{ py: { xs: 9, md: 14 }, bgcolor: tokens.surface, borderBlock: `1px solid ${tokens.border}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: tokens.text, maxWidth: 680, textWrap: 'balance' }}>
            Trabajo que ya está en vivo.
          </Typography>
          <Typography sx={{ mt: 2, color: tokens.muted, fontSize: 18, maxWidth: 540 }}>
            Sitios reales, funcionando hoy. Entra y revísalos tú mismo.
          </Typography>
        </Reveal>

        <Box sx={{
          mt: 6,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 2.5,
        }}>
          {proyectos.map((p, i) => (
            <motion.div
              key={p.nombre}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
            >
              <Box
                component="a"
                href={p.url}
                target="_blank"
                rel="noopener"
                sx={{
                  display: 'block', borderRadius: 3, overflow: 'hidden',
                  border: `1px solid ${tokens.border}`, bgcolor: tokens.bg,
                  textDecoration: 'none', height: '100%',
                  transition: 'border-color .3s ease, transform .3s ease',
                  '&:hover': { borderColor: tokens.accentY, transform: 'translateY(-6px)', boxShadow: `0 20px 48px rgba(0,0,0,0.45)` },
                  '&:hover .yz-thumb': { transform: reduce ? 'none' : 'scale(1.05)' },
                  '&:hover .yz-go': { color: tokens.accentY, transform: reduce ? 'none' : 'translate(3px,-3px)' },
                  '&:hover .yz-veil': { opacity: 1 },
                }}
              >
                <Box sx={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
                  {p.img ? (
                    <Box
                      className="yz-thumb"
                      component="img"
                      src={p.img}
                      alt={`Sitio web de ${p.nombre}`}
                      loading="lazy"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform .5s ease' }}
                    />
                  ) : (
                    <Placeholder nombre={p.nombre} />
                  )}
                  {/* overlay gradiente al hover */}
                  <Box className="yz-veil" aria-hidden sx={{
                    position: 'absolute', inset: 0, opacity: 0, transition: 'opacity .35s ease',
                    background: `linear-gradient(180deg, transparent 40%, ${tokens.bg}cc)`,
                  }} />
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.faint, fontSize: 12, mb: 1 }}>
                    {p.rubro}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="h5" sx={{ fontSize: 22, color: tokens.text }}>
                      {p.nombre}
                    </Typography>
                    <ArrowOutwardIcon className="yz-go" sx={{ color: tokens.muted, fontSize: 22, transition: 'color .3s ease, transform .3s ease' }} />
                  </Stack>
                  <Typography sx={{ color: tokens.muted, fontSize: 15, lineHeight: 1.6 }}>
                    {p.descripcion}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
