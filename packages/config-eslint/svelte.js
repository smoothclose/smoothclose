/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [
		'./_base',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:unicorn/recommended',
		'prettier',
		'turbo'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			// Parses svelte files so eslint can understand
			parser: 'svelte-eslint-parser',
			parserOptions: {
				// Use the typescript parser to lint the 'script' portion of the svelte file
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		// Allow empty files
		'unicorn/no-empty-file': 'off'
	}
}
