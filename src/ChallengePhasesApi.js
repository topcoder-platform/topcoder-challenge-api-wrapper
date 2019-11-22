/*
 * Wrapper function for ChallengePhase related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to search challengePhases with pagination and filter
 * @param {Object} config Configuration object
 * @param {Object} reqQuery the query object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} searched challengePhases
 */
const searchChallengePhases = (config, reqQuery, jwt = null) => {
  const url = helper.buildURLwithParams(`${config.CHALLENGE_API_URL}/challengePhases`, reqQuery)
  return helper.reqToV5API(config, jwt, 'GET', url)
}

/**
 * Function to create the challengePhase.
 * @param {Object} config Configuration object
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} created challengePhase
 */
const createChallengePhase = (config, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'POST', `${config.CHALLENGE_API_URL}/challengePhases`, reqBody)
}

/**
 * Function to get the challengePhase by id.
 * @param {Object} config Configuration object
 * @param {String} challengePhaseId the challengePhase id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise}
 */
const getChallengePhase = (config, challengePhaseId, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'GET', `${config.CHALLENGE_API_URL}/challengePhases/${challengePhaseId}`)
}

/**
 * Function to fully update challengePhase by id.
 * @param {Object} config Configuration object
 * @param {String} challengePhaseId the challengePhase id
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} updated challengePhase
 */
const updateChallengePhase = (config, challengePhaseId, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'PUT', `${config.CHALLENGE_API_URL}/challengePhases/${challengePhaseId}`, reqBody)
}

/**
 * Function to partially update challengePhase by id.
 * @param {Object} config Configuration object
 * @param {String} challengePhaseId the challengePhase id
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} updated challengePhase
 */
const patchChallengePhase = (config, challengePhaseId, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'PATCH', `${config.CHALLENGE_API_URL}/challengePhases/${challengePhaseId}`, reqBody)
}

/**
 * Function to delete the challengePhase by id.
 * @param {Object} config Configuration object
 * @param {String} challengePhaseId the challengePhase id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise}
 */
const deleteChallengePhase = (config, challengePhaseId, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'DELETE', `${config.CHALLENGE_API_URL}/challengePhases/${challengePhaseId}`)
}

module.exports = {
  searchChallengePhases,
  createChallengePhase,
  getChallengePhase,
  updateChallengePhase,
  patchChallengePhase,
  deleteChallengePhase
}
