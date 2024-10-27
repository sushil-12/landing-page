/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        danger: "var(--danger)",
        lightersecondary: " var(--lighter-secondary)"
      },
      width: {
        'clamp-365': 'clamp(365px, 10vw + 20px, 500px)', // Example for clamp width
        'clamp-500': 'clamp(450px, 15vw + 25px, 600px)', // Example for clamp width
      },
      height: {
        'clamp-365': 'clamp(365px, 10vw + 20px, 500px)', // Example for clamp height
        'clamp-500': 'clamp(450px, 15vw + 25px, 600px)', // Example for clamp height
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      fontSize: {
        'responsive-28': 'clamp(1.5rem, 2vw + 1rem, 28px)', // Minimum 1.5rem, scales with screen, maxes at 28px
        'responsive-38': 'clamp(1rem, 2vw + 0.4rem, 2.375rem)', // Minimum 1.5rem, scales with screen, maxes at 38px (2.375rem)
        'responsive-64': 'clamp(2rem, 3vw + 0.6rem, 4rem)', // Minimum 2rem (32px), fluid scaling, maximum 4rem (64px)
      },
    },
  },
  plugins: [],
};
