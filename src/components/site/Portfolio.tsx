import { LayoutDashboard, Ticket, ShieldCheck, Globe, Gavel } from "lucide-react";

const items = [
  {
    title: "Bot Dashboards",
    desc: "Web-based control panels for your Discord bot's settings, logs, and analytics.",
    icon: LayoutDashboard,
    mock: <DashboardMock />,
  },
  {
    title: "Ticket Systems",
    desc: "Modern ticket flows with categories, transcripts, and staff assignment.",
    icon: Ticket,
    mock: <TicketMock />,
  },
  {
    title: "Verification Systems",
    desc: "Captcha + role gating to keep raiders and bots out of your server.",
    icon: ShieldCheck,
    mock: <VerifyMock />,
  },
  {
    title: "Community Websites",
    desc: "Landing pages and member portals tailored to your brand.",
    icon: Globe,
    mock: <WebsiteMock />,
  },
  {
    title: "Moderation Systems",
    desc: "Automod, warnings, mutes, and full audit logs out of the box.",
    icon: Gavel,
    mock: <ModMock />,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Portfolio</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Built for <span className="text-gradient-neon">real communities</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A look at the systems we ship every day.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className={`group rounded-3xl neon-border overflow-hidden shadow-card hover:-translate-y-1 transition-transform duration-500 ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-border">
                  {it.mock}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-neon-soft border border-primary/30 flex items-center justify-center">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <h3 className="font-display text-lg font-bold">{it.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="absolute inset-0 p-5 grid grid-cols-4 gap-3 text-[10px]">
      <div className="col-span-1 rounded-xl bg-surface-elevated border border-border p-3 flex flex-col gap-2">
        <div className="h-6 w-6 rounded-md bg-gradient-neon" />
        {["Overview","Modules","Tickets","Logs","Settings"].map((x,i)=>(
          <div key={x} className={`h-5 rounded ${i===0?"bg-primary/20 text-primary px-2 flex items-center":""} ${i!==0?"text-muted-foreground px-2 flex items-center":""}`}>{x}</div>
        ))}
      </div>
      <div className="col-span-3 flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-3">
          {[["Members","12,847"],["Online","3,210"],["Messages","48k"]].map(([l,v])=>(
            <div key={l} className="rounded-xl bg-surface-elevated border border-border p-3">
              <div className="text-muted-foreground">{l}</div>
              <div className="mt-1 font-bold text-base text-gradient-neon">{v}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-xl bg-surface-elevated border border-border p-3 relative overflow-hidden">
          <div className="text-muted-foreground mb-2">Activity</div>
          <svg viewBox="0 0 200 60" className="w-full h-full">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.7 0.3 295)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="oklch(0.7 0.25 250)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,45 L20,35 L40,40 L60,20 L80,28 L100,15 L120,25 L140,10 L160,18 L180,8 L200,15 L200,60 L0,60 Z" fill="url(#g)" />
            <path d="M0,45 L20,35 L40,40 L60,20 L80,28 L100,15 L120,25 L140,10 L160,18 L180,8 L200,15" fill="none" stroke="oklch(0.7 0.3 295)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TicketMock() {
  return (
    <div className="absolute inset-0 p-5 flex flex-col gap-2 text-[10px]">
      <div className="rounded-lg bg-surface-elevated border border-border p-3 flex items-center gap-3">
        <div className="h-7 w-7 rounded-full bg-gradient-neon" />
        <div className="flex-1">
          <div className="font-semibold">#ticket-0421</div>
          <div className="text-muted-foreground">Bot customization request</div>
        </div>
        <div className="px-2 py-1 rounded-full bg-primary/20 text-primary">Open</div>
      </div>
      {[1,2,3].map(i=>(
        <div key={i} className="rounded-lg bg-surface-elevated border border-border p-3 flex items-center gap-3 opacity-70">
          <div className="h-7 w-7 rounded-full bg-accent/40" />
          <div className="flex-1">
            <div className="font-semibold">#ticket-04{20-i}</div>
            <div className="text-muted-foreground">Resolved · 2h ago</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VerifyMock() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="rounded-2xl glass border border-primary/30 p-6 text-center shadow-glow-purple">
        <ShieldIcon />
        <div className="mt-3 font-display font-bold text-sm">Verify to enter</div>
        <div className="mt-1 text-[10px] text-muted-foreground">Prove you're human</div>
        <div className="mt-3 inline-block px-4 py-2 rounded-full bg-gradient-neon text-white text-[10px] font-semibold">
          ✓ Verified
        </div>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="mx-auto h-10 w-10 rounded-xl bg-gradient-neon-soft border border-primary/40 flex items-center justify-center">
      <div className="h-5 w-5 rounded bg-gradient-neon" />
    </div>
  );
}

function WebsiteMock() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2 text-[10px]">
      <div className="rounded-lg bg-surface-elevated border border-border p-2 flex items-center gap-2">
        <div className="h-4 w-4 rounded bg-gradient-neon" />
        <div className="text-muted-foreground">community.gg</div>
      </div>
      <div className="flex-1 rounded-lg bg-surface-elevated border border-border p-3 flex flex-col items-center justify-center text-center">
        <div className="font-display font-bold text-sm">Welcome to <span className="text-gradient-neon">GG</span></div>
        <div className="text-[9px] text-muted-foreground mt-1">Join 10k+ players</div>
        <div className="mt-2 px-3 py-1 rounded-full bg-gradient-neon text-white text-[9px]">Join Now</div>
      </div>
    </div>
  );
}

function ModMock() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-1.5 text-[10px]">
      {[
        ["BAN", "raider123", "destructive"],
        ["MUTE", "spammer", "primary"],
        ["WARN", "user42", "accent"],
        ["KICK", "trolling", "destructive"],
      ].map(([a, u, c]) => (
        <div key={u} className="rounded-md bg-surface-elevated border border-border p-2 flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${c === "destructive" ? "bg-destructive/20 text-destructive" : c === "primary" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}>{a}</span>
          <span className="font-mono">@{u}</span>
          <span className="ml-auto text-muted-foreground">now</span>
        </div>
      ))}
    </div>
  );
}
