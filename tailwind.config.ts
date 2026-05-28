import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7A0016',
        'primary-light': '#9B0020',
        'primary-dark': '#5C0010',
        accent: '#C5A059',
        'accent-light': '#D4B570',
        'accent-dark': '#A8863A',
        'bg-main': '#FAFAFA',
        'bg-card': '#F5F5F7',
        'bg-dark': '#0B0B0C',
        'bg-card-dark': '#161618',
        'text-main': '#111827',
        'text-muted': '#6B7280',
        'text-dark': '#F3F4F6',
        'text-dark-muted': '#9CA3AF',
        'border-light': '#E5E7EB',
        'border-dark': '#2A2A2E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400% 0' },
          '100%': { backgroundPosition: '400% 0' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
            filter: 'blur(6px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0px)',
          },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(197, 160, 89, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(197, 160, 89, 0.6), 0 0 80px rgba(197, 160, 89, 0.2)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.92)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        lineExpand: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.8)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        arrowSlide: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        blobMove: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        cardReveal: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 4s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.8s ease-out forwards',
        fadeInRight: 'fadeInRight 0.8s ease-out forwards',
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        spin360: 'spin360 0.5s ease-in-out',
        glowPulse: 'glowPulse 2.5s ease-in-out infinite',
        scaleIn: 'scaleIn 0.6s ease-out forwards',
        lineExpand: 'lineExpand 0.6s ease-out forwards',
        countUp: 'countUp 0.8s ease-out forwards',
        arrowSlide: 'arrowSlide 1.5s ease-in-out infinite',
        gradientShift: 'gradientShift 4s ease infinite',
        blobMove: 'blobMove 8s ease-in-out infinite',
        cardReveal: 'cardReveal 0.4s ease-out forwards',
        scrollBounce: 'scrollBounce 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C5A059 0%, #E8D5A3 50%, #C5A059 100%)',
        'gradient-primary': 'linear-gradient(135deg, #5C0010 0%, #7A0016 50%, #9B0020 100%)',
        'gradient-gold-red': 'linear-gradient(to right, #C5A059, #E8D5A3, #7A0016)',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
