"use client";

import { useEffect, useRef } from "react";

export default function AnimatedParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    // Particle array
    const particles: any[] = [];
    const particleCount = Math.min(
      80,
      Math.floor((canvas.width * canvas.height) / 20000)
    );

    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        const cw = canvas?.width ?? 0;
        const ch = canvas?.height ?? 0;

        this.x = Math.random() * cw;
        this.y = Math.random() * ch;

        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.size = Math.random() * 1.8 + 0.4;
        this.opacity = Math.random() * 0.25 + 0.05;
        this.color = Math.random() > 0.5 ? "#c084fc" : "#a78bfa";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        const cw = canvas?.width ?? 0;
        const ch = canvas?.height ?? 0;

        // Wrap around
        if (this.x < -10) this.x = cw + 10;
        if (this.x > cw + 10) this.x = -10;
        if (this.y < -10) this.y = ch + 10;
        if (this.y > ch + 10) this.y = -10;

        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.min(0.35, Math.max(0.02, this.opacity));
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      const maxDistance = 120;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(192,132,252, ${
              0.12 * (1 - distance / maxDistance)
            })`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    let raf = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      drawConnections();
      raf = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
