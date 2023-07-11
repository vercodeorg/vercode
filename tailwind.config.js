/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1A1A1A',
        'strong-gray': '#31353A',
        'medium-gray': '#D9D9D9',
        'light-gray': '#6A6A6A',
        'gray-background': '#F5F5F7',
        'dark-purple': '#3F0065',
        'light-purple': '#B911F3',
        'level-easy': '#34B949',
        'level-medium': '#D7CF15',
        'level-hard': '#FF3124'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
