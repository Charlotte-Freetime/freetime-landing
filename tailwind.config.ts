import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Freetime brand palette — refined from the original Wix site
        cream: "#FAF6EF", // paper background
        ink: "#23201A", // warm near-black text
        saffron: {
          DEFAULT: "#E8A33D", // the original ochre header, refined
          soft: "#F6E3C2",
          deep: "#C77E14",
        },
        forest: {
          DEFAULT: "#1B5E3B", // the original hero green, deepened
          deep: "#11402A",
          soft: "#E3EFE7",
        },
        terracotta: {
          DEFAULT: "#C4502E", // from "Nuestra Misión" section
          soft: "#F4DED5",
        },
        lagoon: {
          DEFAULT: "#0E7C7B", // teal from the Freetime logo
          soft: "#DCEFEE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pop: {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        pop: "pop 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
