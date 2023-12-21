/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['eslint:recommended'],
	env: {
		es2022: true
	},
	// Tell ESLint not to ignore dot-files, which are ignored by default.
	ignorePatterns: ['!.*.js'],
	// Global parser options.
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module'
	}
}
