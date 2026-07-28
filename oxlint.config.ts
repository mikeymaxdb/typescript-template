import { defineConfig } from 'oxlint'

// oxlint-disable-next-line no-default-export -- Default export required
export default defineConfig({
    categories: {
        correctness: 'error',
        nursery: 'error',
        pedantic: 'warn',
        perf: 'error',
        restriction: 'error',
        style: 'warn',
        suspicious: 'warn',
    },
    env: {
        browser: true,
        builtin: true,
    },
    ignorePatterns: ['dist'],
    options: {
        denyWarnings: true,
        reportUnusedDisableDirectives: 'error',
        typeAware: true,
        typeCheck: true,
    },
    plugins: [
        'eslint',
        'import',
        'oxc',
        'promise',
        'react',
        'react-perf',
        'typescript',
        'unicorn',
        'vitest',
    ],
    rules: {
        'import/no-named-export': 'off',
        'import/no-unassigned-import': 'off',
        'import/prefer-default-export': 'off',
        'no-magic-numbers': 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['tsx'],
            },
        ],
        'react/jsx-no-literals': 'off',
        'react/react-in-jsx-scope': 'off',
        'sort-imports': 'off',
        'typescript/ban-ts-comment': [
            'error',
            {
                minimumDescriptionLength: 10,
                'ts-expect-error': 'allow-with-description',
            },
        ],
        'unicorn/require-module-specifiers': 'off',
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/require-test-timeout': 'off',
    },
})
