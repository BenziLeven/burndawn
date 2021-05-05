module.exports = {
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2018
    },
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    plugins: [
        "import"
    ],
    "rules": {
        "array-bracket-spacing": ["error", "never"],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
        "block-spacing": "error",
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "curly": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "func-names": ["error", "never"],
        "generator-star-spacing": ["error", "after"],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "import/newline-after-import": ["error",  { count: 1 }],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "new-parens": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-confusing-arrow": ["error", { "allowParens": true }],
        "no-console": "error",
        "no-empty": ["error", { "allowEmptyCatch": true }],
        "no-eval": "error",
        "no-extend-native": "error",
        "no-implied-eval": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-return-await": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-unused-vars": ["error", { "args": "after-used" }],
        "no-useless-escape": "error",
        "no-void": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-spacing": ["error", "always"],
        "operator-assignment": ["error", "always"],
        "prefer-const": ["error", { "destructuring": "all", "ignoreReadBeforeAssign": true }],
        "prefer-template": "error",
        "quotes": ["error", "double", { "allowTemplateLiterals": true, "avoidEscape": true }],
        "radix": "error",
        "require-yield": "off",
        "semi": ["error", "always"],
        "sort-imports": "error",
        "space-before-blocks" : ["error", "always"],
        "space-before-function-paren": ["error", { "anonymous": "always", "named": "never" }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", { "words": true, "nonwords": false, "overrides": { "!": true } }],
        "template-curly-spacing": ["error", "never"],
        "valid-typeof": "error",
        "yoda": "error"
    },
    "overrides": [
        {
            "files": ["*.vue"],
            "rules": {
                "indent": "off",
                "no-new": "off",
                "template-curly-spacing": "off",
                "vue/attribute-hyphenation": "off",
                "vue/html-indent": ["error", 4],
                "vue/html-self-closing": "off",
                "vue/max-attributes-per-line": ["error", {
                    "singleline": 2,
                }],
                "vue/require-default-prop": "off",
                "vue/require-v-for-key": "warn",
                "vue/no-v-html": "off",
                "vue/script-indent": [
                    "error",
                    4,
                    { "switchCase": 1 }
                ]
            }
        },
        {
            "files": ["*.spec.js"],
            "rules": {
                "no-unused-expressions": "off"
            }
        }
    ]
};
