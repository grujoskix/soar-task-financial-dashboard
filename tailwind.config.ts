import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
}

export default config
