"use client";

import { motion } from "framer-motion";

// Placeholder client data - will be replaced with CMS data
const clients = [
  { name: "Client 1", logo: "/client-1.png" },
  { name: "Client 2", logo: "/client-2.png" },
  { name: "Client 3", logo: "/client-3.png" },
  { name: "Client 4", logo: "/client-4.png" },
  { name: "Client 5", logo: "/client-5.png" },
  { name: "Client 6", logo: "/client-6.png" },
];

export function ClientLogos() {
  return (
    <section className="py-16 md:py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Trusted By Leading Organizations
          </h2>
          <p className="text-muted-foreground">
            We're proud to work with institutions and businesses across Uganda
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-full h-16 bg-muted rounded flex items-center justify-center text-muted-foreground text-sm">
                {client.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

