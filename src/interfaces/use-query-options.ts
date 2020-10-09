import { CatchResultHandler } from "andculturecode-javascript-core";
import { ListServiceHook } from "../types/list-service-hook-type";
import { NestedListServiceHook } from "../types/nested-list-service-hook-type";

export interface UseQueryOptions<
    TRecord,
    TQueryParams,
    TPathParams = undefined
> {
    serviceHook:
        | ListServiceHook<TRecord, TQueryParams>
        | NestedListServiceHook<TRecord, TPathParams, TQueryParams>;
    initialQuery: TQueryParams;
    initialPathParams?: TPathParams;
    onSuccess?: (records: Array<TRecord>) => void;
    onError?: CatchResultHandler<TRecord>;
}
