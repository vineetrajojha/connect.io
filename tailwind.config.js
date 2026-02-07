/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#3B82F6', // Primary Blue
  				dark: '#1E40AF', // Primary Dark
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#14B8A6', // Accent Teal
  				foreground: '#FFFFFF'
  			},
  			accent: {
  				DEFAULT: '#8B5CF6', // Accent Purple
  				foreground: '#FFFFFF'
  			},
  			background: '#FAFBFC',
  			surface: '#FFFFFF',
  			border: '#E5E7EB',
  			text: {
  				primary: '#1F2937',
  				secondary: '#6B7280',
  				tertiary: '#9CA3AF'
  			},
  			success: '#10B981',
  			warning: '#F59E0B',
  			error: '#EF4444',
  			info: '#3B82F6'
  		},
  		fontFamily: {
  			sans: ['Inter', 'sans-serif'],
  			heading: ['Plus Jakarta Sans', 'sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
