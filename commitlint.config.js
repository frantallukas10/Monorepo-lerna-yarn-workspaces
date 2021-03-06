module.exports = {
  extends: ["@commitlint/config-conventional"],
  "type-enum": [
    "build",
    "ci",
    "chore",
    "docs",
    "feat",
    "fix",
    "perf",
    "refactor",
    "revert",
    "style",
    "test"
  ],
  "type-empty": ["never"],
  "header-case": ["lower-case"],
  "scope-case": ["lowerCase"],
  "header-max-length": [5, "always", 110]
};
