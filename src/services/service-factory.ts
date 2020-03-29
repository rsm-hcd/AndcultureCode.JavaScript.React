import { RouteUtils } from "../utilities/route-utils";
import ServiceResponse from "../interfaces/service-response";
import axios, { AxiosResponse } from "axios";
import Result from "../interfaces/result";
import ResultRecord from "../view-models/result-record";
import PagedResult from "../interfaces/paged-result";

// -----------------------------------------------------------------------------------------
// #region Public Functions
// -----------------------------------------------------------------------------------------

/**
 * Factory to encapsulate common service function logic
 */
const ServiceFactory = {
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
    ): (record: TRecord) => Promise<ServiceResponse<TRecord>> {
        return async (record: TRecord) =>
            await _create<TRecord>(recordType, baseEndpoint, record);
    },

    /**
     * Creates conventional Service Delete function for the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    delete<TRecord>(
        recordType: { new (): TRecord },
        resourceEndpoint: string
    ): (id: number, pathParams?: any) => Promise<ServiceResponse<TRecord>> {
        return async (id: number, pathParams?: any) =>
            await _delete<TRecord>(
                recordType,
                id,
                resourceEndpoint,
                pathParams
            );
    },

    /**
     * Creates conventional Service Get function for the supplied resource type
     * @param recordType
     * @param resourceEndpoint
     */
    get<TRecord, TPathParams>(
        recordType: { new (): TRecord },
        resourceEndpoint: string
    ): (pathParams: TPathParams) => Promise<ServiceResponse<TRecord>> {
        return async (pathParams: TPathParams) =>
            await _get<TRecord, TPathParams>(
                recordType,
                resourceEndpoint,
                pathParams
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
    ): (queryParams?: TQueryParams) => Promise<ServiceResponse<TRecord>> {
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
    ): (
        record: TRecord,
        pathParams: TPathParams
    ) => Promise<ServiceResponse<TRecord>> {
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
    ): (
        pathParams: TPathParams,
        queryParams?: TQueryParams
    ) => Promise<ServiceResponse<TRecord>> {
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
    update<TRecord extends any>(
        recordType: { new (): TRecord },
        resourceEndpoint: string
    ): (
        record: TRecord,
        pathParams?: any
    ) => Promise<ServiceResponse<TRecord>> {
        return async (record: TRecord, pathParams?: any) =>
            await _update<TRecord>(
                recordType,
                record,
                resourceEndpoint,
                pathParams
            );
    },
};

// #endregion Public Functions

// -----------------------------------------------------------------------------------------
// #region Private Functions
// -----------------------------------------------------------------------------------------

const _buildUrl = (id: number, resourceEndpoint: string, pathParams?: any) => {
    if (pathParams == null) {
        pathParams = {};
    }
    pathParams = Object.assign(pathParams, { id });
    return RouteUtils.getUrlFromPath(resourceEndpoint, pathParams);
};

const _create = async function<TRecord extends any>(
    recordType: { new (): TRecord },
    url: string,
    record: TRecord
) {
    return await axios
        .post(url, record.toJS())
        .then((r) => _mapAxiosResponse(recordType, r));
};

const _delete = async function<TRecord extends any>(
    recordType: { new (): TRecord },
    id: number,
    resourceEndpoint: string,
    pathParams?: any
) {
    const url = _buildUrl(id, resourceEndpoint, pathParams);
    return await axios
        .delete(url)
        .then((r) => _mapAxiosResponse(recordType, r));
};

const _get = async function<TRecord, TPathParams>(
    recordType: { new (): TRecord },
    resourceEndpoint: string,
    pathParams: TPathParams
) {
    const url = RouteUtils.getUrlFromPath(resourceEndpoint, pathParams);
    return await axios.get(url).then((r) => _mapAxiosResponse(recordType, r));
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
        .then((r) => _mapPagedAxiosResponse(recordType, r));
};

/**
 * Translates axios specific data response to a more generic ServiceResponse
 * type for consumption throughout the system
 */
const _mapAxiosResponse = function<TRecord>(
    recordType: { new (props: Partial<TRecord>): TRecord },
    axiosResponse: AxiosResponse<Result<TRecord>>
): ServiceResponse<TRecord> {
    if (axiosResponse == null) {
        return axiosResponse;
    }

    // Ensure result data is wrapped within a record
    let resultObject;
    if (axiosResponse.data != null && axiosResponse.data.resultObject != null) {
        resultObject = new recordType(axiosResponse.data.resultObject);
        axiosResponse.data.resultObject = resultObject;
    }

    return {
        result: new ResultRecord<TRecord>(axiosResponse.data),
        resultObject: resultObject,
        rowCount: 1,
        status: axiosResponse.status,
    };
};

/**
 * Translates axios specific data responses to a more generic ServiceResponse
 * type for consumption throughout the system
 */
const _mapPagedAxiosResponse = function<TRecord>(
    recordType: { new (props: Partial<TRecord>): TRecord },
    axiosResponse: AxiosResponse<PagedResult<TRecord>>
): ServiceResponse<TRecord> {
    if (axiosResponse == null) {
        return axiosResponse;
    }
    const data = axiosResponse.data;

    // Ensure result data is wrapped within records
    let resultObjects;
    if (
        data != null &&
        data.resultObject != null &&
        data.resultObject.length > 0
    ) {
        resultObjects = data.resultObject.map((r) => new recordType(r));
        data.resultObject = resultObjects;
    }

    return {
        results: new ResultRecord<TRecord[]>(data),
        resultObjects: resultObjects,
        rowCount: axiosResponse.data.rowCount,
        status: axiosResponse.status,
    };
};

const _update = async function<TRecord extends any>(
    recordType: { new (): TRecord },
    record: TRecord,
    resourceEndpoint: string,
    pathParams?: any
) {
    const url = _buildUrl(record.id, resourceEndpoint, pathParams);
    return await axios
        .put(url, record.toJS())
        .then((r) => _mapAxiosResponse(recordType, r));
};

// #endregion Private Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export default ServiceFactory;

// #endregion Exports
