module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'import/order': 0,
        'no-mixed-operators': 0,
        'camelcase': 0,
        'import/extensions': 0,
        'space-in-parens': 0,
        'object-shorthand': 0,
        'func-names': 0,
        'eol-last': 0,
        'arrow-parens': 0,
        'no-shadow': 0,
        'no-trailing-spaces': 0,
        'no-param-reassign': 0,
        'semi': 0,
        "comma-dangle": 0,
        "indent": ["error", 4],
        'max-len': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
