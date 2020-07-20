import React, { useEffect, useState } from "react";

/**
 * Custom hook providing utility to take some action when a mouse event is fired outside of an element.
 * @param ref
 * @param handler
 * @param deps
 */
export function useOnClickOutside(
    ref: React.RefObject<HTMLElement>,
    handler: () => void,
    deps?: React.DependencyList | undefined
) {
    // Ensure we only attach one event
    const [hasEvent, setHasEvent] = useState<boolean>(false);

    useEffect(() => {
        const layout = document.getElementById("root");
        if (hasEvent || layout == null) {
            return;
        }

        const event = (e: Event) => {
            handleClickOutside(e);
            toggleEvent("remove", event);
        };

        const handleClickOutside = (event: Event) => {
            if (
                ref?.current == null ||
                ref.current.contains(event.target as Node)
            ) {
                return true;
            }

            handler();
        };

        const toggleEvent = (
            action: "add" | "remove",
            e: (e: Event) => void
        ) => {
            const fn =
                action === "add"
                    ? layout.addEventListener
                    : layout.removeEventListener;

            fn("mousedown", e);
            setHasEvent(action === "add");
        };

        toggleEvent("add", event);
    }, [deps, handler, hasEvent, ref]);
}
