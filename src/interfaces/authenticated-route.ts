// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface AuthenticatedRoute {
    /**
     * Flag to determine whether the current user is authenticated or not.
     *
     * @type {boolean}
     * @memberof AuthenticatedRouteProps
     */
    isAuthenticated: boolean;

    /**
     * Route to redirect to if the current user is not authenticated.
     *
     * @type {string}
     * @memberof UnauthenticatedRedirectProps
     */
    redirectToIfUnauthenticated?: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { AuthenticatedRoute };

// #endregion Export
