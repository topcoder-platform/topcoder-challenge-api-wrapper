# Topcoder Challenge v5 API Wrapper

Wrapper library for Topcoder Challenge v5 API

## How to use this Wrapper

1. Download the source code of the wrapper and install the wrapper to your own project:

    ```bash
    npm install path/to/topcoder-challenge-api-wrapper
    ```

2. Create an instance of this wrapper with any one of the approaches listed below, depending on your use case

    **M2M Authentication Configuration:**

    ```javascript
    const challengeApi = require('topcoder-challenge-api-wrapper')
    const client = challengeApi(_.pick(config,
          ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
            'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
            'AUTH0_PROXY_SERVER_URL']))
    ```

    - AUTH0_URL - the auth0 url
    - AUTH0_AUDIENCE - the auth0 audience
    - TOKEN_CACHE_TIME - (optional) the token cache time
    - AUTH0_CLIENT_ID - the auth0 client id, used as credential
    - AUTH0_CLIENT_SECRET - the auth0 client secret, used as credential
    - AUTH0_PROXY_SERVER_URL - (optional) the auth0 proxy server url
    - CHALLENGE_API_URL - Topcoder V5 Challenge API URL. E.g. `https://api.topcoder-dev.com/v5`

    **User Credentials Authentication Configuration:**

    ```javascript
    const client = challengeApi(_.pick(config,
          ['USERNAME', 'PASSWORD', 'TC_AUTHN_URL', 'TC_AUTHZ_URL', 'TC_CLIENT_ID',
           'TC_CLIENT_V2CONNECTION', 'CHALLENGE_API_URL']))
    ```

    - USERNAME - Topcoder handle
    - PASSWORD - Topcoder password
    - TC_AUTHN_URL - OAUTH2 token URL, e.g. `https://topcoder.auth0.com/oauth/ro` or for dev `https://topcoder-dev.auth0.com/oauth/ro`
    - TC_AUTHZ_URL - Topcoder API token URL, e.g. `https://api.topcoder.com/v3/authorizations` or for dev `https://api.topcoder-dev.com/v3/authorizations`
    - TC_CLIENT_ID - OAUTH2 Client ID, e.g. `6ZwZEUo2ZK4c50aLPpgupeg5v2Ffxp9P` or for dev `JFDo7HMkf0q2CkVFHojy3zHWafziprhT`
    - TC_CLIENT_V2CONNECTION - The OAUTH2 Client data source, e.g. `LDAP` or for dev `TC-User-Database`
    - CHALLENGE_API_URL - Topcoder V5 Challenge API URL. E.g. `https://api.topcoder.com/v5` or for dev `https://api.topcoder-dev.com/v5`

    **JWT Method Argument Authentication Configuration:**

    ```javascript
    const client = challengeApi(_.pick(config,
          ['CHALLENGE_API_URL']))
    ```

    - CHALLENGE_API_URL - Topcoder V5 Challenge API URL. E.g. `https://api.topcoder.com/v5` or for dev `https://api.topcoder-dev.com/v5`

3. Every function in this wrapper will return a promise, Handling promises is at the caller end. Call the functions with appropriate arguments

E.g.

```node
const challengeTypeId = '4aef0785-9f79-4937-bf72-bb09a7fc6fcb'

// promise
client
  .createChallengeType({
    name: 'Code',
    description: 'Code',
    isActive: true
  })
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// async/await
await client.updateChallengeType(challengeTypeId, {
  name: 'F2F',
  description: 'First 2 Finish',
  isActive: true
})

const result = await client.searchChallengeTypes()
```

Refer `index.js` for the list of available wrapper functions

## Documentation for wrapper methods

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

