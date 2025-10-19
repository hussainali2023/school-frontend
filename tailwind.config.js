/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 Color Palette
      colors: {
        // Brand Primary (Professional Blue)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',  // Main
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },

        // Secondary (Teal for actions)
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',  // Main
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
        },

        // Accent (Amber for highlights)
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Main
          600: '#d97706',
        },

        // Semantic Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',

        // Neutrals
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // Background
        background: '#f8fafc',
        surface: '#ffffff',
        surfaceAlt: '#f1f5f9',
      },

      // 📝 Typography System
      fontFamily: {
        // Primary: Inter (Modern, highly readable)
        primary: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],

        // Secondary: Plus Jakarta Sans (Friendly for headings)
        secondary: ["'Plus Jakarta Sans'", "sans-serif"],

        // Mono: For code/data
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },

      fontSize: {
        xs: '0.75rem',      // 12px - Small labels, captions
        sm: '0.875rem',     // 14px - Body small, helper text
        base: '1rem',       // 16px - Default body
        lg: '1.125rem',     // 18px - Large body, subtitle
        xl: '1.25rem',      // 20px - H5
        '2xl': '1.5rem',    // 24px - H4
        '3xl': '1.875rem',  // 30px - H3
        '4xl': '2.25rem',   // 36px - H2
        '5xl': '3rem',      // 48px - H1, Hero
        '6xl': '3.75rem',   // 60px - Display
      },

      fontWeight: {
        light: 300,       // Subtle text
        normal: 400,      // Body text
        medium: 500,      // Emphasis, buttons
        semibold: 600,    // Subheadings, important labels
        bold: 700,        // Headings
        extrabold: 800,   // Display text, hero sections
      },

      lineHeight: {
        none: 1,
        tight: 1.25,      // Headings
        snug: 1.375,      // Subheadings
        normal: 1.5,      // Body text
        relaxed: 1.625,   // Large body text
        loose: 2,         // Spacious text
      },

      // 📐 Spacing System
      spacing: {
        0: '0',
        0.5: '0.125rem',  // 2px
        1: '0.25rem',     // 4px
        1.5: '0.375rem',  // 6px
        2: '0.5rem',      // 8px
        2.5: '0.625rem',  // 10px
        3: '0.75rem',     // 12px
        4: '1rem',        // 16px - Base unit
        5: '1.25rem',     // 20px
        6: '1.5rem',      // 24px
        7: '1.75rem',     // 28px
        8: '2rem',        // 32px
        10: '2.5rem',     // 40px
        12: '3rem',       // 48px
        16: '4rem',       // 64px
        20: '5rem',       // 80px
        24: '6rem',       // 96px
      },

      // Container & Layout
      maxWidth: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        full: '100%',
      },

      // 🎯 Border Radius
      borderRadius: {
        none: '0',
        sm: '0.25rem',    // 4px - Small elements
        base: '0.375rem', // 6px - Buttons, inputs
        md: '0.5rem',     // 8px - Cards, modals
        lg: '0.75rem',    // 12px - Large cards
        xl: '1rem',       // 16px - Featured sections
        '2xl': '1.5rem',  // 24px - Hero sections
        full: '9999px',   // Pills, avatars
      },

      // 🌑 Shadows
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },

      // 🔲 Component Sizes
      height: {
        'button-sm': '32px',
        'button-md': '40px',
        'button-lg': '48px',
        'input-sm': '36px',
        'input-md': '42px',
        'input-lg': '48px',
        'avatar-sm': '32px',
        'avatar-md': '40px',
        'avatar-lg': '48px',
        'avatar-xl': '64px',
        'navbar': '64px',
        'sidebar-collapsed': '64px',
        'sidebar-expanded': '256px',
      },

      width: {
        'sidebar-collapsed': '64px',
        'sidebar-expanded': '256px',
      },
    },
  },

  // 📱 Responsive Breakpoints
  screens: {
    'sm': '640px',   // Mobile landscape
    'md': '768px',   // Tablet
    'lg': '1024px',  // Desktop
    'xl': '1280px',  // Large desktop
    '2xl': '1536px', // Extra large
  },

  plugins: [],
}
