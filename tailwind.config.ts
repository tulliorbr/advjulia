import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-dark': '#1a0f10',
        'secondary': '#845e2c',
        'accent': '#c0988a',
        'dark-brown': '#5e2e18',
        'light-brown': '#C4A484',
        'whatsapp': '#25D366',
      },
    },
  },
  plugins: [],
}

export default config

