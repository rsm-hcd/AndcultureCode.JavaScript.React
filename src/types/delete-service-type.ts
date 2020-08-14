import { ServiceResponse } from "andculturecode-javascript-core";

/**
 * Type defining the service function for deleting the supplied resource
 *
 * @param id Id of the record to be deleted
 * @param pathParams Object with path parameters to be replaced in the endpoint route
 */
export type DeleteService = (
    id: number,
    pathParams?: any
) => Promise<ServiceResponse<Boolean>>;
