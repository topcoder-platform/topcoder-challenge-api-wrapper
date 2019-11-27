/*
 * Wrapper function for ChallengeAuditLog related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to search challengeAuditLogs with pagination and filter
 * @param {Object} config Configuration object
 * @param {Object} reqQuery the query object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} searched challengeAuditLogs
 */
const searchChallengeAuditLogs = (config, reqQuery, jwt = null) => {
  const url = helper.buildURLwithParams(`${config.CHALLENGE_API_URL}/challengeAuditLogs`, reqQuery)
  return helper.reqToV5API(config, jwt, 'GET', url)
}

module.exports = {
  searchChallengeAuditLogs
}
