import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { tokens } from '../theme';
import { ventajas } from '../data';
import { Reveal, RevealGroup, itemVariants } from './Reveal';
import { GridField, CornerTicks } from './brand';

const ICONS = [SupportAgentOutlinedIcon, PlaceOutlinedIcon, BoltOutlinedIcon];

export default function PorQueYZETA() {
  return (
    <Box component="section" sx={{ position: 'relative', overflow: 'hidden', py: { xs: 9, md: 14 } }}>
      <GridField size={56} opacity={0.35} mask="radial-gradient(ellipse 60% 80% at 95% 30%, #000 0%, transparent 70%)" />

      <Container sx={{ position: 'relative' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.92fr 1.08fr' }, gap: { xs: 5, md: 8 } }}>
          {/* Statement */}
          <Reveal>
            <Box>
              <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.accentY, fontSize: 13, mb: 2 }}>
                Por qué YZETA
              </Typography>
              <Typography variant="h2" sx={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: tokens.text, textWrap: 'balance', mb: 3 }}>
                Una consultora.{' '}
                <Box component="span" sx={{ color: tokens.muted }}>Nunca una agencia.</Box>
              </Typography>
              <Typography sx={{ color: tokens.muted, fontSize: 17, lineHeight: 1.7, mb: 4, maxWidth: '60ch' }}>
                Te decimos qué necesitas y qué no — aunque sea menos de lo que pensabas contratar.
              </Typography>

              {/* Bloque manifiesto — marca de plano técnico */}
              <Box sx={{
                position: 'relative', p: { xs: 3, md: 3.5 },
                bgcolor: tokens.surface2, border: `1px solid ${tokens.border}`, borderRadius: 2,
              }}>
                <CornerTicks size={14} />
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.accentY, fontSize: 12, mb: 1.5 }}>
                  // manifiesto
                </Typography>
                <Typography sx={{
                  fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700,
                  fontSize: { xs: 20, md: 23 }, color: tokens.text, lineHeight: 1.3, textWrap: 'balance',
                }}>
                  No vendemos páginas web. Vendemos el resultado que esa página produce.
                </Typography>
              </Box>
            </Box>
          </Reveal>

          {/* Ventajas */}
          <RevealGroup stagger={0.12}>
            <Stack spacing={2}>
              {ventajas.map((v, i) => {
                const Icon = ICONS[i];
                return (
                  <motion.div key={v.titulo} variants={itemVariants}>
                    <Box sx={{
                      position: 'relative',
                      display: 'grid', gridTemplateColumns: '56px 1fr', gap: 2.5, alignItems: 'start',
                      p: 2.5, borderRadius: 2, border: `1px solid ${tokens.border}`, bgcolor: tokens.surface,
                      transition: 'border-color .3s ease, background-color .3s ease, transform .3s ease',
                      '&:hover': {
                        borderColor: tokens.accentY, bgcolor: tokens.surface2, transform: 'translateX(4px)',
                      },
                      '&:hover .yz-icon': { borderColor: tokens.accentY, boxShadow: `0 0 20px ${tokens.accentZ}33` },
                    }}>
                      <Box className="yz-icon" sx={{
                        width: 56, height: 56, borderRadius: 1.5,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: `1px solid ${tokens.border}`, bgcolor: tokens.bg,
                        transition: 'border-color .3s ease, box-shadow .3s ease',
                      }}>
                        <Icon sx={{ color: tokens.accentY, fontSize: 26 }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.faint, fontSize: 12, mb: 0.5 }}>
                          [ 0{i + 1} ]
                        </Typography>
                        <Typography variant="h5" sx={{ fontSize: 21, color: tokens.text, mb: 0.6 }}>
                          {v.titulo}
                        </Typography>
                        <Typography sx={{ color: tokens.muted, fontSize: 15.5, lineHeight: 1.6 }}>
                          {v.texto}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                );
              })}
            </Stack>
          </RevealGroup>
        </Box>
      </Container>
    </Box>
  );
}
