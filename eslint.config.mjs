import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
          ignoreCase: true,
          allowSeparatedGroups: true
        }
      ],
      // 'import/order': [
      //   'error',
      //   {
      //     'groups': [
      //       ['builtin', 'external'], // 1st group: global
      //       ['internal', 'parent', 'sibling', 'index'] // 2nd group: everything local
      //     ],
      //     'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
      //     'newlines-between': 'always',
      //     'pathGroupsExcludedImportTypes': ['builtin', 'external']
      //   }
      // ],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'react/function-component-definition': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': ['error', { functions: 'defaultArguments' }],
      'no-unneeded-ternary': 'off',
      'comma-dangle': ['error', 'only-multiline'],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { consistent: true },
          ObjectPattern: { multiline: true },
          ImportDeclaration: { multiline: true },
          ExportDeclaration: { multiline: true }
        }
      ],
      'import/extensions': ['error', 'ignorePackages', { '': 'never', ts: 'never', tsx: 'never' }],
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': ['error', { ignore: ['\\.svg\\?react$'] }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'import/prefer-default-export': 'off'
    }
  }),
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
