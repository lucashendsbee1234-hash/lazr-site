import { ScrollText } from "lucide-react";

const rules = [
  { t: "No chargebacks", d: "Initiating a chargeback results in a permanent ban and loss of all delivered work." },
  { t: "Refund policy", d: "Refunds are only available before development work begins." },
  { t: "Clear requirements", d: "Customers must clearly explain requested features before development." },
  { t: "Respectful conduct", d: "Harassment, spam, and toxic behavior are not tolerated." },
  { t: "Right to refuse", d: "Staff may refuse service for any reason, including suspicious requests." },
  { t: "Confidentiality", d: "Leaking tickets, conversations, or orders is strictly prohibited." },
];

export function Terms() {
  return (
    <section id="terms" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            <ScrollText size={14} /> Terms & Rules
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            By purchasing, <span className="text-gradient-neon">you agree</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {rules.map((r, i) => (
            <div key={r.t} className="rounded-2xl neon-border p-6 shadow-card flex gap-4">
              <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-neon-soft border border-primary/30 flex items-center justify-center font-display font-bold text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display font-bold">{r.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
