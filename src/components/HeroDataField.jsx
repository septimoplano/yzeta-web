import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useReducedMotion } from 'framer-motion';

const G = 64;              // paso de grid, igual al del hero
const TEAL = '94,234,212'; // tokens.accentY en rgb

// Campo de datos animado para el background del hero (canvas only, sin texto).
export default function HeroDataField() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf, w = 0, h = 0, dpr = 1, packets = [], running = false, last = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initPackets();
    };

    const initPackets = () => {
      packets = [];
      const rows = Math.max(1, Math.floor(h / G));
      const cols = Math.max(1, Math.floor(w / G));
      const count = Math.max(7, Math.round((w / 1440) * 16));
      for (let i = 0; i < count; i++) {
        const horizontal = Math.random() < 0.72;
        const speed = 45 + Math.random() * 95;
        const dir = Math.random() < 0.5 ? 1 : -1;
        if (horizontal) {
          packets.push({ axis: 'h', y: Math.min(h - 1, (1 + Math.floor(Math.random() * rows)) * G),
            x: Math.random() * w, speed, len: 32 + Math.random() * 64, dir });
        } else {
          packets.push({ axis: 'v', x: Math.min(w - 1, (1 + Math.floor(Math.random() * cols)) * G),
            y: Math.random() * h, speed, len: 26 + Math.random() * 44, dir });
        }
      }
    };

    const drawPacket = (p) => {
      if (p.axis === 'h') {
        const x0 = p.x, x1 = p.x - p.dir * p.len;
        const g = ctx.createLinearGradient(x1, 0, x0, 0);
        g.addColorStop(0, `rgba(${TEAL},0)`);
        g.addColorStop(1, `rgba(${TEAL},0.85)`);
        ctx.strokeStyle = g; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(x1, p.y); ctx.lineTo(x0, p.y); ctx.stroke();
        ctx.fillStyle = `rgba(${TEAL},1)`;
        ctx.beginPath(); ctx.arc(x0, p.y, 1.8, 0, 6.283); ctx.fill();
      } else {
        const y0 = p.y, y1 = p.y - p.dir * p.len;
        const g = ctx.createLinearGradient(0, y1, 0, y0);
        g.addColorStop(0, `rgba(${TEAL},0)`);
        g.addColorStop(1, `rgba(${TEAL},0.7)`);
        ctx.strokeStyle = g; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(p.x, y1); ctx.lineTo(p.x, y0); ctx.stroke();
        ctx.fillStyle = `rgba(${TEAL},0.9)`;
        ctx.beginPath(); ctx.arc(p.x, y0, 1.6, 0, 6.283); ctx.fill();
      }
    };

    const step = (p, dt) => {
      if (p.axis === 'h') {
        p.x += p.dir * p.speed * dt;
        if (p.dir > 0 && p.x - p.len > w) p.x = -Math.random() * 120;
        if (p.dir < 0 && p.x + p.len < 0) p.x = w + Math.random() * 120;
      } else {
        p.y += p.dir * p.speed * dt;
        if (p.dir > 0 && p.y - p.len > h) p.y = -Math.random() * 80;
        if (p.dir < 0 && p.y + p.len < 0) p.y = h + Math.random() * 80;
      }
    };

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      ctx.clearRect(0, 0, w, h);
      for (const p of packets) { step(p, dt); drawPacket(p); }
      if (running) raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener('resize', resize);

    if (reduce) {
      ctx.clearRect(0, 0, w, h); // sin movimiento; el grid del hero da la textura
      return () => window.removeEventListener('resize', resize);
    }

    const start = () => { if (!running) { running = true; last = performance.now(); raf = requestAnimationFrame(frame); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0 });
    io.observe(canvas);

    return () => { stop(); io.disconnect(); window.removeEventListener('resize', resize); };
  }, [reduce]);

  return (
    <Box component="canvas" ref={ref} aria-hidden
      sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
  );
}
