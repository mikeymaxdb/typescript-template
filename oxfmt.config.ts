import { defineConfig } from 'oxfmt'

// oxlint-disable-next-line no-default-export -- Default export required
export default defineConfig({
    ignorePatterns: ['public', '.claude'],
    printWidth: 90,
    proseWrap: 'always',
    semi: false,
    singleQuote: true,
    sortImports: true,
    tabWidth: 4,
    trailingComma: 'all',
})
