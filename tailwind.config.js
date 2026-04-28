/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      // ─── Podium Brand Colors ─────────────────────────────────────────────────
      // All values reference CSS custom properties defined in index.css.
      // Change any variable there → entire page updates instantly.
      // Supports Tailwind opacity modifiers (e.g. bg-brand-dark/80).
      colors: {
        // Backgrounds
        "brand-dark":    "rgb(var(--brand-dark)    / <alpha-value>)",
        "brand-section": "rgb(var(--brand-section) / <alpha-value>)",
        "brand-cream":   "rgb(var(--brand-cream)   / <alpha-value>)",
        "brand-white":   "rgb(var(--brand-white)   / <alpha-value>)",
        "brand-gray":    "rgb(var(--brand-gray)    / <alpha-value>)",

        // Text
        ink:             "rgb(var(--ink)            / <alpha-value>)",
        "ink-mid":       "rgb(var(--ink-mid)        / <alpha-value>)",
        "ink-muted":     "rgb(var(--ink-muted)      / <alpha-value>)",
        "ink-light":     "rgb(var(--ink-light)      / <alpha-value>)",

        // Accents
        azure:           "rgb(var(--azure)          / <alpha-value>)",
        rust:            "rgb(var(--rust)           / <alpha-value>)",
        steel:           "rgb(var(--steel)          / <alpha-value>)",
        silver:          "rgb(var(--silver)         / <alpha-value>)",

        // Borders
        "border-warm":   "rgb(var(--border-warm)   / <alpha-value>)",
        "border-cool":   "rgb(var(--border-cool)   / <alpha-value>)",
        "border-line":   "rgb(var(--border-line)   / <alpha-value>)",

        // shadcn compatibility
        border:       "hsl(var(--border))",
        input:        "hsl(var(--input))",
        ring:         "hsl(var(--ring))",
        background:   "hsl(var(--background))",
        foreground:   "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // ─── Podium Font Families ────────────────────────────────────────────────
      fontFamily: {
        display: ["Grenette", "Georgia", "Times New Roman", "serif"],
        sans:    ["Graphik", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "ui-monospace", "monospace"],
      },

      // ─── Podium Border Radius ────────────────────────────────────────────────
      borderRadius: {
        "brand-xs":  "var(--radius-xs)",
        "brand-sm":  "var(--radius-sm)",
        "brand-md":  "var(--radius-md)",
        "brand-lg":  "var(--radius-lg)",
        "brand-xl":  "var(--radius-xl)",
        "brand-2xl": "var(--radius-2xl)",
        // shadcn
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ─── Podium Font Sizes ───────────────────────────────────────────────────
      fontSize: {
        "display-xl": ["var(--text-display-xl)", { lineHeight: "1.05" }],
        "display-lg": ["var(--text-display-lg)", { lineHeight: "1.08" }],
        "display-md": ["var(--text-display-md)", { lineHeight: "1.12" }],
        "display-sm": ["var(--text-display-sm)", { lineHeight: "1.18" }],
        "heading-xl": ["var(--text-heading-xl)", { lineHeight: "1.2"  }],
        "heading-lg": ["var(--text-heading-lg)", { lineHeight: "1.25" }],
        "heading-md": ["var(--text-heading-md)", { lineHeight: "1.3"  }],
        "heading-sm": ["var(--text-heading-sm)", { lineHeight: "1.35" }],
        "body-lg":    ["var(--text-body-lg)",    { lineHeight: "1.6"  }],
        "body-md":    ["var(--text-body-md)",    { lineHeight: "1.65" }],
        "body-sm":    ["var(--text-body-sm)",    { lineHeight: "1.7"  }],
        "label":      ["var(--text-label)",      { lineHeight: "1.4"  }],
        "caption":    ["var(--text-caption)",    { lineHeight: "1.5"  }],
      },

      // ─── Container ───────────────────────────────────────────────────────────
      maxWidth: {
        "brand": "var(--container-max)",
      },

      // ─── Animations ──────────────────────────────────────────────────────────
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        "marquee":        "marquee-x var(--marquee-duration, 55s) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up   0.2s ease-out",
      },
    },
  },
  plugins: [],
};
