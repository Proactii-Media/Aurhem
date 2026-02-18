import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-tertiary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-plum/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum leading-tight">
            Redefining Infrastructure for a Connected World
          </h2>
          <p className="text-lg text-[#4A3A4A] leading-relaxed">
           Aurhem Trading and Consulting FZ-LLC

Incorporated in the Ras Al Khaimah Economic Zone (RAKEZ), UAE, Aurhem Trading and Consulting FZ-LLC is an international trading and consultancy company delivering reliable solutions across construction equipment, spare parts, commercial intelligence, and professional development.

          </p>
          <p className="text-lg text-[#4A3A4A] leading-relaxed">
            We work with clients across select European countries, the United Kingdom, the African continent, India, and additional markets based on demand.
          </p>
          <div className="pt-4">
            <Button
              asChild
              className="bg-plum hover:bg-dusty-rose text-tertiary px-8 py-3 rounded-md text-base font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <Link to="/contact">
                Join Our Mission <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Corporate meeting in a modern office"
            className="w-full h-full object-cover hover:scale-125"
          />
          <div className="absolute inset-0 bg-linear-to-t from-plum/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
