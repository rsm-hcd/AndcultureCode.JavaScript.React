import { useEffect, DependencyList, EffectCallback, useCallback } from "react";

export type AsyncEffectCallback = (
    isMounted: () => boolean
) => Promise<ReturnType<EffectCallback>>;

export const useAsyncEffect = (
    asyncEffect: AsyncEffectCallback,
    deps: DependencyList
) => {
    const asyncCallback = useCallback<AsyncEffectCallback>(asyncEffect, deps);

    useEffect(() => {
        let cleanupMethod = () => {};
        let mounted = true;

        async function runAsyncCallback() {
            const result: ReturnType<EffectCallback> = await asyncCallback(
                () => mounted
            );

            if (typeof result === "function") {
                cleanupMethod = result;
            }
        }

        runAsyncCallback();

        return () => {
            cleanupMethod();
            mounted = false;
        };
    }, [asyncCallback]);
};
