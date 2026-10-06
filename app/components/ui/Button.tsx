'use client';

import React from "react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  asChild?: boolean;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  asChild = false,
  href,
  onClick,
  disabled = false,
}: ButtonProps) {
  const BaseElement = asChild || href ? "a" : "button";

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-primary-foreground hover:bg-primary/90";
      case "secondary":
        return "bg-secondary text-secondary-foreground hover:bg-secondary/90";
      case "outline":
        return "border border-primary text-primary hover:bg-primary/5";
      default:
        return "bg-primary text-primary-foreground hover:bg-primary/90";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-9 px-3 text-xs";
      case "md":
        return "h-10 px-4 text-sm";
      case "lg":
        return "h-12 px-6 text-base";
      default:
        return "h-10 px-4 text-sm";
    }
  };

  return (
    <BaseElement
      className={`flex h-10 w-full items-center justify-center rounded-md font-medium transition-colors ${disabled ? "pointer-events-none opacity-50" : ""} ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...(href ? { href } : { onClick })}
      {...(!href && !asChild ? { type: "button", disabled } : {})}
    >
      {children}
    </BaseElement>
  );
}