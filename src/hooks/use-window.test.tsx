import { renderHook, act } from "@testing-library/react-hooks";
import { useWindow } from "./use-window";

const DEFAULT_WIDTH: number = 1024;
const DEFAULT_HEIGHT: number = 768;

describe("useWindow", () => {
    beforeEach(() => {
        act(() => {
            window.resizeTo(DEFAULT_WIDTH, DEFAULT_HEIGHT);
        });
    });

    test("returns width and height of window", async () => {
        // Arrange & Act
        const { result } = renderHook(() => useWindow());

        // Assert
        expect(result.current.width).toBe(DEFAULT_WIDTH);
        expect(result.current.height).toBe(DEFAULT_HEIGHT);
    });

    test("when window resize event is triggered, returns new width and height of window", async () => {
        // Arrange
        const { result } = renderHook(() => useWindow());
        const windowWidth = DEFAULT_WIDTH + 1;
        const windowHeight = DEFAULT_HEIGHT + 1;

        // Act
        act(() => {
            window.resizeTo(windowWidth, windowHeight);
        });

        // Assert
        expect(result.current.width).toBe(windowWidth);
        expect(result.current.height).toBe(windowHeight);
    });
});
