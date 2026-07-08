import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Procurement & Sourcing",
    description:
      "Procurement and sourcing of construction machinery, heavy equipment, spare parts, and related industrial products from manufacturers and authorized suppliers, primarily in India.",
  },
  {
    title: "Trade Facilitation",
    description:
      "Supplier identification, commercial negotiations, contract coordination, logistics management, shipping documentation, and customs coordination.",
  },
  {
    title: "International Trade Consulting",
    description:
      "Consulting services relating to equipment sourcing, international procurement, market development, and international trade.",
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-20">
          <span className="text-sm font-semibold tracking-[0.35em] uppercase text-plum">
            What We Do
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold text-plum leading-tight max-w-[1200px]">
            Trading & Consulting for Construction and Heavy Equipment
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-600">
            Aurhem Trading and Consulting is engaged in the trading and
            consulting of construction machinery, heavy equipment, and allied
            construction and mining products. We provide reliable procurement,
            trade facilitation, and consulting solutions connecting
            manufacturers, suppliers, and businesses across international
            markets.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-plum hover:shadow-2xl"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-plum text-plum transition-all duration-300 group-hover:bg-plum group-hover:text-white">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <h3 className="mb-5 text-2xl font-semibold text-plum">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};