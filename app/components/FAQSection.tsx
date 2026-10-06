'use client';

import { siteContent } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";
import { motion } from "framer-motion";

export default function FAQSection() {
  const faq = siteContent.faq;

  return (
    <section id="faq" className="bg-background px-2 pb-20 pt-24 sm:px-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="mx-auto mb-10 max-w-4xl"
      >
        <SectionHeading title="Frequently Asked Questions" />
      </motion.div>
      <div className="mx-auto max-w-4xl space-y-4">
        {faq.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <FAQItem question={item.question} answer={item.answer} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
