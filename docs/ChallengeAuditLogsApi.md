# ChallengeAuditLogs Api

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchChallengeAuditLogs**](ChallengeAuditLogsApi.md#searchchallengeauditlogs) | **GET** /challengeAuditLogs | Search challenge auditLogs.

<a name="searchChallengeAuditLogs"></a>
# **searchChallengeAuditLogs**
> searchChallengeAuditLogs(reqQuery[, jwt])

Search challenge auditLogs. Link headers are sent back and they have rel set to prev, next, first, last and contain the relevant URL.

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
  challengeId: '64abe45b-406e-42a4-9ac5-74994b343f42',
  createdDateStart: '2017-02-22T00:00:00Z',
  createdDateEnd: '2022-03-22T00:00:00Z'
}


// Promise model
challengeApiM2MClient
  .searchChallengeAuditLogs(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .searchChallengeAuditLogs(reqQuery)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))


challengeApiJwtMethodArgClient
  .searchChallengeAuditLogs(reqQuery, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.searchChallengeAuditLogs(reqQuery)

await challengeApiUserCredentialsClient.searchChallengeAuditLogs(reqQuery)

await challengeApiJwtMethodArgClient.searchChallengeAuditLogs(reqQuery, config.JWT)
```

### Parameters

Name | Phase | Description
------------- | ------------- | -------------
 **reqQuery** | [**SearchChallengeAuditLogsCriteria**](SearchChallengeAuditLogsCriteria.md)| the search challenge auditLogs criteria
 **jwt**      | String | the optional json web token

### Return type

Array of [**AuditLogEntry**](AuditLogEntry.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
