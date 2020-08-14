import { NestedListService } from "./nested-list-service-type";

/**
 * Type defining the return object from calling `useNestedList()`
 */
export type NestedListServiceHook<TRecord, TPathParams, TQueryParams> = () => {
    list: NestedListService<TRecord, TPathParams, TQueryParams>;
};
