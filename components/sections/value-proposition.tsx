"use client";

import { motion } from "framer-motion";
import { Camera, Video, Sparkles, Award } from "lucide-react";

const values = [
  {
    icon: Camera,
    title: "Professional Photography",
    description: "Capturing moments with artistic precision and technical excellence.",
  },
  {
    icon: Video,
    title: "Cinematic Storytelling",
    description: "Transforming your vision into compelling visual narratives.",
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description: "From concept to completion, we bring creativity to every project.",
  },
  {
    icon: Award,
    title: "Trusted Since 2014",
    description: "A decade of experience serving clients across Uganda and beyond.",
  },
];

export function ValueProposition() {
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
            Why Choose Storyline Pictures?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with creative vision to deliver
            exceptional results for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

