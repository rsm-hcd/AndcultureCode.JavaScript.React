[andculturecode-javascript-react](README.md)

# andculturecode-javascript-react

## Index

### Enumerations

* [WindowEvents](enums/windowevents.md)

### Interfaces

* [AuthenticatedRoute](interfaces/authenticatedroute.md)
* [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md)
* [NestedRouteProps](interfaces/nestedrouteprops.md)
* [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md)
* [NestedRoutesProps](interfaces/nestedroutesprops.md)
* [RedirectDefinition](interfaces/redirectdefinition.md)
* [RedirectsProps](interfaces/redirectsprops.md)
* [RouteDefinition](interfaces/routedefinition.md)
* [RouteMap](interfaces/routemap.md)
* [UnmatchedRoute](interfaces/unmatchedroute.md)
* [UseQueryOptions](interfaces/usequeryoptions.md)

### Type aliases

* [AsyncEffectCallback](README.md#asynceffectcallback)
* [BulkUpdateService](README.md#bulkupdateservice)
* [BulkUpdateServiceHook](README.md#bulkupdateservicehook)
* [CreateService](README.md#createservice)
* [CreateServiceHook](README.md#createservicehook)
* [DeleteService](README.md#deleteservice)
* [DeleteServiceHook](README.md#deleteservicehook)
* [GetService](README.md#getservice)
* [GetServiceHook](README.md#getservicehook)
* [ListService](README.md#listservice)
* [ListServiceHook](README.md#listservicehook)
* [NestedCreateService](README.md#nestedcreateservice)
* [NestedCreateServiceHook](README.md#nestedcreateservicehook)
* [NestedListService](README.md#nestedlistservice)
* [NestedListServiceHook](README.md#nestedlistservicehook)
* [UpdateService](README.md#updateservice)
* [UpdateServiceHook](README.md#updateservicehook)

### Variables

* [RouteDefinitionFactory](README.md#const-routedefinitionfactory)
* [RouteDefinitionNestedFactory](README.md#const-routedefinitionnestedfactory)
* [RouteMapFactory](README.md#const-routemapfactory)

### Functions

* [AuthenticatedRoute](README.md#const-authenticatedroute)
* [NestedRoute](README.md#const-nestedroute)
* [NestedRoutes](README.md#const-nestedroutes)
* [NestedRoutesByProperty](README.md#const-nestedroutesbyproperty)
* [Redirects](README.md#const-redirects)
* [_buildUrl](README.md#const-_buildurl)
* [_bulkUpdate](README.md#const-_bulkupdate)
* [_create](README.md#const-_create)
* [_delete](README.md#const-_delete)
* [_get](README.md#const-_get)
* [_list](README.md#const-_list)
* [_update](README.md#const-_update)
* [debugRoutes](README.md#const-debugroutes)
* [getFlattenedRoutes](README.md#const-getflattenedroutes)
* [makeCancellable](README.md#const-makecancellable)
* [useAsyncEffect](README.md#useasynceffect)
* [useCancellablePromise](README.md#const-usecancellablepromise)
* [useDebounce](README.md#usedebounce)
* [useLocalization](README.md#const-uselocalization)
* [useOnClickOutside](README.md#useonclickoutside)
* [usePageErrors](README.md#usepageerrors)
* [useQuery](README.md#usequery)
* [useSortedAlphabetically](README.md#usesortedalphabetically)
* [useTextOverflow](README.md#usetextoverflow)
* [useWindow](README.md#usewindow)

### Object literals

* [FactoryType](README.md#const-factorytype)
* [RouteUtils](README.md#const-routeutils)
* [ServiceFactory](README.md#const-servicefactory)
* [ServiceHookFactory](README.md#const-servicehookfactory)

## Type aliases

###  AsyncEffectCallback

Ƭ **AsyncEffectCallback**: *function*

*Defined in [src/types/async-effect-callback-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/async-effect-callback-type.ts#L6)*

Type defining the asyncEffect parameter from calling `useAsyncEffect()`

#### Type declaration:

▸ (`isMounted`: function): *Promise‹ReturnType‹EffectCallback››*

**Parameters:**

▪ **isMounted**: *function*

▸ (): *boolean*

___

###  BulkUpdateService

Ƭ **BulkUpdateService**: *function*

*Defined in [src/types/bulk-update-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/bulk-update-service-type.ts#L9)*

Type defining the service function for bulk updating the supplied resource type

**`param`** Records to be updated

**`param`** Object with path parameters to be replaced in the endpoint route

#### Type declaration:

▸ (`records`: TRecord[], `pathParams`: TPathParams): *Promise‹ServiceResponse‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`records` | TRecord[] |
`pathParams` | TPathParams |

___

###  BulkUpdateServiceHook

Ƭ **BulkUpdateServiceHook**: *function*

*Defined in [src/types/bulk-update-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/bulk-update-service-hook-type.ts#L6)*

Type defining the return object from calling `useBulkUpdate()`

#### Type declaration:

▸ (): *object*

* **update**: *[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›*

___

###  CreateService

Ƭ **CreateService**: *function*

*Defined in [src/types/create-service-type.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/create-service-type.ts#L8)*

Type defining the service function for creating the supplied resource type

**`param`** Record to be created

#### Type declaration:

▸ (`record?`: TRecord): *Promise‹ServiceResponse‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`record?` | TRecord |

___

###  CreateServiceHook

Ƭ **CreateServiceHook**: *function*

*Defined in [src/types/create-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/create-service-hook-type.ts#L6)*

Type defining the return object from calling `useCreate()`

#### Type declaration:

▸ (): *object*

* **create**: *[CreateService](README.md#createservice)‹TRecord›*

___

###  DeleteService

Ƭ **DeleteService**: *function*

*Defined in [src/types/delete-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/delete-service-type.ts#L9)*

Type defining the service function for deleting the supplied resource

**`param`** Id of the record to be deleted

**`param`** Object with path parameters to be replaced in the endpoint route

#### Type declaration:

▸ (`id`: number, `pathParams?`: any): *Promise‹ServiceResponse‹Boolean››*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`pathParams?` | any |

___

###  DeleteServiceHook

Ƭ **DeleteServiceHook**: *function*

*Defined in [src/types/delete-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/delete-service-hook-type.ts#L6)*

Type defining the return object from calling `useDelete()`

#### Type declaration:

▸ (): *object*

* **delete**: *[DeleteService](README.md#deleteservice)*

___

###  GetService

Ƭ **GetService**: *function*

*Defined in [src/types/get-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/get-service-type.ts#L9)*

Type defining the service function for getting the supplied resource type

**`param`** Object with path parameters to be replaced in the endpoint route

**`param`** Object with query parameters to be appended to the endpoint route

#### Type declaration:

▸ (`pathParams`: TPathParams, `queryParams?`: TQueryParams): *Promise‹ServiceResponse‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`pathParams` | TPathParams |
`queryParams?` | TQueryParams |

___

###  GetServiceHook

Ƭ **GetServiceHook**: *function*

*Defined in [src/types/get-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/get-service-hook-type.ts#L6)*

Type defining the return object from calling `useGet()`

#### Type declaration:

▸ (): *object*

* **get**: *[GetService](README.md#getservice)‹TRecord, TPathParams, TQueryParams›*

___

###  ListService

Ƭ **ListService**: *function*

*Defined in [src/types/list-service-type.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/list-service-type.ts#L8)*

Type defining the service function for listing resources by supplied type

**`param`** Object with query parameters to be appended to the endpoint route

#### Type declaration:

▸ (`queryParams?`: TQueryParams): *Promise‹ServiceResponse‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`queryParams?` | TQueryParams |

___

###  ListServiceHook

Ƭ **ListServiceHook**: *function*

*Defined in [src/types/list-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/list-service-hook-type.ts#L6)*

Type defining the return object from calling `useList()`

#### Type declaration:

▸ (): *object*

* **list**: *[ListService](README.md#listservice)‹TRecord, TQueryParams›*

___

###  NestedCreateService

Ƭ **NestedCreateService**: *function*

*Defined in [src/types/nested-create-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/nested-create-service-type.ts#L9)*

Type defining the service function for creating the supplied resource type when resource is nested

**`param`** Record to be created

**`param`** Object with path parameters to be replaced in the endpoint route

#### Type declaration:

▸ (`record`: TRecord, `pathParams`: TPathParams): *Promise‹ServiceResponse‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`record` | TRecord |
`pathParams` | TPathParams |

___

###  NestedCreateServiceHook

Ƭ **NestedCreateServiceHook**: *function*

*Defined in [src/types/nested-create-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/nested-create-service-hook-type.ts#L6)*

Type defining the return object from calling `useNestedCreate()`

#### Type declaration:

▸ (): *object*

* **create**: *[NestedCreateService](README.md#nestedcreateservice)‹TRecord, TPathParams›*

___

###  NestedListService

Ƭ **NestedListService**: *function*

*Defined in [src/types/nested-list-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/nested-list-service-type.ts#L9)*

Type defining the service function for listing resources by supplied type when resource is nested

**`param`** Object with path parameters to be replaced in the endpoint route

**`param`** Object with query parameters to be appended to the endpoint route

#### Type declaration:

▸ (`pathParams`: TPathParams, `queryParams?`: TQueryParams): *Promise‹ServiceResponse‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`pathParams` | TPathParams |
`queryParams?` | TQueryParams |

___

###  NestedListServiceHook

Ƭ **NestedListServiceHook**: *function*

*Defined in [src/types/nested-list-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/nested-list-service-hook-type.ts#L6)*

Type defining the return object from calling `useNestedList()`

#### Type declaration:

▸ (): *object*

* **list**: *[NestedListService](README.md#nestedlistservice)‹TRecord, TPathParams, TQueryParams›*

___

###  UpdateService

Ƭ **UpdateService**: *function*

*Defined in [src/types/update-service-type.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/update-service-type.ts#L9)*

Type defining the service function for updating the supplied resource type

**`param`** Record to be created

**`param`** Object with path parameters to be replaced in the endpoint route

#### Type declaration:

▸ (`record`: TRecord, `pathParams?`: TPathParams): *Promise‹ServiceResponse‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`record` | TRecord |
`pathParams?` | TPathParams |

___

###  UpdateServiceHook

Ƭ **UpdateServiceHook**: *function*

*Defined in [src/types/update-service-hook-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/types/update-service-hook-type.ts#L6)*

Type defining the return object from calling `useUpdate()`

#### Type declaration:

▸ (): *object*

* **update**: *[UpdateService](README.md#updateservice)‹TRecord, TPathParams›*

## Variables

### `Const` RouteDefinitionFactory

• **RouteDefinitionFactory**: *IFactory‹[RouteDefinition](interfaces/routedefinition.md)›* = Factory.define<RouteDefinition>(
    FactoryType.RouteDefinition.Default
)
    .sequence("authRequired", () => false)
    .sequence("component", () => React.Fragment)
    .sequence("exact", () => true)
    .sequence("path", (i: number) => `/path${i}`)
    .sequence("routes", () => {})

*Defined in [src/tests/factories/route-definition-factory.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/tests/factories/route-definition-factory.ts#L10)*

___

### `Const` RouteDefinitionNestedFactory

• **RouteDefinitionNestedFactory**: *IFactory‹[RouteDefinition](interfaces/routedefinition.md)›* = Factory.define<RouteDefinition>(
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

*Defined in [src/tests/factories/route-definition-factory.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/tests/factories/route-definition-factory.ts#L19)*

___

### `Const` RouteMapFactory

• **RouteMapFactory**: *IFactory‹[RouteMap](interfaces/routemap.md)›* = Factory.define<RouteMap>(
    FactoryType.RouteMap
).sequence("/", () =>
    Factory.build<RouteDefinition>(FactoryType.RouteDefinition.Default)
)

*Defined in [src/tests/factories/route-map-factory.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/tests/factories/route-map-factory.ts#L10)*

## Functions

### `Const` AuthenticatedRoute

▸ **AuthenticatedRoute**(`props`: [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md)): *Element‹›*

*Defined in [src/components/routing/authenticated-route.tsx:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/components/routing/authenticated-route.tsx#L23)*

Locks a route behind authentication. Can optionally redirect a user to another location if
attempting to access the route while unauthenticated.

**Parameters:**

Name | Type |
------ | ------ |
`props` | [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md) |

**Returns:** *Element‹›*

___

### `Const` NestedRoute

▸ **NestedRoute**(`props`: [NestedRouteProps](interfaces/nestedrouteprops.md)): *Element‹›*

*Defined in [src/components/routing/nested-route.tsx:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/components/routing/nested-route.tsx#L26)*

Dynamically renders a route and its subroutes, accounting
for additional custom properties on RouteDefinition

**Parameters:**

Name | Type |
------ | ------ |
`props` | [NestedRouteProps](interfaces/nestedrouteprops.md) |

**Returns:** *Element‹›*

___

### `Const` NestedRoutes

▸ **NestedRoutes**(`props`: [NestedRoutesProps](interfaces/nestedroutesprops.md)): *null | Element‹›*

*Defined in [src/components/routing/nested-routes.tsx:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/components/routing/nested-routes.tsx#L27)*

Component to easily render nested sub-route components from a list of routes.
Commonly used when setting up a layout

**Parameters:**

Name | Type |
------ | ------ |
`props` | [NestedRoutesProps](interfaces/nestedroutesprops.md) |

**Returns:** *null | Element‹›*

___

### `Const` NestedRoutesByProperty

▸ **NestedRoutesByProperty**(`props`: [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md)): *null | Element‹›*

*Defined in [src/components/routing/nested-routes-by-property.tsx:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/components/routing/nested-routes-by-property.tsx#L27)*

Renders Route components mapped to a custom property

**Parameters:**

Name | Type |
------ | ------ |
`props` | [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md) |

**Returns:** *null | Element‹›*

___

### `Const` Redirects

▸ **Redirects**(`props`: [RedirectsProps](interfaces/redirectsprops.md)): *Element‹›*

*Defined in [src/components/routing/redirects.tsx:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/components/routing/redirects.tsx#L22)*

Simple way to redirect a flat array of RedirectDefinitions

**Parameters:**

Name | Type |
------ | ------ |
`props` | [RedirectsProps](interfaces/redirectsprops.md) |

**Returns:** *Element‹›*

___

### `Const` _buildUrl

▸ **_buildUrl**(`id`: number, `resourceEndpoint`: string, `pathParams?`: any): *string*

*Defined in [src/services/service-factory.ts:159](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`resourceEndpoint` | string |
`pathParams?` | any |

**Returns:** *string*

___

### `Const` _bulkUpdate

▸ **_bulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `records`: Array‹TRecord›, `resourceEndpoint`: string, `pathParams`: TPathParams): *Promise‹ServiceResponse‹TRecord››*

*Defined in [src/services/service-factory.ts:167](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L167)*

**Type parameters:**

▪ **TRecord**: *any*

▪ **TPathParams**: *any*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **records**: *Array‹TRecord›*

▪ **resourceEndpoint**: *string*

▪ **pathParams**: *TPathParams*

**Returns:** *Promise‹ServiceResponse‹TRecord››*

___

### `Const` _create

▸ **_create**<**TRecord**>(`recordType`: object, `url`: string, `record?`: TRecord): *Promise‹ServiceResponse‹TRecord››*

*Defined in [src/services/service-factory.ts:185](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L185)*

**Type parameters:**

▪ **TRecord**: *any*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **url**: *string*

▪`Optional`  **record**: *TRecord*

**Returns:** *Promise‹ServiceResponse‹TRecord››*

___

### `Const` _delete

▸ **_delete**(`id`: number, `resourceEndpoint`: string, `pathParams?`: any): *Promise‹ServiceResponse‹Boolean››*

*Defined in [src/services/service-factory.ts:197](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`resourceEndpoint` | string |
`pathParams?` | any |

**Returns:** *Promise‹ServiceResponse‹Boolean››*

___

### `Const` _get

▸ **_get**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `resourceEndpoint`: string, `pathParams`: TPathParams, `queryParams?`: TQueryParams): *Promise‹ServiceResponse‹TRecord››*

*Defined in [src/services/service-factory.ts:208](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L208)*

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

▪ **pathParams**: *TPathParams*

▪`Optional`  **queryParams**: *TQueryParams*

**Returns:** *Promise‹ServiceResponse‹TRecord››*

___

### `Const` _list

▸ **_list**<**TRecord**>(`recordType`: object, `baseEndpoint`: string, `pathParams?`: any, `queryParams?`: any): *Promise‹ServiceResponse‹TRecord››*

*Defined in [src/services/service-factory.ts:224](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L224)*

**Type parameters:**

▪ **TRecord**: *any*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **baseEndpoint**: *string*

▪`Optional`  **pathParams**: *any*

▪`Optional`  **queryParams**: *any*

**Returns:** *Promise‹ServiceResponse‹TRecord››*

___

### `Const` _update

▸ **_update**<**TRecord**, **TPathParams**>(`recordType`: object, `record`: TRecord, `resourceEndpoint`: string, `pathParams?`: TPathParams): *Promise‹ServiceResponse‹TRecord››*

*Defined in [src/services/service-factory.ts:240](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L240)*

**Type parameters:**

▪ **TRecord**: *any*

▪ **TPathParams**: *any*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **record**: *TRecord*

▪ **resourceEndpoint**: *string*

▪`Optional`  **pathParams**: *TPathParams*

**Returns:** *Promise‹ServiceResponse‹TRecord››*

___

### `Const` debugRoutes

▸ **debugRoutes**(`routes`: [RouteMap](interfaces/routemap.md)): *void*

*Defined in [src/utilities/route-utils.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/utilities/route-utils.ts#L15)*

Outputs flattened routing table for debugging purposes

**Parameters:**

Name | Type |
------ | ------ |
`routes` | [RouteMap](interfaces/routemap.md) |

**Returns:** *void*

___

### `Const` getFlattenedRoutes

▸ **getFlattenedRoutes**(`routeArray`: [RouteDefinition](interfaces/routedefinition.md)[]): *[RouteDefinition](interfaces/routedefinition.md)[]*

*Defined in [src/utilities/route-utils.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/utilities/route-utils.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`routeArray` | [RouteDefinition](interfaces/routedefinition.md)[] |

**Returns:** *[RouteDefinition](interfaces/routedefinition.md)[]*

___

### `Const` makeCancellable

▸ **makeCancellable**(`promise`: Promise‹any›): *object*

*Defined in [src/hooks/make-cancellable.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/make-cancellable.ts#L10)*

Wrap the provided promise in a promise that intercepts cancellation requests

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹any› |

**Returns:** *object*

* **promise**: *Promise‹unknown›* = wrappedPromise

* **cancel**(): *void*

___

###  useAsyncEffect

▸ **useAsyncEffect**(`asyncEffect`: [AsyncEffectCallback](README.md#asynceffectcallback), `deps`: DependencyList): *void*

*Defined in [src/hooks/use-async-effect.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-async-effect.ts#L10)*

Version of the useEffect hook that accepts an async function

**`export`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`asyncEffect` | [AsyncEffectCallback](README.md#asynceffectcallback) | - |
`deps` | DependencyList |   |

**Returns:** *void*

___

### `Const` useCancellablePromise

▸ **useCancellablePromise**(): *object*

*Defined in [src/hooks/use-cancellable-promise.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-cancellable-promise.ts#L4)*

**Returns:** *object*

* **cancellablePromise**: *cancellablePromise*

___

###  useDebounce

▸ **useDebounce**<**T**>(`value`: T, `delay`: number): *T*

*Defined in [src/hooks/use-debounce.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-debounce.ts#L8)*

Throttles the supplied value for a set amount of milliseconds

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | T | - | - |
`delay` | number | 200 | number of milliseconds to delay  |

**Returns:** *T*

___

### `Const` useLocalization

▸ **useLocalization**<**TKeys**>(): *object*

*Defined in [src/hooks/use-localization.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-localization.ts#L7)*

Typed wrapper of i18n `useTranslation` hook

**Type parameters:**

▪ **TKeys**

**Returns:** *object*

* **t**: *translate* = useCallback(translate, [t])

___

###  useOnClickOutside

▸ **useOnClickOutside**(`ref`: RefObject‹HTMLElement›, `handler`: function, `deps?`: React.DependencyList | undefined): *void*

*Defined in [src/hooks/use-onclick-outside.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-onclick-outside.ts#L9)*

Custom hook providing utility to take some action when a mouse event is fired outside of an element.

**Parameters:**

▪ **ref**: *RefObject‹HTMLElement›*

▪ **handler**: *function*

▸ (): *void*

▪`Optional`  **deps**: *React.DependencyList | undefined*

**Returns:** *void*

___

###  usePageErrors

▸ **usePageErrors**(): *object*

*Defined in [src/hooks/use-page-errors.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-page-errors.ts#L7)*

Hook to bundle common page error handling functionality

**Returns:** *object*

* **handlePageLoadError**: *(Anonymous function)*

* **pageErrors**: *string[]*

* **resetPageErrors**: *(Anonymous function)*

* **setPageErrors**(): *function*

  * (`value`: A): *void*

___

###  useQuery

▸ **useQuery**<**TRecord**, **TQueryParams**, **TPathParams**>(`options`: [UseQueryOptions](interfaces/usequeryoptions.md)‹TRecord, TQueryParams, TPathParams›): *object*

*Defined in [src/hooks/use-query.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-query.ts#L11)*

**Type parameters:**

▪ **TRecord**

▪ **TQueryParams**

▪ **TPathParams**

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UseQueryOptions](interfaces/usequeryoptions.md)‹TRecord, TQueryParams, TPathParams› |

**Returns:** *object*

* **loading**: *boolean*

* **pathParams**: *undefined | TPathParams*

* **query**: *TQueryParams*

* **setPathParams**(): *function*

  * (`value`: A): *void*

* **setQuery**(): *function*

  * (`value`: A): *void*

* **setValues**(): *function*

  * (`value`: A): *void*

* **values**: *TRecord[]*

___

###  useSortedAlphabetically

▸ **useSortedAlphabetically**<**T**>(`initialValue`: Array‹T›, `sortBySelector`: function): *[ReducerState‹Reducer‹Array‹T›, Array‹T›››, Dispatch‹ReducerAction‹Reducer‹Array‹T›, Array‹T››››]*

*Defined in [src/hooks/use-sorted-alphabetically.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-sorted-alphabetically.ts#L19)*

Create a stateful array value which is always sorted alphabetically.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialValue**: *Array‹T›*

the initial value of the array. Does not need to be sorted, the hook will sort it before setting the value.

▪ **sortBySelector**: *function*

a function which takes an array element, and returns a string property by which to sort alphabetically.

▸ (`value`: T): *string*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[ReducerState‹Reducer‹Array‹T›, Array‹T›››, Dispatch‹ReducerAction‹Reducer‹Array‹T›, Array‹T››››]*

___

###  useTextOverflow

▸ **useTextOverflow**<**T**>(`ref`: RefObject‹T›): *boolean*

*Defined in [src/hooks/use-text-overflow.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-text-overflow.ts#L11)*

A custom hook for determining if elements overflow their containers.
Useful for when you have text-overflow: ellipsis; and you want to
detect whether the text is actually long enough to trigger the ellipsis
to appear.

**Type parameters:**

▪ **T**: *HTMLElement*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ref` | RefObject‹T› |   |

**Returns:** *boolean*

___

###  useWindow

▸ **useWindow**(): *object*

*Defined in [src/hooks/use-window.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/hooks/use-window.ts#L8)*

Get window properties.
Hook into window events and make properties more easily accessible to components.

**Returns:** *object*

* **height**: *number*

* **width**: *number*

## Object literals

### `Const` FactoryType

### ▪ **FactoryType**: *object*

*Defined in [src/tests/factories/factory-type.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/tests/factories/factory-type.ts#L1)*

###  RouteMap

• **RouteMap**: *string* = "RouteMap"

*Defined in [src/tests/factories/factory-type.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/tests/factories/factory-type.ts#L6)*

▪ **RouteDefinition**: *object*

*Defined in [src/tests/factories/factory-type.ts:2](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/tests/factories/factory-type.ts#L2)*

* **Default**: *string* = "RouteDefinition"

* **Nested**: *string* = "RouteDefinition.Nested"

___

### `Const` RouteUtils

### ▪ **RouteUtils**: *object*

*Defined in [src/utilities/route-utils.ts:45](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/utilities/route-utils.ts#L45)*

###  appendQueryParams

• **appendQueryParams**: *function* = CoreRouteUtils.appendQueryParams

*Defined in [src/utilities/route-utils.ts:46](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/utilities/route-utils.ts#L46)*

#### Type declaration:

▸ (`path`: string, `queryParams`: any, `arrayFormat?`: QueryStringArrayFormat, `arrayFormatSeparator?`: string | undefined): *string*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`queryParams` | any |
`arrayFormat?` | QueryStringArrayFormat |
`arrayFormatSeparator?` | string &#124; undefined |

###  debugRoutes

• **debugRoutes**: *[debugRoutes](README.md#const-debugroutes)*

*Defined in [src/utilities/route-utils.ts:47](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/utilities/route-utils.ts#L47)*

###  getFlattenedRoutes

• **getFlattenedRoutes**: *[getFlattenedRoutes](README.md#const-getflattenedroutes)*

*Defined in [src/utilities/route-utils.ts:48](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/utilities/route-utils.ts#L48)*

###  getUrl

• **getUrl**: *function* = CoreRouteUtils.getUrl

*Defined in [src/utilities/route-utils.ts:49](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/utilities/route-utils.ts#L49)*

#### Type declaration:

▸ (`path`: string, `pathParams?`: any): *string*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`pathParams?` | any |

###  getUrlFromPath

• **getUrlFromPath**: *function* = CoreRouteUtils.getUrlFromPath

*Defined in [src/utilities/route-utils.ts:50](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/utilities/route-utils.ts#L50)*

#### Type declaration:

▸ (`path`: string, `pathParams?`: any, `queryParams?`: any): *string*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`pathParams?` | any |
`queryParams?` | any |

###  replacePathParams

• **replacePathParams**: *function* = CoreRouteUtils.replacePathParams

*Defined in [src/utilities/route-utils.ts:51](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/utilities/route-utils.ts#L51)*

#### Type declaration:

▸ (`path`: string, `pathParams`: any): *string*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`pathParams` | any |

___

### `Const` ServiceFactory

### ▪ **ServiceFactory**: *object*

*Defined in [src/services/service-factory.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L19)*

Factory to encapsulate common service function logic

###  bulkUpdate

▸ **bulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): *[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›*

*Defined in [src/services/service-factory.ts:25](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L25)*

Creates a conventional Service Update function for an Array of the supplied resource type

**Type parameters:**

▪ **TRecord**: *any*

▪ **TPathParams**: *any*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

**Returns:** *[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›*

###  create

▸ **create**<**TRecord**>(`recordType`: object, `baseEndpoint`: string): *[CreateService](README.md#createservice)‹TRecord›*

*Defined in [src/services/service-factory.ts:47](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L47)*

Creates conventional Service Create function for the supplied resource type

### Recommendation
Use `nestedCreate` when route is nested!

**Type parameters:**

▪ **TRecord**: *any*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **baseEndpoint**: *string*

**Returns:** *[CreateService](README.md#createservice)‹TRecord›*

###  delete

▸ **delete**(`resourceEndpoint`: string): *[DeleteService](README.md#deleteservice)*

*Defined in [src/services/service-factory.ts:60](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L60)*

Creates conventional Service Delete function for the supplied resource type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceEndpoint` | string |   |

**Returns:** *[DeleteService](README.md#deleteservice)*

###  get

▸ **get**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `resourceEndpoint`: string): *[GetService](README.md#getservice)‹TRecord, TPathParams, TQueryParams›*

*Defined in [src/services/service-factory.ts:70](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L70)*

Creates conventional Service Get function for the supplied resource type

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

**Returns:** *[GetService](README.md#getservice)‹TRecord, TPathParams, TQueryParams›*

###  list

▸ **list**<**TRecord**, **TQueryParams**>(`recordType`: object, `baseEndpoint`: string): *[ListService](README.md#listservice)‹TRecord, TQueryParams›*

*Defined in [src/services/service-factory.ts:92](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L92)*

Creates conventional Service List function for the supplied resource type

### Recommendation
Use `nestedList` when route is nested!

**Type parameters:**

▪ **TRecord**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **baseEndpoint**: *string*

**Returns:** *[ListService](README.md#listservice)‹TRecord, TQueryParams›*

###  nestedCreate

▸ **nestedCreate**<**TRecord**, **TPathParams**>(`recordType`: object, `baseEndpoint`: string): *[NestedCreateService](README.md#nestedcreateservice)‹TRecord, TPathParams›*

*Defined in [src/services/service-factory.ts:106](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L106)*

Creates conventional Service Create function for the supplied resource type
when the resource is nested

**Type parameters:**

▪ **TRecord**: *any*

▪ **TPathParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **baseEndpoint**: *string*

**Returns:** *[NestedCreateService](README.md#nestedcreateservice)‹TRecord, TPathParams›*

###  nestedList

▸ **nestedList**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `baseEndpoint`: string): *[NestedListService](README.md#nestedlistservice)‹TRecord, TPathParams, TQueryParams›*

*Defined in [src/services/service-factory.ts:121](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L121)*

Creates conventional Service List function for the supplied resource type

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **baseEndpoint**: *string*

**Returns:** *[NestedListService](README.md#nestedlistservice)‹TRecord, TPathParams, TQueryParams›*

###  update

▸ **update**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): *[UpdateService](README.md#updateservice)‹TRecord, TPathParams›*

*Defined in [src/services/service-factory.ts:139](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-factory.ts#L139)*

Creates conventional Service Update function for the supplied resource type

**Type parameters:**

▪ **TRecord**: *any*

▪ **TPathParams**: *any*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

**Returns:** *[UpdateService](README.md#updateservice)‹TRecord, TPathParams›*

___

### `Const` ServiceHookFactory

### ▪ **ServiceHookFactory**: *object*

*Defined in [src/services/service-hook-factory.ts:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-hook-factory.ts#L26)*

Factory to encapsulate common service function logic

###  useBulkUpdate

▸ **useBulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): *[BulkUpdateServiceHook](README.md#bulkupdateservicehook)‹TRecord, TPathParams›*

*Defined in [src/services/service-hook-factory.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-hook-factory.ts#L33)*

Creates conventional hook for using service update function for an array of the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

**Returns:** *[BulkUpdateServiceHook](README.md#bulkupdateservicehook)‹TRecord, TPathParams›*

###  useCreate

▸ **useCreate**<**TRecord**>(`recordType`: object, `baseEndpoint`: string): *[CreateServiceHook](README.md#createservicehook)‹TRecord›*

*Defined in [src/services/service-hook-factory.ts:68](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-hook-factory.ts#L68)*

Creates conventional hook for using service create function for the supplied resource type.
Automatically handles cancellation tokens internally.

### Recommendation
Use `useNestedCreate` when route is nested!

**Type parameters:**

▪ **TRecord**: *any*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **baseEndpoint**: *string*

**Returns:** *[CreateServiceHook](README.md#createservicehook)‹TRecord›*

###  useDelete

▸ **useDelete**(`resourceEndpoint`: string): *[DeleteServiceHook](README.md#deleteservicehook)*

*Defined in [src/services/service-hook-factory.ts:98](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-hook-factory.ts#L98)*

Creates conventional hook for using service delete function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Parameters:**

Name | Type |
------ | ------ |
`resourceEndpoint` | string |

**Returns:** *[DeleteServiceHook](README.md#deleteservicehook)*

###  useGet

▸ **useGet**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `resourceEndpoint`: string): *[GetServiceHook](README.md#getservicehook)‹TRecord, TPathParams, TQueryParams›*

*Defined in [src/services/service-hook-factory.ts:123](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-hook-factory.ts#L123)*

Creates conventional hook for using service get function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

**Returns:** *[GetServiceHook](README.md#getservicehook)‹TRecord, TPathParams, TQueryParams›*

###  useList

▸ **useList**<**TRecord**, **TQueryParams**>(`recordType`: object, `baseEndpoint`: string): *[ListServiceHook](README.md#listservicehook)‹TRecord, TQueryParams›*

*Defined in [src/services/service-hook-factory.ts:159](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-hook-factory.ts#L159)*

Creates conventional hook for using service list function for the supplied resource type.
Automatically handles cancellation tokens internally.

### Recommendation
Use `useNestedList` when route is nested!

**Type parameters:**

▪ **TRecord**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **baseEndpoint**: *string*

**Returns:** *[ListServiceHook](README.md#listservicehook)‹TRecord, TQueryParams›*

###  useNestedCreate

▸ **useNestedCreate**<**TRecord**, **TPathParams**>(`recordType`: object, `baseEndpoint`: string): *[NestedCreateServiceHook](README.md#nestedcreateservicehook)‹TRecord, TPathParams›*

*Defined in [src/services/service-hook-factory.ts:189](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-hook-factory.ts#L189)*

Creates conventional hook for using service nested create function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**: *any*

▪ **TPathParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **baseEndpoint**: *string*

**Returns:** *[NestedCreateServiceHook](README.md#nestedcreateservicehook)‹TRecord, TPathParams›*

###  useNestedList

▸ **useNestedList**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `baseEndpoint`: string): *[NestedListServiceHook](README.md#nestedlistservicehook)‹TRecord, TPathParams, TQueryParams›*

*Defined in [src/services/service-hook-factory.ts:220](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-hook-factory.ts#L220)*

Creates conventional hook for using service nested list function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

▪ **TQueryParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **baseEndpoint**: *string*

**Returns:** *[NestedListServiceHook](README.md#nestedlistservicehook)‹TRecord, TPathParams, TQueryParams›*

###  useUpdate

▸ **useUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): *[UpdateServiceHook](README.md#updateservicehook)‹TRecord, TPathParams›*

*Defined in [src/services/service-hook-factory.ts:252](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/services/service-hook-factory.ts#L252)*

Creates conventional hook for using service update function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

**Returns:** *[UpdateServiceHook](README.md#updateservicehook)‹TRecord, TPathParams›*
