// -----------------------------------------------------------------------------------------
// #region Components
// -----------------------------------------------------------------------------------------

export {
    AuthenticatedRoute,
    AuthenticatedRouteProps,
} from "./components/routing/authenticated-route";
export {
    NestedRoute,
    NestedRouteProps,
} from "./components/routing/nested-route";
export {
    NestedRoutes,
    NestedRoutesProps,
} from "./components/routing/nested-routes";
export {
    NestedRoutesByProperty,
    NestedRoutesByPropertyProps,
} from "./components/routing/nested-routes-by-property";
export { Redirects, RedirectsProps } from "./components/routing/redirects";

// #endregion Components

// -----------------------------------------------------------------------------------------
// #region Hooks
// -----------------------------------------------------------------------------------------

export { makeCancellable } from "./hooks/make-cancellable";
export { useCancellablePromise } from "./hooks/use-cancellable-promise";
export { useDebounce } from "./hooks/use-debounce";
export { useLocalization } from "./hooks/use-localization";
export { useOnClickOutside } from "./hooks/use-onclick-outside";
export { usePageErrors } from "./hooks/use-page-errors";
export { useTextOverflow } from "./hooks/use-text-overflow";
export { useWindow } from "./hooks/use-window";

// #endregion

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export { RedirectDefinition } from "./interfaces/redirect-definition";
export { RouteDefinition } from "./interfaces/route-definition";
export { RouteMap } from "./interfaces/route-map";

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Services
// -----------------------------------------------------------------------------------------

export { ServiceFactory } from "./services/service-factory";
export { ServiceHookFactory } from "./services/service-hook-factory";

// #endregion Services

// -----------------------------------------------------------------------------------------
// #region Utilities
// -----------------------------------------------------------------------------------------

export { RouteUtils } from "./utilities/route-utils";

// #endregion Utilities

// -----------------------------------------------------------------------------------------
// #region Vendor
// -----------------------------------------------------------------------------------------

// Forwarding everything from react-router-dom as-is, just incase a consumer wants to use some
// specific component or function for their own implemention alongside our library.
export {
    BrowserRouter,
    BrowserRouterProps,
    generatePath,
    HashRouter,
    HashRouterProps,
    Link,
    LinkProps,
    match,
    matchPath,
    MemoryRouter,
    NavLink,
    NavLinkProps,
    Prompt,
    Redirect,
    RedirectProps,
    Route,
    RouteChildrenProps,
    RouteComponentProps,
    RouteProps,
    Router,
    RouterChildContext,
    StaticRouter,
    Switch,
    SwitchProps,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
    withRouter,
} from "react-router-dom";

// #endregion Vendor
