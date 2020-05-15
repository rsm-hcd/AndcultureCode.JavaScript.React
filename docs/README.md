[andculturecode-javascript-react](README.md)

# andculturecode-javascript-react

## Index

### Enumerations

* [ErrorType](enums/errortype.md)

### Classes

* [ResultErrorRecord](classes/resulterrorrecord.md)
* [ResultRecord](classes/resultrecord.md)
* [StubResourceRecord](classes/stubresourcerecord.md)

### Interfaces

* [AuthenticatedRoute](interfaces/authenticatedroute.md)
* [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md)
* [MockAxios](interfaces/mockaxios.md)
* [NestedRouteProps](interfaces/nestedrouteprops.md)
* [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md)
* [NestedRoutesProps](interfaces/nestedroutesprops.md)
* [PagedResult](interfaces/pagedresult.md)
* [RedirectDefinition](interfaces/redirectdefinition.md)
* [RedirectsProps](interfaces/redirectsprops.md)
* [Result](interfaces/result.md)
* [ResultError](interfaces/resulterror.md)
* [RouteDefinition](interfaces/routedefinition.md)
* [RouteMap](interfaces/routemap.md)
* [ServiceResponse](interfaces/serviceresponse.md)
* [StubResource](interfaces/stubresource.md)
* [UnmatchedRoute](interfaces/unmatchedroute.md)

### Type aliases

