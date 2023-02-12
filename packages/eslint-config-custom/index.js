module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'next',
    'turbo',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  plugins: ['turbo', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  settings: {
    typescript: {
      alwaysTryTypes: true
    }
  },
  rules: {
    'prettier/prettier': ['error'], // prettier here works as eslint plugin which overrides eslint rules
    'turbo/no-undeclared-env-vars': 'error', // Automatically flag env vars missing from turbo.json
    'react/jsx-props-no-spreading': 'off',
    'arrow-body-style': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-delete-var': 'error',
    'no-var': 'error',
    'no-restricted-exports': 'off',
    'prefer-const': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'import/no-extraneous-dependencies': 'off', // * temporary, conflicts with manypkg check, before we can remove this, we need to fix the manypkg check
    'import/prefer-default-export': 'off', // * temporary, needs to dive deeper into this
    // * fixes build
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never'
    //   }
    // ]
    'import/extensions': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn'
  },
  overrides: [
    {
      files: ['./app/**/layout.tsx'],
      rules: {
        '@next/next/no-head-element': 'off'
      }
    },
    {
      files: ['**/typed-keys-props.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off' // * temporary
      }
    }
  ],
  ignorePatterns: ['**/*.js', '**/*.json', 'node_modules', '.turbo']
}
