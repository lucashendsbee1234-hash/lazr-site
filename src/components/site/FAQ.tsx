import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long do projects take?", a: "Most bots and websites are delivered within 1–5 days depending on complexity. Larger systems may take up to 2 weeks." },
  { q: "What payment methods are accepted?", a: "We accept PayPal, Cash App, and Venmo. Payment details are provided at checkout." },
  { q: "Do you offer hosting?", a: "Yes — reliable 24/7 hosting starts at $3/month and includes monitoring and automatic restarts." },
  { q: "Can I request custom features?", a: "Absolutely. Open a ticket in our Discord with what you need and we'll quote you a price." },
  { q: "Are payments refundable?", a: "Refunds are only available before work begins. Once development starts, payments are non-refundable." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">FAQ</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Questions, <span className="text-gradient-neon">answered</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl neon-border overflow-hidden shadow-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-elevated transition-colors"
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
