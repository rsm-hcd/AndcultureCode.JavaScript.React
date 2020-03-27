import ResultErrorRecord from "view-models/result-error-record";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export default interface Result<T> {
    errors?: ResultErrorRecord[];
    resultObject?: T;
}

// #endregion Interfaces
