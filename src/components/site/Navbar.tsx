import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#terms", label: "Terms" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-neon shadow-glow-purple flex items-center justify-center font-display font-bold text-white">
            L
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            LazR <span className="text-gradient-neon">Hub</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-neon after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://discord.gg/Eyhm3vHFgW"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center btn-neon rounded-full px-5 py-2.5 text-sm font-semibold"
        >
          Join Discord
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mt-3 mx-6 rounded-2xl p-6 animate-fade-up">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground/80 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://discord.gg/Eyhm3vHFgW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex btn-neon rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                Join Discord
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
