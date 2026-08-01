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
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                'import/unambiguous': 'off',
            },
        },
        {
            files: ['*.test.ts'],
            rules: {
                'vitest/require-hook': 'warn',
            },
        },
    ],
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
        'id-length': 'off',
        'import/consistent-type-specifier-style': [
            'error',
            'prefer-top-level-if-only-type-imports',
        ],
        'import/group-exports': 'off',
        'import/no-named-export': 'off',
        'import/no-unassigned-import': 'off',
        'import/prefer-default-export': 'off',
        'max-lines-per-function': ['error', 100],
        'no-inline-comments': 'off',
        'no-magic-numbers': 'off',
        'no-ternary': 'off',
        'no-void': 'off',
        'no-warning-comments': 'off',
        'oxc/no-async-await': 'off',
        'oxc/no-optional-chaining': 'off',
        'oxc/no-rest-spread-properties': 'off',
        'react/function-component-definition': 'off',
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
        'typescript/prefer-readonly-parameter-types': 'off',
        'unicorn/filename-case': [
            'error',
            {
                case: 'camelCase',
            },
        ],
        'unicorn/no-null': 'off',
        'unicorn/require-module-specifiers': 'off',
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/require-hook': 'off',
        'vitest/require-test-timeout': 'off',
    },
})
