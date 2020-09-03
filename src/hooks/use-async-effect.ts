import { useEffect, DependencyList, EffectCallback, useCallback } from "react";
import { AsyncEffectCallback } from "../types/async-effect-callback-type";

/**
 * Version of the useEffect hook that accepts an async function
 * @export
 * @param {AsyncEffectCallback} asyncEffect
 * @param {DependencyList} deps
 */
export function useAsyncEffect(
    asyncEffect: AsyncEffectCallback,
    deps: DependencyList
) {
    const asyncCallback = useCallback<AsyncEffectCallback>(asyncEffect, deps);

    useEffect(() => {
        let cleanupMethod = () => {};
        let isMounted = true;

        async function runAsyncCallback() {
            const result: ReturnType<EffectCallback> = await asyncCallback(
                () => isMounted
            );

            if (typeof result === "function") {
                cleanupMethod = result;
            }
        }

        runAsyncCallback();

        return () => {
            cleanupMethod();
            isMounted = false;
        };
    }, [asyncCallback]);
}
