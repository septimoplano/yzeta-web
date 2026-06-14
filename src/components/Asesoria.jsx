import { Box, Container, Typography, Button, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import { tokens } from '../theme';
import { waURL, MSG } from '../utils/whatsapp';
import { Reveal } from './Reveal';

const bullets = [
  'Diagnóstico de tu presencia digital actual',
  'Recomendaciones priorizadas y accionables',
  'Reunión vía Google Meet, agendamiento flexible',
];

export default function Asesoria() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 9 } }}>
      <Container>
        <Reveal>
          <Box sx={{
            position: 'relative', overflow: 'hidden',
            borderRadius: 4, border: `1px solid ${tokens.border}`,
            bgcolor: tokens.surface2,
            p: { xs: 3.5, md: 6 },
          }}>
            {/* acento de esquina, no glassmorphism */}
            <Box aria-hidden sx={{
              position: 'absolute', top: -80, right: -80, width: 280, height: 280, borderRadius: '50%',
              background: `radial-gradient(circle, ${tokens.accentZ}1f 0%, transparent 70%)`,
            }} />
            <Box sx={{ position: 'relative', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' }, gap: { xs: 3, md: 6 }, alignItems: 'center' }}>
              <Box>
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.accentY, fontSize: 13, mb: 2 }}>
                  Primera asesoría — sin costo
                </Typography>
                <Typography variant="h3" sx={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: tokens.text, mb: 2, textWrap: 'balance' }}>
                  ¿No sabes qué necesita tu proyecto?
                </Typography>
                <Typography sx={{ color: tokens.muted, fontSize: 17, lineHeight: 1.6, mb: 3 }}>
                  Una sesión enfocada en tu negocio. Revisamos juntos tu situación digital,
                  identificamos oportunidades y armamos un plan claro que puedas ejecutar la misma semana.
                </Typography>
                <Button
                  size="large" variant="contained" color="primary"
                  href={waURL(MSG.asesoria)} target="_blank" rel="noopener"
                  startIcon={<WhatsAppIcon />}
                >
                  Contáctame por WhatsApp
                </Button>
              </Box>

              <Stack spacing={2}>
                {bullets.map((b) => (
                  <Stack key={b} direction="row" spacing={1.5} alignItems="flex-start"
                    sx={{ p: 2, borderRadius: 2, bgcolor: tokens.bg, border: `1px solid ${tokens.border}` }}>
                    <CheckCircleOutlineIcon sx={{ color: tokens.accentY, fontSize: 22, mt: '1px' }} />
                    <Typography sx={{ color: tokens.text, fontSize: 16 }}>{b}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
