// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface UnmatchedRoute {
    /**
     * Route to redirect to if the specified route cannot be matched.
     *
     * @type {string}
     * @memberof RouteNotFoundProps
     */
    redirectToIfNotFound?: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { UnmatchedRoute };

// #endregion Export
