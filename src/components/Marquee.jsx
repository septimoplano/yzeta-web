import { Box } from '@mui/material';
import { tokens } from '../theme';
import { marqueeItems } from '../data';

export default function Marquee() {
  const run = [...marqueeItems, ...marqueeItems];
  return (
    <Box
      component="section"
      aria-hidden
      sx={{
        py: { xs: 2.5, md: 3 },
        borderBlock: `1px solid ${tokens.border}`,
        bgcolor: tokens.surface,
        overflow: 'hidden',
        position: 'relative',
        '&::before, &::after': {
          content: '""', position: 'absolute', top: 0, bottom: 0, width: 100, zIndex: 2, pointerEvents: 'none',
        },
        '&::before': { left: 0, background: `linear-gradient(90deg, ${tokens.surface}, transparent)` },
        '&::after': { right: 0, background: `linear-gradient(270deg, ${tokens.surface}, transparent)` },
      }}
    >
      <Box sx={{
        display: 'flex', width: 'max-content',
        animation: 'yz-marquee 28s linear infinite',
        '@media (prefers-reduced-motion: reduce)': { animation: 'none', flexWrap: 'wrap', justifyContent: 'center' },
      }}>
        {run.map((item, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Box component="span" sx={{
              fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700,
              fontSize: { xs: 18, md: 24 }, color: tokens.text, px: 2.5,
            }}>
              {item}
            </Box>
            <Box component="span" sx={{ color: tokens.accentY, fontSize: 20 }}>·</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
