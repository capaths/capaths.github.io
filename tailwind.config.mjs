/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				licorice: {
					50: "#0A080C",
					100: '#0F060E',
					700: '#9283a4',
				},
				white: '#e6e3ec'
			},
			fontFamily: {
				'header': ['Merriweather', 'serif'],
				'body': ['Roboto', 'sans-serif'],
			},
			fontSize: {
				'2xs': '0.625rem',
				xs: '0.75rem',
				sm: '0.9rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			}
		},
	},
	plugins: [],
}
