import ErrorType from "enumerations/error-type";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export default interface ResultError {
    key?: string;
    message?: string;
    type?: ErrorType;
}

// #endregion Interfaces
