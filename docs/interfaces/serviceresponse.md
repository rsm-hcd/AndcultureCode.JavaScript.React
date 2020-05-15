[andculturecode-javascript-react](../README.md) › [ServiceResponse](serviceresponse.md)

# Interface: ServiceResponse <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **ServiceResponse**

## Index

### Properties

* [result](serviceresponse.md#optional-result)
* [resultObject](serviceresponse.md#optional-resultobject)
* [resultObjects](serviceresponse.md#optional-resultobjects)
* [results](serviceresponse.md#optional-results)
* [rowCount](serviceresponse.md#rowcount)
* [status](serviceresponse.md#status)

## Properties

### `Optional` result

• **result**? : *[ResultRecord](../classes/resultrecord.md)‹T›*

*Defined in [src/interfaces/service-response.ts:12](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/0ffc129/src/interfaces/service-response.ts#L12)*

Result object containing detailed response information,
such as; errors, result data, etc...

___

### `Optional` resultObject

• **resultObject**? : *T*

*Defined in [src/interfaces/service-response.ts:23](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/0ffc129/src/interfaces/service-response.ts#L23)*

Convenience property to read result's nested record

___

### `Optional` resultObjects

• **resultObjects**? : *T[]*

*Defined in [src/interfaces/service-response.ts:28](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/0ffc129/src/interfaces/service-response.ts#L28)*

Convenience property to read result's nested records

___

### `Optional` results

• **results**? : *[ResultRecord](../classes/resultrecord.md)‹T[]›*

*Defined in [src/interfaces/service-response.ts:18](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/0ffc129/src/interfaces/service-response.ts#L18)*

Result objects containing detailed response information,
such as; errors, result data, etc...

___

###  rowCount

• **rowCount**: *number*

*Defined in [src/interfaces/service-response.ts:35](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/0ffc129/src/interfaces/service-response.ts#L35)*

Total possible records available for the initial service request. If greater
than total results in this response, additional pages of results can be
requested from the API

___

###  status

• **status**: *number*

*Defined in [src/interfaces/service-response.ts:40](https://github.com/wintondeshong/AndcultureCode.JavaScript.React/blob/0ffc129/src/interfaces/service-response.ts#L40)*

HTTP status code of the response
