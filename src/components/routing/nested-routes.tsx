import { CollectionUtils } from "../../utilities/collection-utils";
import { NestedRoute } from "./nested-route";
import { Redirect } from "react-router-dom";
import React from "react";
import { RouteDefinition } from "../../interfaces/route-definition";
import { RouteNotFoundProps } from "../../interfaces/route-not-found-props";
import { AuthenticatedRouteProps } from "../../interfaces/authorized-route-props";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface NestedRoutesProps
    extends RouteNotFoundProps,
        AuthenticatedRouteProps {
    routes: RouteDefinition[];
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
