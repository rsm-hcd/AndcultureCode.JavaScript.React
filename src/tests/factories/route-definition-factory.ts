import { Factory } from "rosie";
import { FactoryType } from "./factory-type";
import { RouteDefinition } from "../../interfaces/route-definition";
import React from "react";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const RouteDefinitionFactory = Factory.define<RouteDefinition>(
    FactoryType.RouteDefinition.Default
)
    .sequence("authRequired", () => false)
    .sequence("component", () => React.Fragment)
    .sequence("exact", () => true)
    .sequence("path", (i: number) => `/path${i}`)
    .sequence("routes", () => {});

const RouteDefinitionNestedFactory = Factory.define<RouteDefinition>(
    FactoryType.RouteDefinition.Nested
)
    .sequence("authRequired", () => false)
    .sequence("component", () => React.Fragment)
    .sequence("exact", () => true)
    .sequence("path", (i: number) => `/path${i}`)
    .sequence("routes", () => {
        return {
            nestedRoute: Factory.build<RouteDefinition>(
                FactoryType.RouteDefinition.Default
            ),
        };
    });

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

// Looks like only one of the factories for a specific type needs to be exported for Rosie to
// register both of them. Weird.
export { RouteDefinitionFactory, RouteDefinitionNestedFactory };

// #endregion Export
