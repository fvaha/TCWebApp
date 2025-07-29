import React, { useRef, useEffect } from "react";

const TOKEN_IMG = "/terra-logo.png"; // Tvoj PNG bez pozadine
const FALL_COUNT = 16; // Koliko tokena pada
const ANIMATION_DURATION = 7000; // ms

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function HeroTokenRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    // Token data
    let tokens = Array.from({ length: FALL_COUNT }).map(() => ({
      x: random(0, width),
      y: random(-height, 0),
      speed: random(1.2, 2.3),
      size: random(32, 64),
      rotate: random(0, 2 * Math.PI),
      spin: random(-0.02, 0.02),
      opacity: random(0.8, 1),
      fire: false,
    }));

    // The "hero" token with fire trail (goes up)
    let fireToken = {
      x: width / 2 + random(-80, 80),
      y: height + 100,
      speed: random(3.5, 4.5),
      size: 80,
      rotate: 0,
      spin: 0.035,
      opacity: 1,
      fire: true,
    };

    let img = new window.Image();
    img.src = TOKEN_IMG;

    let fireTrailGradient: CanvasGradient | null = null;

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);
    resize();

    function drawFireTrail(x: number, y: number, size: number) {
      fireTrailGradient = ctx.createRadialGradient(
        x, y + size / 1.7, size * 0.05, x, y + size * 1.3, size * 0.75
      );
      fireTrailGradient.addColorStop(0, "rgba(255,230,120,0.7)");
      fireTrailGradient.addColorStop(0.3, "rgba(255,170,0,0.4)");
      fireTrailGradient.addColorStop(0.7, "rgba(255,70,0,0.2)");
      fireTrailGradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.save();
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.arc(x, y + size, size * 0.75, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fillStyle = fireTrailGradient;
      ctx.fill();
      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Falling tokens
      for (let t of tokens) {
        ctx.save();
        ctx.globalAlpha = t.opacity;
        ctx.translate(t.x, t.y);
        ctx.rotate(t.rotate);
        ctx.drawImage(img, -t.size / 2, -t.size / 2, t.size, t.size);
        ctx.restore();

        t.y += t.speed;
        t.rotate += t.spin;

        if (t.y > height + 40) {
          t.x = random(0, width);
          t.y = random(-80, 0);
          t.speed = random(1.2, 2.3);
          t.size = random(32, 64);
          t.rotate = random(0, 2 * Math.PI);
        }
      }

      // FIRE token flying up
      drawFireTrail(fireToken.x, fireToken.y, fireToken.size);
      ctx.save();
      ctx.globalAlpha = fireToken.opacity;
      ctx.translate(fireToken.x, fireToken.y);
      ctx.rotate(fireToken.rotate);
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#FFC400";
      ctx.drawImage(img, -fireToken.size / 2, -fireToken.size / 2, fireToken.size, fireToken.size);
      ctx.restore();

      fireToken.y -= fireToken.speed;
      fireToken.rotate += fireToken.spin;

      // Restart fire token after going off top
      if (fireToken.y < -120) {
        fireToken.x = width / 2 + random(-80, 80);
        fireToken.y = height + 100;
        fireToken.speed = random(3.5, 4.5);
        fireToken.size = random(74, 94);
        fireToken.rotate = random(-0.3, 0.3);
      }

      requestAnimationFrame(draw);
    }

    img.onload = () => {
      draw();
    };

    // Cleanup
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative w-full h-[520px] md:h-[600px] overflow-hidden rounded-b-3xl shadow-xl bg-gradient-to-br from-neutral-900 via-black to-yellow-900">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        width={1200}
        height={600}
        style={{ display: "block", width: "100%", height: "100%" }}
        aria-label="Terra Crypt Token Rain Animation"
      />
      {/* Ako želiš tekst/hero preko */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {/* Dodaj svoj Hero tekst/dugme ovde ako hoćeš */}
      </div>
    </div>
  );
}
