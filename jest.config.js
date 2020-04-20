module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./src/setupTests.ts"],
    globals: {
        "ts-jest": {
            diagnostics: false,
        },
    },
};
