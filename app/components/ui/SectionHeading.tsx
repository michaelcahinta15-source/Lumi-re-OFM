'use client';

import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`mb-12 text-4xl font-serif text-center text-foreground ${className}`}>
      <span className="relative">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-0.5 bg-primary" />
      </span>
    </h2>
  );
}
