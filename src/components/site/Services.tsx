import { Bot, Server, Globe, Cloud, ArrowRight } from "lucide-react";
import type { Service } from "./CheckoutModal";

const services: (Service & { desc: string; icon: typeof Bot; tone: string })[] = [
  {
    id: "bots",
    title: "Custom Discord Bots",
    price: "from $5",
    desc: "Fully custom bots with moderation, tickets, leveling, music, and dashboards.",
    icon: Bot,
    tone: "from-fuchsia-500/20 to-purple-500/0",
  },
  {
    id: "setup",
    title: "Server Setup",
    price: "from $5",
    desc: "Professional Discord server design with roles, channels, permissions, and branding.",
    icon: Server,
    tone: "from-indigo-500/20 to-blue-500/0",
  },
  {
    id: "websites",
    title: "Community Websites",
    price: "from $10",
    desc: "Sleek modern websites for your community, store, or creator brand.",
    icon: Globe,
    tone: "from-sky-500/20 to-cyan-500/0",
  },
  {
    id: "hosting",
    title: "Hosting",
    price: "from $3/mo",
    desc: "Reliable 24/7 hosting for your bots and websites with monitoring included.",
    icon: Cloud,
    tone: "from-violet-500/20 to-pink-500/0",
  },
];

export function Services({ onBuy }: { onBuy: (s: Service) => void }) {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Services
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Premium services for <span className="text-gradient-neon">modern communities</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to launch and scale a professional Discord brand.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="group relative rounded-3xl neon-border p-6 flex flex-col hover:-translate-y-2 transition-all duration-500 shadow-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${s.tone} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative flex flex-col h-full">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-neon-soft border border-primary/30 flex items-center justify-center group-hover:shadow-glow-purple transition-shadow">
                    <Icon className="text-primary" size={26} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{s.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gradient-neon">{s.price}</span>
                  </div>
                  <button
                    onClick={() => onBuy({ id: s.id, title: s.title, price: s.price })}
                    className="mt-4 inline-flex items-center justify-center gap-2 btn-neon rounded-full px-5 py-2.5 text-sm font-semibold"
                  >
                    Buy Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
