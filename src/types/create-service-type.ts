import { ServiceResponse } from "andculturecode-javascript-core";

/**
 * Type defining the service function for creating the supplied resource type
 *
 * @param record Record to be created
 */
export type CreateService<TRecord> = (
    record?: TRecord
) => Promise<ServiceResponse<TRecord>>;
