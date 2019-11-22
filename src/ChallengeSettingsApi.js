/*
 * Wrapper function for ChallengeSetting related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to search challengeSettings with pagination and filter
 * @param {Object} config Configuration object
 * @param {Object} reqQuery the query object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} searched challengeSettings
 */
const searchChallengeSettings = (config, reqQuery, jwt = null) => {
  const url = helper.buildURLwithParams(`${config.CHALLENGE_API_URL}/challengeSettings`, reqQuery)
  return helper.reqToV5API(config, jwt, 'GET', url)
}

/**
 * Function to create the challengeSetting.
 * @param {Object} config Configuration object
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} created challengeSetting
 */
const createChallengeSetting = (config, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'POST', `${config.CHALLENGE_API_URL}/challengeSettings`, reqBody)
}

/**
 * Function to get the challengeSetting by id.
 * @param {Object} config Configuration object
 * @param {String} challengeTypeId the challengeSetting id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise}
 */
const getChallengeSetting = (config, challengeSettingId, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'GET', `${config.CHALLENGE_API_URL}/challengeSettings/${challengeSettingId}`)
}

/**
 * Function to fully update challengeSetting by id.
 * @param {Object} config Configuration object
 * @param {String} challengeTypeId the challengeSetting id
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} updated challengeSetting
 */
const updateChallengeSetting = (config, challengeSettingId, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'PUT', `${config.CHALLENGE_API_URL}/challengeSettings/${challengeSettingId}`, reqBody)
}

module.exports = {
  searchChallengeSettings,
  createChallengeSetting,
  getChallengeSetting,
  updateChallengeSetting
}
