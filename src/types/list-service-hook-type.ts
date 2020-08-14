import { ListService } from "./list-service-type";

/**
 * Type defining the return object from calling `useList()`
 */
export type ListServiceHook<TRecord, TQueryParams> = () => {
    list: ListService<TRecord, TQueryParams>;
};
