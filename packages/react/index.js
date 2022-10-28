module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:react-redux/recommended'
    ],
    plugins: [
        'react',
        'react-redux'
    ],
    rules: {
        'react/prop-types': 'off',

        'react-hooks/rules-of-hooks': [
            'error'
        ],
        'react/self-closing-comp': [
            'error'
        ],

        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: {
                    single: 1,
                    multi: 2
                }
            }
        ],
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'always',
                children: true
            }
        ],
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline'
        ],
        'react/jsx-closing-bracket-location': [
            'error',
            {
                nonEmpty: 'line-aligned',
                selfClosing: 'line-aligned'
            }
        ],
        'react/jsx-tag-spacing': [
            'error',
            {
                beforeClosing: 'never'
            }
        ],
        'react/jsx-props-no-multi-spaces': [
            'error'
        ],
        'react/jsx-wrap-multilines': [
            'error',
            {
                return: 'parens-new-line'
            }
        ],
        'react/jsx-no-constructed-context-values': [
            'error'
        ]
    }
};
