import { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { tokens } from '../theme';
import Footer from '../components/Footer';

export default function LegalLayout({ title, updated, children }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Box sx={{ bgcolor: tokens.bg, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ borderBottom: `1px solid ${tokens.border}`, py: 2 }}>
        <Container>
          <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />}
            sx={{ color: tokens.muted, '&:hover': { color: tokens.text, bgcolor: 'transparent' } }}>
            Volver al inicio
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 6, md: 9 }, flex: 1, maxWidth: '820px !important' }}>
        <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.accentY, fontSize: 13, mb: 2 }}>
          Legal
        </Typography>
        <Typography variant="h2" sx={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: tokens.text, mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ color: tokens.faint, fontSize: 14, mb: 5 }}>
          Última actualización: {updated}
        </Typography>
        <Box sx={{
          '& h3': { fontFamily: '"Space Grotesk", sans-serif', color: tokens.text, fontSize: 22, mt: 5, mb: 1.5 },
          '& p': { color: tokens.muted, fontSize: 16, lineHeight: 1.7, mb: 2, maxWidth: '70ch' },
          '& a': { color: tokens.accentY },
        }}>
          {children}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
