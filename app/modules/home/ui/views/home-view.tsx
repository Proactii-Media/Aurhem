import { About } from "../components/about";
import { Hero } from "../components/hero";
import { InitiativeSection } from "../components/initiative";
import { Contact } from "../components/contact";

export const HomeView = () => {
  return (
    <main className="mt-20">
      <Hero
        title="Welcome to Aurhem"
        description="Aurhem is a free zone company registered with Ras Al Khaimah Economic Zone Government of Ras Al Khaimah (RAKEZ), United Arab Emirates. with specific focus on Trading, distribution and management of all kinds of Infrastructure, Mining , Construction, Earth Moving and Energy Equipments. Our teams provide an end-to-end trading solution to our customers."
        backgroundImages={[
          "https://images.unsplash.com/photo-1762291270825-0a49ab389d05?w=1920&q=80",
          "https://images.unsplash.com/photo-1646427154221-a4b57a921906?w=1920&q=80",
          "https://images.unsplash.com/photo-1759579471642-8295d40db07c?w=1920&q=80",
          "https://images.unsplash.com/photo-1505833464198-4993b36cdfab?w=1920&q=80",
        ]}
      />
      <About />
      <InitiativeSection />
      <Contact />
    </main>
  );
};
