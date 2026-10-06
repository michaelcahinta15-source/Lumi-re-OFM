'use client';

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className={`min-h-[calc(100vh-4rem)] flex w-full flex-col items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 ${className}`}>
      <div className="w-full max-w-7xl">{children}</div>
    </div>
  );
}
