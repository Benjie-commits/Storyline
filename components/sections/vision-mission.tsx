"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              To be the leading visual storytelling company in East Africa,
              recognized for our creative excellence, technical expertise, and
              unwavering commitment to bringing our clients' visions to life.
              We envision a future where every story is told with cinematic
              beauty and professional precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              To provide exceptional photography and cinematography services
              that capture the essence of every moment, event, and story. We
              are committed to delivering premium quality work, building lasting
              relationships with our clients, and continuously innovating to
              exceed industry standards. From concept to completion, we ensure
              every project reflects our dedication to excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

