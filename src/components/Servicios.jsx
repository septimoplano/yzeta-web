import { Box, Container, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { tokens } from '../theme';
import { servicios } from '../data';
import { waURL, MSG } from '../utils/whatsapp';
import { Reveal } from './Reveal';
import HeroDataField from './HeroDataField';

const EASE = [0.16, 1, 0.3, 1];
const clp = (n) => '$' + n.toLocaleString('es-CL');

export default function Servicios() {
  const reduce = useReducedMotion();

  return (
    <Box id="servicios" component="section" sx={{ position: 'relative', overflow: 'hidden', py: { xs: 9, md: 14 } }}>
      {/* Campo de datos en la parte superior — continua el stream del hero, difuminado hacia abajo */}
      <Box aria-hidden sx={{
        position: 'absolute', left: 0, right: 0, top: 0, zIndex: 0,
        height: { xs: 150, md: 230 }, overflow: 'hidden', pointerEvents: 'none', opacity: 0.5,
        maskImage: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
      }}>
        <HeroDataField />
      </Box>
      <Container sx={{ position: 'relative' }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: tokens.text, maxWidth: 720, textWrap: 'balance' }}>
            Tres formas de poner tu negocio online.
          </Typography>
          <Typography sx={{ mt: 2, color: tokens.muted, fontSize: 18, maxWidth: 560 }}>
            Precio fijo. Sin letra chica. Eliges lo que tu negocio necesita hoy.
          </Typography>
        </Reveal>

        <Box sx={{
          mt: 6,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 2.5,
          alignItems: 'stretch',
        }}>
          {servicios.map((s, i) => (
            <motion.div
              key={s.id}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              style={{ display: 'flex' }}
            >
              <Card sx={{
                display: 'flex', flexDirection: 'column', width: '100%',
                borderColor: s.popular ? tokens.accentY : tokens.border,
                bgcolor: s.popular ? tokens.surface2 : tokens.surface,
                boxShadow: s.popular ? `0 0 40px ${tokens.accentZ}1f` : 'none',
                position: 'relative',
                transition: 'transform .3s ease, border-color .3s ease, box-shadow .3s ease',
                '&:hover': { transform: 'translateY(-6px)', borderColor: tokens.accentY, boxShadow: `0 20px 48px rgba(0,0,0,0.4), 0 0 32px ${tokens.accentZ}1f` },
              }}>
                <CardContent sx={{ p: 3.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Stack direction="row" justifyContent="flex-end" alignItems="center" sx={{ mb: 1, minHeight: 24 }}>
                    {s.popular && (
                      <Chip label="Más elegido" size="small"
                        sx={{ bgcolor: tokens.accentY, color: '#04201b', fontWeight: 700, fontSize: 12 }} />
                    )}
                  </Stack>

                  <Typography variant="h5" sx={{ fontSize: 22, color: tokens.text, mb: 1.5 }}>
                    {s.nombre}
                  </Typography>

                  <Typography sx={{
                    fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700,
                    fontSize: 34, color: s.popular ? tokens.accentY : tokens.text, mb: 2,
                  }}>
                    {clp(s.precio)}
                  </Typography>

                  <Typography sx={{ color: tokens.muted, fontSize: 15, mb: 3, lineHeight: 1.6 }}>
                    {s.descripcion}
                  </Typography>

                  <Stack spacing={1.2} sx={{ mb: 3.5 }}>
                    {s.incluye.map((f) => (
                      <Stack key={f} direction="row" spacing={1.2} alignItems="center">
                        <CheckIcon sx={{ fontSize: 18, color: tokens.accentY }} />
                        <Typography sx={{ color: tokens.text, fontSize: 15 }}>{f}</Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Button
                    variant={s.popular ? 'contained' : 'outlined'}
                    color="primary"
                    href={waURL(MSG.servicio(s.nombre))} target="_blank" rel="noopener"
                    startIcon={<WhatsAppIcon />}
                    sx={{ mt: 'auto' }}
                    fullWidth
                  >
                    Lo quiero
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        <Reveal delay={0.1}>
          <Typography sx={{
            mt: 3, fontFamily: '"JetBrains Mono", monospace', fontSize: 13,
            color: tokens.faint, lineHeight: 1.7,
          }}>
            Dominio incluido el primer año. Mantención mensual desde{' '}
            <Box component="span" sx={{ color: tokens.muted }}>$35.000</Box>{' '}
            a partir del segundo mes.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}
