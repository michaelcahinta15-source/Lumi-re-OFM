'use client';

import { siteContent } from "@/data/content";
import { pricingConfig } from "@/data/pricing";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingTier from "@/components/ui/PricingTier";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function BenefitsSection() {
  const { supportBenefits, title, baseSalary, bonusStructure, overview, recoupment } = siteContent.benefits;
  const { baseSalary: baseSalaryPricing, bonusStructure: bonusArray, recoupment: recoupmentPricing } = pricingConfig;

  return (
    <section id="benefits" className="pt-24 pb-16 bg-background">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="mb-12"
      >
        <SectionHeading title={title} />
      </motion.div>

      <section aria-labelledby="support-benefits-heading" className="mb-16">
        <h2
          id="support-benefits-heading"
          className="mb-8 text-center text-2xl font-serif font-semibold text-foreground sm:text-3xl"
        >
          {supportBenefits.title}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportBenefits.items.map((item, index) => (
            <motion.li
              key={item}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="interactive-card flex items-center gap-3 p-5"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                <Check aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="font-medium text-foreground">{item}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Base Salary */}
        <motion.div
          key="base-salary"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="interactive-card p-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">{baseSalary.title}</h3>
            <p className="text-muted-foreground">{baseSalary.description}</p>
            <div className="mt-4 p-4 rounded-lg border border-background/50 bg-background/50">
              <p className="text-2xl font-bold text-primary">${baseSalaryPricing.amount}/mo</p>
              <p className="text-sm text-muted-foreground">Guaranteed minimum</p>
            </div>
          </div>
        </motion.div>

        {/* Bonus Structure */}
        <motion.div
          key="bonus-structure"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="interactive-card p-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">{bonusStructure.title}</h3>
            <p className="text-muted-foreground">{bonusStructure.description}</p>
            <div className="space-y-4">
              {bonusArray.map((bonus, index) => (
                <PricingTier
                  key={index}
                  type={bonus.type}
                  rate={bonus.rate}
                  description={bonus.description}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          key="overview"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="interactive-card mt-12 p-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-center text-foreground">{overview.title}</h3>
            <p className="max-w-xl mx-auto text-muted-foreground">{overview.description}</p>
            <div className="mt-6 flex items-center justify-center space-x-6">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">Base Salary</p>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">${baseSalaryPricing.amount}</span>
                </div>
              </div>
              <div className="w-0.5 h-10 bg-primary/20" />
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">Bonuses</p>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recoupment */}
        <motion.div
          key="recoupment"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="interactive-card mt-12 p-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">{recoupment.title}</h3>
            <p className="text-muted-foreground">{recoupment.description}</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Equipment:</span>
                <span className="text-foreground">${recoupmentPricing.caps.equipment}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ad Spend:</span>
                <span className="text-foreground">${recoupmentPricing.caps.adSpend}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Setup Costs:</span>
                <span className="text-foreground">${recoupmentPricing.caps.setupCosts}</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground/70">
              All recoupment terms are clearly defined in your contract with no hidden deductions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}