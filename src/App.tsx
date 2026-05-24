import { useState } from "react";

import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { Services } from "./components/site/Services";
import { Portfolio } from "./components/site/Portfolio";
import { Reviews } from "./components/site/Reviews";
import { FAQ } from "./components/site/FAQ";
import { Terms } from "./components/site/Terms";
import { Footer } from "./components/site/Footer";
import { CheckoutModal } from "./components/site/CheckoutModal";

export type Service = {
  title: string;
  price?: string;
  description?: string;
};

export default function App() {
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

      <CheckoutModal
        service={active}
        onClose={() => setActive(null)}
      />
    </div>
  );
}