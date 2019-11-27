# Challenges Api

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchChallenges**](#searchchallenges) | **GET** /challenges | Search challenges.
[**createChallenge**](#createchallenge) | **POST** /challenges | Create a challenge.
[**getChallenge**](#getchallenge) | **GET** /challenges/:challengeId | Get the challenge.
[**updateChallenge**](#updatechallenge) | **PUT** /challenges/:challengeId | Fully update challenge.
[**patchChallenge**](#patchchallenge) | **PATCH** /challenges/:challengeId | Partially update challenge.

<a name="searchChallenges"></a>
# **searchChallenges**
> searchChallenges(reqQuery[, jwt])

Search challenges. Link headers are sent back and they have rel set to prev, next, first, last and contain the relevant URL.

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
  page: '1',
  perPage: '10',
  id: '64abe45b-406e-42a4-9ac5-74994b343f42',
  track: 'track',
  name: 'TEST',
  description: 'test',
  reviewType: 'review type',
  tag: 'tag3',
  projectId: '123',
  createdDateStart: '2017-02-22T00:00:00Z',
  createdDateEnd: '2022-03-22T00:00:00Z',
  updatedDateStart: '2017-02-22T00:00:00Z',
  updatedDateEnd: '2028-02-22T00:00:00Z',
  createdBy: 'Tonyj',
  updatedBy: 'Tonyj',
  memberId: '40309246'
}


// Promise model
challengeApiM2MClient
  .searchChallenges(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .searchChallenges(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))


challengeApiJwtMethodArgClient
  .searchChallenges(reqQuery, config.JWT)
// or
// challengeApiJwtMethodArgClient
//   .searchChallenges(reqQuery)
const challengeApiJwtMethodArgClient = challengeApi(_.pick(config,
      ['CHALLENGE_API_URL']))

  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.searchChallenges(reqQuery)

await challengeApiUserCredentialsClient.searchChallenges(reqQuery)

await challengeApiJwtMethodArgClient.searchChallenges(reqQuery, config.JWT)
// or
// await challengeApiJwtMethodArgClient.searchChallenges(reqQuery)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **reqQuery** | [**SearchChallengesCriteria**](SearchChallengesCriteria.md)| the search challenges criteria
 **jwt**      | String | the optional json web token

### Return type

Array of [**Challenge**](Challenge.md)

### Authorization

**None**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createChallenge"></a>
# **createChallenge**
> createChallenge(reqBody[, jwt])

Create a challenge.

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
  typeId: 'a9ff50de-0242-4fd2-addc-ed863b9bfab9',
  track: 'test-track',
  name: 'test-create',
  description: 'test-description',
  timelineTemplateId: '54cd8ab1-9a93-4f97-9f2a-19ba6f2a7d3a',
  phases: [
    {
      id: 'af0d5b28-1133-48da-a337-5f3e8340f052',
      name: 'new-phase-1',
      isActive: true,
      duration: 1000000
    },
    {
      id: '786331a5-4852-4e05-97ee-9c3d96c307b0',
      name: 'new-PHASE-2',
      description: 'add-description-in-put',
      predecessor: 'af0d5b28-1133-48da-a337-5f3e8340f052',
      isActive: true,
      duration: 2000000
    }
  ],
  prizeSets: [
    {
      type: 'Challenge prizes',
      description: 'desc',
      prizes: [
        {
          description: 'desc-first',
          type: 'first place',
          value: 500
        },
        {
          description: 'desc-second',
          type: 'second place',
          value: 250
        }
      ]
    }
  ],
  reviewType: 'review type',
  tags: [
    'tag1',
    'tag2'
  ],
  projectId: 123,
  forumId: 456,
  status: 'Draft',
  startDate: '2019-06-22T16:28:39.882Z'
}


// Promise model
challengeApiM2MClient
  .createChallenge(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .createChallenge(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .createChallenge(reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.createChallenge(reqBody)

await challengeApiUserCredentialsClient.createChallenge(reqBody)

await challengeApiJwtMethodArgClient.createChallenge(reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **reqBody** | [**ChallengeRequestBody**](ChallengeRequestBody.md) | the challenge data
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeResponseBodyForCreateOrUpdate**](ChallengeResponseBodyForCreateOrUpdate.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChallenge"></a>
# **getChallenge**
> getChallenge(challengeId[, jwt])

Get the challenge by id.

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

const challengeId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'

// Promise model
challengeApiM2MClient
  .getChallenge(challengeId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .getChallenge(challengeId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .getChallenge(challengeId, config.JWT)
// or
// challengeApiJwtMethodArgClient
//   .getChallenge(challengeId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.getChallenge(challengeId)

await challengeApiUserCredentialsClient.getChallenge(challengeId)

await challengeApiJwtMethodArgClient.getChallenge(challengeId, config.JWT)
// or
// await challengeApiJwtMethodArgClient.getChallenge(challengeId)

```
### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **challengeId** | String | the challenge id
 **jwt**      | String | the optional json web token

### Return type

[**Challenge**](Challenge.md)

### Authorization

**None**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChallenge"></a>
# **updateChallenge**
> updateChallenge(challengeId, reqBody[, jwt])

Fully update challenge.

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

const challengeId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'
const reqBody = {
  typeId: 'a9ff50de-0242-4fd2-addc-ed863b9bfab9',
  track: 'test-track',
  name: 'test-update',
  description: 'test-description',
  timelineTemplateId: '54cd8ab1-9a93-4f97-9f2a-19ba6f2a7d3a',
  phases: [
    {
      id: 'af0d5b28-1133-48da-a337-5f3e8340f052',
      name: 'new-phase-1',
      isActive: true,
      duration: 1000000
    },
    {
      id: '786331a5-4852-4e05-97ee-9c3d96c307b0',
      name: 'new-PHASE-2',
      description: 'add-description-in-put',
      predecessor: 'af0d5b28-1133-48da-a337-5f3e8340f052',
      isActive: true,
      duration: 2000000
    }
  ],
  prizeSets: [
    {
      type: 'Challenge prizes',
      description: 'desc',
      prizes: [
        {
          description: 'desc-first',
          type: 'first place',
          value: 500
        },
        {
          description: 'desc-second',
          type: 'second place',
          value: 250
        }
      ]
    }
  ],
  reviewType: 'review type',
  tags: [
    'tag1',
    'tag2'
  ],
  projectId: 123,
  forumId: 456,
  status: 'Draft',
  startDate: '2019-06-22T16:28:39.882Z'
}


// Promise model
challengeApiM2MClient
  .updateChallenge(challengeId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .updateChallenge(challengeId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .updateChallenge(challengeId, reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.updateChallenge(challengeId, reqBody)

await challengeApiUserCredentialsClient.updateChallenge(challengeId, reqBody)

await challengeApiJwtMethodArgClient.updateChallenge(challengeId, reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **challengeId** | String | the challenge id
 **reqBody** | [**ChallengeRequestBody**](ChallengeRequestBody.md) | the challenge data
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeResponseBodyForCreateOrUpdate**](ChallengeResponseBodyForCreateOrUpdate.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchChallenge"></a>
# **patchChallenge**
> patchChallenge(challengeId, reqBody[, jwt])

Partially update challenge.

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

const challengeId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'
const reqBody = {
  typeId: 'a9ff50de-0242-4fd2-addc-ed863b9bfab9',
  track: 'test-track',
  name: 'test-patch',
  description: 'test-description',
  timelineTemplateId: '54cd8ab1-9a93-4f97-9f2a-19ba6f2a7d3a',
  phases: [
    {
      id: 'af0d5b28-1133-48da-a337-5f3e8340f052',
      name: 'new-phase-1',
      isActive: true,
      duration: 1000000
    },
    {
      id: '786331a5-4852-4e05-97ee-9c3d96c307b0',
      name: 'new-PHASE-2',
      description: 'add-description-in-put',
      predecessor: 'af0d5b28-1133-48da-a337-5f3e8340f052',
      isActive: true,
      duration: 2000000
    }
  ],
  prizeSets: [
    {
      type: 'Challenge prizes',
      description: 'desc',
      prizes: [
        {
          description: 'desc-first',
          type: 'first place',
          value: 500
        },
        {
          description: 'desc-second',
          type: 'second place',
          value: 250
        }
      ]
    }
  ],
  reviewType: 'review type',
  tags: [
    'tag1',
    'tag2'
  ],
  projectId: 123,
  forumId: 456,
  status: 'Draft',
  startDate: '2019-06-22T16:28:39.882Z'
}


// Promise model
challengeApiM2MClient
  .patchChallenge(challengeId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .patchChallenge(challengeId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .patchChallenge(challengeId, reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.patchChallenge(challengeId, reqBody)

await challengeApiUserCredentialsClient.patchChallenge(challengeId, reqBody)

await challengeApiJwtMethodArgClient.patchChallenge(challengeId, reqBody, config.JWT)
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **challengeId** | String | the challenge id
 **reqBody** | [**ChallengeRequestBody**](ChallengeRequestBody.md) | the challenge data
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeResponseBodyForCreateOrUpdate**](ChallengeResponseBodyForCreateOrUpdate.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
