import { GetService } from "./get-service-type";

/**
 * Type defining the return object from calling `useGet()`
 */
export type GetServiceHook<
    TRecord,
    TPathParams,
    TQueryParams = undefined
> = () => {
    get: GetService<TRecord, TPathParams, TQueryParams>;
};
