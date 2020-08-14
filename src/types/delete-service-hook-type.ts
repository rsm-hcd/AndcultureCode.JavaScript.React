import { DeleteService } from "./delete-service-type";

/**
 * Type defining the return object from calling `useDelete()`
 */
export type DeleteServiceHook = () => {
    delete: DeleteService;
};
