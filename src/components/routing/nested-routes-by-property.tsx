import React from "react";
import { CollectionUtils } from "andculturecode-javascript-core";
import { RouteDefinition } from "../../interfaces/route-definition";
import { Route } from "react-router-dom";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface NestedRoutesByPropertyProps {
    // TODO: BScott - this may need to be generic, something like:
    // NestedRoutesByPropertyProps<T extends RouteDefinition>
    // propertyName: keyof T;
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
const NestedRoutesByProperty: React.FC<NestedRoutesByPropertyProps> = (
    props: NestedRoutesByPropertyProps
) => {
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
                        component={component}
                        exact={route.exact}
                        key={i}
                        path={route.path}
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
