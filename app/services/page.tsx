import { Metadata } from "next";
import { ServicesList } from "@/components/sections/services-list";
import { ProcessExplanation } from "@/components/sections/process-explanation";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive photography and cinematography services: Event coverage, product photography, documentaries, biographies, and pre & post production.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesList />
      <ProcessExplanation />
    </>
  );
}

