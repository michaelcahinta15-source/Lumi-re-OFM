'use client';

import { useState } from "react";

interface InputProps {
  type?: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
  rows?: number;
}

export default function Input({
  type = "text",
  label,
  placeholder = "",
  value,
  onChange,
  error,
  className = "",
  rows,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const isTextarea = type === "textarea";

  return (
    <div className={`space-y-2 ${className}`}>
      <label
        htmlFor={`input-${label.toLowerCase().replace(/\s+/g, "-")}`}
        className={`block text-sm font-medium text-muted-foreground ${isFocused ? "text-primary" : ""} transition-colors`}
      >
        {label}
      </label>
      <div className="relative">
        {isTextarea ? (
          <textarea
            id={`input-${label.toLowerCase().replace(/\s+/g, "-")}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`block w-full rounded-md border border-input/50 bg-background px-3 py-2 text-sm ring-offset-0 placeholder:text-muted-foreground/40 focus:border-primary focus:ring-primary focus:ring-opacity-20 sm:text-base ${error ? "border-destructive" : ""} ${className}`}
            rows={rows}
          />
        ) : (
          <input
            id={`input-${label.toLowerCase().replace(/\s+/g, "-")}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`block w-full rounded-md border border-input/50 bg-background px-3 py-2 text-sm ring-offset-0 placeholder:text-muted-foreground/40 focus:border-primary focus:ring-primary focus:ring-opacity-20 sm:text-base ${error ? "border-destructive" : ""} ${className}`}
          />
        )}
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    </div>
  );
}