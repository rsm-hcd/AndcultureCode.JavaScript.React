import { renderHook, act } from "@testing-library/react-hooks";
import { usePageErrors } from "./use-page-errors";
import { ResultRecord } from "andculturecode-javascript-core";

describe("usePageErrors", () => {
    describe("initialized", () => {
        test("returns empty array", async () => {
            // Arrange & Act
            const { result } = renderHook(() => usePageErrors());

            // Assert
            expect(result.current.pageErrors).toBeEmpty();
        });
    });

    describe("setPageErrors", () => {
        test("when set with string array, pageErrors returns array", async () => {
            // Arrange
            const errorMessage = "Error Message";
            const { result } = renderHook(() => usePageErrors());

            // Act
            act(() => {
                result.current.setPageErrors([errorMessage]);
            });

            // Assert
            expect(result.current.pageErrors.length).toBe(1);
            expect(result.current.pageErrors[0]).toBe(errorMessage);
        });
    });

    describe("handlePageLoadError", () => {
        test("when error is string, pageErrors returns array", async () => {
            // Arrange
            const errorMessage = "Error Message";
            const { result } = renderHook(() => usePageErrors());

            // Act
            act(() => {
                result.current.handlePageLoadError(errorMessage);
            });

            // Assert
            expect(result.current.pageErrors.length).toBe(1);
            expect(result.current.pageErrors[0]).toBe(errorMessage);
        });

        test("when error is ResultRecord, pageErrors returns array", async () => {
            // Arrange
            const errorMessage = "Error Message";
            const { result } = renderHook(() => usePageErrors());

            // Act
            act(() => {
                const error = {
                    listErrorMessages: () => [errorMessage],
                } as ResultRecord<any>;

                result.current.handlePageLoadError(error);
            });

            // Assert
            expect(result.current.pageErrors.length).toBe(1);
            expect(result.current.pageErrors[0]).toBe(errorMessage);
        });
    });

    describe("resetPageErrors", () => {
        test("when executed, pageErrors returns empty array", async () => {
            // Arrange
            const { result } = renderHook(() => usePageErrors());
            act(() => {
                result.current.handlePageLoadError("Error Message");
            });

            // Act
            act(() => {
                result.current.resetPageErrors();
            });

            // Assert
            expect(result.current.pageErrors).toBeEmpty();
        });
    });
});
