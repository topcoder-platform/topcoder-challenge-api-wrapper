/*
 * Wrapper function for ChallengeType related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to search challengeTypes with pagination and filter
 * @param {Object} config Configuration object
 * @param {Object} reqQuery the query object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} searched challengeTypes
 */
const searchChallengeTypes = (config, reqQuery, jwt = null) => {
  const url = helper.buildURLwithParams(`${config.CHALLENGE_API_URL}/challengeTypes`, reqQuery)
  return helper.reqToV5API(config, jwt, 'GET', url)
}

/**
 * Function to create the challengeType.
 * @param {Object} config Configuration object
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} created challengeType
 */
const createChallengeType = (config, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'POST', `${config.CHALLENGE_API_URL}/challengeTypes`, reqBody)
}

/**
 * Function to get the challengeType by id.
 * @param {Object} config Configuration object
 * @param {String} challengeTypeId the challengeType id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise}
 */
const getChallengeType = (config, challengeTypeId, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'GET', `${config.CHALLENGE_API_URL}/challengeTypes/${challengeTypeId}`)
}

/**
 * Function to fully update challengeType by id.
 * @param {Object} config Configuration object
 * @param {String} challengeTypeId the challengeType id
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} updated challengeType
 */
const updateChallengeType = (config, challengeTypeId, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'PUT', `${config.CHALLENGE_API_URL}/challengeTypes/${challengeTypeId}`, reqBody)
}

/**
 * Function to partially update challengeType by id.
 * @param {Object} config Configuration object
 * @param {String} challengeTypeId the challengeType id
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} updated challengeType
 */
const patchChallengeType = (config, challengeTypeId, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'PATCH', `${config.CHALLENGE_API_URL}/challengeTypes/${challengeTypeId}`, reqBody)
}

module.exports = {
  searchChallengeTypes,
  createChallengeType,
  getChallengeType,
  updateChallengeType,
  patchChallengeType
}
