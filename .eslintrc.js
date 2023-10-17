module.exports = {
   "rules": {
      "indent": [
         2,
         "tab"
      ],
      "quotes": [
         2,
         "double"
      ],
      "linebreak-style": [
         2,
         "unix"
      ],
      "semi": [
         2,
         "always"
      ]
   },
   "env": {
      "es6": true,
      "browser": true
   },
   "extends": "eslint:recommended",
   "plugins": [
      "react"
   ],
   "overrides": [
    {
       "files": "sub_dir1/**/*.js",
    }
   ],
    "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["tsconfig.json"],
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
};
