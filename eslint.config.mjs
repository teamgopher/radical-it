import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2, { SwitchCase: 1 }],
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          controlComponents: [
            'DateTimeInput',
            'EntryContent',
            'SelectField'
          ],
          assert: 'both'
        }
      ],
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
