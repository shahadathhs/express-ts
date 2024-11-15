// .eslintrc.ts
import { Linter } from 'eslint';

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    node: true,
    es6: true,
  },
  plugins: [
    '@typescript-eslint',
    'sonarjs',
    'security',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  rules: {
    // Prettier settings
    'prettier/prettier': 'warn',

    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',

    // SonarJS-specific rules
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/cognitive-complexity': ['warn', 15],

    // Security rules
    'security/detect-object-injection': 'warn',
    'security/detect-non-literal-fs-filename': 'warn',

    // General quality rules
    'no-console': 'error',
    'no-shadow': 'warn',
    'eqeqeq': 'error',
    'curly': 'error',
  },
};

export default config;
