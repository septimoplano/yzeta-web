import { Box, Container, Typography, Stack } from '@mui/material';
import { tokens } from '../theme';
import { ventajas } from '../data';
import { Reveal, RevealGroup, itemVariants } from './Reveal';
import { motion } from 'framer-motion';

export default function PorQueYZETA() {
  return (
    <Box component="section" sx={{ py: { xs: 9, md: 14 } }}>
      <Container>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' }, gap: { xs: 5, md: 8 } }}>
          <Reveal>
            <Box>
              <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.accentY, fontSize: 13, mb: 2 }}>
                Por qué YZETA
              </Typography>
              <Typography variant="h2" sx={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: tokens.text, textWrap: 'balance', mb: 3 }}>
                Una consultora.{' '}
                <Box component="span" sx={{ color: tokens.muted }}>Nunca una agencia.</Box>
              </Typography>
              <Typography sx={{ color: tokens.muted, fontSize: 17, lineHeight: 1.7 }}>
                No vendemos páginas web. Vendemos el resultado que esa página produce.
                Te decimos qué necesitas y qué no — aunque sea menos de lo que pensabas contratar.
              </Typography>
            </Box>
          </Reveal>

          <RevealGroup stagger={0.12}>
            <Stack divider={<Box sx={{ height: 1, bgcolor: tokens.border }} />} spacing={0}>
              {ventajas.map((v, i) => (
                <motion.div key={v.titulo} variants={itemVariants}>
                  <Box sx={{ py: 3, display: 'grid', gridTemplateColumns: '48px 1fr', gap: 2.5, alignItems: 'start' }}>
                    <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', color: tokens.faint, fontSize: 14, pt: '3px' }}>
                      0{i + 1}
                    </Typography>
                    <Box>
                      <Typography variant="h5" sx={{ fontSize: 22, color: tokens.text, mb: 0.8 }}>
                        {v.titulo}
                      </Typography>
                      <Typography sx={{ color: tokens.muted, fontSize: 16, lineHeight: 1.6, maxWidth: 480 }}>
                        {v.texto}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </RevealGroup>
        </Box>
      </Container>
    </Box>
  );
}
