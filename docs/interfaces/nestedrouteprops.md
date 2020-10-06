[andculturecode-javascript-react](../README.md) › [NestedRouteProps](nestedrouteprops.md)

# Interface: NestedRouteProps

## Hierarchy

-   [AuthenticatedRoute](authenticatedroute.md)

    ↳ **NestedRouteProps**

## Index

### Properties

-   [isAuthenticated](nestedrouteprops.md#isauthenticated)
-   [redirectToIfUnauthenticated](nestedrouteprops.md#optional-redirecttoifunauthenticated)
-   [route](nestedrouteprops.md#route)

## Properties

### isAuthenticated

• **isAuthenticated**: _boolean_

_Inherited from [AuthenticatedRoute](authenticatedroute.md).[isAuthenticated](authenticatedroute.md#isauthenticated)_

_Defined in [src/interfaces/authenticated-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0bc294c/src/interfaces/authenticated-route.ts#L12)_

Flag to determine whether the current user is authenticated or not.

**`memberof`** AuthenticatedRouteProps

---

### `Optional` redirectToIfUnauthenticated

• **redirectToIfUnauthenticated**? : _undefined | string_

_Inherited from [AuthenticatedRoute](authenticatedroute.md).[redirectToIfUnauthenticated](authenticatedroute.md#optional-redirecttoifunauthenticated)_

_Defined in [src/interfaces/authenticated-route.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0bc294c/src/interfaces/authenticated-route.ts#L20)_

Route to redirect to if the current user is not authenticated.

**`memberof`** UnauthenticatedRedirectProps

---

### route

• **route**: _[RouteDefinition](routedefinition.md)_

_Defined in [src/components/routing/nested-route.tsx:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0bc294c/src/components/routing/nested-route.tsx#L13)_
