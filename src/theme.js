import { createTheme } from '@mui/material/styles';

// YZETA — paleta de marca (drenched near-black + teal técnico)
export const tokens = {
  bg: '#080c10',
  surface: '#0f1419',
  surface2: '#161d25',
  accentY: '#5eead4',
  accentZ: '#2dd4bf',
  text: '#f0f4f8',
  // muted subido desde #6b7a8d para contraste de cuerpo (>=4.5:1 sobre bg)
  muted: '#9aabbd',
  faint: '#6b7a8d',
  border: '#1e2a38',
  borderSoft: '#161d25',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: tokens.accentY, dark: tokens.accentZ, contrastText: '#04201b' },
    secondary: { main: tokens.accentZ },
    background: { default: tokens.bg, paper: tokens.surface },
    text: { primary: tokens.text, secondary: tokens.muted },
    divider: tokens.border,
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    htmlFontSize: 16,
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.02 },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.06 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.01em' },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    button: { fontWeight: 600, letterSpacing: 0 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.6 },
    overline: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'none' },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': { backgroundColor: tokens.bg },
        '::selection': { background: tokens.accentY, color: '#04201b' },
        body: { WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 8, paddingInline: 22, paddingBlock: 11 },
        containedPrimary: {
          color: '#04201b',
          fontWeight: 700,
          '&:hover': { backgroundColor: tokens.accentZ },
        },
        outlined: {
          borderColor: tokens.border,
          color: tokens.text,
          '&:hover': { borderColor: tokens.accentY, backgroundColor: 'rgba(94,234,212,0.06)' },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundColor: tokens.surface, border: `1px solid ${tokens.border}`, borderRadius: 12 },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
    },
    MuiLink: {
      defaultProps: { underline: 'none' },
      styleOverrides: { root: { color: tokens.text } },
    },
  },
});
