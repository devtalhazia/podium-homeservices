/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens extracted from Framer UUID-keyed CSS vars
        'nav':        'rgb(24, 24, 28)',
        'ink':        'rgb(28, 27, 24)',
        'cream-white':'rgb(255, 254, 252)',
        'crimson':    'rgb(157, 64, 60)',
        'gray-mid':   'rgb(98, 98, 101)',
        'gray-light': 'rgb(170, 170, 173)',
        'gray-100':   'rgb(220, 220, 225)',
        'gray-50':    'rgb(240, 240, 243)',
        'cream':      'rgb(247, 244, 237)',
        'warm-gray':  'rgb(128, 121, 111)',
        'blush':      'rgb(245, 236, 235)',
        'slate-mid':  'rgb(78, 97, 118)',
        'slate-light':'rgb(102, 126, 153)',
        'gray-200':   'rgb(195, 195, 200)',
        'gray-300':   'rgb(216, 216, 222)',
        'gray-400':   'rgb(140, 140, 148)',
        'ink-soft':   'rgb(78, 74, 68)',
      },
      fontFamily: {
        'graphik':       ['"Graphik Regular"', 'sans-serif'],
        'graphik-medium':['"Graphik Medium"', 'sans-serif'],
        'graphik-semi':  ['"Graphik Semibold"', 'sans-serif'],
        'graphik-bold':  ['"Graphik Bold"', 'sans-serif'],
        'grenette':      ['"Grenette Regular"', 'serif'],
        'grenette-semi': ['"Grenette SemiBold"', 'serif'],
        'grenette-semi-italic': ['"Grenette SemiBold Italic"', 'serif'],
        'grenette-bold': ['"Grenette Bold"', 'serif'],
        'editors-note':  ['"Editor\'s Note Regular"', 'serif'],
        'editors-semi':  ['"Editor\'s Note Semibold"', 'serif'],
        'editors-bold':  ['"Editor\'s Note Bold"', 'serif'],
        'fragment-mono': ['"Fragment Mono"', 'monospace'],
        'inter':         ['Inter', 'sans-serif'],
      },
      screens: {
        // Match Framer breakpoints exactly
        'tablet': '768px',
        'desktop': '1200px',
      },
      keyframes: {
        'hero-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'solution-progress': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'hero-marquee': 'hero-marquee 32s linear infinite',
        'solution-progress': 'solution-progress 5s linear forwards',
      },
    },
  },
  plugins: [],
}
