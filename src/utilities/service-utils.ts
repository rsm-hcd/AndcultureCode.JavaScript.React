import { AxiosResponse } from "axios";
import { ServiceResponse } from "../interfaces/service-response";
import { PagedResult } from "../interfaces/paged-result";
import { ResultRecord } from "../view-models/result-record";
import { Result } from "../interfaces/result";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Translates axios specific data response to a more generic ServiceResponse
 * type for consumption throughout the system
 */
const _mapAxiosResponse = <TRecord>(
    recordType: { new (props: Partial<TRecord>): TRecord },
    axiosResponse: AxiosResponse<Result<TRecord>>
): ServiceResponse<TRecord> => {
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
const _mapPagedAxiosResponse = <TRecord>(
    recordType: { new (props: Partial<TRecord>): TRecord },
    axiosResponse: AxiosResponse<PagedResult<TRecord>>
): ServiceResponse<TRecord> => {
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

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const ServiceUtils = {
    mapAxiosResponse: _mapAxiosResponse,
    mapPagedAxiosResponse: _mapPagedAxiosResponse,
};

// #endregion Exports
