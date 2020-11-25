[andculturecode-javascript-react](../README.md) › [AuthenticatedRouteProps](authenticatedrouteprops.md)

# Interface: AuthenticatedRouteProps <**C, S**>

## Type parameters

▪ **C**: _StaticContext_

▪ **S**

## Hierarchy

-   RouteComponentProps‹any›

-   [AuthenticatedRoute](authenticatedroute.md)

    ↳ **AuthenticatedRouteProps**

## Index

### Properties

-   [history](authenticatedrouteprops.md#history)
-   [isAuthenticated](authenticatedrouteprops.md#isauthenticated)
-   [location](authenticatedrouteprops.md#location)
-   [match](authenticatedrouteprops.md#match)
-   [redirectToIfUnauthenticated](authenticatedrouteprops.md#optional-redirecttoifunauthenticated)
-   [render](authenticatedrouteprops.md#render)
-   [route](authenticatedrouteprops.md#route)
-   [staticContext](authenticatedrouteprops.md#optional-staticcontext)

## Properties

### history

• **history**: _History‹S›_

_Inherited from [AuthenticatedRouteProps](authenticatedrouteprops.md).[history](authenticatedrouteprops.md#history)_

Defined in node_modules/@types/react-router/index.d.ts:75

---

### isAuthenticated

• **isAuthenticated**: _boolean_

_Inherited from [AuthenticatedRoute](authenticatedroute.md).[isAuthenticated](authenticatedroute.md#isauthenticated)_

_Defined in [src/interfaces/authenticated-route.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/045a6f6/src/interfaces/authenticated-route.ts#L12)_

Flag to determine whether the current user is authenticated or not.

**`memberof`** AuthenticatedRouteProps

---

### location

• **location**: _Location‹S›_

_Inherited from [AuthenticatedRouteProps](authenticatedrouteprops.md).[location](authenticatedrouteprops.md#location)_

Defined in node_modules/@types/react-router/index.d.ts:76

---

### match

• **match**: _match‹any›_

_Inherited from [AuthenticatedRouteProps](authenticatedrouteprops.md).[match](authenticatedrouteprops.md#match)_

Defined in node_modules/@types/react-router/index.d.ts:77

---

### `Optional` redirectToIfUnauthenticated

• **redirectToIfUnauthenticated**? : _undefined | string_

_Inherited from [AuthenticatedRoute](authenticatedroute.md).[redirectToIfUnauthenticated](authenticatedroute.md#optional-redirecttoifunauthenticated)_

_Defined in [src/interfaces/authenticated-route.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/045a6f6/src/interfaces/authenticated-route.ts#L20)_

Route to redirect to if the current user is not authenticated.

**`memberof`** UnauthenticatedRedirectProps

---

### render

• **render**: _function_

_Defined in [src/components/routing/authenticated-route.tsx:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/045a6f6/src/components/routing/authenticated-route.tsx#L14)_

#### Type declaration:

▸ (`props`: any): _any_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `props` | any  |

---

### route

• **route**: _[RouteDefinition](routedefinition.md)_

_Defined in [src/components/routing/authenticated-route.tsx:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/045a6f6/src/components/routing/authenticated-route.tsx#L13)_

---

### `Optional` staticContext

• **staticContext**? : _C_

_Inherited from [AuthenticatedRouteProps](authenticatedrouteprops.md).[staticContext](authenticatedrouteprops.md#optional-staticcontext)_

Defined in node_modules/@types/react-router/index.d.ts:78
