import React from "react";
import { RouteMap } from "./route-map";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface RouteDefinition {
    authRequired: boolean;
    component: React.ComponentType;
    exact?: boolean;
    getComponent?: (location: any, cb: any) => void;
    path: string;
    routes: RouteMap;
    // TODO: This may need to be decoupled from the package.
    sidebar?: React.ComponentType;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { RouteDefinition };

// #endregion Export
