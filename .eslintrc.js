

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "airbnb-base",
        'plugin:prettier/recommended' // 添加 prettier 插件
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
    "rules": {
      "import/no-unresolved": [
        2,
        {
            "ignore": ["^@/"] // @ 是设置的路径别名
        },
      ]
    }
};
