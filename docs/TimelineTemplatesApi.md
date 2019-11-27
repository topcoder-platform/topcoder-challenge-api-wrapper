# TimelineTemplates Api

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchTimelineTemplates**](TimelineTemplatesApi.md#searchtimelinetemplates) | **GET** /timelineTemplates | Search timelineTemplates.
[**createTimelineTemplate**](TimelineTemplatesApi.md#createtimelinetemplate) | **POST** /timelineTemplates | Create a timelineTemplate.
[**getTimelineTemplate**](TimelineTemplatesApi.md#gettimelinetemplate) | **GET** /timelineTemplates/:timelineTemplateId | Get the timelineTemplate.
[**updateTimelineTemplate**](TimelineTemplatesApi.md#updatetimelinetemplate) | **PUT** /timelineTemplates/:timelineTemplateId | Fully update timelineTemplate.
[**patchTimelineTemplate**](TimelineTemplatesApi.md#patchtimelinetemplate) | **PATCH** /timelineTemplates/:timelineTemplateId | Partially update timelineTemplate.
[**deleteTimelineTemplate**](TimelineTemplatesApi.md#deletetimelinetemplate) | **DELETE** /timelineTemplates/:timelineTemplateId | Delete the timelineTemplate.

<a name="searchTimelineTemplates"></a>
# **searchTimelineTemplates**
> searchTimelineTemplates(reqQuery[, jwt])

Search timelineTemplates. Link headers are sent back and they have rel set to prev, next, first, last and contain the relevant URL.

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
  name: 'template-1'
}


// Promise model
challengeApiM2MClient
  .searchTimelineTemplates(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .searchTimelineTemplates(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))


challengeApiJwtMethodArgClient
  .searchTimelineTemplates(reqQuery, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.searchTimelineTemplates(reqQuery)

await challengeApiUserCredentialsClient.searchTimelineTemplates(reqQuery)

await challengeApiJwtMethodArgClient.searchTimelineTemplates(reqQuery, config.JWT)
```

### Parameters

Name | Phase | Description
------------- | ------------- | -------------
 **reqQuery** | [**SearchTimelineTemplatesCriteria**](SearchTimelineTemplatesCriteria.md)| the search TimelineTemplates criteria
 **jwt**      | String | the optional json web token

### Return type

Array of [**TimelineTemplate**](TimelineTemplate.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTimelineTemplate"></a>
# **createTimelineTemplate**
> createTimelineTemplate(reqBody[, jwt])

Create a timelineTemplate.

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
  name: 'template-1',
  isActive: true,
  phases: [
    {
      id: '74315132-79fa-4d13-a9ac-71f50020dc10',
      name: 'Submission',
      isActive: true,
      duration: 86400
    }
  ]
}


// Promise model
challengeApiM2MClient
  .createTimelineTemplate(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .createTimelineTemplate(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .createTimelineTemplate(reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.createTimelineTemplate(reqBody)

await challengeApiUserCredentialsClient.createTimelineTemplate(reqBody)

await challengeApiJwtMethodArgClient.createTimelineTemplate(reqBody, config.JWT)
```

### Parameters

Name | Phase | Description
------------- | ------------- | -------------
 **reqBody** | [**TimelineTemplateData**](TimelineTemplateData.md)| the TimelineTemplate data
 **jwt**      | String | the optional json web token

### Return type

[**TimelineTemplate**](TimelineTemplate.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTimelineTemplate"></a>
# **getTimelineTemplate**
> getTimelineTemplate(timelineTemplateId[, jwt])

Get the timelineTemplate by id.

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

const timelineTemplateId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'

// Promise model
challengeApiM2MClient
  .getTimelineTemplate(timelineTemplateId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .getTimelineTemplate(timelineTemplateId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .getTimelineTemplate(timelineTemplateId, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.getTimelineTemplate(timelineTemplateId)

await challengeApiUserCredentialsClient.getTimelineTemplate(timelineTemplateId)

await challengeApiJwtMethodArgClient.getTimelineTemplate(timelineTemplateId, config.JWT)
```
### Parameters

Name | Phase | Description
------------- | ------------- | -------------
 **timelineTemplateId** | String | the timelineTemplate id
 **jwt**      | String | the optional json web token

### Return type

[**TimelineTemplate**](TimelineTemplate.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTimelineTemplate"></a>
# **updateTimelineTemplate**
> updateTimelineTemplate(timelineTemplateId, reqBody[, jwt])

Fully update timelineTemplate.

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

const timelineTemplateId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'
const reqBody = {
  name: 'template-1',
  description: 'description',
  isActive: true,
  phases: [
    {
      id: '74315132-79fa-4d13-a9ac-71f50020dc10',
      name: 'Submission',
      isActive: true,
      duration: 86400
    },
    {
      id: '74315132-79fa-4d13-a9ac-71f50020dc11',
      name: 'Review',
      description: 'Review phase',
      isActive: true,
      duration: 86400
    }
  ]
}


// Promise model
challengeApiM2MClient
  .updateTimelineTemplate(timelineTemplateId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .updateTimelineTemplate(timelineTemplateId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .updateTimelineTemplate(timelineTemplateId, reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.updateTimelineTemplate(timelineTemplateId, reqBody)

await challengeApiUserCredentialsClient.updateTimelineTemplate(timelineTemplateId, reqBody)

await challengeApiJwtMethodArgClient.updateTimelineTemplate(timelineTemplateId, reqBody, config.JWT)
```

### Parameters

Name | Phase | Description
------------- | ------------- | -------------
 **timelineTemplateId** | String | the timelineTemplate id
 **reqBody** | [**TimelineTemplateData**](TimelineTemplateData.md)| the timelineTemplate data
 **jwt**      | String | the optional json web token

### Return type

[**TimelineTemplate**](TimelineTemplate.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchTimelineTemplate"></a>
# **patchTimelineTemplate**
> patchTimelineTemplate(timelineTemplateId, reqBody[, jwt])

Partially update timelineTemplate.

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

const timelineTemplateId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'
const reqBody = {
  description: 'patch description'
  isActive: false
}


// Promise model
challengeApiM2MClient
  .patchTimelineTemplate(timelineTemplateId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .patchTimelineTemplate(timelineTemplateId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .patchTimelineTemplate(timelineTemplateId, reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.patchTimelineTemplate(timelineTemplateId, reqBody)

await challengeApiUserCredentialsClient.patchTimelineTemplate(timelineTemplateId, reqBody)

await challengeApiJwtMethodArgClient.patchTimelineTemplate(timelineTemplateId, reqBody, config.JWT)
```

### Parameters

Name | Phase | Description
------------- | ------------- | -------------
 **timelineTemplateId** | String | the timelineTemplate id
 **reqBody** | [**TimelineTemplateData**](TimelineTemplateData.md)| the timelineTemplate data
 **jwt**      | String | the optional json web token

### Return type

[**TimelineTemplate**](TimelineTemplate.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTimelineTemplate"></a>
# **deleteTimelineTemplate**
> deleteTimelineTemplate(timelineTemplateId[, jwt])

Delete the timelineTemplate by id.

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

const timelineTemplateId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'

// Promise model
challengeApiM2MClient
  .deleteTimelineTemplate(timelineTemplateId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .deleteTimelineTemplate(timelineTemplateId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .deleteTimelineTemplate(timelineTemplateId, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.deleteTimelineTemplate(timelineTemplateId)

await challengeApiUserCredentialsClient.deleteTimelineTemplate(timelineTemplateId)

await challengeApiJwtMethodArgClient.deleteTimelineTemplate(timelineTemplateId, config.JWT)
```
### Parameters

Name | Phase | Description
------------- | ------------- | -------------
 **timelineTemplateId** | String | the timelineTemplate id
 **jwt**      | String | the optional json web token

### Return type

[**TimelineTemplate**](TimelineTemplate.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
