import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Pricing | Lumière OFM",
  description: "Transparent creator management pricing based on monthly net revenue, with no upfront fees or hidden costs.",
};

const pricingTiers = [
  {
    stage: "Launch",
    period: "Months 1–3",
    revenue: "$0–$3,000",
    fee: "25%",
    services: [
      "Account setup",
      "Chatting and fan engagement",
      "Posting",
      "Basic promotion",
      "Weekly reporting",
    ],
  },
  {
    stage: "Growth",
    period: null,
    revenue: "$3,001–$10,000",
    fee: "30%",
    services: [
      "Everything in Launch",
      "PPV strategy",
      "Custom requests",
      "Reddit, TikTok, and X growth",
      "Advanced analytics",
    ],
  },
  {
    stage: "Scale",
    period: null,
    revenue: "$10,001+",
    fee: "35–40%",
    services: [
      "Full-service management",
      "Dedicated chatter team",
      "Paid ads strategy",
      "Admin support",
      "Billing help",
    ],
  },
];

export default function PricingPage() {
  return (
    <Layout>
      <Navbar />
      <main className="px-2 pb-20 pt-28 sm:px-0">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Clear, creator-first fees
          </p>
          <h1 className="mb-4 text-4xl font-serif text-foreground sm:text-5xl">
            Pricing that grows with you
          </h1>
          <p className="text-muted-foreground">
            Our fee is a percentage of your monthly net revenue, based on your stage of growth.
          </p>
        </header>

        <section aria-label="Monthly pricing tiers" className="grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article key={tier.stage} className="interactive-card flex flex-col p-6 sm:p-8">
              <div className="mb-6">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-2xl font-serif text-foreground">{tier.stage}</h2>
                  {tier.period && (
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">Monthly net revenue: {tier.revenue}</p>
              </div>

              <p className="mb-1 text-sm text-muted-foreground">Our fee</p>
              <p className="mb-6 text-4xl font-semibold text-primary">{tier.fee}</p>

              <ul className="space-y-3">
                {tier.services.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-sm text-foreground">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section aria-labelledby="pricing-example-heading" className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="interactive-card p-6 sm:p-8">
            <h2 id="pricing-example-heading" className="mb-4 text-2xl font-serif text-foreground">
              A simple example
            </h2>
            <p className="mb-5 text-muted-foreground">You earn $2,000 net in a month at the Launch rate:</p>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Our 25% fee</dt>
                <dd className="font-medium text-foreground">$500</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-border pt-3">
                <dt className="font-medium text-foreground">You keep</dt>
                <dd className="font-semibold text-primary">$1,500</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-muted-foreground">If you earn $0, you pay $0.</p>
          </article>

          <article className="interactive-card p-6 sm:p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Optional hybrid
            </p>
            <h2 className="mb-3 text-2xl font-serif text-foreground">Dedicated 24/7 chatting</h2>
            <p className="mb-5 text-muted-foreground">
              Choose dedicated chatting from day one while keeping your commission lower.
            </p>
            <p className="mb-2 text-2xl font-semibold text-primary">$0 upfront + 20% of net</p>
            <p className="text-sm text-muted-foreground">Plus $250/month starting month 2.</p>
            <p className="mt-4 text-sm text-muted-foreground">
              The monthly fee covers a dedicated chatter seat.
            </p>
          </article>
        </section>

        <section aria-label="Pricing terms" className="mt-8 interactive-card p-6 text-center sm:p-8">
          <p className="text-lg font-semibold text-foreground">
            No upfront fees. No hidden costs. Cancel anytime with 30 days&apos; notice.
          </p>
          <Link
            href="/apply"
            className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Apply Now
          </Link>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
