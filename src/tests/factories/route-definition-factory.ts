import { Factory } from "rosie";
import { FactoryType } from "./factory-type";
import { RouteDefinition } from "../../interfaces/route-definition";
import React from "react";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const RouteDefinitionFactory = Factory.define<RouteDefinition>(
    FactoryType.RouteDefinition
)
    .sequence("authRequired", () => false)
    .sequence("component", () => React.Fragment)
    .sequence("exact", () => true)
    .sequence("path", (i: number) => `path${i}/`)
    .sequence("routes", () => {});

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export default RouteDefinitionFactory;

// #endregion Export
