import ResultErrorRecord from "../view-models/result-error-record";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export default interface PagedResult<T> {
    errors?: ResultErrorRecord[];
    resultObject?: T[];
    rowCount: number;
}

// #endregion Interfaces
