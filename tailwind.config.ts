import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Luxury color palette
        charcoal: {
          50: "#1a1a1a",
          100: "#151515",
          200: "#121212",
          300: "#0f0f0f",
          400: "#0a0a0a",
          500: "#050505",
          600: "#030303",
          700: "#020202",
          800: "#010101",
          900: "#000000",
          950: "#000000",
        },
        champagne: {
          50: "#fdf6e3",
          100: "#f8f4e3",
          200: "#f3efe0",
          300: "#e9e5cd",
          400: "#dfdbba",
          500: "#d4af37", // Main champagne-gold
          600: "#a98b2c",
          700: "#836821",
          800: "#5d4816",
          900: "#372c0d",
          950: "#1e1606",
        },
        ivory: {
          50: "#fdf6e3",
          100: "#f8f4e3",
          200: "#f3efe0",
          300: "#e9e5cd",
          400: "#dfdbba",
          500: "#d4af37",
          600: "#a98b2c",
          700: "#836821",
          800: "#5d4816",
          900: "#372c0d",
          950: "#1e1606",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "fade-up": "fade-up 0.8s ease-out",
        "fade-down": "fade-down 0.8s ease-out",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
      fontFamily: {
        // Elegant serif for headings
        serif: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        // Clean sans for body
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;