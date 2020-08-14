import { BulkUpdateService } from "./bulk-update-service-type";

/**
 * Type defining the return object from calling `useBulkUpdate()`
 */
export type BulkUpdateServiceHook<TRecord, TPathParams> = () => {
    update: BulkUpdateService<TRecord, TPathParams>;
};
