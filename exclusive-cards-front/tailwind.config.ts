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
        'vista-blue': '#8EA4D2',
        'glaucous': '#6279B8',
        'yinmn-blue': '#49516F',
        'hookers-green': '#496F5D',
        'shamrock-green': '#4C9F70',
        'indian-red': '#DB5461',
        'snow': '#FDF7FA',
        'eerie-black': '#181818',
      }
    },
  },
  plugins: [],
}
export default config
