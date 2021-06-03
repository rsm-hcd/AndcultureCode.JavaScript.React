[andculturecode-javascript-react](../README.md) › [UseQueryOptions](usequeryoptions.md)

# Interface: UseQueryOptions <**TRecord, TQueryParams, TPathParams**>

## Type parameters

▪ **TRecord**

▪ **TQueryParams**

▪ **TPathParams**

## Hierarchy

* **UseQueryOptions**

## Index

### Properties

* [initialPathParams](usequeryoptions.md#optional-initialpathparams)
* [initialQuery](usequeryoptions.md#initialquery)
* [onError](usequeryoptions.md#optional-onerror)
* [onSuccess](usequeryoptions.md#optional-onsuccess)
* [serviceHook](usequeryoptions.md#servicehook)

## Properties

### `Optional` initialPathParams

• **initialPathParams**? : *TPathParams*

*Defined in [src/interfaces/use-query-options.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/use-query-options.ts#L14)*

___

###  initialQuery

• **initialQuery**: *TQueryParams*

*Defined in [src/interfaces/use-query-options.ts:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/use-query-options.ts#L13)*

___

### `Optional` onError

• **onError**? : *CatchResultHandler‹TRecord›*

*Defined in [src/interfaces/use-query-options.ts:16](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/use-query-options.ts#L16)*

___

### `Optional` onSuccess

• **onSuccess**? : *undefined | function*

*Defined in [src/interfaces/use-query-options.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/use-query-options.ts#L15)*

___

###  serviceHook

• **serviceHook**: *[ListServiceHook](../README.md#listservicehook)‹TRecord, TQueryParams› | [NestedListServiceHook](../README.md#nestedlistservicehook)‹TRecord, TPathParams, TQueryParams›*

*Defined in [src/interfaces/use-query-options.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/bf780d8/src/interfaces/use-query-options.ts#L10)*
