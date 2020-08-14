import { NestedCreateService } from "./nested-create-service-type";

/**
 * Type defining the return object from calling `useNestedCreate()`
 */
export type NestedCreateServiceHook<TRecord, TPathParams> = () => {
    create: NestedCreateService<TRecord, TPathParams>;
};
