import { EffectCallback } from "react";

/**
 * Type defining the asyncEffect parameter from calling `useAsyncEffect()`
 */
export type AsyncEffectCallback = (
    isMounted: () => boolean
) => Promise<ReturnType<EffectCallback>>;
