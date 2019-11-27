# ChallengeAttachments Api

All URIs are relative to **CHALLENGE_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChallengeAttachment**](ChallengeAttachmentsApi.md#createchallengeattachment) | **POST** /challenges/:challengeId/attachments | Create a challenge attachment.
[**downloadChallengeAttachment**](ChallengeAttachmentsApi.md#downloadchallengeattachment) | **GET** /challenges/:challengeId/attachments/:attachmentId | Download a challenge attachment.

<a name="createChallengeAttachment"></a>
# **createChallengeAttachment**
> createChallengeAttachment(challengeId, reqFormData[, jwt])

Create a challenge attachment

### Example
```javascript
const path = require('path')
const fs = require('fs')
const fileData = fs.readFileSync(path.resolve(__dirname, './data/fileToUpload.zip'))
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

const challengeId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'
const reqFormData = {
  attachment: {
    name: 'fileToUpload.zip',
    data: fileData // a Buffer contain file content
  }
}

// Promise model
challengeApiM2MClient
  .createChallengeAttachment(challengeId, reqFormData)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .createChallengeAttachment(challengeId, reqFormData)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .createChallengeAttachment(challengeId, reqFormData, config.JWT)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.createChallengeAttachment(challengeId, reqFormData)

await challengeApiUserCredentialsClient.createChallengeAttachment(challengeId, reqFormData)

await challengeApiJwtMethodArgClient.createChallengeAttachment(challengeId, reqFormData, config.JWT)
```

### Demo
```javascript
const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const challengeApi = require('topcoder-challenge-api-wrapper')
const client = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

// setup express app
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.set('port', process.env.TEST_PORT || 4000)

app.post('/proxy/challenges/:challengeId/attachments', function (req, res) {
  let formData = req.body
  if (req.files && req.files.attachment) {
    formData.attachment = req.files.attachment
  }
  client
    .createChallengeAttachment(req.params.challengeId, formData)
    .then(result => {
      res.send(result.body)
    })
    .catch(err => {
      res.status(err.status).send(err.response.body)
    })
})

app.listen(app.get('port'), () => {
  console.info(`Express server listening on port ${app.get('port')}`)
})
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **challengeId** | String | the challenge id
 **reqFormData** | [**AttachmentData**](AttachmentData.md)| the attachment
 **jwt**      | String | the optional json web token

### Return type

[**Attachment**](Attachment.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="downloadChallengeAttachment"></a>
# **downloadChallengeAttachment**
> downloadChallengeAttachment(challengeId, attachmentId[, jwt])

Download challenge attachment.

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

const challengeId = '8f4e8b6a-0ad2-4ff6-ab19-afeb102ff3b4'
const attachmentId = 'a14e8b6a-0ad2-4ff6-ab19-afeb102ff3b1'

// Promise model
challengeApiM2MClient
  .downloadChallengeAttachment(challengeId, attachmentId)
  .then(result => console.log(result.status, result.body))
  .catch(err => console.log(err))

challengeApiUserCredentialsClient
  .downloadChallengeAttachment(challengeId, attachmentId)
  .then(result => console.log(result.status, result.body))
  .catch(err => console.log(err))

challengeApiJwtMethodArgClient
  .downloadChallengeAttachment(challengeId, attachmentId, config.JWT)
  .then(result => console.log(result.status, result.body))
  .catch(err => console.log(err))

// Async / await model
await challengeApiM2MClient.downloadChallengeAttachment(challengeId, attachmentId)

await challengeApiUserCredentialsClient.downloadChallengeAttachment(challengeId, attachmentId)

await challengeApiJwtMethodArgClient.downloadChallengeAttachment(challengeId, attachmentId, config.JWT)
```

### Demo
```javascript
const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const challengeApi = require('topcoder-challenge-api-wrapper')
const client = challengeApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'CHALLENGE_API_URL',
        'AUTH0_PROXY_SERVER_URL']))

// setup express app
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.set('port', process.env.TEST_PORT || 4000)

app.get('/proxy/download/challenges/:challengeId/attachments/:attachmentId', function (req, res) {
  client
    .downloadChallengeAttachment(req.params.challengeId, req.params.attachmentId)
    .then(result => {
      res.set(result.headers)
      res.send(result.body)
    })
    .catch(err => {
      res.status(err.status).send(err.response.body)
    })
})

app.listen(app.get('port'), () => {
  console.info(`Express server listening on port ${app.get('port')}`)
})
```

### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **challengeId** | String | the challenge id
 **attachmentId** | String | the attachment id
 **jwt**      | String | the optional json web token

### Return type

Binary data

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
