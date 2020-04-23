module.exports = {
    preset: "ts-jest",
    collectCoverage: true,
    testEnvironment: "jsdom",
    modulePathIgnorePatterns: ["<rootDir>/dist"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    globals: {
        "ts-jest": {
            diagnostics: false,
            tsConfig: "<rootDir>/tsconfig.json",
        },
    },
};
