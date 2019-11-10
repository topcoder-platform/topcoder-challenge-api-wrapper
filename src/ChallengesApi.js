/*
 * Wrapper function for Challenge related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to search challenges with pagination and filter
 * @param {Object} config Configuration object
 * @param {Object} reqQuery the query object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} searched challenges
 */
const searchChallenges = (config, reqQuery, jwt = null) => {
  const url = helper.buildURLwithParams(`${config.CHALLENGE_API_URL}/challenges`, reqQuery)
  return helper.reqToV5API(config, jwt, 'GET', url)
}

/**
 * Function to create the challenge.
 * @param {Object} config Configuration object
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} created challenge
 */
const createChallenge = (config, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'POST', `${config.CHALLENGE_API_URL}/challenges`, reqBody)
}

/**
 * Function to get the challenge by id.
 * @param {Object} config Configuration object
 * @param {String} challengeId the challenge id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise}
 */
const getChallenge = (config, challengeId, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'GET', `${config.CHALLENGE_API_URL}/challenges/${challengeId}`)
}

/**
 * Function to fully update challenge by id.
 * @param {Object} config Configuration object
 * @param {String} challengeId the challenge id
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} updated challenge
 */
const updateChallenge = (config, challengeId, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'PUT', `${config.CHALLENGE_API_URL}/challenges/${challengeId}`, reqBody)
}

/**
 * Function to partially update challenge by id.
 * @param {Object} config Configuration object
 * @param {String} challengeId the challenge id
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} updated challenge
 */
const patchChallenge = (config, challengeId, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'PATCH', `${config.CHALLENGE_API_URL}/challenges/${challengeId}`, reqBody)
}

module.exports = {
  searchChallenges,
  createChallenge,
  getChallenge,
  updateChallenge,
  patchChallenge
}
