import { WA_NUMBER } from '../data';

const DEFAULT_MSG = 'Hola YZETA, me gustaría hablar sobre mi proyecto digital.';

export const waURL = (msg = DEFAULT_MSG) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const MSG = {
  default: DEFAULT_MSG,
  asesoria: 'Hola YZETA, quiero agendar la asesoría gratuita.',
  servicio: (nombre) => `Hola YZETA, me interesa el servicio "${nombre}". ¿Lo conversamos?`,
};
