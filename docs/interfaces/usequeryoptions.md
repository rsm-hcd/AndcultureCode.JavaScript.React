[andculturecode-javascript-react](../README.md) › [UseQueryOptions](usequeryoptions.md)

# Interface: UseQueryOptions <**TRecord, TQueryParams, TPathParams**>

## Type parameters

▪ **TRecord**

▪ **TQueryParams**

▪ **TPathParams**

## Hierarchy

-   **UseQueryOptions**

## Index

### Properties

-   [initialPathParams](usequeryoptions.md#optional-initialpathparams)
-   [initialQuery](usequeryoptions.md#initialquery)
-   [onError](usequeryoptions.md#optional-onerror)
-   [onSuccess](usequeryoptions.md#optional-onsuccess)
-   [serviceHook](usequeryoptions.md#servicehook)

## Properties

### `Optional` initialPathParams

• **initialPathParams**? : _TPathParams_

_Defined in [src/interfaces/use-query-options.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/045a6f6/src/interfaces/use-query-options.ts#L14)_

---

### initialQuery

• **initialQuery**: _TQueryParams_

_Defined in [src/interfaces/use-query-options.ts:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/045a6f6/src/interfaces/use-query-options.ts#L13)_

---

### `Optional` onError

• **onError**? : _CatchResultHandler‹TRecord›_

_Defined in [src/interfaces/use-query-options.ts:16](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/045a6f6/src/interfaces/use-query-options.ts#L16)_

---

### `Optional` onSuccess

• **onSuccess**? : _undefined | function_

_Defined in [src/interfaces/use-query-options.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/045a6f6/src/interfaces/use-query-options.ts#L15)_

---

### serviceHook

• **serviceHook**: _[ListServiceHook](../README.md#listservicehook)‹TRecord, TQueryParams› | [NestedListServiceHook](../README.md#nestedlistservicehook)‹TRecord, TPathParams, TQueryParams›_

_Defined in [src/interfaces/use-query-options.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.React/blob/045a6f6/src/interfaces/use-query-options.ts#L10)_
