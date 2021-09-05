export const root = true;
export const extends = ['eslint:recommended', 'prettier'];
export const plugins = ['svelte3'];
export const overrides = [
	{
		files: ['*.svelte'],
		processor: 'svelte3/svelte3'
	}
];
export const parserOptions = {
	sourceType: 'module',
	ecmaVersion: 2019
};
export const env = {
	browser: true,
	es2017: true,
	node: true
};
