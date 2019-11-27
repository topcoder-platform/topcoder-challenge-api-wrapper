/*
 * Test for ChallengeAttachmentsApi.
 */
const path = require('path')
const fs = require('fs')
const wrapper = require('../index')
const chai = require('chai')
const testData = require('./common/testData')

const fileData1 = fs.readFileSync(path.resolve(__dirname, './common/fileToUpload.txt'))
const attachment = {
  name: 'fileToUpload.txt',
  data: fileData1
}

describe('ChallengeAttachments Api Test', async function () {
  const challengeId = 'b9ff50de-0242-4fd2-addc-ed863b9bfab9'
  const attachmentId = 'a9ff50de-0242-4fd2-addc-ed863b9bfab9'

  for (const [config, jwtToken, clientDescription] of [
    [testData.ClientConfig.m2mClient, undefined, 'M2M'],
    [testData.ClientConfig.userClient, undefined, 'user credentials'],
    [testData.ClientConfig.jwtClient, testData.Token.JWT_TOKEN, 'JWT argument']
  ]) {
    const client = wrapper(config)
    it(`createChallengeAttachment with ${clientDescription} - success`, async function () {
      const res = await client.createChallengeAttachment(challengeId, { attachment }, jwtToken)
      chai.expect(res.body).to.eql(testData.ResponseBody.createChallengeAttachmentResponse)
    })
    it(`downloadChallengeAttachment with ${clientDescription} - success`, async function () {
      const res = await client.downloadChallengeAttachment(challengeId, attachmentId, jwtToken)
      chai.expect(res.body).to.eql(fileData1)
    })
  }

  it('createChallengeAttachment without attachment - failure', async function () {
    const client = wrapper(testData.ClientConfig.m2mClient)
    try {
      await client.createChallengeAttachment(challengeId, { })
      throw Error('Test Fails')
    } catch (err) {
      chai.expect(err.message).to.not.equal('Test Fails')
    }
  })

  for (const [config, jwtToken, clientDescription] of [
    [Object.assign({}, testData.ClientConfig.m2mClient, { AUTH0_CLIENT_ID: 'invalid' }), undefined, 'invalid M2M client'],
    [Object.assign({}, testData.ClientConfig.userClient, { USERNAME: 'invalid' }), undefined, 'invalid user credentials client'],
    [testData.ClientConfig.jwtClient, 'invalid_token', 'invalid jwt client']
  ]) {
    const failClient = wrapper(config)
    it(`createChallengeAttachment with ${clientDescription} - failure`, async function () {
      try {
        await failClient.createChallengeAttachment(challengeId, { attachment }, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
    it(`downloadChallengeAttachment with ${clientDescription} - failure`, async function () {
      try {
        await failClient.downloadChallengeAttachment(challengeId, attachmentId, jwtToken)
        throw Error('Test Fails')
      } catch (err) {
        chai.expect(err.message).to.not.equal('Test Fails')
      }
    })
  }
})
