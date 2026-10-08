'use client';

import { siteContent } from "@/data/content";

export default function Footer() {
  const { logo } = siteContent.navbar;

  return (
    <footer className="pt-12 pb-8 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-serif font-bold text-foreground">{logo}</span>
            <p className="text-sm text-muted-foreground">
              Manager to Model: Transparent, professional creator management
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6">
            <a href="/management" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Management
            </a>
            <a href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="/benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="/assurance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Assurance
            </a>
            <a href="/apply" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Apply
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-4">
            <span className="text-xs text-muted-foreground">
              <strong>18+ Notice:</strong> This website contains content intended for viewers 18 years of age or older.
            </span>
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            © 2026 Lumière OFM. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
