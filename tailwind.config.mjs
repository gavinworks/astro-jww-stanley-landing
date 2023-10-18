/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light-teal': '#87DCE3',
				'dark-teal': '#3B959D',
				'light-blue': '#007AC2',
				'dark-blue': '#1B2E73',
				'section-bg': '#28292D'
			}
		}
	},
	plugins: []
}
