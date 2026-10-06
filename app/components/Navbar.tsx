'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/content";

export default function Navbar() {
  const { logo, links, cta } = siteContent.navbar;
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isApply = pathname === "/apply";

  return (
    <nav className="fixed w-full z-50 flex h-16 items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-1 items-center justify-start">
        <Link
          href="/"
          aria-current={isHome ? "page" : undefined}
          className={`site-nav-brand text-xl font-serif font-bold text-foreground transition-colors${isHome ? " is-active" : ""}`}
        >
          {logo}
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center hidden md:flex space-x-8">
        {links.map((link) => {
          const href = `/${link.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <Link
              key={link}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`site-nav-link text-sm font-medium${isActive ? " is-active" : ""}`}
            >
              {link}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-1 items-center justify-end">
        <Link
          href="/apply"
          aria-current={isApply ? "page" : undefined}
          className={`site-nav-cta flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors${isApply ? " is-active" : ""}`}
        >
          {cta}
        </Link>
      </div>
    </nav>
  );
}
