import { Box } from '@mui/material';
import { tokens } from '../theme';

// Grid técnico — mismo lenguaje visual del hero. Profundidad sin ruido.
export function GridField({ size = 56, opacity = 0.5, mask = 'radial-gradient(ellipse 70% 80% at 50% 0%, #000 20%, transparent 100%)', sx }) {
  return (
    <Box aria-hidden sx={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `linear-gradient(${tokens.border} 1px, transparent 1px), linear-gradient(90deg, ${tokens.border} 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
      opacity,
      maskImage: mask,
      WebkitMaskImage: mask,
      ...sx,
    }} />
  );
}

// Corner ticks — marca de plano de ingeniería. "Preciso, técnico, sin humo".
export function CornerTicks({ size = 14, color = tokens.accentY, thickness = 1.5, inset = -1 }) {
  const base = {
    position: 'absolute', width: size, height: size, pointerEvents: 'none',
    borderColor: color, borderStyle: 'solid', borderWidth: 0,
  };
  return (
    <>
      <Box aria-hidden sx={{ ...base, top: inset, left: inset, borderTopWidth: thickness, borderLeftWidth: thickness }} />
      <Box aria-hidden sx={{ ...base, top: inset, right: inset, borderTopWidth: thickness, borderRightWidth: thickness }} />
      <Box aria-hidden sx={{ ...base, bottom: inset, left: inset, borderBottomWidth: thickness, borderLeftWidth: thickness }} />
      <Box aria-hidden sx={{ ...base, bottom: inset, right: inset, borderBottomWidth: thickness, borderRightWidth: thickness }} />
    </>
  );
}
