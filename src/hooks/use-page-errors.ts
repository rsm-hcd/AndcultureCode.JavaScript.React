import { useState, useCallback } from "react";
import { ResultRecord } from "andculturecode-javascript-core";

/**
 * Hook to bundle common page error handling functionality
 */
export function usePageErrors() {
    const [pageErrors, setPageErrors] = useState<Array<string>>([]);

    const handlePageLoadError = useCallback(
        (result: string | ResultRecord<any>) => {
            if (typeof result === "string") {
                setPageErrors((e) => [...e, result]);
                return;
            }

            setPageErrors((e) => [...e, ...result.listErrorMessages()]);
        },
        []
    );

    const resetPageErrors = useCallback(() => {
        setPageErrors([]);
    }, []);

    return {
        handlePageLoadError,
        pageErrors,
        resetPageErrors,
        setPageErrors,
    };
}
