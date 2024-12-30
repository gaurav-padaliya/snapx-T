import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00FF85", // For active green menu item
        sidebarBg: "#0B1220", // Sidebar background color
      },
      spacing: {
        18: "4.5rem", // Custom padding/margin for better spacing
        72: "18rem", // Sidebar expanded width
      },
    },
  },
  plugins: [],
} satisfies Config;
