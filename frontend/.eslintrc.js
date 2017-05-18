module.exports = {
    root: true,
    globals: { },
    extends: [
      'vue',
      'airbnb-base'
    ],
    plugins: [
      'html',
      'import',
      'vue'
    ],
    rules: {
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-console': 2, // NOTE:production build で drop_conole するので許容します
      'no-plusplus': 0,
      'no-param-reassign': ['error', { props: false }],
      'arrow-body-style': 0,
      'import/prefer-default-export': 0,
      'curly': ['error', 'all'],
      "object-shorthand": ["error", "always", { "ignoreConstructors": true }],
       "quote-props": ["error", "as-needed", { "keywords": true, "unnecessary": false }],
       "one-var": [2, "never"],
       "prefer-arrow-callback": ["error", { "allowNamedFunctions": true }]
  },
  "settings": {
    "import/core-modules": [ "vue-awesome-swiper" ]
  },
  "env": {
  "browser": true,
    "node": true
 }

};
