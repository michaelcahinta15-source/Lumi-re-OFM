'use client';

import { siteContent } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import { motion } from "framer-motion";

export default function ManagementSection() {
  const { title, features } = siteContent.management;

  return (
    <section id="management" className="management-section bg-background pt-24 pb-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="mb-12"
      >
        <SectionHeading title={title} />
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
          >
            <FeatureCard
              icon={feature.icon as any}
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
