import { ServiceResponse } from "andculturecode-javascript-core";

/**
 * Type defining the service function for bulk updating the supplied resource type
 *
 * @param records Records to be updated
 * @param pathParams Object with path parameters to be replaced in the endpoint route
 */
export type BulkUpdateService<TRecord, TPathParams> = (
    records: TRecord[],
    pathParams: TPathParams
) => Promise<ServiceResponse<TRecord>>;
