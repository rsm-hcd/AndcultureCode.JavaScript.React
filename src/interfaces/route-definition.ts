import React from "react";
import { RouteMap } from "../interfaces/route-map";

export interface RouteDefinition {
    authRequired: boolean;
    component: React.ComponentType;
    exact?: boolean;
    getComponent?: (location: any, cb: any) => void;
    path: string;
    routes: RouteMap;
    // TODO: This may need to be decoupled from the package.
    sidebar?: React.ComponentType;
}
