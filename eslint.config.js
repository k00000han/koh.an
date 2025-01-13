import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';


export default [
  {
    files:
        ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
  },
  {
    languageOptions:
        {
          globals: globals.browser
        }
  },
  {
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  configPrettier,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/ban-ts-comment': ['warn'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-var-requires': ['error'],
      'react/jsx-uses-vars': ['error'],
      'react/jsx-max-props-per-line': ['warn', { 'maximum': 3 }],
      'react/jsx-no-undef': ['error'],
      'react/react-in-jsx-scope': 'off',
      'no-console': ['warn'],
      'no-trailing-spaces': ['off'],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'eol-last': ['error', 'always'],
      'prettier/prettier': 'error',
    },
  },
];

