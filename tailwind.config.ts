import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
    colors: {
      orange: {
        DEFAULT: "#e6573e",
      },
      gray: {
        DEFAULT: "#c7cac6",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
} satisfies Config;
