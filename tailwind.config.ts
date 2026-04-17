import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        display: ['Bungee', 'sans-serif'],
        body: ['Fredoka', 'sans-serif'],
      },
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
        orange: {
          DEFAULT: "hsl(var(--orange))",
          foreground: "hsl(var(--orange-foreground))",
        },
        night: {
          DEFAULT: "hsl(var(--night))",
          glow: "hsl(var(--night-glow))",
        },
        star: "hsl(var(--star))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-sky': 'var(--gradient-sky)',
        'gradient-fire': 'var(--gradient-fire)',
        'gradient-night': 'var(--gradient-night)',
        'gradient-rainbow': 'var(--gradient-rainbow)',
      },
      boxShadow: {
        pop: 'var(--shadow-pop)',
        card: 'var(--shadow-card)',
        glow: 'var(--shadow-glow)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "drive-across": {
          "0%": { transform: "translateX(-30vw)" },
          "100%": { transform: "translateX(130vw)" },
        },
        "drive-back": {
          "0%": { transform: "translateX(130vw) scaleX(-1)" },
          "100%": { transform: "translateX(-30vw) scaleX(-1)" },
        },
        "bounce-soft": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "wiggle": {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "float-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "twinkle": {
          "0%,100%": { opacity: "0.3", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        "float-heart": {
          "0%": { transform: "translateY(110vh) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "90%": { opacity: "0.9" },
          "100%": { transform: "translateY(-20vh) translateX(40px) rotate(20deg)", opacity: "0" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 30px hsl(45 100% 65% / 0.6)" },
          "50%": { boxShadow: "0 0 80px hsl(45 100% 65% / 0.9)" },
        },
        "shake": {
          "0%,100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "drive-across": "drive-across 8s linear infinite",
        "drive-back": "drive-back 10s linear infinite",
        "bounce-soft": "bounce-soft 2.5s ease-in-out infinite",
        "wiggle": "wiggle 1.5s ease-in-out infinite",
        "float-up": "float-up 0.8s ease-out forwards",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "shake": "shake 0.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
