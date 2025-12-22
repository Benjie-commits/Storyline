"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Filter } from "lucide-react";

// Placeholder data - will be replaced with CMS data
const portfolioItems = [
  {
    id: "1",
    title: "Corporate Event 2024",
    category: "Events",
    image: "/portfolio-1.jpg",
  },
  {
    id: "2",
    title: "Product Launch",
    category: "Commercial",
    image: "/portfolio-2.jpg",
  },
  {
    id: "3",
    title: "Wedding Celebration",
    category: "Events",
    image: "/portfolio-3.jpg",
  },
  {
    id: "4",
    title: "Documentary Series",
    category: "Documentaries",
    image: "/portfolio-4.jpg",
  },
  {
    id: "5",
    title: "Brand Campaign",
    category: "Commercial",
    image: "/portfolio-5.jpg",
  },
  {
    id: "6",
    title: "Conference Coverage",
    category: "Events",
    image: "/portfolio-6.jpg",
  },
];

const categories = ["All", "Events", "Commercial", "Documentaries"];

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

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
            Our Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of professional photography and cinematography work
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer"
                onClick={() => setSelectedItem(item.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <span className="text-sm text-white/80 mb-2">{item.category}</span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-5" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="bg-card rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted" />
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {portfolioItems.find((item) => item.id === selectedItem)?.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {portfolioItems.find((item) => item.id === selectedItem)?.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

