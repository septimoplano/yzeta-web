import { Box, Container, Typography, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { tokens } from '../theme';
import { waURL, MSG } from '../utils/whatsapp';
import { Reveal } from './Reveal';

export default function CTA() {
  return (
    <Box id="contacto" component="section" sx={{ py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}>
      <Box aria-hidden sx={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 50% 120%, ${tokens.accentZ}26 0%, transparent 55%)`,
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
        </Reveal>
      </Container>
    </Box>
  );
}
