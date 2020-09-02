import React from "react";
import "jest-extended";
import faker from "faker";
import { cleanup, render } from "@testing-library/react";
import { useAsyncEffect } from "./use-async-effect";

describe("useAsyncEffect", () => {
    function setup(
        asyncFunc: (
            isMounted: () => boolean
        ) => Promise<void> | Promise<() => void>
    ) {
        const TestComponent = () => {
            useAsyncEffect(async (mounted) => {
                return await asyncFunc(mounted);
            }, []);

            return null;
        };

        return render(<TestComponent />);
    }

    test("runs async method", async () => {
        const expectedValue = faker.lorem.word();
        let testValue = "";
        let promise: Promise<void>;

        setup(() => {
            promise = new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    testValue = expectedValue;
                    resolve();
                });
            });

            return promise;
        });

        await promise;

        expect(testValue).toBe(expectedValue);

        await cleanup();
    });

    test("runs cleanup method", async () => {
        const expectedValue = faker.lorem.word();
        let testValue = "";
        let promise: Promise<() => void>;

        setup(() => {
            promise = new Promise<() => void>((resolve, reject) => {
                setTimeout(() => {
                    resolve(() => (testValue = expectedValue));
                });
            });

            return promise;
        });

        await promise;

        await cleanup();

        expect(testValue).toBe(expectedValue);
    });
});
