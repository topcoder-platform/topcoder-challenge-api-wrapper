/*
 * Wrapper function for ChallengeAttachment related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to create the challenge attachment.
 * @param {Object} config Configuration object
 * @param {String} challengeId the challenge id
 * @param {Object} reqFormData the request multiple part form data object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} created challenge attachment
 */
const createChallengeAttachment = (config, challengeId, reqFormData, jwt = null) => {
  return helper.reqToV5APIWithFile(config, jwt, `${config.CHALLENGE_API_URL}/challenges/${challengeId}/attachments`, reqFormData, 'attachment')
}

/**
 * Function to download the challenge attachment.
 * @param {Object} config Configuration object
 * @param {String} challengeId the challenge id
 * @param {String} attachmentId the attachment id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} the challenge attachment
 */
const downloadChallengeAttachment = (config, challengeId, attachmentId, jwt = null) => {
  return helper.reqToV5APIDownload(config, jwt, `${config.CHALLENGE_API_URL}/challenges/${challengeId}/attachments/${attachmentId}`)
}

module.exports = {
  createChallengeAttachment,
  downloadChallengeAttachment
}
