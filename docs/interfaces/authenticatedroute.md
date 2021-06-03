[andculturecode-javascript-react](../README.md) › [AuthenticatedRoute](authenticatedroute.md)

# Interface: AuthenticatedRoute

## Hierarchy

* **AuthenticatedRoute**

  ↳ [AuthenticatedRouteProps](authenticatedrouteprops.md)

  ↳ [NestedRouteProps](nestedrouteprops.md)

  ↳ [NestedRoutesProps](nestedroutesprops.md)

## Index

### Properties

* [isAuthenticated](authenticatedroute.md#isauthenticated)
* [redirectToIfUnauthenticated](authenticatedroute.md#optional-redirecttoifunauthenticated)

## Properties

###  isAuthenticated

• **isAuthenticated**: *boolean*

*Defined in [src/interfaces/authenticated-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/authenticated-route.ts#L12)*

Flag to determine whether the current user is authenticated or not.

**`memberof`** AuthenticatedRouteProps

___

### `Optional` redirectToIfUnauthenticated

• **redirectToIfUnauthenticated**? : *undefined | string*

*Defined in [src/interfaces/authenticated-route.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/authenticated-route.ts#L20)*

Route to redirect to if the current user is not authenticated.

**`memberof`** UnauthenticatedRedirectProps
