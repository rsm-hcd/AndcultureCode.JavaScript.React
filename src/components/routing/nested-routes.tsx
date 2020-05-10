// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

import { CollectionUtils } from "../../utilities/collection-utils";
import { NestedRoute } from "./nested-route";
import { Switch, Redirect } from "react-router-dom";
import React from "react";
import { RouteDefinition } from "../../interfaces/route-definition";

interface NestedRoutesProps {
    redirectToIfNotFound?: string;
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
    if (CollectionUtils.isEmpty(props.routes)) {
        return null;
    }

    // TODO: Remove Fragment when issue fixed https://github.com/microsoft/TypeScript/issues/21699
    return (
        <React.Fragment>
            <Switch>
                {props.routes.map((route: RouteDefinition, i: number) => (
                    <NestedRoute key={i} {...route} />
                ))}
                {props.redirectToIfNotFound != null && (
                    <Redirect to={props.redirectToIfNotFound} />
                )}
            </Switch>
        </React.Fragment>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { NestedRoutes };

// #endregion Exports
