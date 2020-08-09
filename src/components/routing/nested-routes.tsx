import { CollectionUtils, StringUtils } from "andculturecode-javascript-core";
import { NestedRoute } from "./nested-route";
import { Redirect, Switch } from "react-router-dom";
import React from "react";
import { RouteDefinition } from "../../interfaces/route-definition";
import { UnmatchedRoute } from "../../interfaces/unmatched-route";
import { AuthenticatedRoute } from "../../interfaces/authenticated-route";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface NestedRoutesProps extends UnmatchedRoute, AuthenticatedRoute {
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
const NestedRoutes: React.FC<NestedRoutesProps> = (
    props: NestedRoutesProps
) => {
    const { redirectToIfNotFound, routes } = props;

    if (CollectionUtils.isEmpty(routes)) {
        return null;
    }

    // TODO: Remove Fragment when issue fixed https://github.com/microsoft/TypeScript/issues/21699
    return (
        <React.Fragment>
            <Switch>
                {routes.map((route: RouteDefinition, i: number) => (
                    <NestedRoute {...props} {...route} key={i} route={route} />
                ))}
                {StringUtils.hasValue(redirectToIfNotFound) && (
                    <Redirect to={redirectToIfNotFound!} />
                )}
            </Switch>
        </React.Fragment>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { NestedRoutes, NestedRoutesProps };

// #endregion Exports
