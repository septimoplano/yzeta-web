// Datos centralizados — single source of truth para contenido del sitio

export const WA_NUMBER = '56934103995';
export const EMAIL = 'contacto@yzeta.cl';
export const PHONE_DISPLAY = '+56 9 3410 3995';

export const servicios = [
  {
    id: 'landing',
    nombre: 'Landing page de conversión',
    precio: 290000,
    descripcion: 'Una página enfocada en convertir. Diseño responsive, formulario directo a WhatsApp y SEO base para que te encuentren.',
    incluye: ['Diseño responsive', 'Formulario a WhatsApp', 'SEO base'],
    popular: false,
  },
  {
    id: 'sitio',
    nombre: 'Sitio web + booking online',
    precio: 420000,
    descripcion: 'Hasta 5 páginas con agendamiento integrado. Tus clientes reservan solos y tú mides todo con Google Analytics.',
    incluye: ['Hasta 5 páginas', 'Agendamiento integrado', 'Google Analytics'],
    popular: true,
  },
  {
    id: 'tienda',
    nombre: 'Tienda online + WebPay',
    precio: 680000,
    descripcion: 'E-commerce completo hasta 30 productos, pagos con WebPay y panel de administración para gestionar todo tú mismo.',
    incluye: ['Hasta 30 productos', 'Pagos con WebPay', 'Panel de administración'],
    popular: false,
  },
];

export const pasos = [
  { n: '01', titulo: 'Diagnóstico', texto: 'Analizamos tu situación digital actual y las oportunidades más inmediatas.' },
  { n: '02', titulo: 'Propuesta', texto: 'Un plan con alcance, tiempos y precio fijo. Sin sorpresas.' },
  { n: '03', titulo: 'Ejecución', texto: 'Diseñamos y construimos. Entregas parciales para que veas el avance.' },
  { n: '04', titulo: 'Lanzamiento', texto: 'Tu sitio en vivo. Accesos y capacitación acorde a lo implementado.' },
];

export const ventajas = [
  { titulo: 'Soporte continuo', texto: 'Respondemos por WhatsApp en horario laboral. Siempre hay alguien para resolver.' },
  { titulo: 'Somos locales', texto: 'Concepción es nuestra ciudad. Entendemos el mercado y los clientes del Gran Conce.' },
  { titulo: 'Entrega rápida', texto: 'Sitios listos en 5–10 días hábiles. Tu negocio digitalizado sin demoras.' },
];

export const proyectos = [
  {
    nombre: 'Brasas y Mar',
    rubro: 'Restaurante',
    descripcion: 'Carta, reservas y carácter para un restaurante de mar y parrilla.',
    url: 'https://default-restaurante.vercel.app',
    img: '/assets/portfolio-brasas.png',
  },
  {
    nombre: 'Lumière',
    rubro: 'Estética',
    descripcion: 'Agendamiento y catálogo de tratamientos para un centro de estética.',
    url: 'https://default-estetica.vercel.app',
    img: '/assets/portfolio-lumiere.png',
  },
  {
    nombre: 'CS2 Duel Tournament',
    rubro: 'Torneo gaming',
    descripcion: 'Plataforma de torneo competitivo con inscripciones y bracket en vivo.',
    url: 'https://cs2dt2026.vercel.app',
    img: null,
  },
];
