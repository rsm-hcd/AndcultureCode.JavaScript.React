import React from "react";
import { CollectionUtils } from "../../utilities/collection-utils";
import { RouteDefinition } from "../../interfaces/route-definition";
import { Route } from "react-router-dom";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface NestedRoutesByPropertyProps {
    propertyName: keyof RouteDefinition;
    routes: RouteDefinition[];
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

/**
 * Renders Route components mapped to a custom property
 */
const NestedRoutesByProperty = (props: NestedRoutesByPropertyProps) => {
    if (CollectionUtils.isEmpty(props.routes)) {
        return null;
    }

    // TODO: Remove Fragment when issue fixed https://github.com/microsoft/TypeScript/issues/21699
    return (
        <React.Fragment>
            {props.routes.map((route: RouteDefinition, i: number) => {
                const component = route[
                    props.propertyName
                ] as React.ComponentType;

                if (component == null) {
                    return null;
                }

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        component={component}
                    />
                );
            })}
        </React.Fragment>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { NestedRoutesByProperty, NestedRoutesByPropertyProps };

// #endregion Exports
