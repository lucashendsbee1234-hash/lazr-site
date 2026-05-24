import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { Terms } from "@/components/site/Terms";
import { Footer } from "@/components/site/Footer";
import { CheckoutModal, type Service } from "@/components/site/CheckoutModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LazR Hub — Custom Discord Bots, Websites & Community Systems" },
      {
        name: "description",
        content:
          "Modern development services for Discord communities, creators, and gaming brands. Custom bots, server setup, websites, and hosting.",
      },
      { property: "og:title", content: "LazR Hub — Discord Development & Community Systems" },
      { property: "og:description", content: "Custom Discord bots, websites, server setup, and hosting for modern gaming communities." },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services onBuy={setActive} />
        <Portfolio />
        <Reviews />
        <FAQ />
        <Terms />
      </main>
      <Footer />
      <CheckoutModal service={active} onClose={() => setActive(null)} />
    </div>
  );
}
