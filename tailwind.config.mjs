/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Esto permite usar 'dark:' en clases
	theme: {
		extend: {
			//      ### Fonts
			fontFamily: {
				// #### Headings, Call- to - actions, Header Navigation
				"sans": ['"SF Pro Display"', 'sans-serif'], // Usando la fuente personalizada
				// #### Body
				// "serif": ['"Open Sans"', "serif"], // Otra fuente para el cuerpo
			},

			fontSize: {

				// #### Body Copy
				"body": "14px",

			},
			colors: {
				'hub-background': '#FFFFFF',
				'hub-border': '#E5E7EB',
				'hub-title': '#111827',
				'hub-subtitle': '#6B7280',
				'hub-background-nav': '#F9FAFB',
				'hub-inactive': '#9CA3AF',
				'hub-text': '#FFFFFF',
				'icons': '#6B7280',
				'hub-light-blue': '#3B82F6',
				'hub-dark-blue': '#1D4ED8',
				'hub-light-gray': '#6B7280',
				'hub-dark-gray': '#9CA3AF',
				// dark
				'hub-background-dark': '#0F172A',
				'hub-border-dark': '#1E293B',
				'hub-title-dark': '#F8FAFC',
				'hub-subtitle-dark': '#CBD5E1',
				'hub-background-nav-dark': '#1E293B',
				'hub-inactive-dark': '#64748B',
			},
			backgroundImage: {
				'btn-gradient': 'linear-gradient(to right, #825BDD, #5327BA)', // Gradiente para botones
			},
		},

	},
	plugins: [require('tailwindcss-animate')],

}
