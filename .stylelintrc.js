export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["mixin", "include"]
    }],
    "import-notation": null,
    "no-descending-specificity": null
  }
}