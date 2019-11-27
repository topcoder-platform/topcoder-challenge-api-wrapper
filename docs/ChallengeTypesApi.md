# ChallengeTypes Api

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchChallengeTypes**](ChallengeTypesApi.md#searchchallengetypes) | **GET** /challengeTypes | Search challengeTypes.
[**createChallengeType**](ChallengeTypesApi.md#createchallengetype) | **POST** /challengeTypes | Create a challengeType.
[**getChallengeType**](ChallengeTypesApi.md#getchallengetype) | **GET** /challengeTypes/:challengeTypeId | Get the challengeType.
[**updateChallengeType**](ChallengeTypesApi.md#updatechallengetype) | **PUT** /challengeTypes/:challengeTypeId | Fully update challengeType.
[**patchChallengeType**](ChallengeTypesApi.md#patchchallengetype) | **PATCH** /challengeTypes/:challengeTypeId | Partially update challengeType.

<a name="searchChallengeTypes"></a>
# **searchChallengeTypes**
> searchChallengeTypes(reqQuery[, jwt])

Search challengeTypes. Link headers are sent back and they have rel set to prev, next, first, last and contain the relevant URL.

### Example
```javascript
const challengeApi = require('topcoder-challenge-api-wrapper')
const challengeApiM2MClient = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
      ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
       'TC_CLIENT_V2CONNECTION', 'CHALLENGE_API_URL']))

const challengeApiJwtMethodArgClient = challengeApi(_.pick(config,
      ['CHALLENGE_API_URL']))

const reqQuery = {
  page: 1,
  perPage: 10,
  name: 'Code',
  description: 'Code',
  isActive: true
}


// Promise model
challengeApiM2MClient
  .searchChallengeTypes(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .searchChallengeTypes(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))


challengeApiJwtMethodArgClient
  .searchChallengeTypes(reqQuery, config.JWT)
// or
// challengeApiJwtMethodArgClient
//   .searchChallengeTypes(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.searchChallengeTypes(reqQuery)

await challengeApiUserCredentialsClient.searchChallengeTypes(reqQuery)

await challengeApiJwtMethodArgClient.searchChallengeTypes(reqQuery, config.JWT)
// or
// await challengeApiJwtMethodArgClient.searchChallengeTypes(reqQuery)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **reqQuery** | [**SearchChallengeTypesCriteria**](SearchChallengeTypesCriteria.md)| the search challengeTypes criteria
 **jwt**      | String | the optional json web token

### Return type

Array of [**ChallengeType**](ChallengeType.md)

### Authorization

**None**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createChallengeType"></a>
# **createChallengeType**
> createChallengeType(reqBody[, jwt])

Create a challengeType.

### Example
```javascript
const challengeApi = require('topcoder-challenge-api-wrapper')
const challengeApiM2MClient = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
      ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
       'TC_CLIENT_V2CONNECTION', 'CHALLENGE_API_URL']))

const challengeApiJwtMethodArgClient = challengeApi(_.pick(config, 'CHALLENGE_API_URL'))

const reqBody = {
  name: 'Code',
  description: 'Code',
  isActive: true
}


// Promise model
challengeApiM2MClient
  .createChallengeType(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .createChallengeType(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .createChallengeType(reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.createChallengeType(reqBody)

await challengeApiUserCredentialsClient.createChallengeType(reqBody)

await challengeApiJwtMethodArgClient.createChallengeType(reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **reqBody** | [**ChallengeTypeData**](ChallengeTypeData.md)| the challengeType data
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeType**](ChallengeType.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallengeType"></a>
# **getChallengeType**
> getChallengeType(challengeTypeId[, jwt])

Get the challengeType by id.

### Example
```javascript
const challengeApi = require('topcoder-challenge-api-wrapper')
const challengeApiM2MClient = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
      ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
       'TC_CLIENT_V2CONNECTION', 'CHALLENGE_API_URL']))

const challengeApiJwtMethodArgClient = challengeApi(_.pick(config, 'CHALLENGE_API_URL'))

const challengeTypeId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'

// Promise model
challengeApiM2MClient
  .getChallengeType(challengeTypeId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .getChallengeType(challengeTypeId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .getChallengeType(challengeTypeId, config.JWT)
// or
// challengeApiJwtMethodArgClient
//   .getChallengeType(challengeTypeId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.getChallengeType(challengeTypeId)

await challengeApiUserCredentialsClient.getChallengeType(challengeTypeId)

await challengeApiJwtMethodArgClient.getChallengeType(challengeTypeId, config.JWT)
// or
// await challengeApiJwtMethodArgClient.getChallengeType(challengeTypeId)

```
### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **challengeTypeId** | String | the challengeType id
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeType**](ChallengeType.md)

### Authorization

**None**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChallengeType"></a>
# **updateChallengeType**
> updateChallengeType(challengeTypeId, reqBody[, jwt])

Fully update challengeType.

### Example
```javascript
const challengeApi = require('topcoder-challenge-api-wrapper')
const challengeApiM2MClient = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
      ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
       'TC_CLIENT_V2CONNECTION', 'CHALLENGE_API_URL']))

const challengeApiJwtMethodArg = challengeApi(_.pick(config, 'CHALLENGE_API_URL'))

const challengeTypeId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'
const reqBody = {
  name: 'F2F',
  description: 'First 2 Finish',
  isActive: true
}


// Promise model
challengeApiM2MClient
  .updateChallengeType(challengeTypeId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .updateChallengeType(challengeTypeId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .updateChallengeType(challengeTypeId, reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.updateChallengeType(challengeTypeId, reqBody)

await challengeApiUserCredentialsClient.updateChallengeType(challengeTypeId, reqBody)

await challengeApiJwtMethodArgClient.updateChallengeType(challengeTypeId, reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **challengeTypeId** | String | the challengeType id
 **reqBody** | [**ChallengeTypeData**](ChallengeTypeData.md)| the challengeType data
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeType**](ChallengeType.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchChallengeType"></a>
# **patchChallengeType**
> patchChallengeType(challengeTypeId, reqBody[, jwt])

Partially update challengeType.

### Example
```javascript
const challengeApi = require('topcoder-challenge-api-wrapper')
const challengeApiM2MClient = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

const challengeApiUserCredentialsClient = challengeApi(_.pick(config,
      ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
       'TC_CLIENT_V2CONNECTION', 'CHALLENGE_API_URL']))

const challengeApiJwtMethodArg = challengeApi(_.pick(config, 'CHALLENGE_API_URL'))

const challengeTypeId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'
const reqBody = {
  name: 'F2F',
  description: 'First 2 Finish',
  isActive: false
}


// Promise model
challengeApiM2MClient
  .patchChallengeType(challengeTypeId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .patchChallengeType(challengeTypeId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .patchChallengeType(challengeTypeId, reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.patchChallengeType(challengeTypeId, reqBody)

await challengeApiUserCredentialsClient.patchChallengeType(challengeTypeId, reqBody)

await challengeApiJwtMethodArgClient.patchChallengeType(challengeTypeId, reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **challengeTypeId** | String | the challengeType id
 **reqBody** | [**ChallengeTypeData**](ChallengeTypeData.md)| the challengeType data
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeType**](ChallengeType.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
