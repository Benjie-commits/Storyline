"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-serif font-bold mb-6">Get In Touch</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <a
              href="tel:+256XXXXXXXXX"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              +256 XXX XXX XXX
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <a
              href="mailto:info@storylinepictures.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              info@storylinepictures.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-muted-foreground">
              Kampala, Uganda
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-2">Ready to Start Your Project?</h3>
        <p className="text-sm text-muted-foreground">
          We're here to help bring your vision to life. Reach out to discuss
          your project requirements and get a customized quote.
        </p>
      </div>
    </motion.div>
  );
}

