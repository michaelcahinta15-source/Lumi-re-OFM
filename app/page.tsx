'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="mt-12 space-y-20 pb-16 sm:mt-16"
      >
        <section aria-labelledby="company-background-title" className="space-y-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Company Background
            </p>
            <h2 id="company-background-title" className="text-3xl font-semibold text-foreground sm:text-4xl">
              More Engagement. Better Management. Real Experience.
            </h2>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="interactive-card p-6">
              <p className="text-muted-foreground">
                We are a growing OnlyFans management agency built by professionals who started from the ground up as creators’ chatters and progressed into Supervisors and Quality Assurance roles.
              </p>
            </article>
            <article className="interactive-card p-6">
              <p className="text-muted-foreground">
                With hands-on experience in subscriber engagement, customer communication, sales, content promotion, and account management, our team has supported numerous OnlyFans creators and understands what it takes to keep an account active, engaging, and professionally managed.
              </p>
            </article>
            <article className="interactive-card p-6">
              <p className="text-muted-foreground">
                Today, we operate as a dedicated 5–10 person team focused on providing reliable creator management, subscriber communication, content support, and performance monitoring.
              </p>
            </article>
            <article className="interactive-card p-6">
              <p className="text-muted-foreground">
                What sets us apart is our experience. We know the industry from the inside—from handling conversations directly with subscribers to managing teams and maintaining high quality standards.
              </p>
            </article>
            <article className="interactive-card p-6 md:col-span-2">
              <p className="mx-auto max-w-4xl text-center text-muted-foreground">
                Our goal is simple: help creators focus on their content while we handle the day-to-day management, engagement, and support needed to grow their presence and build long-term success.
              </p>
            </article>
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Management Preview */}
          <section className="interactive-card flex flex-col items-center space-y-6 p-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Professional Management</h2>
            <p className="text-muted-foreground max-w-2xl">
              Transparent, creator-first management that handles the business so you can focus on creating.
            </p>
            <Link
              href="/management"
              className="flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Learn More
            </Link>
          </section>

          {/* Pricing Preview */}
          <section className="interactive-card flex flex-col items-center space-y-6 p-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl">
              Clear commission tiers based on monthly net revenue, with no upfront fees or hidden costs.
            </p>
            <Link
              href="/pricing"
              className="flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Pricing
            </Link>
          </section>

          {/* Assurance Preview */}
          <section className="interactive-card flex flex-col items-center space-y-6 p-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Our Commitment to You</h2>
            <p className="text-muted-foreground max-w-2xl">
              Written contracts, transparent reporting, privacy protection, and dedicated support.
            </p>
            <Link
              href="/assurance"
              className="flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Learn More
            </Link>
          </section>

          {/* Call to Action */}
          <section className="interactive-card space-y-6 p-8 md:col-span-2">
            <h2 className="text-3xl font-semibold text-center text-foreground">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Join our community of creators who are taking control of their careers with transparent, professional management.
            </p>
            <Link
              href="/apply"
              className="flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors mx-auto"
            >
              Apply Now
            </Link>
          </section>
        </div>
      </motion.div>
      <Footer />
    </Layout>
  );
}