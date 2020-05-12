import { CollectionUtils } from "../../utilities/collection-utils";
import { NestedRoute } from "./nested-route";
import { Redirect } from "react-router-dom";
import React from "react";
import { RouteDefinition } from "../../interfaces/route-definition";
import { AuthenticatedRouteProps } from "./authenticated-route";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface NestedRoutesProps
    extends RouteNotFoundProps,
        AuthenticatedRouteProps {
    routes: RouteDefinition[];
}

interface RouteNotFoundProps {
    /**
     * Route to redirect to if the specified route cannot be matched.
     *
     * @type {string}
     * @memberof NotFoundRedirectProps
     */
    redirectToIfNotFound?: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

/**
 * Component to easily render nested sub-route components from a list of routes.
 * Commonly used when setting up a layout
 */
const NestedRoutes = (props: NestedRoutesProps) => {
    const {
        isAuthenticated,
        redirectToIfNotFound,
        redirectToIfUnauthenticated,
        routes,
    } = props;

    if (CollectionUtils.isEmpty(routes)) {
        return null;
    }

    // TODO: Remove Fragment when issue fixed https://github.com/microsoft/TypeScript/issues/21699
    return (
        <React.Fragment>
            {props.routes.map((route: RouteDefinition, i: number) => (
                <NestedRoute
                    isAuthenticated={isAuthenticated}
                    key={i}
                    redirectToIfUnauthenticated={redirectToIfUnauthenticated}
                    route={route}
                />
            ))}
            {redirectToIfNotFound != null && (
                <Redirect to={redirectToIfNotFound} />
            )}
        </React.Fragment>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { NestedRoutes, NestedRoutesProps, RouteNotFoundProps };

// #endregion Exports
