import {
    useEffect,
    DependencyList,
    EffectCallback,
    useRef,
    useCallback,
} from "react";

type AsyncEffectCallback = (
    isMounted: () => boolean
) => Promise<ReturnType<EffectCallback>>;

export const useAsyncEffect = (
    asyncEffect: AsyncEffectCallback,
    deps: DependencyList
) => {
    const cleanup = useRef(() => {});
    const mounted = useRef(true);

    const asyncCallback = useCallback<AsyncEffectCallback>(asyncEffect, deps);

    useEffect(() => {
        asyncCallback(() => mounted.current).then(
            (r: ReturnType<EffectCallback>) => {
                if (r === undefined) {
                    return;
                }

                cleanup.current = () => {
                    mounted.current = false;
                    r();
                };
            }
        );

        return cleanup.current;
    }, [asyncCallback]);
};
