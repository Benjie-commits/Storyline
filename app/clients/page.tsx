import { Metadata } from "next";
import { ClientsDisplay } from "@/components/sections/clients-display";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Trusted by leading institutions and organizations. View our portfolio of satisfied clients and partners.",
};

export default function ClientsPage() {
  return (
    <>
      <ClientsDisplay />
    </>
  );
}

