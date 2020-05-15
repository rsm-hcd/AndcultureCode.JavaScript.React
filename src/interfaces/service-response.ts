import { ResultRecord } from "../view-models/result-record";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface ServiceResponse<T> {
    /**
     * Result object containing detailed response information,
     * such as; errors, result data, etc...
     */
    result?: ResultRecord<T>;

    /**
     * Result objects containing detailed response information,
     * such as; errors, result data, etc...
     */
    results?: ResultRecord<T[]>;

    /**
     * Convenience property to read result's nested record
     */
    resultObject?: T;

    /**
     * Convenience property to read result's nested records
     */
    resultObjects?: T[];

    /**
     * Total possible records available for the initial service request. If greater
     * than total results in this response, additional pages of results can be
     * requested from the API
     */
    rowCount: number;

    /**
     * HTTP status code of the response
     */
    status: number;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { ServiceResponse };

// #endregion Export
