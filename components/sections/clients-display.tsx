"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

// Placeholder client data - will be replaced with CMS data
const clients = [
  { name: "Ministry of Education", category: "Government" },
  { name: "Uganda Revenue Authority", category: "Government" },
  { name: "Bank of Uganda", category: "Financial" },
  { name: "Uganda Airlines", category: "Aviation" },
  { name: "MTN Uganda", category: "Telecommunications" },
  { name: "Airtel Uganda", category: "Telecommunications" },
  { name: "Stanbic Bank", category: "Financial" },
  { name: "Centenary Bank", category: "Financial" },
];

export function ClientsDisplay() {
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
            Our Clients
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading institutions and organizations across Uganda
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.category}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            We're proud to have worked with numerous other clients across various
            industries. Contact us to learn more about our client portfolio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

