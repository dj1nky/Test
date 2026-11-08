module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
    NuxtImg: "readonly",
    NuxtPicture: "readonly",
    // Vue composition API
    ref: "readonly",
    reactive: "readonly",
    computed: "readonly",
    watch: "readonly",
    watchEffect: "readonly",
    onMounted: "readonly",
    onUnmounted: "readonly",
    onUpdated: "readonly",
    nextTick: "readonly",
    // Nuxt auto-imported components
    NuxtLayout: "readonly",
    NuxtPage: "readonly",
    NuxtLink: "readonly",
    ClientOnly: "readonly",
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    extraFileExtensions: [".vue"],
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "vue/multi-word-component-names": 0,
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "ignore",
        multiline: "below",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        pathGroups: [
          {
            pattern: "vue",
            group: "external",
            position: "before",
          },
          {
            pattern: "{#app,#imports,#components}",
            group: "external",
            position: "after",
          },
          {
            pattern: "vue-router",
            group: "external",
            position: "after",
          },
          {
            pattern: "vue/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "nuxt**",
            group: "external",
            position: "after",
          },
          {
            pattern: "@nuxt/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "~/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "./**",
            group: "sibling",
            position: "before",
          },
          {
            pattern: "../**",
            group: "parent",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["vue"],
        "newlines-between": "never",
      },
    ],
    "no-undef": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "vue/no-unused-components": "error",
    "vue/no-undef-components": "error",
  },
};
