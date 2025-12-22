import { Metadata } from "next";
import { PortfolioGallery } from "@/components/sections/portfolio-gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of professional photography and cinematography work. Filter by category and view our best projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioGallery />
    </>
  );
}

