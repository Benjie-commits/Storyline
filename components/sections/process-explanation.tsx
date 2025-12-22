"use client";

import { motion } from "framer-motion";
import { Lightbulb, Calendar, Camera, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Concept",
    description:
      "We begin by understanding your vision, goals, and requirements. Together, we develop a creative concept that aligns with your objectives.",
  },
  {
    icon: Calendar,
    title: "Planning",
    description:
      "Detailed planning ensures everything runs smoothly. We coordinate logistics, timelines, equipment, and team assignments.",
  },
  {
    icon: Camera,
    title: "Execution",
    description:
      "On the day, our professional team captures every moment with precision and artistry, ensuring nothing is missed.",
  },
  {
    icon: CheckCircle,
    title: "Completion",
    description:
      "Post-production brings it all together. We deliver polished, high-quality content that exceeds your expectations.",
  },
];

export function ProcessExplanation() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            From Concept to Completion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures exceptional results at every stage
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card p-6 rounded-lg border border-border h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">
                        Step {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

