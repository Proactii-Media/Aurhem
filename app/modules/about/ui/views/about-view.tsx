"use client";

import PageBanner from "~/components/PageBanner";
import { MissionSection } from "../components/mission-section";
import { ValuesSection } from "../components/values-section";
import { TeamSection } from "../components/team-section";
import { Contact } from "~/modules/home/ui/components/contact";
import { WhatWeDoSection } from "../components/what-we-do-section";

export const AboutView = () => {
  return (
    <main>
      <PageBanner
        title="About Aurhem"
        description="We are a trading and consulting business dedicated to building seamless authorised procurement and engagement of heavy machineries and equipment."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <WhatWeDoSection/>
      <MissionSection />
      <ValuesSection />
      
      <Contact />
    </main>
  );
};
