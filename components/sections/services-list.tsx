"use client";

import { motion } from "framer-motion";
import { Camera, Video, Package, Film, Scissors } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography & Cinematography",
    description:
      "Professional photography and cinematography services for all your visual storytelling needs. From corporate events to personal celebrations, we capture every moment with artistic precision.",
    features: [
      "Event Photography",
      "Wedding Cinematography",
      "Corporate Documentation",
      "Aerial Photography",
    ],
  },
  {
    icon: Video,
    title: "Event Coverage",
    description:
      "Comprehensive event coverage that captures the essence and energy of your occasion. We document everything from intimate gatherings to large-scale corporate events.",
    features: [
      "Live Event Streaming",
      "Multi-Camera Setup",
      "Real-Time Editing",
      "Same-Day Highlights",
    ],
  },
  {
    icon: Package,
    title: "Product Photography",
    description:
      "Showcase your products in the best light with professional product photography. Perfect for e-commerce, catalogs, and marketing materials.",
    features: [
      "Studio Photography",
      "Lifestyle Shots",
      "360° Product Views",
      "E-commerce Ready",
    ],
  },
  {
    icon: Film,
    title: "Documentaries & Biographies",
    description:
      "Compelling documentary films and biographical content that tell powerful stories. We work with you to create narratives that resonate with audiences.",
    features: [
      "Story Development",
      "Interview Production",
      "Archival Research",
      "Post-Production",
    ],
  },
  {
    icon: Scissors,
    title: "Pre & Post Production",
    description:
      "Complete production services from concept development to final delivery. We handle every aspect of your project with professional expertise.",
    features: [
      "Script Development",
      "Color Grading",
      "Sound Design",
      "Final Delivery",
    ],
  },
];

export function ServicesList() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive photography and cinematography solutions tailored to
            your needs
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-serif font-bold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

