'use client';

import { siteContent } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function AssuranceSection() {
  const { title, items } = siteContent.assurance;

  return (
    <section id="assurance" className="pt-24 pb-16 bg-background">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="mb-12"
      >
        <SectionHeading title={title} />
      </motion.div>
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="interactive-card flex items-start space-x-3 p-5"
          >
            <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
            <p className="text-muted-foreground">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