* [AxiosJestMock](README.md#axiosjestmock)
* [BulkUpdateService](README.md#bulkupdateservice)
* [CreateService](README.md#createservice)
* [DeleteService](README.md#deleteservice)
* [GetService](README.md#getservice)
* [ListService](README.md#listservice)
* [NestedCreateService](README.md#nestedcreateservice)
* [NestedListService](README.md#nestedlistservice)
* [UpdateService](README.md#updateservice)

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
* [_hasValues](README.md#const-_hasvalues)
* [_isEmpty](README.md#const-_isempty)
* [_isNotEmpty](README.md#const-_isnotempty)
* [_list](README.md#const-_list)
* [_mapAxiosResponse](README.md#const-_mapaxiosresponse)
* [_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)
* [_mockSuccess](README.md#const-_mocksuccess)
* [_numericEnumToPojo](README.md#const-_numericenumtopojo)
* [_objectToArray](README.md#const-_objecttoarray)
* [_resultObjectToJS](README.md#const-_resultobjecttojs)
* [_timer](README.md#const-_timer)
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
* [sleep](README.md#const-sleep)

### Object literals

* [CollectionUtils](README.md#const-collectionutils)
* [CoreUtils](README.md#const-coreutils)
* [FactoryType](README.md#const-factorytype)
* [RouteUtils](README.md#const-routeutils)
* [ServiceFactory](README.md#const-servicefactory)
* [ServiceUtils](README.md#const-serviceutils)
* [TestUtils](README.md#const-testutils)
* [defaultValues](README.md#const-defaultvalues)
* [mockAxios](README.md#const-mockaxios)

## Type aliases

###  AxiosJestMock

Ƭ **AxiosJestMock**: *Mock‹Promise‹object›, []›*

*Defined in [src/tests/mocks/mock-axios.ts:12](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L12)*

MockAxios is merely a typed wrapper around the dynamically
mocked __mocks__/axios implementation.

___

###  BulkUpdateService

Ƭ **BulkUpdateService**: *function*

*Defined in [src/services/service-factory.ts:13](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L13)*

Type defining the service function for bulk updating the supplied resource type

#### Type declaration:

▸ (`records`: Array‹TRecord›, `pathParams`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`records` | Array‹TRecord› |
`pathParams` | TPathParams |

___

###  CreateService

Ƭ **CreateService**: *function*

*Defined in [src/services/service-factory.ts:21](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L21)*

Type defining the service function for creating the supplied resource type

#### Type declaration:

▸ (`record?`: TRecord): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`record?` | TRecord |

___

###  DeleteService

Ƭ **DeleteService**: *function*

*Defined in [src/services/service-factory.ts:28](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L28)*

Type defining the service function for deleting the supplied resource

#### Type declaration:

▸ (`id`: number, `pathParams?`: any): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹Boolean››*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`pathParams?` | any |

___

###  GetService

Ƭ **GetService**: *function*

*Defined in [src/services/service-factory.ts:36](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L36)*

Type defining the service function for getting the supplied resource type

#### Type declaration:

▸ (`pathParams`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`pathParams` | TPathParams |

___

###  ListService

Ƭ **ListService**: *function*

*Defined in [src/services/service-factory.ts:43](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L43)*

Type defining the service function for listing resources by supplied type

#### Type declaration:

▸ (`queryParams?`: TQueryParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`queryParams?` | TQueryParams |

___

###  NestedCreateService

Ƭ **NestedCreateService**: *function*

*Defined in [src/services/service-factory.ts:50](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L50)*

Type defining the service function for creating the supplied resource type when resource is nested

#### Type declaration:

▸ (`record`: TRecord, `pathParams`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`record` | TRecord |
`pathParams` | TPathParams |

___

###  NestedListService

Ƭ **NestedListService**: *function*

*Defined in [src/services/service-factory.ts:58](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L58)*

Type defining the service function for listing resources by supplied type when resource is nested

#### Type declaration:

▸ (`pathParams`: TPathParams, `queryParams?`: TQueryParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`pathParams` | TPathParams |
`queryParams?` | TQueryParams |

___

###  UpdateService

Ƭ **UpdateService**: *function*

*Defined in [src/services/service-factory.ts:66](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L66)*

Type defining the service function for updating the supplied resource type

#### Type declaration:

▸ (`record`: TRecord, `pathParams?`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

**Parameters:**

Name | Type |
------ | ------ |
`record` | TRecord |
`pathParams?` | TPathParams |

## Variables

### `Const` AxiosResponseFactory

• **AxiosResponseFactory**: *IFactory‹AxiosResponse‹any››* = Factory.define<AxiosResponse>(
    FactoryType.AxiosResponse
)
    .sequence("status", () => 200)
    .sequence("statusText", () => "OK")

*Defined in [src/tests/factories/axios-response-factory.ts:9](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/axios-response-factory.ts#L9)*

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

*Defined in [src/tests/factories/route-definition-factory.ts:10](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/route-definition-factory.ts#L10)*

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

*Defined in [src/tests/factories/route-definition-factory.ts:19](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/route-definition-factory.ts#L19)*

___

### `Const` RouteMapFactory

• **RouteMapFactory**: *IFactory‹[RouteMap](interfaces/routemap.md)›* = Factory.define<RouteMap>(FactoryType.RouteMap).sequence(
    "/",
    () => Factory.build<RouteDefinition>(FactoryType.RouteDefinition.Default)
)

*Defined in [src/tests/factories/route-map-factory.ts:10](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/route-map-factory.ts#L10)*

___

### `Const` StubResourceRecordFactory

• **StubResourceRecordFactory**: *IFactory‹[StubResourceRecord](classes/stubresourcerecord.md)‹››* = Factory.define<StubResourceRecord>(
    FactoryType.StubResourceRecord,
    StubResourceRecord
)
    .sequence("id", (i: number) => i)
    .sequence("name", (i: number) => `Name ${i}`)

*Defined in [src/tests/factories/stub-resource-record-factory.ts:9](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/stub-resource-record-factory.ts#L9)*

___

### `Const` _routeParamRegEx

• **_routeParamRegEx**: *RegExp‹›* = /(:[a-z_-]*)/gi

*Defined in [src/utilities/route-utils.ts:9](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L9)*

## Functions

### `Const` AuthenticatedRoute

▸ **AuthenticatedRoute**(`props`: [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md)): *Element‹›*

*Defined in [src/components/routing/authenticated-route.tsx:19](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/components/routing/authenticated-route.tsx#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [AuthenticatedRouteProps](interfaces/authenticatedrouteprops.md) |

**Returns:** *Element‹›*

___

### `Const` NestedRoute

▸ **NestedRoute**(`props`: [NestedRouteProps](interfaces/nestedrouteprops.md)): *Element‹›*

*Defined in [src/components/routing/nested-route.tsx:26](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/components/routing/nested-route.tsx#L26)*

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

*Defined in [src/components/routing/nested-routes.tsx:27](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/components/routing/nested-routes.tsx#L27)*

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

*Defined in [src/components/routing/nested-routes-by-property.tsx:27](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/components/routing/nested-routes-by-property.tsx#L27)*

Renders Route components mapped to a custom property

**Parameters:**

Name | Type |
------ | ------ |
`props` | [NestedRoutesByPropertyProps](interfaces/nestedroutesbypropertyprops.md) |

**Returns:** *null | Element‹›*

___

### `Const` Redirects

▸ **Redirects**(`props`: [RedirectsProps](interfaces/redirectsprops.md)): *Element‹›*

*Defined in [src/components/routing/redirects.tsx:22](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/components/routing/redirects.tsx#L22)*

Simple way to redirect a flat array of RedirectDefinitions

**Parameters:**

Name | Type |
------ | ------ |
`props` | [RedirectsProps](interfaces/redirectsprops.md) |

**Returns:** *Element‹›*

___

### `Const` _buildUrl

▸ **_buildUrl**(`id`: number, `resourceEndpoint`: string, `pathParams?`: any): *string*

*Defined in [src/services/service-factory.ts:219](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L219)*

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

*Defined in [src/services/service-factory.ts:227](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L227)*

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

*Defined in [src/services/service-factory.ts:242](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L242)*

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

*Defined in [src/services/service-factory.ts:254](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`resourceEndpoint` | string |
`pathParams?` | any |

**Returns:** *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹Boolean››*

___

### `Const` _get

▸ **_get**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string, `pathParams`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

*Defined in [src/services/service-factory.ts:265](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L265)*

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

▪ **pathParams**: *TPathParams*

**Returns:** *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

___

### `Const` _hasValues

▸ **_hasValues**(...`collections`: Array‹any[] | List‹any› | undefined›): *boolean*

*Defined in [src/utilities/collection-utils.ts:18](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/collection-utils.ts#L18)*

Checks for values in a collection/object. Returns false if the collection is undefined, null,
or the respective object type's "empty" state, ie length 0, size 0, or has no keys.

Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
CollectionUtils.hasValues([]) or CollectionUtils.hasValues([], [], [])

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹any[] &#124; List‹any› &#124; undefined› |

**Returns:** *boolean*

False if `collections` is null/undefined, or every element is also null/undefined,
or has no sub-elements. True if any element has sub-elements.

___

### `Const` _isEmpty

▸ **_isEmpty**(...`collections`: Array‹any[] | List‹any› | undefined›): *boolean*

*Defined in [src/utilities/collection-utils.ts:45](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/collection-utils.ts#L45)*

Checks for values in a collection/object. Returns true if the collection is undefined, null,
or the respective object type's "empty" state, ie length 0, size 0, or has no keys.

Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
CollectionUtils.isEmpty([]) or CollectionUtils.isEmpty([], [], [])

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹any[] &#124; List‹any› &#124; undefined› |

**Returns:** *boolean*

True if `collections` is null/undefined, or every element is also null/undefined,
or has no sub-elements. False if any element has sub-elements.

___

### `Const` _isNotEmpty

▸ **_isNotEmpty**(...`collections`: Array‹any[] | List‹any› | undefined›): *boolean*

*Defined in [src/utilities/collection-utils.ts:85](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/collection-utils.ts#L85)*

Checks if there aren't any values in a collection/object. Returns false if the collection is undefined, null,
or the respective object type's "empty" state, ie length 0, size 0, or has no keys.

Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
CollectionUtils.isNotEmpty([]) or CollectionUtils.isNotEmpty([], [], [])

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹any[] &#124; List‹any› &#124; undefined› |

**Returns:** *boolean*

False if `collections` is null/undefined, or every element is also null/undefined,
or has no sub-elements. True if any element has sub-elements.

___

### `Const` _list

▸ **_list**<**TRecord**>(`recordType`: object, `baseEndpoint`: string, `pathParams?`: any, `queryParams?`: any): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

*Defined in [src/services/service-factory.ts:276](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L276)*

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

▸ **_mapAxiosResponse**<**TRecord**>(`recordType`: object, `axiosResponse`: AxiosResponse‹[Result](interfaces/result.md)‹TRecord››): *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

*Defined in [src/utilities/service-utils.ts:15](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/service-utils.ts#L15)*

Translates axios specific data response to a more generic ServiceResponse
type for consumption throughout the system

**Type parameters:**

▪ **TRecord**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **axiosResponse**: *AxiosResponse‹[Result](interfaces/result.md)‹TRecord››*

**Returns:** *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

___

### `Const` _mapPagedAxiosResponse

▸ **_mapPagedAxiosResponse**<**TRecord**>(`recordType`: object, `axiosResponse`: AxiosResponse‹[PagedResult](interfaces/pagedresult.md)‹TRecord››): *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

*Defined in [src/utilities/service-utils.ts:42](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/service-utils.ts#L42)*

Translates axios specific data responses to a more generic ServiceResponse
type for consumption throughout the system

**Type parameters:**

▪ **TRecord**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **axiosResponse**: *AxiosResponse‹[PagedResult](interfaces/pagedresult.md)‹TRecord››*

**Returns:** *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

___

### `Const` _mockSuccess

▸ **_mockSuccess**(`method`: [AxiosJestMock](README.md#axiosjestmock), `resultObject`: any | any[], `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:86](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [AxiosJestMock](README.md#axiosjestmock) |
`resultObject` | any &#124; any[] |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` _numericEnumToPojo

▸ **_numericEnumToPojo**(`enumObject`: any): *object*

*Defined in [src/utilities/core-utils.ts:7](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/core-utils.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`enumObject` | any |

**Returns:** *object*

___

### `Const` _objectToArray

▸ **_objectToArray**(`object`: any): *any[]*

*Defined in [src/utilities/core-utils.ts:19](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/core-utils.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any[]*

___

### `Const` _resultObjectToJS

▸ **_resultObjectToJS**(`resultObject`: any | any[]): *any | any[]*

*Defined in [src/tests/mocks/mock-axios.ts:111](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`resultObject` | any &#124; any[] |

**Returns:** *any | any[]*

___

### `Const` _timer

▸ **_timer**(`name`: string): *object*

*Defined in [src/utilities/core-utils.ts:40](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/core-utils.ts#L40)*

Creates a timer instance that when stopped will supply elapsed time in milliseconds.
Useful for benchmarking or providing counters

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Useful name to identify the timer  |

**Returns:** *object*

* **stop**(`log?`: undefined | false | true): *number*

___

### `Const` _update

▸ **_update**<**TRecord**, **TPathParams**>(`recordType`: object, `record`: TRecord, `resourceEndpoint`: string, `pathParams?`: TPathParams): *Promise‹[ServiceResponse](interfaces/serviceresponse.md)‹TRecord››*

*Defined in [src/services/service-factory.ts:292](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L292)*

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

*Defined in [src/utilities/route-utils.ts:22](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L22)*

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

*Defined in [src/utilities/route-utils.ts:44](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L44)*

Outputs flattened routing table for debugging purposes

**Parameters:**

Name | Type |
------ | ------ |
`routes` | [RouteMap](interfaces/routemap.md) |

**Returns:** *void*

___

### `Const` deleteSuccess

▸ **deleteSuccess**(`record?`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:65](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`record?` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` getFlattenedRoutes

▸ **getFlattenedRoutes**(`routeArray`: [RouteDefinition](interfaces/routedefinition.md)[]): *[RouteDefinition](interfaces/routedefinition.md)[]*

*Defined in [src/utilities/route-utils.ts:52](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`routeArray` | [RouteDefinition](interfaces/routedefinition.md)[] |

**Returns:** *[RouteDefinition](interfaces/routedefinition.md)[]*

___

### `Const` getSuccess

▸ **getSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:68](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` getUrl

▸ **getUrl**(`path`: string, `pathParams?`: any): *string*

*Defined in [src/utilities/route-utils.ts:73](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L73)*

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

*Defined in [src/utilities/route-utils.ts:83](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L83)*

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

*Defined in [src/tests/mocks/mock-axios.ts:71](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`records` | any[] |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` postSuccess

▸ **postSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:74](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` putSuccess

▸ **putSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:77](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` replacePathParams

▸ **replacePathParams**(`path`: string, `pathParams`: any): *string*

*Defined in [src/utilities/route-utils.ts:106](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L106)*

Replace routing components in supplied path with keys and values
of supplied pathParams.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Path containing routing components (format: ':key'). Throws an error if any components aren't found in the pathParams object. |
`pathParams` | any | Object to transform into the supplied path.  |

**Returns:** *string*

___

### `Const` sleep

▸ **sleep**(`milliseconds`: number, `debug`: boolean): *Promise‹unknown›*

*Defined in [src/tests/test-utils.ts:9](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/test-utils.ts#L9)*

Wrap timeout in a promise so tests can easily block execution for testing time

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`milliseconds` | number | - |   |
`debug` | boolean | false | - |

**Returns:** *Promise‹unknown›*

## Object literals

### `Const` CollectionUtils

### ▪ **CollectionUtils**: *object*

*Defined in [src/utilities/collection-utils.ts:97](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/collection-utils.ts#L97)*

###  hasValues

• **hasValues**: *[_hasValues](README.md#const-_hasvalues)* = _hasValues

*Defined in [src/utilities/collection-utils.ts:98](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/collection-utils.ts#L98)*

###  isEmpty

• **isEmpty**: *[_isEmpty](README.md#const-_isempty)* = _isEmpty

*Defined in [src/utilities/collection-utils.ts:99](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/collection-utils.ts#L99)*

###  isNotEmpty

• **isNotEmpty**: *[_isNotEmpty](README.md#const-_isnotempty)* = _isNotEmpty

*Defined in [src/utilities/collection-utils.ts:100](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/collection-utils.ts#L100)*

___

### `Const` CoreUtils

### ▪ **CoreUtils**: *object*

*Defined in [src/utilities/core-utils.ts:66](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/core-utils.ts#L66)*

###  numericEnumToPojo

• **numericEnumToPojo**: *[_numericEnumToPojo](README.md#const-_numericenumtopojo)* = _numericEnumToPojo

*Defined in [src/utilities/core-utils.ts:67](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/core-utils.ts#L67)*

###  objectToArray

• **objectToArray**: *[_objectToArray](README.md#const-_objecttoarray)* = _objectToArray

*Defined in [src/utilities/core-utils.ts:68](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/core-utils.ts#L68)*

###  timer

• **timer**: *[_timer](README.md#const-_timer)* = _timer

*Defined in [src/utilities/core-utils.ts:69](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/core-utils.ts#L69)*

___

### `Const` FactoryType

### ▪ **FactoryType**: *object*

*Defined in [src/tests/factories/factory-type.ts:1](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/factory-type.ts#L1)*

###  AxiosResponse

• **AxiosResponse**: *string* = "AxiosResponse"

*Defined in [src/tests/factories/factory-type.ts:2](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/factory-type.ts#L2)*

###  RouteMap

• **RouteMap**: *string* = "RouteMap"

*Defined in [src/tests/factories/factory-type.ts:7](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/factory-type.ts#L7)*

###  StubResourceRecord

• **StubResourceRecord**: *string* = "StubResourceRecord"

*Defined in [src/tests/factories/factory-type.ts:8](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/factory-type.ts#L8)*

▪ **RouteDefinition**: *object*

*Defined in [src/tests/factories/factory-type.ts:3](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/factories/factory-type.ts#L3)*

* **Default**: *string* = "RouteDefinition"

* **Nested**: *string* = "RouteDefinition.Nested"

___

### `Const` RouteUtils

### ▪ **RouteUtils**: *object*

*Defined in [src/utilities/route-utils.ts:132](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L132)*

###  appendQueryParams

• **appendQueryParams**: *[appendQueryParams](README.md#const-appendqueryparams)*

*Defined in [src/utilities/route-utils.ts:133](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L133)*

###  debugRoutes

• **debugRoutes**: *[debugRoutes](README.md#const-debugroutes)*

*Defined in [src/utilities/route-utils.ts:134](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L134)*

###  getFlattenedRoutes

• **getFlattenedRoutes**: *[getFlattenedRoutes](README.md#const-getflattenedroutes)*

*Defined in [src/utilities/route-utils.ts:135](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L135)*

###  getUrl

• **getUrl**: *[getUrl](README.md#const-geturl)*

*Defined in [src/utilities/route-utils.ts:136](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L136)*

###  getUrlFromPath

• **getUrlFromPath**: *[getUrlFromPath](README.md#const-geturlfrompath)*

*Defined in [src/utilities/route-utils.ts:137](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L137)*

###  replacePathParams

• **replacePathParams**: *[replacePathParams](README.md#const-replacepathparams)*

*Defined in [src/utilities/route-utils.ts:138](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/route-utils.ts#L138)*

___

### `Const` ServiceFactory

### ▪ **ServiceFactory**: *object*

*Defined in [src/services/service-factory.ts:80](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L80)*

Factory to encapsulate common service function logic

###  bulkUpdate

▸ **bulkUpdate**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): *[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›*

*Defined in [src/services/service-factory.ts:86](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L86)*

Creates a conventional Service Update function for an Array of the supplied resource type

**Type parameters:**

▪ **TRecord**: *any*

▪ **TPathParams**: *object*

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

**Returns:** *[BulkUpdateService](README.md#bulkupdateservice)‹TRecord, TPathParams›*

###  create

▸ **create**<**TRecord**>(`recordType`: object, `baseEndpoint`: string): *[CreateService](README.md#createservice)‹TRecord›*

*Defined in [src/services/service-factory.ts:108](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L108)*

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

*Defined in [src/services/service-factory.ts:121](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L121)*

Creates conventional Service Delete function for the supplied resource type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceEndpoint` | string |   |

**Returns:** *[DeleteService](README.md#deleteservice)*

###  get

▸ **get**<**TRecord**, **TPathParams**>(`recordType`: object, `resourceEndpoint`: string): *[GetService](README.md#getservice)‹TRecord, TPathParams›*

*Defined in [src/services/service-factory.ts:131](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L131)*

Creates conventional Service Get function for the supplied resource type

**Type parameters:**

▪ **TRecord**

▪ **TPathParams**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **resourceEndpoint**: *string*

**Returns:** *[GetService](README.md#getservice)‹TRecord, TPathParams›*

###  list

▸ **list**<**TRecord**, **TQueryParams**>(`recordType`: object, `baseEndpoint`: string): *[ListService](README.md#listservice)‹TRecord, TQueryParams›*

*Defined in [src/services/service-factory.ts:152](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L152)*

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

*Defined in [src/services/service-factory.ts:166](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L166)*

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

*Defined in [src/services/service-factory.ts:181](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L181)*

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

*Defined in [src/services/service-factory.ts:199](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/services/service-factory.ts#L199)*

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

### `Const` ServiceUtils

### ▪ **ServiceUtils**: *object*

*Defined in [src/utilities/service-utils.ts:72](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/service-utils.ts#L72)*

###  mapAxiosResponse

• **mapAxiosResponse**: *[_mapAxiosResponse](README.md#const-_mapaxiosresponse)* = _mapAxiosResponse

*Defined in [src/utilities/service-utils.ts:73](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/service-utils.ts#L73)*

###  mapPagedAxiosResponse

• **mapPagedAxiosResponse**: *[_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)* = _mapPagedAxiosResponse

*Defined in [src/utilities/service-utils.ts:74](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/utilities/service-utils.ts#L74)*

___

### `Const` TestUtils

### ▪ **TestUtils**: *object*

*Defined in [src/tests/test-utils.ts:31](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/test-utils.ts#L31)*

###  sleep

• **sleep**: *[sleep](README.md#const-sleep)*

*Defined in [src/tests/test-utils.ts:32](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/test-utils.ts#L32)*

___

### `Const` defaultValues

### ▪ **defaultValues**: *object*

*Defined in [src/view-models/result-error-record.ts:5](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/view-models/result-error-record.ts#L5)*

*Defined in [src/view-models/result-record.ts:7](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/view-models/result-record.ts#L7)*

###  errors

• **errors**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:8](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/view-models/result-record.ts#L8)*

###  key

• **key**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:6](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/view-models/result-error-record.ts#L6)*

###  message

• **message**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:7](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/view-models/result-error-record.ts#L7)*

###  resultObject

• **resultObject**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:9](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/view-models/result-record.ts#L9)*

###  type

• **type**: *[Error](enums/errortype.md#error)* = ErrorType.Error

*Defined in [src/view-models/result-error-record.ts:8](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/view-models/result-error-record.ts#L8)*

___

### `Const` mockAxios

### ▪ **mockAxios**: *object*

*Defined in [src/tests/mocks/mock-axios.ts:129](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L129)*

###  delete

• **delete**: *Mock‹Promise‹object›, []›* = axios.delete as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:130](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L130)*

###  deleteSuccess

• **deleteSuccess**: *[deleteSuccess](README.md#const-deletesuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:131](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L131)*

###  get

• **get**: *Mock‹Promise‹object›, []›* = axios.get as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:132](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L132)*

###  getSuccess

• **getSuccess**: *[getSuccess](README.md#const-getsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:133](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L133)*

###  listSuccess

• **listSuccess**: *[listSuccess](README.md#const-listsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:134](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L134)*

###  post

• **post**: *Mock‹Promise‹object›, []›* = axios.post as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:135](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L135)*

###  postSuccess

• **postSuccess**: *[postSuccess](README.md#const-postsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:136](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L136)*

###  put

• **put**: *Mock‹Promise‹object›, []›* = axios.put as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:137](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L137)*

###  putSuccess

• **putSuccess**: *[putSuccess](README.md#const-putsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:138](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/b5b0706/src/tests/mocks/mock-axios.ts#L138)*
