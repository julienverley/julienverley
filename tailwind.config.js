/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				custom1: "#30332e",
				custom2: "#4C5760",
				custom3: "#DCE0D9",
				custom4: "#F39237",
			},
		},
	},
	plugins: [],
};
