"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";

export function CompanyStory() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Founded 2014</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Professional Team</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Storyline Pictures Limited was founded in 2014 with a vision to
              transform the visual storytelling landscape in Uganda. What started
              as a passion project has grown into one of the country's most
              trusted photography and cinematography companies.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Over the past decade, we've had the privilege of working with
              leading institutions, corporations, and individuals, capturing
              their most important moments and telling their stories with
              cinematic excellence.
            </p>
            <p className="text-lg text-muted-foreground">
              Our commitment to quality, professionalism, and creative
              innovation has earned us a reputation for delivering exceptional
              results that exceed expectations. From intimate gatherings to
              large-scale corporate events, from product launches to
              documentaries, we bring the same level of dedication and artistry
              to every project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

