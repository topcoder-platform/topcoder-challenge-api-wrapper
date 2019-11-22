/*
 * Test for ChallengeSettingsApi.
 */
const wrapper = require('../index')
const chai = require('chai')
const testData = require('./common/testData')

describe('ChallengeSettings Api Test', async function () {
  for (const [config, jwtToken, clientDescription] of [
    [testData.ClientConfig.m2mClient, undefined, 'M2M'],
    [testData.ClientConfig.userClient, undefined, 'user credentials'],
    [testData.ClientConfig.jwtClient, testData.Token.JWT_TOKEN, 'JWT argument']
  ]) {
    const client = wrapper(config)
    it(`searchChallengeSettings with ${clientDescription} - success`, async function () {
      const res = await client.searchChallengeSettings(testData.RequestQuery.searchChallengeSettings, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.searchChallengeSettingsResponse)
    })
    it(`createChallengeSetting with ${clientDescription} - success`, async function () {
      const res = await client.createChallengeSetting(testData.RequestBody.createChallengeSettingRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.createChallengeSettingResponse)
    })
    it(`getChallengeSetting with ${clientDescription} - success`, async function () {
      const challengeSettingId = '10345'
      const res = await client.getChallengeSetting(challengeSettingId, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.getChallengeSettingResponse)
    })
    it(`updateChallengeSetting with ${clientDescription} - success`, async function () {
      const challengeSettingId = '10345'
      const res = await client.updateChallengeSetting(challengeSettingId, testData.RequestBody.updateChallengeSettingRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.updateChallengeSettingResponse)
    })
  }
  for (const [config, jwtToken, clientDescription] of [
    [Object.assign({}, testData.ClientConfig.m2mClient, { AUTH0_CLIENT_ID: 'invalid' }), undefined, 'invalid M2M client'],
    [Object.assign({}, testData.ClientConfig.userClient, { USERNAME: 'invalid' }), undefined, 'invalid user credentials client'],
    [testData.ClientConfig.jwtClient, 'invalid_token', 'invalid jwt client']
  ]) {
    const failClient = wrapper(config)
    it(`searchChallengeSettings with ${clientDescription} - failure`, async function () {
      try {
        await failClient.searchChallengeSettings(testData.RequestQuery.searchChallengeSettings, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })

    it(`createChallengeSetting with ${clientDescription} - failure`, async function () {
      try {
        await failClient.createChallengeSetting(testData.RequestBody.createChallengeSettingRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`getChallengeSetting with ${clientDescription} - failure`, async function () {
      const challengeSettingId = '10345'
      try {
        await failClient.getChallengeSetting(challengeSettingId, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })

    it(`updateChallengeSetting with ${clientDescription} - failure`, async function () {
      const challengeSettingId = '10345'
      try {
        await failClient.updateChallengeSetting(challengeSettingId, testData.RequestBody.updateChallengeSettingRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
  }
})
