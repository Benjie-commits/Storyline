import { Metadata } from "next";
import { CompanyStory } from "@/components/sections/company-story";
import { VisionMission } from "@/components/sections/vision-mission";
import { CoreValues } from "@/components/sections/core-values";
import { LegalCredibility } from "@/components/sections/legal-credibility";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Storyline Pictures Limited, founded in 2014 in Uganda. Our vision, mission, core values, and commitment to professional visual storytelling.",
};

export default function AboutPage() {
  return (
    <>
      <CompanyStory />
      <VisionMission />
      <CoreValues />
      <LegalCredibility />
    </>
  );
}

