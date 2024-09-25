import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        border: "hex(var(--border))",
        input: "hex(var(--input))",
        ring: "hex(var(--ring))",
        background: "hex(var(--background))",
        foreground: "hex(var(--foreground))",
        primary: {
          DEFAULT: "hex(var(--primary))",
          foreground: "hex(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hex(var(--secondary))",
          foreground: "hex(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hex(var(--destructive))",
          foreground: "hex(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hex(var(--muted))",
          foreground: "hex(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hex(var(--accent))",
          foreground: "hex(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hex(var(--popover))",
          foreground: "hex(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hex(var(--card))",
          foreground: "hex(var(--card-foreground))",
        },
        filter: {
          "blur-20": "blur(20px)",
          "blur-25": "blur(25px)",
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
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        moveVertical: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-100px)" },
        },
        moveHorizontal: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-100px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pop-blob": "pop-blob 5s infinite",
        "move-vertical": "moveVertical 5s ease-in-out infinite",
        "move-horizontal": "moveHorizontal 5s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
export default config;
