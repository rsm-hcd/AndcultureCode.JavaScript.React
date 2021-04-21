[andculturecode-javascript-react](../README.md) › [NestedRoutesProps](nestedroutesprops.md)

# Interface: NestedRoutesProps

## Hierarchy

-   [UnmatchedRoute](unmatchedroute.md)

-   [AuthenticatedRoute](authenticatedroute.md)

    ↳ **NestedRoutesProps**

## Index

### Properties

-   [isAuthenticated](nestedroutesprops.md#isauthenticated)
-   [redirectToIfNotFound](nestedroutesprops.md#optional-redirecttoifnotfound)
-   [redirectToIfUnauthenticated](nestedroutesprops.md#optional-redirecttoifunauthenticated)
-   [routes](nestedroutesprops.md#routes)

## Properties

### isAuthenticated

• **isAuthenticated**: _boolean_

_Inherited from [AuthenticatedRoute](authenticatedroute.md).[isAuthenticated](authenticatedroute.md#isauthenticated)_

_Defined in [src/interfaces/authenticated-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/eed00bb/src/interfaces/authenticated-route.ts#L12)_

Flag to determine whether the current user is authenticated or not.

**`memberof`** AuthenticatedRouteProps

---

### `Optional` redirectToIfNotFound

• **redirectToIfNotFound**? : _undefined | string_

_Inherited from [UnmatchedRoute](unmatchedroute.md).[redirectToIfNotFound](unmatchedroute.md#optional-redirecttoifnotfound)_

_Defined in [src/interfaces/unmatched-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/eed00bb/src/interfaces/unmatched-route.ts#L12)_

Route to redirect to if the specified route cannot be matched.

**`memberof`** RouteNotFoundProps

---

### `Optional` redirectToIfUnauthenticated

• **redirectToIfUnauthenticated**? : _undefined | string_

_Inherited from [AuthenticatedRoute](authenticatedroute.md).[redirectToIfUnauthenticated](authenticatedroute.md#optional-redirecttoifunauthenticated)_

_Defined in [src/interfaces/authenticated-route.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/eed00bb/src/interfaces/authenticated-route.ts#L20)_

Route to redirect to if the current user is not authenticated.

**`memberof`** UnauthenticatedRedirectProps

---

### routes

• **routes**: _[RouteDefinition](routedefinition.md)[]_

_Defined in [src/components/routing/nested-routes.tsx:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/eed00bb/src/components/routing/nested-routes.tsx#L14)_
