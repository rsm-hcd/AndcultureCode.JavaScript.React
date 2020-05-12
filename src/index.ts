import { ErrorType } from "./enumerations/error-type";
import { RedirectDefinition } from "./interfaces/redirect-definition";
import { ResultError } from "./interfaces/result-error";
import { Result } from "./interfaces/result";
import { RouteDefinition } from "./interfaces/route-definition";
import { RouteMap } from "./interfaces/route-map";
import { ServiceResponse } from "./interfaces/service-response";
import { PagedResult } from "./interfaces/paged-result";
import { ServiceFactory } from "./services/service-factory";
import { CollectionUtils } from "./utilities/collection-utils";
import { CoreUtils } from "./utilities/core-utils";
import { RouteUtils } from "./utilities/route-utils";
import { ResultErrorRecord } from "./view-models/result-error-record";
import { ResultRecord } from "./view-models/result-record";
import { NestedRoute } from "./components/routing/nested-route";
import { AuthenticatedRoute } from "./components/routing/authenticated-route";
import { NestedRoutes } from "./components/routing/nested-routes";
import { NestedRoutesByProperty } from "./components/routing/nested-routes-by-property";
import { Redirects } from "./components/routing/redirects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export {
    AuthenticatedRoute,
    CollectionUtils,
    CoreUtils,
    ErrorType,
    NestedRoute,
    NestedRoutes,
    NestedRoutesByProperty,
    PagedResult,
    RedirectDefinition,
    Redirects,
    Result,
    ResultError,
    ResultErrorRecord,
    ResultRecord,
    Route,
    RouteDefinition,
    RouteMap,
    Router,
    RouteUtils,
    ServiceFactory,
    ServiceResponse,
    Switch,
};
