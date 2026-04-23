"use client";

import { useEffect, useRef } from "react";

type Splat = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  maxLife: number;
  hue: number;
};

const HAZARD_HUE = 54; // yellow

export function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splats = useRef<Splat[]>([]);
  const lastPos = useRef<{ x: number; y: number; t: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const x = e.clientX;
      const y = e.clientY;

      let speed = 0;
      if (lastPos.current) {
        const dt = Math.max(now - lastPos.current.t, 1);
        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        speed = Math.sqrt(dx * dx + dy * dy) / dt;
      }
      lastPos.current = { x, y, t: now };

      const intensity = Math.min(1, speed * 0.06);
      const count = 1 + Math.floor(intensity * 3);

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speedJitter = 0.4 + Math.random() * 1.2 + intensity * 2;
        splats.current.push({
          x,
          y,
          vx: Math.cos(angle) * speedJitter,
          vy: Math.sin(angle) * speedJitter - 0.3,
          r: 4 + Math.random() * (intensity * 14 + 4),
          life: 0,
          maxLife: 700 + Math.random() * 600,
          hue: HAZARD_HUE + (Math.random() * 8 - 4),
        });
      }

      if (splats.current.length > 220) {
        splats.current.splice(0, splats.current.length - 220);
      }
    };

    const onLeave = () => {
      lastPos.current = null;
    };

    let prev = performance.now();
    const tick = (now: number) => {
      const dt = now - prev;
      prev = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (const s of splats.current) {
        s.life += dt;
        s.x += s.vx * (dt * 0.06);
        s.y += s.vy * (dt * 0.06);
        s.vy += dt * 0.0015; // gravity
        s.vx *= 0.985;
        const t = s.life / s.maxLife;
        if (t >= 1) continue;

        const alpha = (1 - t) * 0.55;
        const r = s.r * (1 - t * 0.3);

        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r);
        grad.addColorStop(0, `hsla(${s.hue}, 100%, 60%, ${alpha})`);
        grad.addColorStop(0.5, `hsla(${s.hue}, 100%, 50%, ${alpha * 0.4})`);
        grad.addColorStop(1, `hsla(${s.hue}, 100%, 50%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      splats.current = splats.current.filter((s) => s.life < s.maxLife);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen"
    />
  );
}
