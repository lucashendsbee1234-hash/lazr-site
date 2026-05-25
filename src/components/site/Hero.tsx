import { useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const count = 30;
    const dots: HTMLDivElement[] = [];
    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const isBlue = Math.random() > 0.5;
      d.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        background:${isBlue ? "oklch(0.7 0.25 250)" : "oklch(0.7 0.3 295)"};
        border-radius:50%;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        opacity:${Math.random() * 0.6 + 0.2};
        box-shadow:0 0 ${size * 4}px currentColor;
        color:${isBlue ? "oklch(0.7 0.25 250)" : "oklch(0.7 0.3 295)"};
        animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
        animation-delay:${Math.random() * 4}s;
      `;
      container.appendChild(d);
      dots.push(d);
    }
    return () => { dots.forEach((d) => d.remove()); };
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-60" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground mb-8 animate-fade-up">
          <Zap size={14} className="text-primary" />
          Trusted by 200+ Discord communities
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          Custom Discord Bots, <br />
          <span className="text-gradient-neon">Websites & Community</span> <br />
          Systems
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          Modern development services for Discord communities, creators, and gaming brands.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <a
            href="https://discord.gg/Eyhm3vHFgW"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon rounded-full px-8 py-4 font-semibold inline-flex items-center gap-2"
          >
            Join Discord <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="btn-ghost-neon rounded-full px-8 py-4 font-semibold"
          >
            View Services
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          {[
            { v: "0", l: "Projects currently, Change that" },
            { v: "0", l: "Servers currently, Change that" },
            { v: "24/7", l: "Support" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-neon">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
