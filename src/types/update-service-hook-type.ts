import { UpdateService } from "./update-service-type";

/**
 * Type defining the return object from calling `useUpdate()`
 */
export type UpdateServiceHook<TRecord, TPathParams> = () => {
    update: UpdateService<TRecord, TPathParams>;
};
