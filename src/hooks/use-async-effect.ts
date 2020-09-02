import {
    useEffect,
    DependencyList,
    EffectCallback,
    useRef,
    useCallback,
} from "react";

export type AsyncEffectCallback = (
    isMounted: () => boolean
) => Promise<ReturnType<EffectCallback>>;

export const useAsyncEffect = (
    asyncEffect: AsyncEffectCallback,
    deps: DependencyList
) => {
    const mounted = useRef(true);

    const asyncCallback = useCallback<AsyncEffectCallback>(asyncEffect, deps);

    useEffect(() => {
        let cleanupMethod = () => {};
        Promise.resolve(asyncCallback(() => mounted.current)).then(
            (r: ReturnType<EffectCallback>) => {
                if (typeof r === "function") {
                    cleanupMethod = r;
                }
            }
        );

        return () => {
            mounted.current = false;
            cleanupMethod();
        };
    }, [asyncCallback]);
};
