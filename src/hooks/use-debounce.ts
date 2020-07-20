import { useEffect, useState } from "react";

/**
 * Throttles the supplied value for a set amount of milliseconds
 * @param value
 * @param delay number of milliseconds to delay
 */
export function useDebounce<T>(value: T, delay: number = 200) {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}
