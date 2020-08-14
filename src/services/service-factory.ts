import { RouteUtils, ServiceUtils } from "andculturecode-javascript-core";
import { BulkUpdateService } from "../types/bulk-update-service-type";
import { DeleteService } from "../types/delete-service-type";
import { CreateService } from "../types/create-service-type";
import { ListService } from "../types/list-service-type";
import { GetService } from "../types/get-service-type";
import { NestedCreateService } from "../types/nested-create-service-type";
import { NestedListService } from "../types/nested-list-service-type";
import { UpdateService } from "../types/update-service-type";
import axios from "axios";

// ---------------------------------------------------------------------------------------------
// #region Public Functions
// ---------------------------------------------------------------------------------------------

/**
 * Factory to encapsulate common service function logic
 */
const ServiceFactory = {
    /**
     * Creates a conventional Service Update function for an Array of the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    bulkUpdate<TRecord extends any, TPathParams extends any>(
        recordType: { new (): TRecord },
        resourceEndpoint: string
    ): BulkUpdateService<TRecord, TPathParams> {
        return async (records: Array<TRecord>, pathParams?: any) =>
            await _bulkUpdate<TRecord, TPathParams>(
                recordType,
                records,
                resourceEndpoint,
                pathParams
            );
    },

    /**
     * Creates conventional Service Create function for the supplied resource type
     *
     * ### Recommendation
     * Use `nestedCreate` when route is nested!
     *
     * @param recordType
     * @param baseEndpoint
     */
    create<TRecord extends any>(
        recordType: { new (): TRecord },
        baseEndpoint: string
    ): CreateService<TRecord> {
        return async (record?: TRecord) =>
            await _create<TRecord>(recordType, baseEndpoint, record);
    },

    /**
     * Creates conventional Service Delete function for the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    delete(resourceEndpoint: string): DeleteService {
        return async (id: number, pathParams?: any) =>
            await _delete(id, resourceEndpoint, pathParams);
    },

    /**
     * Creates conventional Service Get function for the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    get<TRecord, TPathParams, TQueryParams = undefined>(
        recordType: { new (): TRecord },
        resourceEndpoint: string
    ): GetService<TRecord, TPathParams, TQueryParams> {
        return async (pathParams: TPathParams, queryParams?: TQueryParams) =>
            await _get<TRecord, TPathParams, TQueryParams>(
                recordType,
                resourceEndpoint,
                pathParams,
                queryParams
            );
    },

    /**
     * Creates conventional Service List function for the supplied resource type
     *
     * ### Recommendation
     * Use `nestedList` when route is nested!
     *
     * @param recordType
     * @param baseEndpoint
     */
    list<TRecord, TQueryParams>(
        recordType: { new (): TRecord },
        baseEndpoint: string
    ): ListService<TRecord, TQueryParams> {
        return async (queryParams?: TQueryParams) =>
            await _list<TRecord>(recordType, baseEndpoint, null, queryParams);
    },

    /**
     * Creates conventional Service Create function for the supplied resource type
     * when the resource is nested
     * @param recordType
     * @param baseEndpoint
     */
    nestedCreate<TRecord extends any, TPathParams>(
        recordType: { new (): TRecord },
        baseEndpoint: string
    ): NestedCreateService<TRecord, TPathParams> {
        return async (record: TRecord, pathParams: TPathParams) => {
            const url = RouteUtils.getUrlFromPath(baseEndpoint, pathParams);
            return await _create<TRecord>(recordType, url, record);
        };
    },

    /**
     * Creates conventional Service List function for the supplied resource type
     * @param recordType
     * @param baseEndpoint
     */
    nestedList<TRecord, TPathParams, TQueryParams>(
        recordType: { new (): TRecord },
        baseEndpoint: string
    ): NestedListService<TRecord, TPathParams, TQueryParams> {
        return async (pathParams: TPathParams, queryParams?: TQueryParams) =>
            await _list<TRecord>(
                recordType,
                baseEndpoint,
                pathParams,
                queryParams
            );
    },

    /**
     * Creates conventional Service Update function for the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    update<TRecord extends any, TPathParams extends any>(
        recordType: { new (): TRecord },
        resourceEndpoint: string
    ): UpdateService<TRecord, TPathParams> {
        return async (record: TRecord, pathParams?: any) =>
            await _update<TRecord, TPathParams>(
                recordType,
                record,
                resourceEndpoint,
                pathParams
            );
    },
};

// #endregion Public Functions

// ---------------------------------------------------------------------------------------------
// #region Private Functions
// ---------------------------------------------------------------------------------------------

const _buildUrl = (id: number, resourceEndpoint: string, pathParams?: any) => {
    if (pathParams == null) {
        pathParams = {};
    }
    pathParams = Object.assign(pathParams, { id });
    return RouteUtils.getUrlFromPath(resourceEndpoint, pathParams);
};

const _bulkUpdate = async function<
    TRecord extends any,
    TPathParams extends any
>(
    recordType: { new (): TRecord },
    records: Array<TRecord>,
    resourceEndpoint: string,
    pathParams: TPathParams
) {
    const url = RouteUtils.getUrlFromPath(resourceEndpoint, pathParams);
    return await axios
        .put(
            url,
            records.map((r: TRecord) => r.toJS())
        )
        .then((r) => ServiceUtils.mapPagedAxiosResponse(recordType, r));
};

const _create = async function<TRecord extends any>(
    recordType: { new (): TRecord },
    url: string,
    record?: TRecord
) {
    const requestData = record != null ? record.toJS() : null;

    return await axios
        .post(url, requestData)
        .then((r) => ServiceUtils.mapAxiosResponse(recordType, r));
};

const _delete = async function(
    id: number,
    resourceEndpoint: string,
    pathParams?: any
) {
    const url = _buildUrl(id, resourceEndpoint, pathParams);
    return await axios
        .delete(url)
        .then((r) => ServiceUtils.mapAxiosResponse(Boolean, r));
};

const _get = async function<TRecord, TPathParams, TQueryParams = undefined>(
    recordType: { new (): TRecord },
    resourceEndpoint: string,
    pathParams: TPathParams,
    queryParams?: TQueryParams
) {
    const url = RouteUtils.getUrlFromPath(
        resourceEndpoint,
        pathParams,
        queryParams
    );
    return await axios
        .get(url)
        .then((r) => ServiceUtils.mapAxiosResponse(recordType, r));
};

const _list = async function<TRecord extends any>(
    recordType: { new (): TRecord },
    baseEndpoint: string,
    pathParams?: any,
    queryParams?: any
) {
    const url = RouteUtils.getUrlFromPath(
        baseEndpoint,
        pathParams,
        queryParams
    );
    return await axios
        .get(url)
        .then((r) => ServiceUtils.mapPagedAxiosResponse(recordType, r));
};

const _update = async function<TRecord extends any, TPathParams extends any>(
    recordType: { new (): TRecord },
    record: TRecord,
    resourceEndpoint: string,
    pathParams?: TPathParams
) {
    const url = _buildUrl(record.id, resourceEndpoint, pathParams);
    return await axios
        .put(url, record.toJS())
        .then((r) => ServiceUtils.mapAxiosResponse(recordType, r));
};

// #endregion Private Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { ServiceFactory };

// #endregion Exports
