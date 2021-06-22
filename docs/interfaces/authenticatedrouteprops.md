[andculturecode-javascript-react](../README.md) › [AuthenticatedRouteProps](authenticatedrouteprops.md)

# Interface: AuthenticatedRouteProps <**C, S**>

## Type parameters

▪ **C**: *StaticContext*

▪ **S**

## Hierarchy

* RouteComponentProps‹any›

* [AuthenticatedRoute](authenticatedroute.md)

  ↳ **AuthenticatedRouteProps**

## Index

### Properties

* [history](authenticatedrouteprops.md#history)
* [isAuthenticated](authenticatedrouteprops.md#isauthenticated)
* [location](authenticatedrouteprops.md#location)
* [match](authenticatedrouteprops.md#match)
* [redirectToIfUnauthenticated](authenticatedrouteprops.md#optional-redirecttoifunauthenticated)
* [render](authenticatedrouteprops.md#render)
* [route](authenticatedrouteprops.md#route)
* [staticContext](authenticatedrouteprops.md#optional-staticcontext)

## Properties

###  history

• **history**: *History‹S›*

*Inherited from [AuthenticatedRouteProps](authenticatedrouteprops.md).[history](authenticatedrouteprops.md#history)*

Defined in node_modules/@types/react-router/index.d.ts:75

___

###  isAuthenticated

• **isAuthenticated**: *boolean*

*Inherited from [AuthenticatedRoute](authenticatedroute.md).[isAuthenticated](authenticatedroute.md#isauthenticated)*

*Defined in [src/interfaces/authenticated-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/authenticated-route.ts#L12)*

Flag to determine whether the current user is authenticated or not.

**`memberof`** AuthenticatedRouteProps

___

###  location

• **location**: *Location‹S›*

*Inherited from [AuthenticatedRouteProps](authenticatedrouteprops.md).[location](authenticatedrouteprops.md#location)*

Defined in node_modules/@types/react-router/index.d.ts:76

___

###  match

• **match**: *match‹any›*

*Inherited from [AuthenticatedRouteProps](authenticatedrouteprops.md).[match](authenticatedrouteprops.md#match)*

Defined in node_modules/@types/react-router/index.d.ts:77

___

### `Optional` redirectToIfUnauthenticated

• **redirectToIfUnauthenticated**? : *undefined | string*

*Inherited from [AuthenticatedRoute](authenticatedroute.md).[redirectToIfUnauthenticated](authenticatedroute.md#optional-redirecttoifunauthenticated)*

*Defined in [src/interfaces/authenticated-route.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/authenticated-route.ts#L20)*

Route to redirect to if the current user is not authenticated.

**`memberof`** UnauthenticatedRedirectProps

___

###  render

• **render**: *function*

*Defined in [src/components/routing/authenticated-route.tsx:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/components/routing/authenticated-route.tsx#L14)*

#### Type declaration:

▸ (`props`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

___

###  route

• **route**: *[RouteDefinition](routedefinition.md)*

*Defined in [src/components/routing/authenticated-route.tsx:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/components/routing/authenticated-route.tsx#L13)*

___

### `Optional` staticContext

• **staticContext**? : *C*

*Inherited from [AuthenticatedRouteProps](authenticatedrouteprops.md).[staticContext](authenticatedrouteprops.md#optional-staticcontext)*

Defined in node_modules/@types/react-router/index.d.ts:78
