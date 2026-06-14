import { Box, Container, Typography, Button, Stack, Link as MuiLink } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { tokens } from '../theme';
import { waURL, MSG } from '../utils/whatsapp';
import { EMAIL, PHONE_DISPLAY } from '../data';
import { Reveal } from './Reveal';
import { GridField } from './brand';

export default function CTA() {
  return (
    <Box id="contacto" component="section" sx={{ py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}>
      <GridField size={56} opacity={0.3} mask="radial-gradient(ellipse 70% 80% at 50% 50%, #000 0%, transparent 70%)" />
      <Box aria-hidden sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle at 50% 120%, ${tokens.accentZ}2e 0%, transparent 55%)`,
      }} />
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        <Reveal>
          <Typography variant="h2" sx={{
            fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', color: tokens.text,
            maxWidth: 820, mx: 'auto', textWrap: 'balance',
          }}>
            ¿Listo para que tu negocio aparezca en Google?
          </Typography>
          <Typography sx={{ mt: 3, color: tokens.muted, fontSize: 19, maxWidth: 560, mx: 'auto' }}>
            Sin contratos largos. Precio fijo. Hablemos de tu proyecto hoy.
          </Typography>
          <Button
            size="large" variant="contained" color="primary"
            href={waURL(MSG.asesoria)} target="_blank" rel="noopener"
            startIcon={<WhatsAppIcon />}
            sx={{ mt: 5, px: 4, py: 1.5, fontSize: 17 }}
          >
            Agendar asesoría gratuita
          </Button>

          <Stack
            direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 4 }}
            justifyContent="center" alignItems="center"
            sx={{ mt: 4, mx: 'auto', width: 'fit-content', fontFamily: '"JetBrains Mono", monospace', fontSize: 14 }}
          >
            <MuiLink href={`mailto:${EMAIL}`} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: tokens.muted, '&:hover': { color: tokens.accentY } }}>
              <MailOutlinedIcon sx={{ fontSize: 17 }} /> {EMAIL}
            </MuiLink>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'block' }, color: tokens.border }}>|</Box>
            <MuiLink href={waURL()} target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: tokens.muted, '&:hover': { color: tokens.accentY } }}>
              <WhatsAppIcon sx={{ fontSize: 17 }} /> {PHONE_DISPLAY}
            </MuiLink>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}
