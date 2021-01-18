[andculturecode-javascript-react](../README.md) › [AuthenticatedRoute](authenticatedroute.md)

# Interface: AuthenticatedRoute

## Hierarchy

-   **AuthenticatedRoute**

    ↳ [AuthenticatedRouteProps](authenticatedrouteprops.md)

    ↳ [NestedRouteProps](nestedrouteprops.md)

    ↳ [NestedRoutesProps](nestedroutesprops.md)

## Index

### Properties

-   [isAuthenticated](authenticatedroute.md#isauthenticated)
-   [redirectToIfUnauthenticated](authenticatedroute.md#optional-redirecttoifunauthenticated)

## Properties

### isAuthenticated

• **isAuthenticated**: _boolean_

_Defined in [src/interfaces/authenticated-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/4f6fc98/src/interfaces/authenticated-route.ts#L12)_

Flag to determine whether the current user is authenticated or not.

**`memberof`** AuthenticatedRouteProps

---

### `Optional` redirectToIfUnauthenticated

• **redirectToIfUnauthenticated**? : _undefined | string_

_Defined in [src/interfaces/authenticated-route.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/4f6fc98/src/interfaces/authenticated-route.ts#L20)_

Route to redirect to if the current user is not authenticated.

**`memberof`** UnauthenticatedRedirectProps
