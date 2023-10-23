/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}",],
  breakpoints: {
    'custom': '500px', // Add your custom breakpoint here
  },
	theme: {
		extend: {},
    fontFamily: {
      'sans': ['Assistant'],
      'serif': ['ui-sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
	},
	plugins: [],
};
