[andculturecode-javascript-react](README.md)

# andculturecode-javascript-react

## Index

### Classes

* [StubResourceRecord](classes/stubresourcerecord.md)

### Interfaces

* [AuthenticatedRoute](interfaces/authenticatedroute.md)
* [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md)
* [MockAxios](interfaces/mockaxios.md)
* [NestedRouteProps](interfaces/nestedrouteprops.md)
* [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md)
* [NestedRoutesProps](interfaces/nestedroutesprops.md)
* [RedirectDefinition](interfaces/redirectdefinition.md)
* [RedirectsProps](interfaces/redirectsprops.md)
* [RouteDefinition](interfaces/routedefinition.md)
* [RouteMap](interfaces/routemap.md)
* [ServiceResponse](interfaces/serviceresponse.md)
* [StubResource](interfaces/stubresource.md)
* [UnmatchedRoute](interfaces/unmatchedroute.md)

### Type aliases

* [AxiosJestMock](README.md#axiosjestmock)
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

* [AxiosResponseFactory](README.md#const-axiosresponsefactory)
* [RouteDefinitionFactory](README.md#const-routedefinitionfactory)
* [RouteDefinitionNestedFactory](README.md#const-routedefinitionnestedfactory)
* [RouteMapFactory](README.md#const-routemapfactory)
* [StubResourceRecordFactory](README.md#const-stubresourcerecordfactory)
* [_routeParamRegEx](README.md#const-_routeparamregex)

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
* [_mapAxiosResponse](README.md#const-_mapaxiosresponse)
* [_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)
* [_mockSuccess](README.md#const-_mocksuccess)
* [_resultObjectToJS](README.md#const-_resultobjecttojs)
* [_update](README.md#const-_update)
* [appendQueryParams](README.md#const-appendqueryparams)
* [debugRoutes](README.md#const-debugroutes)
* [deleteSuccess](README.md#const-deletesuccess)
* [getFlattenedRoutes](README.md#const-getflattenedroutes)
* [getSuccess](README.md#const-getsuccess)
* [getUrl](README.md#const-geturl)
* [getUrlFromPath](README.md#const-geturlfrompath)
* [listSuccess](README.md#const-listsuccess)
* [postSuccess](README.md#const-postsuccess)
* [putSuccess](README.md#const-putsuccess)
* [replacePathParams](README.md#const-replacepathparams)
* [useCancellablePromise](README.md#const-usecancellablepromise)

### Object literals

* [FactoryType](README.md#const-factorytype)
* [RouteUtils](README.md#const-routeutils)
* [ServiceFactory](README.md#const-servicefactory)
* [ServiceHookFactory](README.md#const-servicehookfactory)
* [ServiceUtils](README.md#const-serviceutils)
* [mockAxios](README.md#const-mockaxios)

## Type aliases

###  AxiosJestMock

Ƭ **AxiosJestMock**: *Mock‹Promise‹object›, []›*

*Defined in [src/tests/mocks/mock-axios.ts:13](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L13)*

MockAxios is merely a typed wrapper around the dynamically
mocked __mocks__/axios implementation.

___

###  BulkUpdateService

Ƭ **BulkUpdateService**: *function*

*Defined in [src/services/service-factory.ts:13](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L13)*

Type defining the service function for bulk updating the supplied resource type

#### Type declaration:

▸ (`records`: TRecord[], `pathParams`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`records` | TRecord[] |
`pathParams` | TPathParams |

___

###  BulkUpdateServiceHook

Ƭ **BulkUpdateServiceHook**: *function*

*Defined in [src/services/service-hook-factory.ts:28](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L28)*

Type defining the return object from calling `useBulkUpdate()`

#### Type declaration:

▸ (): *object*

* **update**: *[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›*

___

###  CreateService

Ƭ **CreateService**: *function*

*Defined in [src/services/service-factory.ts:21](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L21)*

Type defining the service function for creating the supplied resource type

#### Type declaration:

▸ (`record?`: TRecord): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`record?` | TRecord |

___

###  CreateServiceHook

Ƭ **CreateServiceHook**: *function*

*Defined in [src/services/service-hook-factory.ts:35](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L35)*

Type defining the return object from calling `useCreate()`

#### Type declaration:

▸ (): *object*

* **create**: *[CreateService](README.md#createservice)‹TRecord›*

___

###  DeleteService

Ƭ **DeleteService**: *function*

*Defined in [src/services/service-factory.ts:28](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L28)*

Type defining the service function for deleting the supplied resource

#### Type declaration:

▸ (`id`: number, `pathParams?`: any): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹Boolean››*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`pathParams?` | any |

___

###  DeleteServiceHook

Ƭ **DeleteServiceHook**: *function*

*Defined in [src/services/service-hook-factory.ts:42](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L42)*

Type defining the return object from calling `useDelete()`

#### Type declaration:

▸ (): *object*

* **delete**: *[DeleteService](README.md#deleteservice)*

___

###  GetService

Ƭ **GetService**: *function*

*Defined in [src/services/service-factory.ts:36](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L36)*

Type defining the service function for getting the supplied resource type

#### Type declaration:

▸ (`pathParams`: TPathParams, `queryParams?`: TQueryParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`pathParams` | TPathParams |
`queryParams?` | TQueryParams |

___

###  GetServiceHook

Ƭ **GetServiceHook**: *function*

*Defined in [src/services/service-hook-factory.ts:49](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L49)*

Type defining the return object from calling `useGet()`

#### Type declaration:

▸ (): *object*

* **get**: *[GetService](README.md#getservice)‹TRecord, TPathParams, TQueryParams›*

___

###  ListService

Ƭ **ListService**: *function*

*Defined in [src/services/service-factory.ts:44](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L44)*

Type defining the service function for listing resources by supplied type

#### Type declaration:

▸ (`queryParams?`: TQueryParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`queryParams?` | TQueryParams |

___

###  ListServiceHook

Ƭ **ListServiceHook**: *function*

*Defined in [src/services/service-hook-factory.ts:56](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L56)*

Type defining the return object from calling `useList()`

#### Type declaration:

▸ (): *object*

* **list**: *[ListService](README.md#listservice)‹TRecord, TQueryParams›*

___

###  NestedCreateService

Ƭ **NestedCreateService**: *function*

*Defined in [src/services/service-factory.ts:51](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L51)*

Type defining the service function for creating the supplied resource type when resource is nested

#### Type declaration:

▸ (`record`: TRecord, `pathParams`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`record` | TRecord |
`pathParams` | TPathParams |

___

###  NestedCreateServiceHook

Ƭ **NestedCreateServiceHook**: *function*

*Defined in [src/services/service-hook-factory.ts:63](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L63)*

Type defining the return object from calling `useNestedCreate()`

#### Type declaration:

▸ (): *object*

* **create**: *[NestedCreateService](README.md#nestedcreateservice)‹TRecord, TPathParams›*

___

###  NestedListService

Ƭ **NestedListService**: *function*

*Defined in [src/services/service-factory.ts:59](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L59)*

Type defining the service function for listing resources by supplied type when resource is nested

#### Type declaration:

▸ (`pathParams`: TPathParams, `queryParams?`: TQueryParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`pathParams` | TPathParams |
`queryParams?` | TQueryParams |

___

###  NestedListServiceHook

Ƭ **NestedListServiceHook**: *function*

*Defined in [src/services/service-hook-factory.ts:70](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L70)*

Type defining the return object from calling `useNestedList()`

#### Type declaration:

▸ (): *object*

* **list**: *[NestedListService](README.md#nestedlistservice)‹TRecord, TPathParams, TQueryParams›*

___

###  UpdateService

Ƭ **UpdateService**: *function*

*Defined in [src/services/service-factory.ts:67](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L67)*

Type defining the service function for updating the supplied resource type

#### Type declaration:

▸ (`record`: TRecord, `pathParams?`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`record` | TRecord |
`pathParams?` | TPathParams |

___

###  UpdateServiceHook

Ƭ **UpdateServiceHook**: *function*

*Defined in [src/services/service-hook-factory.ts:77](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L77)*

Type defining the return object from calling `useUpdate()`

#### Type declaration:

▸ (): *object*

* **update**: *[UpdateService](README.md#updateservice)‹TRecord, TPathParams›*

## Variables

### `Const` AxiosResponseFactory

• **AxiosResponseFactory**: *IFactory‹AxiosResponse‹any››* = Factory.define<AxiosResponse>(
    FactoryType.AxiosResponse
)
    .sequence("status", () => 200)
    .sequence("statusText", () => "OK")

*Defined in [src/tests/factories/axios-response-factory.ts:9](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/axios-response-factory.ts#L9)*

___

### `Const` RouteDefinitionFactory

• **RouteDefinitionFactory**: *IFactory‹[RouteDefinition](interfaces/routedefinition.md)›* = Factory.define<RouteDefinition>(
    FactoryType.RouteDefinition.Default
)
    .sequence("authRequired", () => false)
    .sequence("component", () => React.Fragment)
    .sequence("exact", () => true)
    .sequence("path", (i: number) => `path${i}/`)
    .sequence("routes", () => {})

*Defined in [src/tests/factories/route-definition-factory.ts:10](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/route-definition-factory.ts#L10)*

___

### `Const` RouteDefinitionNestedFactory

• **RouteDefinitionNestedFactory**: *IFactory‹[RouteDefinition](interfaces/routedefinition.md)›* = Factory.define<RouteDefinition>(
    FactoryType.RouteDefinition.Nested
)
    .sequence("authRequired", () => false)
    .sequence("component", () => React.Fragment)
    .sequence("exact", () => true)
    .sequence("path", (i: number) => `path${i}/`)
    .sequence("routes", () => {
        return {
            nestedRoute: Factory.build<RouteDefinition>(
                FactoryType.RouteDefinition.Default
            ),
        };
    })

*Defined in [src/tests/factories/route-definition-factory.ts:19](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/route-definition-factory.ts#L19)*

___

### `Const` RouteMapFactory

• **RouteMapFactory**: *IFactory‹[RouteMap](interfaces/routemap.md)›* = Factory.define<RouteMap>(
    FactoryType.RouteMap
).sequence("/", () =>
    Factory.build<RouteDefinition>(FactoryType.RouteDefinition.Default)
)

*Defined in [src/tests/factories/route-map-factory.ts:10](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/route-map-factory.ts#L10)*

___

### `Const` StubResourceRecordFactory

• **StubResourceRecordFactory**: *IFactory‹[StubResourceRecord](classes/stubresourcerecord.md)‹››* = Factory.define<StubResourceRecord>(
    FactoryType.StubResourceRecord,
    StubResourceRecord
)
    .sequence("id", (i: number) => i)
    .sequence("name", (i: number) => `Name ${i}`)

*Defined in [src/tests/factories/stub-resource-record-factory.ts:9](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/stub-resource-record-factory.ts#L9)*

___

### `Const` _routeParamRegEx

• **_routeParamRegEx**: *RegExp‹›* = /(:[a-z_-]*)/gi

*Defined in [src/utilities/route-utils.ts:9](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L9)*

## Functions

### `Const` AuthenticatedRoute

▸ **AuthenticatedRoute**(`props`: [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md)): *Element‹›*

*Defined in [src/components/routing/authenticated-route.tsx:19](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/components/routing/authenticated-route.tsx#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md) |

**Returns:** *Element‹›*

___

### `Const` NestedRoute

▸ **NestedRoute**(`props`: [NestedRouteProps](interfaces/nestedrouteprops.md)): *Element‹›*

*Defined in [src/components/routing/nested-route.tsx:26](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/components/routing/nested-route.tsx#L26)*

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

*Defined in [src/components/routing/nested-routes.tsx:27](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/components/routing/nested-routes.tsx#L27)*

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

*Defined in [src/components/routing/nested-routes-by-property.tsx:27](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/components/routing/nested-routes-by-property.tsx#L27)*

Renders Route components mapped to a custom property

**Parameters:**

Name | Type |
------ | ------ |
`props` | [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md) |

**Returns:** *null | Element‹›*

___

### `Const` Redirects

▸ **Redirects**(`props`: [RedirectsProps](interfaces/redirectsprops.md)): *Element‹›*

*Defined in [src/components/routing/redirects.tsx:22](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/components/routing/redirects.tsx#L22)*

Simple way to redirect a flat array of RedirectDefinitions

**Parameters:**

Name | Type |
------ | ------ |
`props` | [RedirectsProps](interfaces/redirectsprops.md) |

**Returns:** *Element‹›*

___

### `Const` _buildUrl

▸ **_buildUrl**(`id`: number, `resourceEndpoint`: string, `pathParams?`: any): *string*

*Defined in [src/services/service-factory.ts:221](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L221)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`resourceEndpoint` | string |
`pathParams?` | any |

**Returns:** *string*

___

### `Const` _bulkUpdate

▸ **_bulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `records`: Array‹TRecord›, `resourceEndpoint`: string, `pathParams`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

*Defined in [src/services/service-factory.ts:229](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L229)*

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

**Returns:** *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

___

### `Const` _create

▸ **_create**<**TRecord**>(`recordType`: object, `url`: string, `record?`: TRecord): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

*Defined in [src/services/service-factory.ts:247](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L247)*

**Type parameters:**

▪ **TRecord**: *any*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **url**: *string*

▪`Optional`  **record**: *TRecord*

**Returns:** *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

___

### `Const` _delete

▸ **_delete**(`id`: number, `resourceEndpoint`: string, `pathParams?`: any): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹Boolean››*

*Defined in [src/services/service-factory.ts:259](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L259)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`resourceEndpoint` | string |
`pathParams?` | any |

**Returns:** *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹Boolean››*

___

### `Const` _get

▸ **_get**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `resourceEndpoint`: string, `pathParams`: TPathParams, `queryParams?`: TQueryParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

*Defined in [src/services/service-factory.ts:270](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L270)*

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

**Returns:** *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

___

### `Const` _list

▸ **_list**<**TRecord**>(`recordType`: object, `baseEndpoint`: string, `pathParams?`: any, `queryParams?`: any): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

*Defined in [src/services/service-factory.ts:286](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L286)*

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

**Returns:** *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

___

### `Const` _mapAxiosResponse

▸ **_mapAxiosResponse**<**TRecord**>(`recordType`: object, `axiosResponse`: AxiosResponse‹Result‹TRecord››): *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

*Defined in [src/utilities/service-utils.ts:15](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/service-utils.ts#L15)*

Translates axios specific data response to a more generic ServiceResponse
type for consumption throughout the system

**Type parameters:**

▪ **TRecord**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **axiosResponse**: *AxiosResponse‹Result‹TRecord››*

**Returns:** *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

___

### `Const` _mapPagedAxiosResponse

▸ **_mapPagedAxiosResponse**<**TRecord**>(`recordType`: object, `axiosResponse`: AxiosResponse‹PagedResult‹TRecord››): *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

*Defined in [src/utilities/service-utils.ts:42](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/service-utils.ts#L42)*

Translates axios specific data responses to a more generic ServiceResponse
type for consumption throughout the system

**Type parameters:**

▪ **TRecord**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **axiosResponse**: *AxiosResponse‹PagedResult‹TRecord››*

**Returns:** *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

___

### `Const` _mockSuccess

▸ **_mockSuccess**(`method`: [AxiosJestMock](README.md#axiosjestmock), `resultObject`: any | any[], `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:87](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [AxiosJestMock](README.md#axiosjestmock) |
`resultObject` | any &#124; any[] |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` _resultObjectToJS

▸ **_resultObjectToJS**(`resultObject`: any | any[]): *any | any[]*

*Defined in [src/tests/mocks/mock-axios.ts:112](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`resultObject` | any &#124; any[] |

**Returns:** *any | any[]*

___

### `Const` _update

▸ **_update**<**TRecord**, **TPathParams**>(`recordType`: object, `record`: TRecord, `resourceEndpoint`: string, `pathParams?`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

*Defined in [src/services/service-factory.ts:302](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L302)*

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

**Returns:** *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

___

### `Const` appendQueryParams

▸ **appendQueryParams**(`path`: string, `queryParams`: any): *string*

*Defined in [src/utilities/route-utils.ts:22](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L22)*

Appends the supplied query params object as a query string to path. Even if path is null.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Existing path (can be null) |
`queryParams` | any | Object to transform into query string  |

**Returns:** *string*

___

### `Const` debugRoutes

▸ **debugRoutes**(`routes`: [RouteMap](interfaces/routemap.md)): *void*

*Defined in [src/utilities/route-utils.ts:44](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L44)*

Outputs flattened routing table for debugging purposes

**Parameters:**

Name | Type |
------ | ------ |
`routes` | [RouteMap](interfaces/routemap.md) |

**Returns:** *void*

___

### `Const` deleteSuccess

▸ **deleteSuccess**(`record?`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:66](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`record?` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` getFlattenedRoutes

▸ **getFlattenedRoutes**(`routeArray`: [RouteDefinition](interfaces/routedefinition.md)[]): *[RouteDefinition](interfaces/routedefinition.md)[]*

*Defined in [src/utilities/route-utils.ts:52](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`routeArray` | [RouteDefinition](interfaces/routedefinition.md)[] |

**Returns:** *[RouteDefinition](interfaces/routedefinition.md)[]*

___

### `Const` getSuccess

▸ **getSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:69](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` getUrl

▸ **getUrl**(`path`: string, `pathParams?`: any): *string*

*Defined in [src/utilities/route-utils.ts:73](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L73)*

Convenience method to get a Url from a RouteDefinition

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Route path template. Parameters in the path are denoted withed a colon `:id` |
`pathParams?` | any | Object with keys matching supplied path template components  |

**Returns:** *string*

___

### `Const` getUrlFromPath

▸ **getUrlFromPath**(`path`: string, `pathParams?`: any, `queryParams?`: any): *string*

*Defined in [src/utilities/route-utils.ts:83](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L83)*

Constructs a url from a formatted route path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Route path template. Parameters in the path are denoted withed a colon `:id` |
`pathParams?` | any | Object with keys matching supplied path template components |
`queryParams?` | any | Object to get translated to the query string of the url  |

**Returns:** *string*

___

### `Const` listSuccess

▸ **listSuccess**(`records`: any[], `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:72](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`records` | any[] |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` postSuccess

▸ **postSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:75](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` putSuccess

▸ **putSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:78](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` replacePathParams

▸ **replacePathParams**(`path`: string, `pathParams`: any): *string*

*Defined in [src/utilities/route-utils.ts:106](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L106)*

Replace routing components in supplied path with keys and values
of supplied pathParams.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Path containing routing components (format: ':key'). Throws an error if any components aren't found in the pathParams object. |
`pathParams` | any | Object to transform into the supplied path.  |

**Returns:** *string*

___

### `Const` useCancellablePromise

▸ **useCancellablePromise**(): *object*

*Defined in [src/hooks/use-cancellable-promise.ts:4](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/hooks/use-cancellable-promise.ts#L4)*

**Returns:** *object*

* **cancellablePromise**: *cancellablePromise*

## Object literals

### `Const` FactoryType

### ▪ **FactoryType**: *object*

*Defined in [src/tests/factories/factory-type.ts:1](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/factory-type.ts#L1)*

###  AxiosResponse

• **AxiosResponse**: *string* = "AxiosResponse"

*Defined in [src/tests/factories/factory-type.ts:2](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/factory-type.ts#L2)*

###  RouteMap

• **RouteMap**: *string* = "RouteMap"

*Defined in [src/tests/factories/factory-type.ts:7](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/factory-type.ts#L7)*

###  StubResourceRecord

• **StubResourceRecord**: *string* = "StubResourceRecord"

*Defined in [src/tests/factories/factory-type.ts:8](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/factory-type.ts#L8)*

▪ **RouteDefinition**: *object*

*Defined in [src/tests/factories/factory-type.ts:3](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/factories/factory-type.ts#L3)*

* **Default**: *string* = "RouteDefinition"

* **Nested**: *string* = "RouteDefinition.Nested"

___

### `Const` RouteUtils

### ▪ **RouteUtils**: *object*

*Defined in [src/utilities/route-utils.ts:132](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L132)*

###  appendQueryParams

• **appendQueryParams**: *[appendQueryParams](README.md#const-appendqueryparams)*

*Defined in [src/utilities/route-utils.ts:133](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L133)*

###  debugRoutes

• **debugRoutes**: *[debugRoutes](README.md#const-debugroutes)*

*Defined in [src/utilities/route-utils.ts:134](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L134)*

###  getFlattenedRoutes

• **getFlattenedRoutes**: *[getFlattenedRoutes](README.md#const-getflattenedroutes)*

*Defined in [src/utilities/route-utils.ts:135](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L135)*

###  getUrl

• **getUrl**: *[getUrl](README.md#const-geturl)*

*Defined in [src/utilities/route-utils.ts:136](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L136)*

###  getUrlFromPath

• **getUrlFromPath**: *[getUrlFromPath](README.md#const-geturlfrompath)*

*Defined in [src/utilities/route-utils.ts:137](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L137)*

###  replacePathParams

• **replacePathParams**: *[replacePathParams](README.md#const-replacepathparams)*

*Defined in [src/utilities/route-utils.ts:138](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/route-utils.ts#L138)*

___

### `Const` ServiceFactory

### ▪ **ServiceFactory**: *object*

*Defined in [src/services/service-factory.ts:81](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L81)*

Factory to encapsulate common service function logic

###  bulkUpdate

▸ **bulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): *[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›*

*Defined in [src/services/service-factory.ts:87](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L87)*

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

*Defined in [src/services/service-factory.ts:109](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L109)*

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

*Defined in [src/services/service-factory.ts:122](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L122)*

Creates conventional Service Delete function for the supplied resource type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceEndpoint` | string |   |

**Returns:** *[DeleteService](README.md#deleteservice)*

###  get

▸ **get**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `resourceEndpoint`: string): *[GetService](README.md#getservice)‹TRecord, TPathParams, TQueryParams›*

*Defined in [src/services/service-factory.ts:132](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L132)*

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

*Defined in [src/services/service-factory.ts:154](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L154)*

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

*Defined in [src/services/service-factory.ts:168](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L168)*

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

*Defined in [src/services/service-factory.ts:183](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L183)*

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

*Defined in [src/services/service-factory.ts:201](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-factory.ts#L201)*

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

*Defined in [src/services/service-hook-factory.ts:90](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L90)*

Factory to encapsulate common service function logic

###  useBulkUpdate

▸ **useBulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): *[BulkUpdateServiceHook](README.md#bulkupdateservicehook)‹TRecord, TPathParams›*

*Defined in [src/services/service-hook-factory.ts:97](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L97)*

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

*Defined in [src/services/service-hook-factory.ts:132](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L132)*

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

*Defined in [src/services/service-hook-factory.ts:162](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L162)*

Creates conventional hook for using service delete function for the supplied resource type.
Automatically handles cancellation tokens internally.

**Parameters:**

Name | Type |
------ | ------ |
`resourceEndpoint` | string |

**Returns:** *[DeleteServiceHook](README.md#deleteservicehook)*

###  useGet

▸ **useGet**<**TRecord**, **TPathParams**, **TQueryParams**>(`recordType`: object, `resourceEndpoint`: string): *[GetServiceHook](README.md#getservicehook)‹TRecord, TPathParams, TQueryParams›*

*Defined in [src/services/service-hook-factory.ts:187](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L187)*

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

*Defined in [src/services/service-hook-factory.ts:223](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L223)*

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

*Defined in [src/services/service-hook-factory.ts:253](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L253)*

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

*Defined in [src/services/service-hook-factory.ts:284](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L284)*

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

*Defined in [src/services/service-hook-factory.ts:316](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/services/service-hook-factory.ts#L316)*

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

___

### `Const` ServiceUtils

### ▪ **ServiceUtils**: *object*

*Defined in [src/utilities/service-utils.ts:72](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/service-utils.ts#L72)*

###  mapAxiosResponse

• **mapAxiosResponse**: *[_mapAxiosResponse](README.md#const-_mapaxiosresponse)* = _mapAxiosResponse

*Defined in [src/utilities/service-utils.ts:73](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/service-utils.ts#L73)*

###  mapPagedAxiosResponse

• **mapPagedAxiosResponse**: *[_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)* = _mapPagedAxiosResponse

*Defined in [src/utilities/service-utils.ts:74](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/utilities/service-utils.ts#L74)*

___

### `Const` mockAxios

### ▪ **mockAxios**: *object*

*Defined in [src/tests/mocks/mock-axios.ts:134](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L134)*

###  delete

• **delete**: *Mock‹Promise‹object›, []›* = axios.delete as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:135](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L135)*

###  deleteSuccess

• **deleteSuccess**: *[deleteSuccess](README.md#const-deletesuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:136](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L136)*

###  get

• **get**: *Mock‹Promise‹object›, []›* = axios.get as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:137](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L137)*

###  getSuccess

• **getSuccess**: *[getSuccess](README.md#const-getsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:138](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L138)*

###  listSuccess

• **listSuccess**: *[listSuccess](README.md#const-listsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:139](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L139)*

###  post

• **post**: *Mock‹Promise‹object›, []›* = axios.post as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:140](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L140)*

###  postSuccess

• **postSuccess**: *[postSuccess](README.md#const-postsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:141](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L141)*

###  put

• **put**: *Mock‹Promise‹object›, []›* = axios.put as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:142](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L142)*

###  putSuccess

• **putSuccess**: *[putSuccess](README.md#const-putsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:143](https://github.com/wintondeshong/AndcultureCode.JavaScript.React-1/blob/3bed964/src/tests/mocks/mock-axios.ts#L143)*
