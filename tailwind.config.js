export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        body: '#0A0F1E',
        surface: '#111827',
        glow: '#60A5FA',
        accent: '#93C5FD',
        primary: '#E8F5FF',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(96, 165, 250, 0.18)',
        glass: '0 20px 80px rgba(8, 15, 30, 0.45)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(96, 165, 250, 0.12), transparent 30%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
