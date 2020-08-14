import { ServiceResponse } from "andculturecode-javascript-core";

/**
 * Type defining the service function for updating the supplied resource type
 *
 * @param record Record to be created
 * @param pathParams Object with path parameters to be replaced in the endpoint route
 */
export type UpdateService<TRecord, TPathParams> = (
    record: TRecord,
    pathParams?: TPathParams
) => Promise<ServiceResponse<TRecord>>;
