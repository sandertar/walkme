module.exports = {
  root: true,
  extends: ['custom', 'airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
  },
};
