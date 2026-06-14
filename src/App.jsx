import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Asesoria from './components/Asesoria';
import ComoTrabajamos from './components/ComoTrabajamos';
import PorQueYZETA from './components/PorQueYZETA';
import Portafolio from './components/Portafolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';

function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Asesoria />
        <ComoTrabajamos />
        <PorQueYZETA />
        <Portafolio />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </Box>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/privacidad" element={<Privacidad />} />
    </Routes>
  );
}
