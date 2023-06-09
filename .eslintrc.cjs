module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["prettier", "react", "@typescript-eslint"],
  rules: {
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "prefer-const": 2,
    "prefer-regex-literals": 0,
    "consistent-return": 1,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-shadow": 0,
    "@typescript-eslint/no-unused-expressions": 0,
    "max-len": [1, { code: 140, ignoreComments: true }],
    "no-console": 1,
    "no-trailing-spaces": 0,
    "no-return-assign": 0,
    "no-var": 2,
    "no-bitwise": 0,
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "no-useless-escape": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/media-has-caption": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/alt-text": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
    "react/no-unescaped-entities": 0,
    "react/button-has-type": 0,
    "react-hooks/rules-of-hooks": 1,
    "react/prop-types": 1,
    "react-hooks/exhaustive-deps": 0,
    "react/require-default-props": 0,
    "react/no-array-index-key": 1,
  },
};
