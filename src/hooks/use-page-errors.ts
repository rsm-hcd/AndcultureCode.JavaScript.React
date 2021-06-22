import { useState, useCallback } from "react";
import { CollectionUtils, ResultRecord } from "andculturecode-javascript-core";

/**
 * Hook to bundle common page error handling functionality
 */
export function usePageErrors() {
    const [pageErrors, setPageErrors] = useState<Array<string>>([]);

    const handlePageLoadError = useCallback((result: any) => {
        if (result instanceof ResultRecord) {
            setPageErrors((errors: string[]) => [
                ...errors,
                ...result.listErrorMessages(),
            ]);
            return;
        }

        if (typeof result === "string") {
            setPageErrors((errors: string[]) => [...errors, result]);
            return;
        }

        setPageErrors((errors: string[]) => [...errors, result.toString()]);
    }, []);

    const resetPageErrors = useCallback(() => {
        setPageErrors((prevState) =>
            CollectionUtils.hasValues(prevState) ? [] : prevState
        );
    }, []);

    return {
        handlePageLoadError,
        pageErrors,
        resetPageErrors,
        setPageErrors,
    };
}
