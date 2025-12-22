"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Mugerwa Abbey",
    role: "Director",
    bio: "Visionary leader with extensive experience in visual storytelling and business development.",
    image: "/team-abbey.jpg",
  },
  {
    name: "Segawa Shakim",
    role: "Director / Photographer",
    bio: "Creative director and master photographer specializing in event coverage and commercial photography.",
    image: "/team-shakim.jpg",
  },
  {
    name: "Kwerwanaho Joel",
    role: "Cinematographer",
    bio: "Award-winning cinematographer with expertise in documentary filmmaking and narrative storytelling.",
    image: "/team-joel.jpg",
  },
  {
    name: "Nakigudde Sheilah",
    role: "Marketeer",
    bio: "Strategic marketing professional driving brand growth and client relationships.",
    image: "/team-sheilah.jpg",
  },
];

export function TeamMembers() {
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
            Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the talented professionals behind Storyline Pictures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6 aspect-square rounded-full overflow-hidden bg-muted mx-auto w-48">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
              <p className="text-primary mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

