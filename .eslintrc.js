

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "airbnb-base",
        'plugin:jest/recommended', //jest
        'plugin:prettier/recommended', // 添加 prettier 插件
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    'settings': {
      "import/resolver": {
        "webpack": {
          "config": "node_modules/@vue/cli-service/webpack.config.js"
        }
      }
    },
    "ecmaFeatures":{
      "restParams": true,
      "spread": true
    },
    "rules": {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
     ],
      "no-unused-vars":"off",
      "import/no-unresolved": [
        2,
        {
            "ignore": ["^@/"] // @ 是设置的路径别名
        },
      ]
    }
};
