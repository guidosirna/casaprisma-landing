/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        prisma: {
          teal: '#1a9e8f',
          'teal-dark': '#158578',
          amber: '#e8973e',
          'amber-dark': '#d4832a',
          navy: '#2d3a6e',
          'navy-dark': '#232e58',
          olive: '#8bb83a',
          'olive-dark': '#749c2e',
          cream: '#faf8f5',
          'cream-dark': '#f0ece6',
          charcoal: '#2a2a2a',
          purple: '#6b21a8',
          'purple-dark': '#581c87',
          coral: '#e06060',
          'coral-dark': '#c44e4e',
        }
      }
    },
  },
  plugins: [],
};
