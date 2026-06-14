import { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, Container, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText, useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { tokens } from '../theme';
import { waURL } from '../utils/whatsapp';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  // Scrollspy — resalta la sección visible
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive('#' + visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(8,12,16,0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${tokens.border}` : '1px solid transparent',
          transition: 'background-color .3s ease, border-color .3s ease, backdrop-filter .3s ease',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 }, gap: 2 }}>
            <Box
              component="a"
              href="#top"
              onClick={(e) => { e.preventDefault(); go('#top'); }}
              sx={{ display: 'flex', alignItems: 'center', mr: 'auto' }}
            >
              <Box component="img" src="/assets/logo.png" alt="YZETA Consultora Digital"
                sx={{ height: { xs: 26, md: 30 }, display: 'block' }} />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <Button
                    key={l.href}
                    onClick={() => go(l.href)}
                    sx={{
                      color: isActive ? tokens.text : tokens.muted, fontWeight: 500, px: 1.5,
                      position: 'relative',
                      '&:hover': { color: tokens.text, bgcolor: 'transparent' },
                      '&::after': {
                        content: '""', position: 'absolute', left: 12, right: 12, bottom: 6, height: 1.5,
                        bgcolor: tokens.accentY, borderRadius: 1,
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left',
                        transition: 'transform .3s ease',
                      },
                    }}
                  >
                    {l.label}
                  </Button>
                );
              })}
              <Button
                variant="contained" color="primary"
                href={waURL()} target="_blank" rel="noopener"
                startIcon={<WhatsAppIcon />}
                sx={{ ml: 1.5 }}
              >
                WhatsApp
              </Button>
            </Box>

            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' }, color: tokens.text }}
              aria-label="Abrir menú"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right" open={open} onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: '78%', maxWidth: 320, bgcolor: tokens.surface, borderLeft: `1px solid ${tokens.border}` } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: tokens.text }} aria-label="Cerrar menú">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {links.map((l) => (
            <ListItem key={l.href} disablePadding>
              <ListItemButton onClick={() => go(l.href)} sx={{ borderRadius: 2, py: 1.5 }}>
                <ListItemText
                  primary={l.label}
                  primaryTypographyProps={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 20 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Button
            fullWidth variant="contained" color="primary"
            href={waURL()} target="_blank" rel="noopener"
            startIcon={<WhatsAppIcon />}
          >
            Hablar por WhatsApp
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
