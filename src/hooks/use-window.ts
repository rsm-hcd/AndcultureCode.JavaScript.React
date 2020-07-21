import { useEffect, useState } from "react";
import { WindowEvents } from "../enumerations/window-events";

/**
 * Get window properties.
 * Hook into window events and make properties more easily accessible to components.
 */
export function useWindow() {
    const [height, setHeight] = useState<number>(window.innerHeight);
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        const toggleEvent = (action: "add" | "remove") => {
            const fn =
                action === "add"
                    ? window.addEventListener
                    : window.removeEventListener;

            fn(WindowEvents.Resize, handleWindowResize);
        };

        toggleEvent("add");

        return () => toggleEvent("remove");
    }, []);

    return { width, height };
}
