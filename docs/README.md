[andculturecode-javascript-react](README.md)

# andculturecode-javascript-react

## Index

### Enumerations

-   [WindowEvents](enums/windowevents.md)

### Interfaces

-   [AuthenticatedRoute](interfaces/authenticatedroute.md)
-   [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md)
-   [NestedRouteProps](interfaces/nestedrouteprops.md)
-   [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md)
-   [NestedRoutesProps](interfaces/nestedroutesprops.md)
-   [RedirectDefinition](interfaces/redirectdefinition.md)
-   [RedirectsProps](interfaces/redirectsprops.md)
-   [RouteDefinition](interfaces/routedefinition.md)
-   [RouteMap](interfaces/routemap.md)
-   [UnmatchedRoute](interfaces/unmatchedroute.md)
-   [UseQueryOptions](interfaces/usequeryoptions.md)

### Type aliases

-   [AsyncEffectCallback](README.md#asynceffectcallback)
-   [BulkUpdateService](README.md#bulkupdateservice)
-   [BulkUpdateServiceHook](README.md#bulkupdateservicehook)
-   [CreateService](README.md#createservice)
-   [CreateServiceHook](README.md#createservicehook)
-   [DeleteService](README.md#deleteservice)
-   [DeleteServiceHook](README.md#deleteservicehook)
-   [GetService](README.md#getservice)
-   [GetServiceHook](README.md#getservicehook)
-   [ListService](README.md#listservice)
-   [ListServiceHook](README.md#listservicehook)
-   [NestedCreateService](README.md#nestedcreateservice)
-   [NestedCreateServiceHook](README.md#nestedcreateservicehook)
-   [NestedListService](README.md#nestedlistservice)
-   [NestedListServiceHook](README.md#nestedlistservicehook)
-   [UpdateService](README.md#updateservice)
-   [UpdateServiceHook](README.md#updateservicehook)

### Variables

-   [RouteDefinitionFactory](README.md#const-routedefinitionfactory)
-   [RouteDefinitionNestedFactory](README.md#const-routedefinitionnestedfactory)
-   [RouteMapFactory](README.md#const-routemapfactory)

### Functions

-   [AuthenticatedRoute](README.md#const-authenticatedroute)
-   [NestedRoute](README.md#const-nestedroute)
-   [NestedRoutes](README.md#const-nestedroutes)
-   [NestedRoutesByProperty](README.md#const-nestedroutesbyproperty)
-   [Redirects](README.md#const-redirects)
-   [\_buildUrl](README.md#const-_buildurl)
-   [\_bulkUpdate](README.md#const-_bulkupdate)
-   [\_create](README.md#const-_create)
-   [\_delete](README.md#const-_delete)
-   [\_get](README.md#const-_get)
-   [\_list](README.md#const-_list)
-   [\_update](README.md#const-_update)
-   [debugRoutes](README.md#const-debugroutes)
-   [getFlattenedRoutes](README.md#const-getflattenedroutes)
-   [makeCancellable](README.md#const-makecancellable)
-   [useAsyncEffect](README.md#useasynceffect)
-   [useCancellablePromise](README.md#const-usecancellablepromise)
-   [useDebounce](README.md#usedebounce)
-   [useLocalization](README.md#const-uselocalization)
-   [useOnClickOutside](README.md#useonclickoutside)
-   [usePageErrors](README.md#usepageerrors)
-   [useQuery](README.md#usequery)
-   [useSortedAlphabetically](README.md#usesortedalphabetically)
-   [useTextOverflow](README.md#usetextoverflow)
-   [useWindow](README.md#usewindow)

### Object literals

-   [FactoryType](README.md#const-factorytype)
-   [RouteUtils](README.md#const-routeutils)
-   [ServiceFactory](README.md#const-servicefactory)
-   [ServiceHookFactory](README.md#const-servicehookfactory)

## Type aliases

### AsyncEffectCallback

Ƭ **AsyncEffectCallback**: _function_

_Defined in [src/types/async-effect-callback-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/async-effect-callback-type.ts#L6)_

Type defining the asyncEffect parameter from calling `useAsyncEffect()`

#### Type declaration:

▸ (`isMounted`: function): _Promise‹ReturnType‹EffectCallback››_

**Parameters:**

▪ **isMounted**: _function_

▸ (): _boolean_

---

### BulkUpdateService

Ƭ **BulkUpdateService**: _function_

_Defined in [src/types/bulk-update-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/bulk-update-service-type.ts#L9)_

Type defining the service function for bulk updating the supplied resource type

**`param`** Records to be updated

**`param`** Object with path parameters to be replaced in the endpoint route

#### Type declaration:

▸ (`records`: TRecord[], `pathParams`: TPathParams): _Promise‹ServiceResponse‹TRecord››_

**Parameters:**

| Name         | Type        |
| ------------ | ----------- |
| `records`    | TRecord[]   |
| `pathParams` | TPathParams |

---

### BulkUpdateServiceHook

Ƭ **BulkUpdateServiceHook**: _function_

_Defined in [src/types/bulk-update-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/bulk-update-service-hook-type.ts#L6)_

Type defining the return object from calling `useBulkUpdate()`

#### Type declaration:

▸ (): _object_

-   **update**: _[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›_

---

### CreateService

Ƭ **CreateService**: _function_

_Defined in [src/types/create-service-type.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/create-service-type.ts#L8)_

Type defining the service function for creating the supplied resource type

**`param`** Record to be created

#### Type declaration:

▸ (`record?`: TRecord): _Promise‹ServiceResponse‹TRecord››_

**Parameters:**

| Name      | Type    |
| --------- | ------- |
| `record?` | TRecord |

---

### CreateServiceHook

Ƭ **CreateServiceHook**: _function_

_Defined in [src/types/create-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/create-service-hook-type.ts#L6)_

Type defining the return object from calling `useCreate()`

#### Type declaration:

▸ (): _object_

-   **create**: _[CreateService](README.md#createservice)‹TRecord›_

---

### DeleteService

Ƭ **DeleteService**: _function_

_Defined in [src/types/delete-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/delete-service-type.ts#L9)_

Type defining the service function for deleting the supplied resource

**`param`** Id of the record to be deleted

**`param`** Object with path parameters to be replaced in the endpoint route

#### Type declaration:

▸ (`id`: number, `pathParams?`: any): _Promise‹ServiceResponse‹Boolean››_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `id`          | number |
| `pathParams?` | any    |

---

### DeleteServiceHook

Ƭ **DeleteServiceHook**: _function_

_Defined in [src/types/delete-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/delete-service-hook-type.ts#L6)_

Type defining the return object from calling `useDelete()`

#### Type declaration:

▸ (): _object_

-   **delete**: _[DeleteService](README.md#deleteservice)_

---

### GetService

Ƭ **GetService**: _function_

_Defined in [src/types/get-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/get-service-type.ts#L9)_

Type defining the service function for getting the supplied resource type

**`param`** Object with path parameters to be replaced in the endpoint route

**`param`** Object with query parameters to be appended to the endpoint route

#### Type declaration:

▸ (`pathParams`: TPathParams, `queryParams?`: TQueryParams): _Promise‹ServiceResponse‹TRecord››_

**Parameters:**

| Name           | Type         |
| -------------- | ------------ |
| `pathParams`   | TPathParams  |
| `queryParams?` | TQueryParams |

---

### GetServiceHook

Ƭ **GetServiceHook**: _function_

_Defined in [src/types/get-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/get-service-hook-type.ts#L6)_

Type defining the return object from calling `useGet()`

#### Type declaration:

▸ (): _object_

-   **get**: _[GetService](README.md#getservice)‹TRecord, TPathParams, TQueryParams›_

---

### ListService

Ƭ **ListService**: _function_

_Defined in [src/types/list-service-type.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/list-service-type.ts#L8)_

Type defining the service function for listing resources by supplied type

**`param`** Object with query parameters to be appended to the endpoint route

#### Type declaration:

▸ (`queryParams?`: TQueryParams): _Promise‹ServiceResponse‹TRecord››_

**Parameters:**

| Name           | Type         |
| -------------- | ------------ |
| `queryParams?` | TQueryParams |

---

### ListServiceHook

Ƭ **ListServiceHook**: _function_

_Defined in [src/types/list-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/list-service-hook-type.ts#L6)_

Type defining the return object from calling `useList()`

#### Type declaration:

▸ (): _object_

-   **list**: _[ListService](README.md#listservice)‹TRecord, TQueryParams›_

---

### NestedCreateService

Ƭ **NestedCreateService**: _function_

_Defined in [src/types/nested-create-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/nested-create-service-type.ts#L9)_

Type defining the service function for creating the supplied resource type when resource is nested

**`param`** Record to be created

**`param`** Object with path parameters to be replaced in the endpoint route

#### Type declaration:

▸ (`record`: TRecord, `pathParams`: TPathParams): _Promise‹ServiceResponse‹TRecord››_

**Parameters:**

| Name         | Type        |
| ------------ | ----------- |
| `record`     | TRecord     |
| `pathParams` | TPathParams |

---

### NestedCreateServiceHook

Ƭ **NestedCreateServiceHook**: _function_

_Defined in [src/types/nested-create-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/nested-create-service-hook-type.ts#L6)_

Type defining the return object from calling `useNestedCreate()`

#### Type declaration:

▸ (): _object_

-   **create**: _[NestedCreateService](README.md#nestedcreateservice)‹TRecord, TPathParams›_

---

### NestedListService

Ƭ **NestedListService**: _function_

_Defined in [src/types/nested-list-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/nested-list-service-type.ts#L9)_

Type defining the service function for listing resources by supplied type when resource is nested

**`param`** Object with path parameters to be replaced in the endpoint route

**`param`** Object with query parameters to be appended to the endpoint route

#### Type declaration:

▸ (`pathParams`: TPathParams, `queryParams?`: TQueryParams): _Promise‹ServiceResponse‹TRecord››_

**Parameters:**

| Name           | Type         |
| -------------- | ------------ |
| `pathParams`   | TPathParams  |
| `queryParams?` | TQueryParams |

---

### NestedListServiceHook

Ƭ **NestedListServiceHook**: _function_

_Defined in [src/types/nested-list-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/nested-list-service-hook-type.ts#L6)_

Type defining the return object from calling `useNestedList()`

#### Type declaration:

▸ (): _object_

-   **list**: _[NestedListService](README.md#nestedlistservice)‹TRecord, TPathParams, TQueryParams›_

---

### UpdateService

Ƭ **UpdateService**: _function_

_Defined in [src/types/update-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/update-service-type.ts#L9)_

Type defining the service function for updating the supplied resource type

**`param`** Record to be created

**`param`** Object with path parameters to be replaced in the endpoint route

#### Type declaration:

▸ (`record`: TRecord, `pathParams?`: TPathParams): _Promise‹ServiceResponse‹TRecord››_

**Parameters:**

| Name          | Type        |
| ------------- | ----------- |
| `record`      | TRecord     |
| `pathParams?` | TPathParams |

---

### UpdateServiceHook

Ƭ **UpdateServiceHook**: _function_

_Defined in [src/types/update-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/types/update-service-hook-type.ts#L6)_

Type defining the return object from calling `useUpdate()`

#### Type declaration:

▸ (): _object_

-   **update**: _[UpdateService](README.md#updateservice)‹TRecord, TPathParams›_

## Variables

### `Const` RouteDefinitionFactory

• **RouteDefinitionFactory**: _IFactory‹[RouteDefinition](interfaces/routedefinition.md)›_ = Factory.define<RouteDefinition>(
FactoryType.RouteDefinition.Default
)
.sequence("authRequired", () => false)
.sequence("component", () => React.Fragment)
.sequence("exact", () => true)
.sequence("path", (i: number) => `/path${i}`)
.sequence("routes", () => {})

_Defined in [src/tests/factories/route-definition-factory.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/tests/factories/route-definition-factory.ts#L10)_

---

### `Const` RouteDefinitionNestedFactory

• **RouteDefinitionNestedFactory**: _IFactory‹[RouteDefinition](interfaces/routedefinition.md)›_ = Factory.define<RouteDefinition>(
FactoryType.RouteDefinition.Nested
)
.sequence("authRequired", () => false)
.sequence("component", () => React.Fragment)
.sequence("exact", () => true)
.sequence("path", (i: number) => `/path${i}`)
.sequence("routes", () => {
return {
nestedRoute: Factory.build<RouteDefinition>(
FactoryType.RouteDefinition.Default
),
};
})

_Defined in [src/tests/factories/route-definition-factory.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/tests/factories/route-definition-factory.ts#L19)_

---

### `Const` RouteMapFactory

• **RouteMapFactory**: _IFactory‹[RouteMap](interfaces/routemap.md)›_ = Factory.define<RouteMap>(
FactoryType.RouteMap
).sequence("/", () =>
Factory.build<RouteDefinition>(FactoryType.RouteDefinition.Default)
)

_Defined in [src/tests/factories/route-map-factory.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/tests/factories/route-map-factory.ts#L10)_

## Functions

### `Const` AuthenticatedRoute

▸ **AuthenticatedRoute**(`props`: [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md)): _Element‹›_

_Defined in [src/components/routing/authenticated-route.tsx:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/components/routing/authenticated-route.tsx#L23)_

Locks a route behind authentication. Can optionally redirect a user to another location if
attempting to access the route while unauthenticated.

**Parameters:**

| Name    | Type                                                             |
| ------- | ---------------------------------------------------------------- |
| `props` | [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md) |

**Returns:** _Element‹›_

---

### `Const` NestedRoute

▸ **NestedRoute**(`props`: [NestedRouteProps](interfaces/nestedrouteprops.md)): _Element‹›_

_Defined in [src/components/routing/nested-route.tsx:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/components/routing/nested-route.tsx#L26)_

Dynamically renders a route and its subroutes, accounting
for additional custom properties on RouteDefinition

**Parameters:**

| Name    | Type                                               |
| ------- | -------------------------------------------------- |
| `props` | [NestedRouteProps](interfaces/nestedrouteprops.md) |

**Returns:** _Element‹›_

---

### `Const` NestedRoutes

▸ **NestedRoutes**(`props`: [NestedRoutesProps](interfaces/nestedroutesprops.md)): _null | Element‹›_

_Defined in [src/components/routing/nested-routes.tsx:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/components/routing/nested-routes.tsx#L27)_

Component to easily render nested sub-route components from a list of routes.
Commonly used when setting up a layout

**Parameters:**

| Name    | Type                                                 |
| ------- | ---------------------------------------------------- |
| `props` | [NestedRoutesProps](interfaces/nestedroutesprops.md) |

**Returns:** _null | Element‹›_

---

### `Const` NestedRoutesByProperty

▸ **NestedRoutesByProperty**(`props`: [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md)): _null | Element‹›_

_Defined in [src/components/routing/nested-routes-by-property.tsx:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/components/routing/nested-routes-by-property.tsx#L27)_

Renders Route components mapped to a custom property

**Parameters:**

| Name    | Type                                                                     |
| ------- | ------------------------------------------------------------------------ |
| `props` | [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md) |

**Returns:** _null | Element‹›_

---

### `Const` Redirects

▸ **Redirects**(`props`: [RedirectsProps](interfaces/redirectsprops.md)): _Element‹›_

_Defined in [src/components/routing/redirects.tsx:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/components/routing/redirects.tsx#L22)_

Simple way to redirect a flat array of RedirectDefinitions

**Parameters:**

| Name    | Type                                           |
| ------- | ---------------------------------------------- |
| `props` | [RedirectsProps](interfaces/redirectsprops.md) |

**Returns:** _Element‹›_

---

### `Const` \_buildUrl

▸ **\_buildUrl**(`id`: number, `resourceEndpoint`: string, `pathParams?`: any): _string_

_Defined in [src/services/service-factory.ts:159](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L159)_

**Parameters:**

| Name               | Type   |
| ------------------ | ------ |
| `id`               | number |
| `resourceEndpoint` | string |
| `pathParams?`      | any    |

**Returns:** _string_

---

### `Const` \_bulkUpdate

▸ **\_bulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `records`: Array‹TRecord›, `resourceEndpoint`: string, `pathParams`: TPathParams): _Promise‹ServiceResponse‹TRecord››_

_Defined in [src/services/service-factory.ts:167](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L167)_

**Type parameters:**

▪ **TRecord**: _any_

▪ **TPathParams**: _any_

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **records**: _Array‹TRecord›_

▪ **resourceEndpoint**: _string_

▪ **pathParams**: _TPathParams_

**Returns:** _Promise‹ServiceResponse‹TRecord››_

---

### `Const` \_create

▸ **\_create**<**TRecord**>(`recordType`: object, `url`: string, `record?`: TRecord): _Promise‹ServiceResponse‹TRecord››_

_Defined in [src/services/service-factory.ts:185](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L185)_

**Type parameters:**

▪ **TRecord**: _any_

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **url**: _string_

▪`Optional` **record**: _TRecord_

**Returns:** _Promise‹ServiceResponse‹TRecord››_

---

### `Const` \_delete

▸ **\_delete**(`id`: number, `resourceEndpoint`: string, `pathParams?`: any): _Promise‹ServiceResponse‹Boolean››_

_Defined in [src/services/service-factory.ts:197](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L197)_

**Parameters:**

| Name               | Type   |
| ------------------ | ------ |
| `id`               | number |
| `resourceEndpoint` | string |
| `pathParams?`      | any    |

**Returns:** _Promise‹ServiceResponse‹Boolean››_

---

### `Const` \_get

▸ **\_get**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `resourceEndpoint`: string, `pathParams`: TPathParams, `queryParams?`: TQueryParams): _Promise‹ServiceResponse‹TRecord››_

_Defined in [src/services/service-factory.ts:208](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L208)_

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **resourceEndpoint**: _string_

▪ **pathParams**: _TPathParams_

▪`Optional` **queryParams**: _TQueryParams_

**Returns:** _Promise‹ServiceResponse‹TRecord››_

---

### `Const` \_list

▸ **\_list**<**TRecord**>(`recordType`: object, `baseEndpoint`: string, `pathParams?`: any, `queryParams?`: any): _Promise‹ServiceResponse‹TRecord››_

_Defined in [src/services/service-factory.ts:224](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L224)_

**Type parameters:**

▪ **TRecord**: _any_

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **baseEndpoint**: _string_

▪`Optional` **pathParams**: _any_

▪`Optional` **queryParams**: _any_

**Returns:** _Promise‹ServiceResponse‹TRecord››_

---

### `Const` \_update

▸ **\_update**<**TRecord**, **TPathParams**>(`recordType`: object, `record`: TRecord, `resourceEndpoint`: string, `pathParams?`: TPathParams): _Promise‹ServiceResponse‹TRecord››_

_Defined in [src/services/service-factory.ts:240](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L240)_

**Type parameters:**

▪ **TRecord**: _any_

▪ **TPathParams**: _any_

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **record**: _TRecord_

▪ **resourceEndpoint**: _string_

▪`Optional` **pathParams**: _TPathParams_

**Returns:** _Promise‹ServiceResponse‹TRecord››_

---

### `Const` debugRoutes

▸ **debugRoutes**(`routes`: [RouteMap](interfaces/routemap.md)): _void_

_Defined in [src/utilities/route-utils.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/utilities/route-utils.ts#L15)_

Outputs flattened routing table for debugging purposes

**Parameters:**

| Name     | Type                               |
| -------- | ---------------------------------- |
| `routes` | [RouteMap](interfaces/routemap.md) |

**Returns:** _void_

---

### `Const` getFlattenedRoutes

▸ **getFlattenedRoutes**(`routeArray`: [RouteDefinition](interfaces/routedefinition.md)[]): _[RouteDefinition](interfaces/routedefinition.md)[]_

_Defined in [src/utilities/route-utils.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/utilities/route-utils.ts#L23)_

**Parameters:**

| Name         | Type                                               |
| ------------ | -------------------------------------------------- |
| `routeArray` | [RouteDefinition](interfaces/routedefinition.md)[] |

**Returns:** _[RouteDefinition](interfaces/routedefinition.md)[]_

---

### `Const` makeCancellable

▸ **makeCancellable**(`promise`: Promise‹any›): _object_

_Defined in [src/hooks/make-cancellable.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/make-cancellable.ts#L10)_

Wrap the provided promise in a promise that intercepts cancellation requests

**Parameters:**

| Name      | Type         |
| --------- | ------------ |
| `promise` | Promise‹any› |

**Returns:** _object_

-   **promise**: _Promise‹unknown›_ = wrappedPromise

-   **cancel**(): _void_

---

### useAsyncEffect

▸ **useAsyncEffect**(`asyncEffect`: [AsyncEffectCallback](README.md#asynceffectcallback), `deps`: DependencyList): _void_

_Defined in [src/hooks/use-async-effect.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-async-effect.ts#L10)_

Version of the useEffect hook that accepts an async function

**`export`**

**Parameters:**

| Name          | Type                                                 | Description |
| ------------- | ---------------------------------------------------- | ----------- |
| `asyncEffect` | [AsyncEffectCallback](README.md#asynceffectcallback) | -           |
| `deps`        | DependencyList                                       |             |

**Returns:** _void_

---

### `Const` useCancellablePromise

▸ **useCancellablePromise**(): _object_

_Defined in [src/hooks/use-cancellable-promise.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-cancellable-promise.ts#L4)_

**Returns:** _object_

-   **cancellablePromise**: _cancellablePromise_

---

### useDebounce

▸ **useDebounce**<**T**>(`value`: T, `delay`: number): _T_

_Defined in [src/hooks/use-debounce.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-debounce.ts#L8)_

Throttles the supplied value for a set amount of milliseconds

**Type parameters:**

▪ **T**

**Parameters:**

| Name    | Type   | Default | Description                     |
| ------- | ------ | ------- | ------------------------------- |
| `value` | T      | -       | -                               |
| `delay` | number | 200     | number of milliseconds to delay |

**Returns:** _T_

---

### `Const` useLocalization

▸ **useLocalization**<**TKeys**>(): _object_

_Defined in [src/hooks/use-localization.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-localization.ts#L7)_

Typed wrapper of i18n `useTranslation` hook

**Type parameters:**

▪ **TKeys**

**Returns:** _object_

-   **t**: _translate_ = useCallback(translate, [t])

---

### useOnClickOutside

▸ **useOnClickOutside**(`ref`: RefObject‹HTMLElement›, `handler`: function, `deps?`: React.DependencyList | undefined): _void_

_Defined in [src/hooks/use-onclick-outside.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-onclick-outside.ts#L9)_

Custom hook providing utility to take some action when a mouse event is fired outside of an element.

**Parameters:**

▪ **ref**: _RefObject‹HTMLElement›_

▪ **handler**: _function_

▸ (): _void_

▪`Optional` **deps**: _React.DependencyList | undefined_

**Returns:** _void_

---

### usePageErrors

▸ **usePageErrors**(): _object_

_Defined in [src/hooks/use-page-errors.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-page-errors.ts#L7)_

Hook to bundle common page error handling functionality

**Returns:** _object_

-   **handlePageLoadError**: _(Anonymous function)_

-   **pageErrors**: _string[]_

-   **resetPageErrors**: _(Anonymous function)_

-   **setPageErrors**(): _function_

    -   (`value`: A): _void_

---

### useQuery

▸ **useQuery**<**TRecord**, **TQueryParams**, **TPathParams**>(`options`: [UseQueryOptions](interfaces/usequeryoptions.md)‹TRecord, TQueryParams, TPathParams›): _object_

_Defined in [src/hooks/use-query.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-query.ts#L11)_

**Type parameters:**

▪ **TRecord**

▪ **TQueryParams**

▪ **TPathParams**

**Parameters:**

| Name      | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `options` | [UseQueryOptions](interfaces/usequeryoptions.md)‹TRecord, TQueryParams, TPathParams› |

**Returns:** _object_

-   **loading**: _boolean_

-   **pathParams**: _undefined | TPathParams_

-   **query**: _TQueryParams_

-   **setPathParams**(): _function_

    -   (`value`: A): _void_

-   **setQuery**(): _function_

    -   (`value`: A): _void_

-   **setValues**(): _function_

    -   (`value`: A): _void_

-   **values**: _TRecord[]_

---

### useSortedAlphabetically

▸ **useSortedAlphabetically**<**T**>(`initialValue`: Array‹T›, `sortBySelector`: function): _[ReducerState‹Reducer‹Array‹T›, Array‹T›››, Dispatch‹ReducerAction‹Reducer‹Array‹T›, Array‹T››››]_

_Defined in [src/hooks/use-sorted-alphabetically.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-sorted-alphabetically.ts#L19)_

Create a stateful array value which is always sorted alphabetically.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialValue**: _Array‹T›_

the initial value of the array. Does not need to be sorted, the hook will sort it before setting the value.

▪ **sortBySelector**: _function_

a function which takes an array element, and returns a string property by which to sort alphabetically.

▸ (`value`: T): _string_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

**Returns:** _[ReducerState‹Reducer‹Array‹T›, Array‹T›››, Dispatch‹ReducerAction‹Reducer‹Array‹T›, Array‹T››››]_

---

### useTextOverflow

▸ **useTextOverflow**<**T**>(`ref`: RefObject‹T›): _boolean_

_Defined in [src/hooks/use-text-overflow.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-text-overflow.ts#L11)_

A custom hook for determining if elements overflow their containers.
Useful for when you have text-overflow: ellipsis; and you want to
detect whether the text is actually long enough to trigger the ellipsis
to appear.

**Type parameters:**

▪ **T**: _HTMLElement_

**Parameters:**

| Name  | Type         | Description |
| ----- | ------------ | ----------- |
| `ref` | RefObject‹T› |             |

**Returns:** _boolean_

---

### useWindow

▸ **useWindow**(): _object_

_Defined in [src/hooks/use-window.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/hooks/use-window.ts#L8)_

Get window properties.
Hook into window events and make properties more easily accessible to components.

**Returns:** _object_

-   **height**: _number_

-   **width**: _number_

## Object literals

### `Const` FactoryType

### ▪ **FactoryType**: _object_

_Defined in [src/tests/factories/factory-type.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/tests/factories/factory-type.ts#L1)_

### RouteMap

• **RouteMap**: _string_ = "RouteMap"

_Defined in [src/tests/factories/factory-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/tests/factories/factory-type.ts#L6)_

▪ **RouteDefinition**: _object_

_Defined in [src/tests/factories/factory-type.ts:2](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/tests/factories/factory-type.ts#L2)_

-   **Default**: _string_ = "RouteDefinition"

-   **Nested**: _string_ = "RouteDefinition.Nested"

---

### `Const` RouteUtils

### ▪ **RouteUtils**: _object_

_Defined in [src/utilities/route-utils.ts:45](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/utilities/route-utils.ts#L45)_

### appendQueryParams

• **appendQueryParams**: _function_ = CoreRouteUtils.appendQueryParams

_Defined in [src/utilities/route-utils.ts:46](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/utilities/route-utils.ts#L46)_

#### Type declaration:

▸ (`path`: string, `queryParams`: any, `arrayFormat?`: QueryStringArrayFormat, `arrayFormatSeparator?`: string | undefined): _string_

**Parameters:**

| Name                    | Type                    |
| ----------------------- | ----------------------- |
| `path`                  | string                  |
| `queryParams`           | any                     |
| `arrayFormat?`          | QueryStringArrayFormat  |
| `arrayFormatSeparator?` | string &#124; undefined |

### debugRoutes

• **debugRoutes**: _[debugRoutes](README.md#const-debugroutes)_

_Defined in [src/utilities/route-utils.ts:47](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/utilities/route-utils.ts#L47)_

### getFlattenedRoutes

• **getFlattenedRoutes**: _[getFlattenedRoutes](README.md#const-getflattenedroutes)_

_Defined in [src/utilities/route-utils.ts:48](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/utilities/route-utils.ts#L48)_

### getUrl

• **getUrl**: _function_ = CoreRouteUtils.getUrl

_Defined in [src/utilities/route-utils.ts:49](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/utilities/route-utils.ts#L49)_

#### Type declaration:

▸ (`path`: string, `pathParams?`: any): _string_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `path`        | string |
| `pathParams?` | any    |

### getUrlFromPath

• **getUrlFromPath**: _function_ = CoreRouteUtils.getUrlFromPath

_Defined in [src/utilities/route-utils.ts:50](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/utilities/route-utils.ts#L50)_

#### Type declaration:

▸ (`path`: string, `pathParams?`: any, `queryParams?`: any): _string_

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| `path`         | string |
| `pathParams?`  | any    |
| `queryParams?` | any    |

### replacePathParams

• **replacePathParams**: _function_ = CoreRouteUtils.replacePathParams

_Defined in [src/utilities/route-utils.ts:51](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/utilities/route-utils.ts#L51)_

#### Type declaration:

▸ (`path`: string, `pathParams`: any): _string_

**Parameters:**

| Name         | Type   |
| ------------ | ------ |
| `path`       | string |
| `pathParams` | any    |

---

### `Const` ServiceFactory

### ▪ **ServiceFactory**: _object_

_Defined in [src/services/service-factory.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L19)_

Factory to encapsulate common service function logic

### bulkUpdate

▸ **bulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): _[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›_

_Defined in [src/services/service-factory.ts:25](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L25)_

Creates a conventional Service Update function for an Array of the supplied resource type

**Type parameters:**

▪ **TRecord**: _any_

▪ **TPathParams**: _any_

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **resourceEndpoint**: _string_

**Returns:** _[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›_

### create

▸ **create**<**TRecord**>(`recordType`: object, `baseEndpoint`: string): _[CreateService](README.md#createservice)‹TRecord›_

_Defined in [src/services/service-factory.ts:47](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L47)_

Creates conventional Service Create function for the supplied resource type

### Recommendation

Use `nestedCreate` when route is nested!

**Type parameters:**

▪ **TRecord**: _any_

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **baseEndpoint**: _string_

**Returns:** _[CreateService](README.md#createservice)‹TRecord›_

### delete

▸ **delete**(`resourceEndpoint`: string): _[DeleteService](README.md#deleteservice)_

_Defined in [src/services/service-factory.ts:60](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L60)_

Creates conventional Service Delete function for the supplied resource type

**Parameters:**

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| `resourceEndpoint` | string |             |

**Returns:** _[DeleteService](README.md#deleteservice)_

### get

▸ **get**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `resourceEndpoint`: string): _[GetService](README.md#getservice)‹TRecord, TPathParams, TQueryParams›_

_Defined in [src/services/service-factory.ts:70](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L70)_

Creates conventional Service Get function for the supplied resource type

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **resourceEndpoint**: _string_

**Returns:** _[GetService](README.md#getservice)‹TRecord, TPathParams, TQueryParams›_

### list

▸ **list**<**TRecord**, **TQueryParams**>(`recordType`: object, `baseEndpoint`: string): _[ListService](README.md#listservice)‹TRecord, TQueryParams›_

_Defined in [src/services/service-factory.ts:92](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L92)_

Creates conventional Service List function for the supplied resource type

### Recommendation

Use `nestedList` when route is nested!

**Type parameters:**

▪ **TRecord**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **baseEndpoint**: _string_

**Returns:** _[ListService](README.md#listservice)‹TRecord, TQueryParams›_

### nestedCreate

▸ **nestedCreate**<**TRecord**, **TPathParams**>(`recordType`: object, `baseEndpoint`: string): _[NestedCreateService](README.md#nestedcreateservice)‹TRecord, TPathParams›_

_Defined in [src/services/service-factory.ts:106](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L106)_

Creates conventional Service Create function for the supplied resource type
when the resource is nested

**Type parameters:**

▪ **TRecord**: _any_

▪ **TPathParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **baseEndpoint**: _string_

**Returns:** _[NestedCreateService](README.md#nestedcreateservice)‹TRecord, TPathParams›_

### nestedList

▸ **nestedList**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `baseEndpoint`: string): _[NestedListService](README.md#nestedlistservice)‹TRecord, TPathParams, TQueryParams›_

_Defined in [src/services/service-factory.ts:121](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L121)_

Creates conventional Service List function for the supplied resource type

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **baseEndpoint**: _string_

**Returns:** _[NestedListService](README.md#nestedlistservice)‹TRecord, TPathParams, TQueryParams›_

### update

▸ **update**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): _[UpdateService](README.md#updateservice)‹TRecord, TPathParams›_

_Defined in [src/services/service-factory.ts:139](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-factory.ts#L139)_

Creates conventional Service Update function for the supplied resource type

**Type parameters:**

▪ **TRecord**: _any_

▪ **TPathParams**: _any_

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **resourceEndpoint**: _string_

**Returns:** _[UpdateService](README.md#updateservice)‹TRecord, TPathParams›_

---

### `Const` ServiceHookFactory

### ▪ **ServiceHookFactory**: _object_

_Defined in [src/services/service-hook-factory.ts:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-hook-factory.ts#L26)_

Factory to encapsulate common service function logic

### useBulkUpdate

▸ **useBulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): _[BulkUpdateServiceHook](README.md#bulkupdateservicehook)‹TRecord, TPathParams›_

_Defined in [src/services/service-hook-factory.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-hook-factory.ts#L33)_

Creates conventional hook for using service update function for an array of the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **resourceEndpoint**: _string_

**Returns:** _[BulkUpdateServiceHook](README.md#bulkupdateservicehook)‹TRecord, TPathParams›_

### useCreate

▸ **useCreate**<**TRecord**>(`recordType`: object, `baseEndpoint`: string): _[CreateServiceHook](README.md#createservicehook)‹TRecord›_

_Defined in [src/services/service-hook-factory.ts:68](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-hook-factory.ts#L68)_

Creates conventional hook for using service create function for the supplied resource type.
Automatically handles cancellation tokens internally.

### Recommendation

Use `useNestedCreate` when route is nested!

**Type parameters:**

▪ **TRecord**: _any_

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **baseEndpoint**: _string_

**Returns:** _[CreateServiceHook](README.md#createservicehook)‹TRecord›_

### useDelete

▸ **useDelete**(`resourceEndpoint`: string): _[DeleteServiceHook](README.md#deleteservicehook)_

_Defined in [src/services/service-hook-factory.ts:98](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-hook-factory.ts#L98)_

Creates conventional hook for using service delete function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Parameters:**

| Name               | Type   |
| ------------------ | ------ |
| `resourceEndpoint` | string |

**Returns:** _[DeleteServiceHook](README.md#deleteservicehook)_

### useGet

▸ **useGet**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `resourceEndpoint`: string): _[GetServiceHook](README.md#getservicehook)‹TRecord, TPathParams, TQueryParams›_

_Defined in [src/services/service-hook-factory.ts:123](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-hook-factory.ts#L123)_

Creates conventional hook for using service get function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **resourceEndpoint**: _string_

**Returns:** _[GetServiceHook](README.md#getservicehook)‹TRecord, TPathParams, TQueryParams›_

### useList

▸ **useList**<**TRecord**, **TQueryParams**>(`recordType`: object, `baseEndpoint`: string): _[ListServiceHook](README.md#listservicehook)‹TRecord, TQueryParams›_

_Defined in [src/services/service-hook-factory.ts:159](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-hook-factory.ts#L159)_

Creates conventional hook for using service list function for the supplied resource type.
Automatically handles cancellation tokens internally.

### Recommendation

Use `useNestedList` when route is nested!

**Type parameters:**

▪ **TRecord**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **baseEndpoint**: _string_

**Returns:** _[ListServiceHook](README.md#listservicehook)‹TRecord, TQueryParams›_

### useNestedCreate

▸ **useNestedCreate**<**TRecord**, **TPathParams**>(`recordType`: object, `baseEndpoint`: string): _[NestedCreateServiceHook](README.md#nestedcreateservicehook)‹TRecord, TPathParams›_

_Defined in [src/services/service-hook-factory.ts:189](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-hook-factory.ts#L189)_

Creates conventional hook for using service nested create function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**: _any_

▪ **TPathParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **baseEndpoint**: _string_

**Returns:** _[NestedCreateServiceHook](README.md#nestedcreateservicehook)‹TRecord, TPathParams›_

### useNestedList

▸ **useNestedList**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `baseEndpoint`: string): _[NestedListServiceHook](README.md#nestedlistservicehook)‹TRecord, TPathParams, TQueryParams›_

_Defined in [src/services/service-hook-factory.ts:220](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-hook-factory.ts#L220)_

Creates conventional hook for using service nested list function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **baseEndpoint**: _string_

**Returns:** _[NestedListServiceHook](README.md#nestedlistservicehook)‹TRecord, TPathParams, TQueryParams›_

### useUpdate

▸ **useUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): _[UpdateServiceHook](README.md#updateservicehook)‹TRecord, TPathParams›_

_Defined in [src/services/service-hook-factory.ts:252](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/0523074/src/services/service-hook-factory.ts#L252)_

Creates conventional hook for using service update function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

**Parameters:**

▪ **recordType**: _object_

| Name          | Type |
| ------------- | ---- |
| `constructor` |      |

▪ **resourceEndpoint**: _string_

**Returns:** _[UpdateServiceHook](README.md#updateservicehook)‹TRecord, TPathParams›_
