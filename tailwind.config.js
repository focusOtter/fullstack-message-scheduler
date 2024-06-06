import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					'base-100': '#17191E',
				},
			},
			'emerald',
		],
	},
	plugins: [daisyui],
}
