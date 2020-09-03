import React from "react";
import "jest-extended";
import { cleanup, render, waitFor } from "@testing-library/react";
import { useAsyncEffect, AsyncEffectCallback } from "./use-async-effect";

const sleep = async (milliseconds: number): Promise<void> => {
    await new Promise((resolve) => {
        setTimeout(() => resolve(), milliseconds);
    });
};

describe("useAsyncEffect", () => {
    const setupUseAsyncEffect = (asyncEffect: AsyncEffectCallback) => {
        const TestComponent = () => {
            useAsyncEffect(asyncEffect, []);
            return null;
        };

        render(<TestComponent />);
    };

    test("executes async method", async () => {
        // Arrange
        const mockedMethod = jest.fn();

        // Act
        setupUseAsyncEffect(async () => {
            await sleep(1);
            mockedMethod();
        });

        // Assert
        await waitFor(() => expect(mockedMethod).toBeCalledTimes(1));
        await cleanup();
    });

    test("executes cleanup method", async () => {
        // Arrange
        const mockedMethod = jest.fn();
        const mockedCleanupMethod = jest.fn();

        // Act
        setupUseAsyncEffect(async () => {
            await sleep(1);
            mockedMethod();
            return mockedCleanupMethod;
        });

        // Assert
        await waitFor(() => expect(mockedMethod).toBeCalledTimes(1));
        await cleanup();
        await waitFor(() => expect(mockedCleanupMethod).toBeCalledTimes(1));
    });
});
