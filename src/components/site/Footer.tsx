import { MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-10 px-6 border-t border-border overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[600px] rounded-full bg-primary/15 blur-[120px]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="rounded-3xl glass p-10 md:p-14 text-center shadow-card">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Ready to <span className="text-gradient-neon">level up</span> your community?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Join our Discord, open a ticket, and let's build something great.
          </p>
          <a
            href="https://discord.gg/Eyhm3vHFgW"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 btn-neon rounded-full px-8 py-4 font-semibold"
          >
            <MessageSquare size={18} /> Join Discord
          </a>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-neon shadow-glow-purple flex items-center justify-center font-display font-bold text-white text-sm">
              L
            </div>
            <span className="font-display font-bold">
              LazR <span className="text-gradient-neon">Hub</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#portfolio" className="hover:text-foreground transition">Portfolio</a>
            <a href="#terms" className="hover:text-foreground transition">Terms</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
            <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Discord</a>
          </nav>

          <div className="text-xs text-muted-foreground">© 2026 LazR Hub. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
