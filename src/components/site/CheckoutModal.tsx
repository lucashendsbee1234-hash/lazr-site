import { useState } from "react";
import { X, ExternalLink, MessageSquare } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  price: string;
};

const methods = [
  { name: "PayPal", emoji: "💳", url: "https://paypal.me/theduke321", color: "from-blue-500 to-blue-700" },
  { name: "Cash App", emoji: "💵", url: "https://cash.app/$thedukeLazR", color: "from-green-500 to-emerald-700" },
  { name: "Venmo", emoji: "💸", url: "https://www.venmo.com/u/LazRtheduke", color: "from-sky-400 to-indigo-600" },
];

export function CheckoutModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  const [paid, setPaid] = useState(false);

  if (!service) return null;

  const handlePay = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setPaid(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-up"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl glass shadow-glow-purple p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-elevated transition-colors text-muted-foreground"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="text-xs uppercase tracking-widest text-muted-foreground">Checkout</div>
        <h3 className="mt-1 font-display text-2xl font-bold">{service.title}</h3>
        <div className="mt-2 text-3xl font-display font-bold text-gradient-neon">{service.price}</div>

        {!paid ? (
          <>
            <p className="mt-6 text-sm text-muted-foreground">Choose a payment method to continue:</p>
            <div className="mt-4 space-y-3">
              {methods.map((m) => (
                <button
                  key={m.name}
                  onClick={() => handlePay(m.url)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl neon-border hover:bg-surface-elevated transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{m.emoji}</span>
                    <span className="font-semibold">{m.name}</span>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </button>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground text-center">
              Secure third-party payment. You'll be redirected to complete the transaction.
            </p>
          </>
        ) : (
          <div className="mt-6 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-gradient-neon-soft border border-primary/40 flex items-center justify-center shadow-glow-purple animate-glow-pulse">
              <MessageSquare className="text-primary" />
            </div>
            <h4 className="mt-4 font-display text-xl font-bold">After payment</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Open a ticket in our Discord with proof of purchase to start your project.
            </p>
            <a
              href="https://discord.gg/Eyhm3vHFgW"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex btn-neon rounded-full px-6 py-3 text-sm font-semibold"
            >
              Open Discord Ticket
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
