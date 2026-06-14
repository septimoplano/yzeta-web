import { Box, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { tokens } from '../theme';
import { waURL } from '../utils/whatsapp';

export default function WhatsAppFloat() {
  return (
    <Tooltip title="Escríbenos por WhatsApp" placement="left" arrow>
      <Box
        component="a"
        href={waURL()}
        target="_blank"
        rel="noopener"
        aria-label="Hablar por WhatsApp"
        sx={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 1200,
          width: 60, height: 60, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          bgcolor: tokens.accentY, color: '#04201b',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          transition: 'transform .25s ease, background-color .25s ease',
          '&:hover': { transform: 'scale(1.08)', bgcolor: tokens.accentZ },
          '&::before': {
            content: '""', position: 'absolute', inset: 0, borderRadius: '50%',
            border: `2px solid ${tokens.accentY}`,
            animation: 'yz-ring 2s ease-in-out infinite',
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30, position: 'relative', zIndex: 1 }} />
      </Box>
    </Tooltip>
  );
}
