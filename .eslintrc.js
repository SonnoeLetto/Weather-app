module.exports = {
  root: true,
  extends: [
    '@react-native',
    '@react-native-community',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: ['coverage'],
  plugins: ['eslint-plugin-import', '@tanstack/query'],
  rules: {
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
    'no-void': 0,
    'no-console': 1,
    'no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/ban-ts-comment': 0,
    'react-native/no-inline-styles': 0,
    'react/no-unstable-nested-components': 0,
    'no-shadow': [0],
    curly: [2],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react+(|-native)'],
      },
    ],
  },
};
