import { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Storyline Pictures for your photography and cinematography needs. We're here to bring your vision to life.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Ready to bring your vision to life? Let's discuss your project.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

