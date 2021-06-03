[andculturecode-javascript-react](../README.md) › [NestedRoutesProps](nestedroutesprops.md)

# Interface: NestedRoutesProps

## Hierarchy

* [UnmatchedRoute](unmatchedroute.md)

* [AuthenticatedRoute](authenticatedroute.md)

  ↳ **NestedRoutesProps**

## Index

### Properties

* [isAuthenticated](nestedroutesprops.md#isauthenticated)
* [redirectToIfNotFound](nestedroutesprops.md#optional-redirecttoifnotfound)
* [redirectToIfUnauthenticated](nestedroutesprops.md#optional-redirecttoifunauthenticated)
* [routes](nestedroutesprops.md#routes)

## Properties

###  isAuthenticated

• **isAuthenticated**: *boolean*

*Inherited from [AuthenticatedRoute](authenticatedroute.md).[isAuthenticated](authenticatedroute.md#isauthenticated)*

*Defined in [src/interfaces/authenticated-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/authenticated-route.ts#L12)*

Flag to determine whether the current user is authenticated or not.

**`memberof`** AuthenticatedRouteProps

___

### `Optional` redirectToIfNotFound

• **redirectToIfNotFound**? : *undefined | string*

*Inherited from [UnmatchedRoute](unmatchedroute.md).[redirectToIfNotFound](unmatchedroute.md#optional-redirecttoifnotfound)*

*Defined in [src/interfaces/unmatched-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/unmatched-route.ts#L12)*

Route to redirect to if the specified route cannot be matched.

**`memberof`** RouteNotFoundProps

___

### `Optional` redirectToIfUnauthenticated

• **redirectToIfUnauthenticated**? : *undefined | string*

*Inherited from [AuthenticatedRoute](authenticatedroute.md).[redirectToIfUnauthenticated](authenticatedroute.md#optional-redirecttoifunauthenticated)*

*Defined in [src/interfaces/authenticated-route.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/authenticated-route.ts#L20)*

Route to redirect to if the current user is not authenticated.

**`memberof`** UnauthenticatedRedirectProps

___

###  routes

• **routes**: *[RouteDefinition](routedefinition.md)[]*

*Defined in [src/components/routing/nested-routes.tsx:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/components/routing/nested-routes.tsx#L14)*
