/*
 * Test for ChallengesApi.
 */
const wrapper = require('../index')
const chai = require('chai')
const testData = require('./common/testData')

describe('Challenges Api Test', async function () {
  for (const [config, jwtToken, clientDescription] of [
    [testData.ClientConfig.m2mClient, undefined, 'M2M'],
    [testData.ClientConfig.userClient, undefined, 'user credentials'],
    [testData.ClientConfig.jwtClient, testData.Token.JWT_TOKEN, 'JWT argument']
  ]) {
    const client = wrapper(config)
    it(`searchChallenges with ${clientDescription} - success`, async function () {
      const res = await client.searchChallenges(testData.RequestQuery.searchChallenges, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.searchChallengesResponse)
    })
    it(`createChallenge with ${clientDescription} - success`, async function () {
      const res = await client.createChallenge(testData.RequestBody.createChallengeRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.createChallengeResponse)
    })
    it(`getChallenge with ${clientDescription} - success`, async function () {
      const challengeId = '10345'
      const res = await client.getChallenge(challengeId, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.getChallengeResponse)
    })
    it(`updateChallenge with ${clientDescription} - success`, async function () {
      const challengeId = '10345'
      const res = await client.updateChallenge(challengeId, testData.RequestBody.updateChallengeRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.updateChallengeResponse)
    })
    it(`patchChallenge with ${clientDescription} - success`, async function () {
      const challengeId = '10345'
      const res = await client.patchChallenge(challengeId, testData.RequestBody.patchChallengeRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.patchChallengeResponse)
    })
  }
  for (const [config, jwtToken, clientDescription] of [
    [Object.assign({}, testData.ClientConfig.m2mClient, { AUTH0_CLIENT_ID: 'invalid' }), undefined, 'invalid M2M client'],
    [Object.assign({}, testData.ClientConfig.userClient, { USERNAME: 'invalid' }), undefined, 'invalid user credentials client'],
    [testData.ClientConfig.jwtClient, 'invalid_token', 'invalid jwt client']
  ]) {
    const failClient = wrapper(config)
    if (config !== testData.ClientConfig.jwtClient) {
      it(`searchChallenges with ${clientDescription} - failure`, async function () {
        try {
          await failClient.searchChallenges(testData.RequestQuery.searchChallenges, jwtToken)
          throw Error('Test Fails')
        } catch (err) {
          chai.expect(err.message).to.not.equal('Test Fails')
        }
      })
    }
    it(`createChallenge with ${clientDescription} - failure`, async function () {
      try {
        await failClient.createChallenge(testData.RequestBody.createChallengeRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    if (config !== testData.ClientConfig.jwtClient) {
      it(`getChallenge with ${clientDescription} - failure`, async function () {
        const challengeId = '10345'
        try {
          await failClient.getChallenge(challengeId, jwtToken)
          throw Error('Test Fails')
        } catch (err) {
          chai.expect(err.message).to.not.equal('Test Fails')
        }
      })
    }
    it(`updateChallenge with ${clientDescription} - failure`, async function () {
      const challengeId = '10345'
      try {
        await failClient.updateChallenge(challengeId, testData.RequestBody.updateChallengeRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`patchChallenge with ${clientDescription} - failure`, async function () {
      const challengeId = '10345'
      try {
        await failClient.patchChallenge(challengeId, testData.RequestBody.patchChallengeRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
  }
  it('searchChallenges without authorization - success', async function () {
    const client = wrapper(testData.ClientConfig.jwtClient)
    const res = await client.searchChallenges()
    chai.expect(res.body).to.eql(testData.ResponseBody.searchChallengesResponse)
  })
  it('getChallenge without authorization - success', async function () {
    const client = wrapper(testData.ClientConfig.jwtClient)
    const challengeId = '10345'
    const res = await client.getChallenge(challengeId)
    chai.expect(res.body).to.eql(testData.ResponseBody.getChallengeResponse)
  })
})
