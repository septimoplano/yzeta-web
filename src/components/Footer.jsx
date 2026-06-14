import { Box, Container, Typography, Stack, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/MailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { tokens } from '../theme';
import { EMAIL, PHONE_DISPLAY } from '../data';
import { waURL } from '../utils/whatsapp';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Cómo trabajamos', href: '#proceso' },
];

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box component="footer" sx={{ position: 'relative', overflow: 'hidden', bgcolor: tokens.surface, borderTop: `1px solid ${tokens.border}`, pt: { xs: 6, md: 8 }, pb: 4 }}>
      {/* Watermark de marca */}
      <Box aria-hidden sx={{
        position: 'absolute', left: '50%', bottom: { xs: -18, md: -42 }, transform: 'translateX(-50%)',
        fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700,
        fontSize: 'clamp(5rem, 22vw, 18rem)', lineHeight: 1, letterSpacing: '-0.04em',
        color: tokens.text, opacity: 0.025, whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none',
      }}>
        YZETA
      </Box>
      <Container sx={{ position: 'relative' }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1.4fr 1fr 1fr' },
          gap: { xs: 4, md: 6 },
        }}>
          <Box>
            <Box component="img" src="/assets/logo.png" alt="YZETA Consultora Digital" sx={{ height: 28, mb: 2 }} />
            <Typography sx={{ color: tokens.muted, fontSize: 15, maxWidth: 320, lineHeight: 1.6 }}>
              Consultora digital en Concepción. Desarrollo web con resultados reales para el Gran Conce.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.faint, fontSize: 12, mb: 2 }}>
              Navegación
            </Typography>
            <Stack spacing={1.2}>
              {navLinks.map((l) => (
                <MuiLink key={l.href} href={l.href} onClick={(e) => go(e, l.href)}
                  sx={{ color: tokens.muted, fontSize: 15, '&:hover': { color: tokens.accentY } }}>
                  {l.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.faint, fontSize: 12, mb: 2 }}>
              Contacto
            </Typography>
            <Stack spacing={1.4}>
              <MuiLink href={`mailto:${EMAIL}`} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: tokens.muted, fontSize: 15, '&:hover': { color: tokens.accentY } }}>
                <EmailIcon sx={{ fontSize: 18 }} /> {EMAIL}
              </MuiLink>
              <MuiLink href={waURL()} target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: tokens.muted, fontSize: 15, '&:hover': { color: tokens.accentY } }}>
                <WhatsAppIcon sx={{ fontSize: 18 }} /> {PHONE_DISPLAY}
              </MuiLink>
            </Stack>
          </Box>
        </Box>

        <Box sx={{
          mt: { xs: 5, md: 7 }, pt: 3, borderTop: `1px solid ${tokens.border}`,
          display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2,
          justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' },
        }}>
          <Typography sx={{ color: tokens.faint, fontSize: 13 }}>
            © {new Date().getFullYear()} YZETA Consultora Digital
          </Typography>
          <Stack direction="row" spacing={3}>
            <MuiLink component={RouterLink} to="/terminos" sx={{ color: tokens.faint, fontSize: 13, '&:hover': { color: tokens.text } }}>
              Términos y condiciones
            </MuiLink>
            <MuiLink component={RouterLink} to="/privacidad" sx={{ color: tokens.faint, fontSize: 13, '&:hover': { color: tokens.text } }}>
              Política de privacidad
            </MuiLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
