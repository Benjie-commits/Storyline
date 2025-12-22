"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle2 } from "lucide-react";

export function LegalCredibility() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Legal Credibility
            </h2>
            <p className="text-lg text-muted-foreground">
              Fully registered and compliant with all regulatory requirements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Registered Company</h3>
                  <p className="text-muted-foreground">
                    Storyline Pictures Limited is a legally registered company
                    in Uganda, operating in full compliance with all local
                    regulations and business requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Professional Standards</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest professional standards, with proper
                    contracts, insurance coverage, and ethical business practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Client Protection</h3>
                  <p className="text-muted-foreground">
                    All projects are covered by clear agreements, ensuring
                    transparency and protection for both parties.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