### Challenges wrapper methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchChallenges**](docs/ChallengesApi.md#searchchallenges) | **GET** /challenges | Search challenges.
[**createChallenge**](docs/ChallengesApi.md#createchallenge) | **POST** /challenges | Create a challenge.
[**getChallenge**](docs/ChallengesApi.md#getchallenge) | **GET** /challenges/:challengeId | Get the challenge.
[**updateChallenge**](docs/ChallengesApi.md#updatechallenge) | **PUT** /challenges/:challengeId | Fully update challenge.
[**patchChallenge**](docs/ChallengesApi.md#patchchallenge) | **PATCH** /challenges/:challengeId | Partially update challenge.

### ChallengeTypes wrapper methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchChallengeTypes**](docs/ChallengeTypesApi.md#searchchallengetypes) | **GET** /challengeTypes | Search challengeTypes.
[**createChallengeType**](docs/ChallengeTypesApi.md#createchallengetype) | **POST** /challengeTypes | Create a challengeType.
[**getChallengeType**](docs/ChallengeTypesApi.md#getchallengetype) | **GET** /challengeTypes/:challengeTypeId | Get the challengeType.
[**updateChallengeType**](docs/ChallengeTypesApi.md#updatechallengetype) | **PUT** /challengeTypes/:challengeTypeId | Fully update challengeType.
[**patchChallengeType**](docs/ChallengeTypesApi.md#patchchallengetype) | **PATCH** /challengeTypes/:challengeTypeId | Partially update challengeType.

### ChallengeSettings wrapper methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchChallengeSettings**](docs/ChallengeSettingsApi.md#searchchallengesettings) | **GET** /challengeSettings | Search challengeSettings.
[**createChallengeSetting**](docs/ChallengeSettingsApi.md#createchallengesetting) | **POST** /challengeSettings | Create a challengeSetting.
[**getChallengeSetting**](docs/ChallengeSettingsApi.md#getchallengesetting) | **GET** /challengeSettings/:challengeSettingId | Get the challengeSetting.
[**updateChallengeSetting**](docs/ChallengeSettingsApi.md#updatechallengesetting) | **PUT** /challengeSettings/:challengeSettingId | Fully update challengeSetting.

### ChallengePhases wrapper methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchChallengePhases**](docs/ChallengePhasesApi.md#searchchallengephases) | **GET** /challengePhases | Search challengePhases.
[**createChallengePhase**](docs/ChallengePhasesApi.md#createchallengephase) | **POST** /challengePhases | Create a challengePhase.
[**getChallengePhase**](docs/ChallengePhasesApi.md#getchallengephase) | **GET** /challengePhases/:challengePhaseId | Get the challengePhase.
[**updateChallengePhase**](docs/ChallengePhasesApi.md#updatechallengephase) | **PUT** /challengePhases/:challengePhaseId | Fully update challengePhase.
[**patchChallengePhase**](docs/ChallengePhasesApi.md#patchchallengephase) | **PATCH** /challengePhases/:challengePhaseId | Partially update challengePhase.
[**deleteChallengePhase**](docs/ChallengePhasesApi.md#deletechallengephase) | **DELETE** /challengePhases/:challengePhaseId | Delete challengePhase.

### TimelineTemplates wrapper methods
Method | HTTP request | Description
------------- | ------------- | -------------
[**searchTimelineTemplates**](docs/TimelineTemplatesApi.md#searchtimelinetemplates) | **GET** /timelineTemplates | Search timelineTemplates.
[**createTimelineTemplate**](docs/TimelineTemplatesApi.md#createtimelinetemplate) | **POST** /timelineTemplate | Create a timelineTemplate.
[**getTimelineTemplate**](docs/TimelineTemplatesApi.md#gettimelinetemplate) | **GET** /timelineTemplates/:timelineTemplateId | Get the timelineTemplate.
[**updateTimelineTemplate**](docs/TimelineTemplatesApi.md#updatetimelinetemplate) | **PUT** /timelineTemplates/:timelineTemplateId | Fully update timelineTemplate.
[**patchTimelineTemplate**](docs/TimelineTemplatesApi.md#patchtimelinetemplate) | **PATCH** /timelineTemplates/:timelineTemplateId | Partially update timelineTemplate.
[**deleteTimelineTemplate**](docs/TimelineTemplatesApi.md#deletetimelinetemplate) | **DELETE** /timelineTemplates/:timelineTemplateId | Delete the timelineTemplate.

### ChallengeAuditLogs wrapper methods
Method | HTTP request | Description
------------- | ------------- | -------------
[**searchChallengeAuditLogs**](docs/ChallengeAuditLogsApi.md#searchchallengeauditlogs) | **GET** /challengeAuditLogs | Search challenge auditLogs.

### ChallengeAttachments wrapper methods
Method | HTTP request | Description
------------- | ------------- | -------------
[**createChallengeAttachment**](docs/ChallengeAttachmentsApi.md#createchallengeattachment) | **POST** /challenges/:challengeId/attachments | Create a challenge attachment.
[**downloadChallengeAttachment**](docs/ChallengeAttachmentsApi.md#downloadchallengeattachment) | **GET** /challenges/:challengeId/attachments/:attachmentId | Download a challenge attachment.

## Authorization

The wrapper internally generates the JWT token based on the method used when initialising the wrapper (m2m v/s user) or uses the jwt passed during method invocation and passes it in the `Authorization` header.

## Access Levels

- M2M token is supported, all non-public-accessed endpoint can be accessed using M2M token with proper scopes.
- Only admins and copilots can create/update an entity.
- Copilots can only update entities they have created. (eg. copilot A cannot update a challenge created by copilot B)
- Non-admin users can access challenges with groups only if they belong to any of the groups
- It will be considered as admin user if using valid M2M token(having read challenge scope) to list challenges or retrieve challenge by id

## Lint

- Run lint: `npm run lint`
- Run lint fix: `npm run lint:fix`

## Running tests

### Preparation

Run `npm install` to install dependencies.

To run tests alone

```bash
npm run test
```

To run unit tests with coverage report

```bash
npm run test:cov
```

## Verification

See [Verification.md](./Verification.md)
