/*
 * Test for ChallengePhasesApi.
 */
const wrapper = require('../index')
const chai = require('chai')
const testData = require('./common/testData')

describe('ChallengePhases Api Test', async function () {
  for (const [config, jwtToken, clientDescription] of [
    [testData.ClientConfig.m2mClient, undefined, 'M2M'],
    [testData.ClientConfig.userClient, undefined, 'user credentials'],
    [testData.ClientConfig.jwtClient, testData.Token.JWT_TOKEN, 'JWT argument']
  ]) {
    const client = wrapper(config)
    it(`searchChallengePhases with ${clientDescription} - success`, async function () {
      const res = await client.searchChallengePhases(testData.RequestQuery.searchChallengePhases, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.searchChallengePhasesResponse)
    })
    it(`createChallengePhase with ${clientDescription} - success`, async function () {
      const res = await client.createChallengePhase(testData.RequestBody.createChallengePhaseRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.createChallengePhaseResponse)
    })
    it(`getChallengePhase with ${clientDescription} - success`, async function () {
      const challengePhaseId = '10345'
      const res = await client.getChallengePhase(challengePhaseId, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.getChallengePhaseResponse)
    })
    it(`updateChallengePhase with ${clientDescription} - success`, async function () {
      const challengePhaseId = '10345'
      const res = await client.updateChallengePhase(challengePhaseId, testData.RequestBody.updateChallengePhaseRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.updateChallengePhaseResponse)
    })
    it(`patchChallengePhase with ${clientDescription} - success`, async function () {
      const challengePhaseId = '10345'
      const res = await client.patchChallengePhase(challengePhaseId, testData.RequestBody.patchChallengePhaseRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.patchChallengePhaseResponse)
    })
    it(`deleteChallengePhase with ${clientDescription} - success`, async function () {
      const challengePhaseId = '10345'
      const res = await client.deleteChallengePhase(challengePhaseId, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.deleteChallengePhaseResponse)
    })
  }
  for (const [config, jwtToken, clientDescription] of [
    [Object.assign({}, testData.ClientConfig.m2mClient, { AUTH0_CLIENT_ID: 'invalid' }), undefined, 'invalid M2M client'],
    [Object.assign({}, testData.ClientConfig.userClient, { USERNAME: 'invalid' }), undefined, 'invalid user credentials client'],
    [testData.ClientConfig.jwtClient, 'invalid_token', 'invalid jwt client']
  ]) {
    const failClient = wrapper(config)
    it(`searchChallengePhases with ${clientDescription} - failure`, async function () {
      try {
        await failClient.searchChallengePhases(testData.RequestQuery.searchChallengePhases, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })

    it(`createChallengePhase with ${clientDescription} - failure`, async function () {
      try {
        await failClient.createChallengePhase(testData.RequestBody.createChallengePhaseRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })

    it(`getChallengePhase with ${clientDescription} - failure`, async function () {
      const challengePhaseId = '10345'
      try {
        await failClient.getChallengePhase(challengePhaseId, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })

    it(`updateChallengePhase with ${clientDescription} - failure`, async function () {
      const challengePhaseId = '10345'
      try {
        await failClient.updateChallengePhase(challengePhaseId, testData.RequestBody.updateChallengePhaseRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`patchChallengePhase with ${clientDescription} - failure`, async function () {
      const challengePhaseId = '10345'
      try {
        await failClient.patchChallengePhase(challengePhaseId, testData.RequestBody.patchChallengePhaseRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`deleteChallengePhase with ${clientDescription} - failure`, async function () {
      const challengePhaseId = '10345'
      try {
        await failClient.deleteChallengePhase(challengePhaseId, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
  }
})
