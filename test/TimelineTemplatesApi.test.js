/*
 * Test for TimelineTemplatesApi.
 */
const wrapper = require('../index')
const chai = require('chai')
const testData = require('./common/testData')

describe('TimelineTemplates Api Test', async function () {
  const timelineTemplateId = '33225132-79fa-4d13-a9ac-71f50020dc10'

  for (const [config, jwtToken, clientDescription] of [
    [testData.ClientConfig.m2mClient, undefined, 'M2M'],
    [testData.ClientConfig.userClient, undefined, 'user credentials'],
    [testData.ClientConfig.jwtClient, testData.Token.JWT_TOKEN, 'JWT argument']
  ]) {
    const client = wrapper(config)
    it(`createTimelineTemplate with ${clientDescription} - success`, async function () {
      const res = await client.createTimelineTemplate(testData.RequestBody.createTimelineTemplateRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.createTimelineTemplateResponse)
    })
    it(`searchTimelineTemplates with ${clientDescription} - success`, async function () {
      const res = await client.searchTimelineTemplates(testData.RequestQuery.searchTimelineTemplates, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.searchTimelineTemplatesResponse)
    })
    it(`getTimelineTemplate with ${clientDescription} - success`, async function () {
      const res = await client.getTimelineTemplate(timelineTemplateId, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.getTimelineTemplateResponse)
    })
    it(`updateTimelineTemplate with ${clientDescription} - success`, async function () {
      const res = await client.updateTimelineTemplate(timelineTemplateId, testData.RequestBody.updateTimelineTemplateRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.updateTimelineTemplateResponse)
    })
    it(`patchTimelineTemplate with ${clientDescription} - success`, async function () {
      const res = await client.patchTimelineTemplate(timelineTemplateId, testData.RequestBody.patchTimelineTemplateRequestBody, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.patchTimelineTemplateResponse)
    })
    it(`deleteTimelineTemplate with ${clientDescription} - success`, async function () {
      const res = await client.deleteTimelineTemplate(timelineTemplateId, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.deleteTimelineTemplateResponse)
    })
  }
  for (const [config, jwtToken, clientDescription] of [
    [Object.assign({}, testData.ClientConfig.m2mClient, { AUTH0_CLIENT_ID: 'invalid' }), undefined, 'invalid M2M client'],
    [Object.assign({}, testData.ClientConfig.userClient, { USERNAME: 'invalid' }), undefined, 'invalid user credentials client'],
    [testData.ClientConfig.jwtClient, 'invalid_token', 'invalid jwt client']
  ]) {
    const failClient = wrapper(config)
    if (config !== testData.ClientConfig.jwtClient) {
      it(`searchTimelineTemplates with ${clientDescription} - failure`, async function () {
        try {
          await failClient.searchTimelineTemplates(testData.RequestQuery.searchTimelineTemplates, jwtToken)
          throw Error('Test Fails')
        } catch (err) {
          chai.expect(err.message).to.not.equal('Test Fails')
        }
      })
    }
    it(`createTimelineTemplate with ${clientDescription} - failure`, async function () {
      try {
        await failClient.createTimelineTemplate(testData.RequestBody.createTimelineTemplateRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`getTimelineTemplate with ${clientDescription} - failure`, async function () {
      try {
        await failClient.getTimelineTemplate(timelineTemplateId, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`updateTimelineTemplate with ${clientDescription} - failure`, async function () {
      try {
        await failClient.updateTimelineTemplate(timelineTemplateId, testData.RequestBody.updateTimelineTemplateRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`patchTimelineTemplate with ${clientDescription} - failure`, async function () {
      try {
        await failClient.patchTimelineTemplate(timelineTemplateId, testData.RequestBody.patchTimelineTemplateRequestBody, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`deleteTimelineTemplate with ${clientDescription} - failure`, async function () {
      try {
        await failClient.deleteTimelineTemplate(timelineTemplateId, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
  }
  it('searchTimelineTemplates without authorization - success', async function () {
    const client = wrapper(testData.ClientConfig.jwtClient)
    const res = await client.searchTimelineTemplates()
    chai.expect(res.body).to.eql(testData.ResponseBody.searchTimelineTemplatesResponse)
  })
  it('getTimelineTemplate without authorization - failure', async function () {
    try {
      const client = wrapper(testData.ClientConfig.jwtClient)
      await client.getTimelineTemplate(timelineTemplateId)
      throw Error('Test Fails')
    } catch (err) {
      chai.expect(err.status).to.equal(401)
      chai.expect(err.message).to.not.equal('Test Fails')
    }
  })
})
