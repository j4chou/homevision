module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'brace-style': ['error', 'stroustrup'],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true
			}
		],
		indent: ['error', 'tab'],
		semi: ['error', 'always']
	}
};
