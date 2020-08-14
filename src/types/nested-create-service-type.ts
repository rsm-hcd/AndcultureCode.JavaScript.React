import { ServiceResponse } from "andculturecode-javascript-core";

/**
 * Type defining the service function for creating the supplied resource type when resource is nested
 *
 * @param record Record to be created
 * @param pathParams Object with path parameters to be replaced in the endpoint route
 */
export type NestedCreateService<TRecord, TPathParams> = (
    record: TRecord,
    pathParams: TPathParams
) => Promise<ServiceResponse<TRecord>>;
