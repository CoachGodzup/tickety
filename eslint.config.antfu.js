import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  typescript: true,
  plugins: [],
})
.concat({
  files: ['**/*.tsx', '**/*.ts'],
  plugins: {
    '@next/next': {},
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
})