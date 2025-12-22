"use client";

import { motion } from "framer-motion";
import { Award, Heart, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest quality standards.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for visual storytelling drives us to create extraordinary work.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to stay ahead.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "You can count on us to deliver on time, every time, with professionalism.",
  },
];

export function CoreValues() {
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <value.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

