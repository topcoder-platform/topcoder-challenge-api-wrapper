# ChallengeSettings Api

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchChallengeSettings**](#searchchallengesettings) | **GET** /challengeSettings | Search challengeSettings.
[**createChallengeSetting**](#createchallengesetting) | **POST** /challengeSettings | Create a challengeSetting.
[**getChallengeSetting**](#getchallengesetting) | **GET** /challengeSettings/:challengeSettingId | Get the challengeSetting.
[**updateChallengeSetting**](#updatechallengesetting) | **PUT** /challengeSettings/:challengeSettingId | Fully update challengeSetting.

<a name="searchChallengeSettings"></a>

# **searchChallengeSettings**
> searchChallengeSettings(reqQuery[, jwt])

Search challengeSettings. Link headers are sent back and they have rel set to prev, next, first, last and contain the relevant URL.

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
  name: 'Code'
}


// Promise model
challengeApiM2MClient
  .searchChallengeSettings(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .searchChallengeSettings(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))


challengeApiJwtMethodArgClient
  .searchChallengeSettings(reqQuery, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.searchChallengeSettings(reqQuery)

await challengeApiUserCredentialsClient.searchChallengeSettings(reqQuery)

await challengeApiJwtMethodArgClient.searchChallengeSettings(reqQuery, config.JWT)
```

### Parameters

Name | Setting | Description
------------- | ------------- | -------------
 **reqQuery** | [**SearchChallengeSettingsCriteria**](SearchChallengeSettingsCriteria.md)| the search challengeSettings criteria
 **jwt**      | String | the optional json web token

### Return type

Array of [**ChallengeSettings**](ChallengeSettings.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Setting**: application/json
 - **Accept**: application/json

<a name="createChallengeSetting"></a>

# **createChallengeSetting**
> createChallengeSetting(reqBody[, jwt])

Create a challengeSetting.

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
  name: 'Code'
}


// Promise model
challengeApiM2MClient
  .createChallengeSetting(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .createChallengeSetting(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .createChallengeSetting(reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.createChallengeSetting(reqBody)

await challengeApiUserCredentialsClient.createChallengeSetting(reqBody)

await challengeApiJwtMethodArgClient.createChallengeSetting(reqBody, config.JWT)
```

### Parameters

Name | Setting | Description
------------- | ------------- | -------------
 **reqBody** | [**ChallengeSettingsData**](ChallengeSettingsData.md) | the challengeSetting data
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeSettings**](ChallengeSettings.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Setting**: application/json
 - **Accept**: application/json

<a name="getChallengeSetting"></a>

# **getChallengeSetting**
> getChallengeSetting(challengeSettingId[, jwt])

Get the challengeSetting by id.

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

const challengeSettingId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'

// Promise model
challengeApiM2MClient
  .getChallengeSetting(challengeSettingId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .getChallengeSetting(challengeSettingId)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .getChallengeSetting(challengeSettingId, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.getChallengeSetting(challengeSettingId)

await challengeApiUserCredentialsClient.getChallengeSetting(challengeSettingId)

await challengeApiJwtMethodArgClient.getChallengeSetting(challengeSettingId, config.JWT)
```
### Parameters

Name | Setting | Description
------------- | ------------- | -------------
 **challengeSettingId** | String | the challengeSetting id
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeSettings**](ChallengeSettings.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Setting**: application/json
 - **Accept**: application/json

<a name="updateChallengeSetting"></a>
# **updateChallengeSetting**
> updateChallengeSetting(challengeSettingId, reqBody[, jwt])

Fully update challengeSetting.

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

const challengeSettingId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'
const reqBody = {
  name: 'F2F'
}


// Promise model
challengeApiM2MClient
  .updateChallengeSetting(challengeSettingId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .updateChallengeSetting(challengeSettingId, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .updateChallengeSetting(challengeSettingId, reqBody, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.updateChallengeSetting(challengeSettingId, reqBody)

await challengeApiUserCredentialsClient.updateChallengeSetting(challengeSettingId, reqBody)

await challengeApiJwtMethodArgClient.updateChallengeSetting(challengeSettingId, reqBody, config.JWT)
```

### Parameters

Name | Setting | Description
------------- | ------------- | -------------
 **challengeSettingId** | String | the challengeSetting id
 **reqBody** | [**ChallengeSettingsData**](ChallengeSettingsData.md) | the challengeSetting data
 **jwt**      | String | the optional json web token

### Return type

[**ChallengeSettings**](ChallengeSettings.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Setting**: application/json
 - **Accept**: application/json
