module.exports = {
  reporters: ["default", "jest-junit"],
  coverageReporters: ["text", "cobertura", "html"],
  coverageDirectory: "coverage/tiles",
  coveragePathIgnorePatterns: [
    "node_modules",
    ".module.ts",
    "<rootDir>/src/main.ts",
    "<rootDir>/src/polyfills.ts",
    ".mock.ts",
  ],
};
