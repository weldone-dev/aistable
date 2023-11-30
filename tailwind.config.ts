import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(80%)'}
        }
      },
      animation: {
        wiggle: 'wiggle 5s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
