// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

import ErrorType from "../enumerations/error-type";

export default interface ResultError {
    key?: string;
    message?: string;
    type?: ErrorType;
}

// #endregion Interfaces
