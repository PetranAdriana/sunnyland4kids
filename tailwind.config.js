/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
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
        // Primary color with variants
        primary: {
          DEFAULT: "#FF6B6B", // Coral
          50: "#FFE5E5",
          100: "#FFCCCC",
          200: "#FFA3A3",
          300: "#FF8A8A",
          400: "#FF7777",
          500: "#FF6B6B",
          600: "#FF5252",
          700: "#FF3939",
          800: "#FF2020",
          900: "#FF0707",
          950: "#EB0000",
        },
        // Secondary color with variants
        secondary: {
          DEFAULT: "#4ECDC4", // Teal/Turquoise
          50: "#E0F7F5",
          100: "#C1F0EB",
          200: "#94E6DE",
          300: "#67DCD1",
          400: "#4ECDC4",
          500: "#33B9B0",
          600: "#299992",
          700: "#1F7974",
          800: "#155A56",
          900: "#0B3A38",
          950: "#062A28",
        },
        // Accent color with variants
        accent: {
          DEFAULT: "#FFD166", // Yellow/Gold
          50: "#FFFAEB",
          100: "#FFF6D6",
          200: "#FFECAD",
          300: "#FFE285",
          400: "#FFD96C",
          500: "#FFD166",
          600: "#FFC433",
          700: "#FFB700",
          800: "#D69A00",
          900: "#A37400",
          950: "#704F00",
        },
        // Neutral shades
        neutral: {
          DEFAULT: "#2A2D34",
          50: "#F5F5F6",
          100: "#EAEAEC",
          200: "#D0D1D4",
          300: "#B6B8BC",
          400: "#9C9FA4",
          500: "#82868C",
          600: "#686B73",
          700: "#4E5159",
          800: "#2A2D34",
          900: "#1F2126",
          950: "#15161A",
        },
        // Background shades
        background: "#F8F9FA",
        foreground: "#2A2D34",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
