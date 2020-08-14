import { CreateService } from "./create-service-type";

/**
 * Type defining the return object from calling `useCreate()`
 */
export type CreateServiceHook<TRecord> = () => {
    create: CreateService<TRecord>;
};
