import { Hero } from "@/components/sections/hero";
import { FeaturedPortfolio } from "@/components/sections/featured-portfolio";
import { ClientLogos } from "@/components/sections/client-logos";
import { ValueProposition } from "@/components/sections/value-proposition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "From Concept to Completion. Professional photography and cinematography services in Uganda since 2014.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <FeaturedPortfolio />
      <ClientLogos />
    </>
  );
}

