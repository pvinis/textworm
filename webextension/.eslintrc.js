/* eslint-disable no-unused-vars */
var OFF = 0
var WARN = 1
var ERR = 2
/* eslint-enable no-unused-vars */

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	// plugins: ['@typescript-eslint', 'react'],
	extends: [
		'@decadejs/eslint-config-base',
		'@decadejs/eslint-config-react',
		// 'eslint:recommended',
		// 'plugin:import/errors',
		// 'plugin:import/warnings',
		// 'plugin:import/typescript',
		// 'plugin:react/recommended',
		// 'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'no-unused-vars': [ERR, { argsIgnorePattern: '^_' }],
		'react/react-in-jsx-scope': OFF,
	},
}
