module.exports = {
    preset: "ts-jest",
    collectCoverage: true,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./src/setupTests.ts"],
    globals: {
        "ts-jest": {
            diagnostics: false,
        },
    },
};
