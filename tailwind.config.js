/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
			colors: {
				'maxxgray':'#3d3d3d',
				'maxxred': '#bb1f25',
				'maxxblue': '#0d4b6e'
			},
			fontFamily: {
				'helv': ['Helvetica Neue', 'sans-serif', 'ui-sans-serif', 'system-ui'],
				'bask': ['Baskervville', 'serif','ui-serif', 'system-ui']
			}
		},
  },
  plugins: [],
}
