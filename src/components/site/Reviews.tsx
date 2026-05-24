import { Star } from "lucide-react";

const reviews = [
  { user: "ShadowKing", rating: 5, text: "Insane work. My bot was exactly what I wanted and delivered in under 2 days." },
  { user: "NeonValkyrie", rating: 5, text: "Best Discord developer I've worked with. Server looks 10x more professional now." },
  { user: "duke_plays", rating: 5, text: "Custom ticket system + verification = clean. Highly recommend LazR Hub." },
  { user: "MochiGamer", rating: 5, text: "Hosting has been rock solid for 3 months. Never had downtime." },
  { user: "VoidRunner", rating: 4, text: "Great communication, fair pricing, and the dashboard they built slaps." },
  { user: "K1NETIC", rating: 5, text: "They actually care about your project. Won't go anywhere else." },
 { user: "theduke321-LazR owner", rating: 5, text: "These are fake reviews until we get real reviews." },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[120px]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Reviews</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            What the <span className="text-gradient-neon">community</span> says
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.user}
              className="rounded-3xl neon-border p-6 shadow-card hover:shadow-glow-purple transition-shadow duration-500"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-neon flex items-center justify-center font-display font-bold">
                  {r.user[0]}
                </div>
                <div>
                  <div className="font-semibold">@{r.user}</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < r.rating ? "fill-primary text-primary" : "text-muted"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
