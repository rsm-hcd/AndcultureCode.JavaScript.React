import { renderHook, act } from "@testing-library/react-hooks";
import { usePageErrors } from "./use-page-errors";
import {
    ResultRecord,
    ResultErrorRecord,
} from "andculturecode-javascript-core";

describe("usePageErrors", () => {
    // -----------------------------------------------------------------------------------------
    // #region initialization
    // -----------------------------------------------------------------------------------------

    describe("initialization", () => {
        test("returns empty array", () => {
            // Arrange & Act
            const { result } = renderHook(() => usePageErrors());

            // Assert
            expect(result.current.pageErrors).toBeEmpty();
        });
    });

    // #endregion

    // -----------------------------------------------------------------------------------------
    // #region setPageErrors
    // -----------------------------------------------------------------------------------------

    describe("setPageErrors", () => {
        test("when set with string array, pageErrors returns array", () => {
            // Arrange
            const errorMessage = "Error Message";
            const { result } = renderHook(() => usePageErrors());

            // Act
            act(() => {
                result.current.setPageErrors([errorMessage]);
            });

            // Assert
            expect(result.current.pageErrors).toHaveLength(1);
            expect(result.current.pageErrors[0]).toBe(errorMessage);
        });
    });

    // #endregion setPageErrors

    // -----------------------------------------------------------------------------------------
    // #region handlePageLoadError
    // -----------------------------------------------------------------------------------------

    describe("handlePageLoadError", () => {
        test("when error is string, pageErrors returns array", () => {
            // Arrange
            const errorMessage = "Error Message";
            const { result } = renderHook(() => usePageErrors());

            // Act
            act(() => {
                result.current.handlePageLoadError(errorMessage);
            });

            // Assert
            expect(result.current.pageErrors).toHaveLength(1);
            expect(result.current.pageErrors[0]).toBe(errorMessage);
        });

        test("when error is ResultRecord, pageErrors returns array", () => {
            // Arrange
            const errorMessage = "Error Message";
            const erroredResultRecord = new ResultRecord<any>().with({
                errors: [
                    new ResultErrorRecord().with({
                        message: errorMessage,
                    }),
                ],
            });
            const { result } = renderHook(() => usePageErrors());

            // Act
            act(() => {
                result.current.handlePageLoadError(erroredResultRecord);
            });

            // Assert
            expect(result.current.pageErrors).toHaveLength(1);
            expect(result.current.pageErrors[0]).toBe(errorMessage);
        });
    });

    // #endregion handlePageLoadError

    // -----------------------------------------------------------------------------------------
    // #region resetPageErrors
    // -----------------------------------------------------------------------------------------

    describe("resetPageErrors", () => {
        test("when executed, pageErrors returns empty array", () => {
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

    // #endregion resetPageErrors
});
