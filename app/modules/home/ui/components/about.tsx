import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Building,
  Landmark,
  Zap,
  Waves,
  Network,
  Factory,
  Ship,
  Smartphone,
  Droplets,
  Hospital,
  Hotel,
  Globe,
} from "lucide-react";

export const services = [
  {
    title: "Infrastructure",
    description:
      "End-to-end development of roads, ports, telecom networks, power grids, industrial parks, SEZs, water systems, and rural IT infrastructure.",
    icon: <Network className="w-8 h-8" />,
  },
  {
    title: "Energy",
    description:
      "Renewable and conventional power generation, transmission, and storage accelerating the transition to sustainable energy systems.",
    icon: <Zap className="w-8 h-8" />,
  },
];

const infrastructureHighlights = [
  { icon: <Ship className="w-5 h-5" />, label: "Ports & Logistics" },
  { icon: <Factory className="w-5 h-5" />, label: "Industrial Parks & SEZs" },
  { icon: <Building className="w-5 h-5" />, label: "Townships & Real Estate" },
  { icon: <Hospital className="w-5 h-5" />, label: "Healthcare Facilities" },
  { icon: <Hotel className="w-5 h-5" />, label: "Hospitality" },
  { icon: <Smartphone className="w-5 h-5" />, label: "Rural Digital Access" },
  { icon: <Droplets className="w-5 h-5" />, label: "Water Infrastructure" },
  { icon: <Globe className="w-5 h-5" />, label: "Mass Transit & Smart Cities" },
];

export const About = () => {
  return (
    <main>
      <section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-tertiary"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Gyan Group infrastructure and energy projects - roads, solar farms, industrial parks, and financial services"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-plum/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum leading-tight"
            >
              Building the Foundations of a Sustainable Future
            </h2>

            <p className="text-lg text-[#4A3A4A] leading-relaxed">
              Aurhem is a free zone company registered with Ras Al Khaimah Economic Zone Government of Ras Al Khaimah (RAKEZ), United Arab Emirates.
with specific focus on Trading, distribution and management of all kinds of Infrastructure, Mining , Construction, Earth Moving and Energy Equipments.
Our teams provide an end-to-end trading solution to our customers.
            </p>

        
          </div>
        </div>
      </section>

      <section
  className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
  aria-labelledby="focus-heading"
>
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center max-w-4xl mx-auto mb-16">
      <h2
        id="focus-heading"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum mb-6"
      >
        Our Commitment
      </h2>

      <p className="text-lg text-[#4A3A4A] leading-relaxed">
        Aurhem works to create infrastructural and strategic development
        through the supply and international trade of heavy machinery,
        industrial tools, and construction equipment. We are committed to
        delivering reliable solutions while building lasting relationships
        through trust, collaboration, and exceptional service.
      </p>
    </div>

    {/* Values */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-tertiary/40 rounded-2xl p-8 border border-dusty-rose/20 hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 rounded-full bg-plum/10 flex items-center justify-center text-2xl mb-6">
          🤝
        </div>

        <h3 className="text-2xl font-bold text-plum mb-4">
          Long-Term Relations
        </h3>

        <p className="text-[#4A3A4A] leading-relaxed">
          Our customers are our highest priority. We take pride in building
          lasting relationships, reflected by the trust of clients who continue
          to place repeat orders with us.
        </p>
      </div>

      <div className="bg-tertiary/40 rounded-2xl p-8 border border-dusty-rose/20 hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 rounded-full bg-plum/10 flex items-center justify-center text-2xl mb-6">
          🛡️
        </div>

        <h3 className="text-2xl font-bold text-plum mb-4">
          Trust
        </h3>

        <p className="text-[#4A3A4A] leading-relaxed">
          We believe in traditional values of transparency, integrity, and
          trustworthiness. Every partnership is built on honesty, reliability,
          and mutual respect.
        </p>
      </div>

      <div className="bg-tertiary/40 rounded-2xl p-8 border border-dusty-rose/20 hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 rounded-full bg-plum/10 flex items-center justify-center text-2xl mb-6">
          🌍
        </div>

        <h3 className="text-2xl font-bold text-plum mb-4">
          Partnership
        </h3>

        <p className="text-[#4A3A4A] leading-relaxed">
          We work alongside our customers to create a seamless experience,
          offering practical problem-solving, international procurement, and
          dependable delivery solutions.
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
};
