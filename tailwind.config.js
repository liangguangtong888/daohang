/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          50: '#f5f5f7',
          100: '#e5e5e7',
          200: '#d2d2d7',
          300: '#b0b0b8',
          400: '#86868b',
          500: '#6e6e73',
          600: '#414144',
          700: '#2d2d30',
          800: '#1d1d1f',
          900: '#000000',
        },
        'apple-blue': '#0071e3',
        'apple-green': '#68cc45',
        'apple-purple': '#9470ce',
        'apple-pink': '#f23063',
      },
      borderRadius: {
        'apple': '12px',
        'apple-sm': '8px',
        'apple-lg': '16px',
      },
      boxShadow: {
        'apple': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'apple-hover': '0 8px 20px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
        'sf-mono': ['SF Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} 