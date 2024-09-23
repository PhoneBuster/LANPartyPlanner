// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    {
        'languageOptions': {
            'globals': {
                'browser': true,
                'es2021': true,
                'node': true,
            },
        },
        'rules': {
            'indent': [
                'error',
                4,
            ],
            'linebreak-style': [
                'error',
                'unix',
            ],
            'quotes': [
                'error',
                'single',
            ],
            'semi': [
                'error',
                'always',
            ],
            'comma-dangle': ['error', 'always-multiline'],
        },
    },
);
