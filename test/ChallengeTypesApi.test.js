/*
 * Test for ChallengeTypesApi.
 */
const wrapper = require('../index')
const chai = require('chai')
const testData = require('./common/testData')

describe('ChallengeTypes Api Test', async function () {
  for (const [config, jwtToken, clientDescription] of [
    [testData.ClientConfig.m2mClient, undefined, 'M2M'],
    [testData.ClientConfig.userClient, undefined, 'user credentials'],
    [testData.ClientConfig.jwtClient, testData.Token.JWT_TOKEN, 'JWT argument']
  ]) {
    const client = wrapper(config)
    it(`searchChallengeTypes with ${clientDescription} - success`, async function () {
      const res = await client.searchChallengeTypes(testData.RequestQuery.searchChallengeTypes, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.searchChallengeTypesResponse)
    })
    it(`createChallengeType with ${clientDescription} - success`, async function () {
      const res = await client.createChallengeType(testData.RequestBody.createChallengeTypeRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.createChallengeTypeResponse)
    })
    it(`getChallengeType with ${clientDescription} - success`, async function () {
      const challengeTypeId = '10345'
      const res = await client.getChallengeType(challengeTypeId, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.getChallengeTypeResponse)
    })
    it(`updateChallengeType with ${clientDescription} - success`, async function () {
      const challengeTypeId = '10345'
      const res = await client.updateChallengeType(challengeTypeId, testData.RequestBody.updateChallengeTypeRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.updateChallengeTypeResponse)
    })
    it(`patchChallengeType with ${clientDescription} - success`, async function () {
      const challengeTypeId = '10345'
      const res = await client.patchChallengeType(challengeTypeId, testData.RequestBody.patchChallengeTypeRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.patchChallengeTypeResponse)
    })
  }
  for (const [config, jwtToken, clientDescription] of [
    [Object.assign({}, testData.ClientConfig.m2mClient, { AUTH0_CLIENT_ID: 'invalid' }), undefined, 'invalid M2M client'],
    [Object.assign({}, testData.ClientConfig.userClient, { USERNAME: 'invalid' }), undefined, 'invalid user credentials client'],
    [testData.ClientConfig.jwtClient, 'invalid_token', 'invalid jwt client']
  ]) {
    const failClient = wrapper(config)
    if (config !== testData.ClientConfig.jwtClient) {
      it(`searchChallengeTypes with ${clientDescription} - failure`, async function () {
        try {
          await failClient.searchChallengeTypes(testData.RequestQuery.searchChallengeTypes, jwtToken)
          throw Error('Test Fails')
        } catch (err) {
          chai.expect(err.message).to.not.equal('Test Fails')
        }
      })
    }
    it(`createChallengeType with ${clientDescription} - failure`, async function () {
      try {
        await failClient.createChallengeType(testData.RequestBody.createChallengeTypeRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    if (config !== testData.ClientConfig.jwtClient) {
      it(`getChallengeType with ${clientDescription} - failure`, async function () {
        const challengeTypeId = '10345'
        try {
          await failClient.getChallengeType(challengeTypeId, jwtToken)
          throw Error('Test Fails')
        } catch (err) {
          chai.expect(err.message).to.not.equal('Test Fails')
        }
      })
    }
    it(`updateChallengeType with ${clientDescription} - failure`, async function () {
      const challengeTypeId = '10345'
      try {
        await failClient.updateChallengeType(challengeTypeId, testData.RequestBody.updateChallengeTypeRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`patchChallengeType with ${clientDescription} - failure`, async function () {
      const challengeTypeId = '10345'
      try {
        await failClient.patchChallengeType(challengeTypeId, testData.RequestBody.patchChallengeTypeRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
  }
  it('searchChallengeTypes without authorization - success', async function () {
    const client = wrapper(testData.ClientConfig.jwtClient)
    const res = await client.searchChallengeTypes()
    chai.expect(res.body).to.eql(testData.ResponseBody.searchChallengeTypesResponse)
  })
  it('getChallengeType without authorization - success', async function () {
    const client = wrapper(testData.ClientConfig.jwtClient)
    const challengeTypeId = '10345'
    const res = await client.getChallengeType(challengeTypeId)
    chai.expect(res.body).to.eql(testData.ResponseBody.getChallengeTypeResponse)
  })
})
