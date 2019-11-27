/*
 * Test for ChallengeAuditLogsApi.
 */
const wrapper = require('../index')
const chai = require('chai')
const testData = require('./common/testData')

describe('ChallengeAuditLogsApi Api Test', async function () {
  for (const [config, jwtToken, clientDescription] of [
    [testData.ClientConfig.m2mClient, undefined, 'M2M'],
    [testData.ClientConfig.userClient, undefined, 'user credentials'],
    [testData.ClientConfig.jwtClient, testData.Token.JWT_TOKEN, 'JWT argument']
  ]) {
    const client = wrapper(config)
    it(`searchChallengeAuditLogs with ${clientDescription} - success`, async function () {
      const res = await client.searchChallengeAuditLogs(testData.RequestQuery.searchChallengeAuditLogs, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.searchChallengeAuditLogsResponse)
    })
  }
  for (const [config, jwtToken, clientDescription] of [
    [Object.assign({}, testData.ClientConfig.m2mClient, { AUTH0_CLIENT_ID: 'invalid' }), undefined, 'invalid M2M client'],
    [Object.assign({}, testData.ClientConfig.userClient, { USERNAME: 'invalid' }), undefined, 'invalid user credentials client'],
    [testData.ClientConfig.jwtClient, 'invalid_token', 'invalid jwt client']
  ]) {
    const failClient = wrapper(config)
    it(`searchChallengeAuditLogs with ${clientDescription} - failure`, async function () {
      try {
        await failClient.searchChallengeAuditLogs(testData.RequestQuery.searchChallengeAuditLogs, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
  }
})
