[andculturecode-javascript-react](../README.md) › [NestedRouteProps](nestedrouteprops.md)

# Interface: NestedRouteProps

## Hierarchy

* [AuthenticatedRoute](authenticatedroute.md)

  ↳ **NestedRouteProps**

## Index

### Properties

* [isAuthenticated](nestedrouteprops.md#isauthenticated)
* [redirectToIfUnauthenticated](nestedrouteprops.md#optional-redirecttoifunauthenticated)
* [route](nestedrouteprops.md#route)

## Properties

###  isAuthenticated

• **isAuthenticated**: *boolean*

*Inherited from [AuthenticatedRoute](authenticatedroute.md).[isAuthenticated](authenticatedroute.md#isauthenticated)*

*Defined in [src/interfaces/authenticated-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/authenticated-route.ts#L12)*

Flag to determine whether the current user is authenticated or not.

**`memberof`** AuthenticatedRouteProps

___

### `Optional` redirectToIfUnauthenticated

• **redirectToIfUnauthenticated**? : *undefined | string*

*Inherited from [AuthenticatedRoute](authenticatedroute.md).[redirectToIfUnauthenticated](authenticatedroute.md#optional-redirecttoifunauthenticated)*

*Defined in [src/interfaces/authenticated-route.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/authenticated-route.ts#L20)*

Route to redirect to if the current user is not authenticated.

**`memberof`** UnauthenticatedRedirectProps

___

###  route

• **route**: *[RouteDefinition](routedefinition.md)*

*Defined in [src/components/routing/nested-route.tsx:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/components/routing/nested-route.tsx#L13)*
