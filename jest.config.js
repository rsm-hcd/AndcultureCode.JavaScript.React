module.exports = {
    globals: {
        "ts-jest": {
            diagnostics: false,
            tsConfig: "<rootDir>/tsconfig.json",
        },
    },
    moduleDirectories: ["node_modules", "src"],
    modulePathIgnorePatterns: ["<rootDir>/dist"],
    preset: "ts-jest",
    roots: ["<rootDir>/src"],
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts",
        // polyfill window.resizeTo
        "window-resizeto/polyfill",
    ],
    testEnvironment: "jsdom",
};
