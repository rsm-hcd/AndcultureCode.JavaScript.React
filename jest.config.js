module.exports = {
    preset: "ts-jest",
    clearMocks: true,
    collectCoverage: true,
    testEnvironment: "jsdom",
    modulePathIgnorePatterns: ["<rootDir>/dist"],
    restoreMocks: true,
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    globals: {
        "ts-jest": {
            diagnostics: false,
            tsConfig: "<rootDir>/tsconfig.json",
        },
    },
};
