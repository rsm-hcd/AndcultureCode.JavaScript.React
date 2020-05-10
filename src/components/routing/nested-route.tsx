import React from "react";
import { RouteDefinition } from "../../interfaces/route-definition";
import { CoreUtils } from "../../utilities/core-utils";
import { Route } from "react-router-dom";
import { AuthenticatedRoute } from "./authenticated-route";

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

/**
 * Dynamically renders a route and its subroutes, accounting
 * for additional custom properties on RouteDefinition
 */
export const NestedRoute = (route: RouteDefinition) => {
    const RouteComponent: any = route.authRequired ? AuthenticatedRoute : Route;
    const childRoutes = CoreUtils.objectToArray(route.routes);

    return (
        <RouteComponent
            exact={route.exact}
            path={route.path}
            route={route}
            render={(props: any) => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={childRoutes} />
            )}
        />
    );
};

// #endregion Component
