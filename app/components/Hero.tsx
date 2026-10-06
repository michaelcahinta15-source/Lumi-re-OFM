'use client';

import { siteContent } from "@/data/content";

export default function Hero() {
  const { headline, subheadline, ctaPrimary, ctaSecondary } = siteContent.hero;

  return (
    <section className="interactive-card relative mx-auto mt-8 px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70" />
        {/* Abstract light rays or gradients could go here */}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="mt-6 text-5xl font-serif text-foreground sm:text-6xl">
          {headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {subheadline}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
          <a
            href="/apply"
            className="flex h-12 w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors sm:w-auto"
          >
            {ctaPrimary}
          </a>
          <a
            href="#how-it-works"
            className="flex h-12 w-full mt-4 sm:mt-0 items-center justify-center rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition-colors sm:w-auto"
          >
            {ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
