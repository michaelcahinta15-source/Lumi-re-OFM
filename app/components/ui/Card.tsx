import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border border-background/50 bg-background/50 p-6 ${className}`}>
      {children}
    </div>
  );
}
