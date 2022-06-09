module.exports = {
	content: ["src/index.html"],
	theme: {
		extend: {
			keyframes: {
				"gradient-shift": {
					"0%": { "background-position": "right" },
					"100%": { "background-position": "left" }
				}
			},
			animation: {
				"gradient-shift": "gradient-shift 5s ease alternate infinite"
			}
		},
	},
	plugins: [],
}
