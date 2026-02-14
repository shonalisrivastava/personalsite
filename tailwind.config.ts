import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        accent: '#7c3aed',
        soft: '#f5f3ff'
      }
    }
  },
  plugins: []
};

export default config;
