'use client';

import { siteContent } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const { title, steps } = siteContent.howItWorks;

  return (
    <section id="how-it-works" className="pt-24 pb-16 bg-background">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="mb-12"
      >
        <SectionHeading title={title} />
      </motion.div>
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute inset-y-0 left-1/2 -mx-0.5 w-1 bg-primary/20" />

        {/* Steps */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="interactive-card relative flex flex-col items-center space-y-4 p-6 text-center"
            >
              {/* Step number circle */}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                {step.number}
              </div>

              {/* Step content */}
              <div className="text-center">
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
