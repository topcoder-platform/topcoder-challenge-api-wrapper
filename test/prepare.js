/*
 * Setup nock for test.
 */
const fs = require('fs')
const path = require('path')
const prepare = require('mocha-prepare')
const nock = require('nock')

const testData = require('./common/testData')

prepare(function (done) {
  nock(/\.com/)
    .persist()
    .filteringPath(function (path) {
      if (path.startsWith(testData.CHALLENGE_API_PATH)) {
        return path.substring(testData.CHALLENGE_API_PATH.length)
      }
      return path
    })
    .post(testData.AUTH_PATH)
    .reply((_uri, requestBody) => {
      if (requestBody.client_id === 'invalid') {
        return [400, {
          message: 'Unkown Error'
        }]
      }
      return [200, testData.ResponseBody.M2MAuth]
    })
    .post(testData.AUTHN_PATH)
    .reply((_uri, requestBody) => {
      if (requestBody.username === 'invalid') {
        return [400, {
          message: 'Unkown Error'
        }]
      }
      return [200, testData.ResponseBody.Authv2]
    })
    .post(testData.AUTHZ_PATH)
    .reply(200, testData.ResponseBody.Authv3)
    .get(/\/challenges\/.*\/attachments\/.*/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, fs.readFileSync(path.resolve(__dirname, './common/fileToUpload.txt'))]
    })
    .post(/\/challenges\/.*\/attachments/)
    .reply(function (_uri, _requestBody) {
      if (!this.req.headers['content-type']) {
        return [400, { message: 'No attachment' }]
      }
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.createChallengeAttachmentResponse]
    })
    .get(/\/challenges\/.*/)
    .reply(function (_uri, _requestBody) {
      return [200, testData.ResponseBody.getChallengeResponse]
    })
    .get(/\/challenges.*/)
    .reply(function (_uri, _requestBody) {
      return [200, testData.ResponseBody.searchChallengesResponse]
    })
    .post('/challenges')
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.createChallengeResponse]
    })
    .put(/\/challenges\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.updateChallengeResponse]
    })
    .patch(/\/challenges\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.patchChallengeResponse]
    })
    .get(/\/challengeTypes\/.*/)
    .reply(function (_uri, _requestBody) {
      return [200, testData.ResponseBody.getChallengeTypeResponse]
    })
    .get(/\/challengeTypes.*/)
    .reply(function (_uri, _requestBody) {
      return [200, testData.ResponseBody.searchChallengeTypesResponse]
    })
    .post('/challengeTypes')
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.createChallengeTypeResponse]
    })
    .put(/\/challengeTypes\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.updateChallengeTypeResponse]
    })
    .patch(/\/challengeTypes\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.patchChallengeTypeResponse]
    })
    .get(/\/challengeSettings\/.*/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.getChallengeSettingResponse]
    })
    .get(/\/challengeSettings.*/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.searchChallengeSettingsResponse]
    })
    .post('/challengeSettings')
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.createChallengeSettingResponse]
    })
    .put(/\/challengeSettings\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.updateChallengeSettingResponse]
    })
    .get(/\/challengePhases\/.*/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.getChallengePhaseResponse]
    })
    .get(/\/challengePhases.*/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.searchChallengePhasesResponse]
    })
    .post('/challengePhases')
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.createChallengePhaseResponse]
    })
    .put(/\/challengePhases\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.updateChallengePhaseResponse]
    })
    .patch(/\/challengePhases\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.patchChallengePhaseResponse]
    })
    .delete(/\/challengePhases\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.deleteChallengePhaseResponse]
    })
    .get(/\/timelineTemplates\/.*/)
    .reply(function (_uri, _requestBody) {
      if (!this.req.headers.authorization) {
        return [401, { message: 'Unauthorized Error' }]
      }
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.getTimelineTemplateResponse]
    })
    .get(/\/timelineTemplates.*/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.searchTimelineTemplatesResponse]
    })
    .post('/timelineTemplates')
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.createTimelineTemplateResponse]
    })
    .put(/\/timelineTemplates\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.updateTimelineTemplateResponse]
    })
    .patch(/\/timelineTemplates\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.patchTimelineTemplateResponse]
    })
    .delete(/\/timelineTemplates\/.+/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.deleteTimelineTemplateResponse]
    })
    .get(/\/challengeAuditLogs.*/)
    .reply(function (_uri, _requestBody) {
      if (this.req.headers.authorization === 'Bearer invalid_token') {
        return [400, { message: 'Unkown Error' }]
      }
      return [200, testData.ResponseBody.searchChallengeAuditLogsResponse]
    })
  done()
}, function (done) {
  done()
})
