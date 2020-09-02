import React from "react";
import "jest-extended";
import faker from "faker";
import { cleanup, render } from "@testing-library/react";
import { useAsyncEffect } from "./use-async-effect";

describe("useAsyncEffect", () => {
    function setup({
        effect,
        cleanup,
    }: {
        effect?: (mounted: () => boolean) => void;
        cleanup?: () => void;
    }) {
        let promise: Promise<void | (() => void)>;
        const asyncFunc = (mounted: () => boolean) => {
            promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (effect != null) {
                        effect(mounted);
                    }

                    if (cleanup == null) {
                        resolve();
                        return;
                    }

                    resolve(cleanup);
                }, 100);
            });

            return promise;
        };

        const TestComponent = () => {
            useAsyncEffect(async (mounted) => await asyncFunc(mounted), []);

            return null;
        };

        render(<TestComponent />);

        return { promise };
    }

    test("runs async method", async () => {
        const expectedValue = faker.lorem.word();
        let testValue = "";

        const { promise } = setup({
            effect: () => (testValue = expectedValue),
        });

        await promise;

        expect(testValue).toBe(expectedValue);

        await cleanup();
    });

    test("runs cleanup method", async () => {
        const expectedValue = faker.lorem.word();
        let testValue = "";

        const { promise } = setup({
            cleanup: () => (testValue = expectedValue),
        });

        await promise;

        await cleanup();

        expect(testValue).toBe(expectedValue);
    });
});
