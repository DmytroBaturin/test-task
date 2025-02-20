/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			md: '4px',
  			sm: '3px'
  		},
  		colors: {
  			background: 'hsla(var(--background))',
  			foreground: 'hsla(var(--foreground))',
  			card: {
  				DEFAULT: 'hsla(var(--card))',
  				foreground: 'hsla(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsla(var(--popover))',
  				foreground: 'hsla(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsla(var(--primary))',
  				foreground: 'hsla(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsla(var(--secondary))',
  				foreground: 'hsla(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsla(var(--muted))',
  				foreground: 'hsla(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsla(var(--accent))',
  				foreground: 'hsla(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsla(var(--destructive))',
  				foreground: 'hsla(var(--destructive-foreground))'
  			},
  			border: 'hsla(var(--border))',
  			input: 'hsla(var(--input))',
  			ring: 'hsla(var(--ring))',
  			chart: {
  				'1': 'hsla(var(--chart-1))',
  				'2': 'hsla(var(--chart-2))',
  				'3': 'hsla(var(--chart-3))',
  				'4': 'hsla(var(--chart-4))',
  				'5': 'hsla(var(--chart-5))'
  			}
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
};
