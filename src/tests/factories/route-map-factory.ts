import { Factory } from "rosie";
import { FactoryType } from "./factory-type";
import { RouteMap } from "../../interfaces/route-map";
import { RouteDefinition } from "../../interfaces/route-definition";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const RouteMapFactory = Factory.define<RouteMap>(
    FactoryType.RouteMap
).sequence("/", () =>
    Factory.build<RouteDefinition>(FactoryType.RouteDefinition.Default)
);

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { RouteMapFactory };

// #endregion Export
