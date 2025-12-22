"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Placeholder data - will be replaced with CMS data
const featuredItems = [
  {
    id: "1",
    title: "Corporate Event Coverage",
    category: "Events",
    image: "/placeholder-1.jpg",
  },
  {
    id: "2",
    title: "Product Photography",
    category: "Commercial",
    image: "/placeholder-2.jpg",
  },
  {
    id: "3",
    title: "Documentary Film",
    category: "Documentaries",
    image: "/placeholder-3.jpg",
  },
];

export function FeaturedPortfolio() {
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
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our commitment to
            excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <span className="text-sm text-white/80 mb-2">{item.category}</span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-5" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

