module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier', 'plugin:prettier/recommended'],
    plugins: ['vue'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // semi: [2, "never"],
        'prettier/prettier': [
            'error',
            {
                semi: false,
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 120,
                tabWidth: 4,
            },
        ],
        'no-unused-vars': 'warn',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}

// always warn error
