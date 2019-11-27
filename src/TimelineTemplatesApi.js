/*
 * Wrapper function for TimelineTemplate related endpoints
 */

const helper = require('./common/helper')

/**
 * Function to search timelineTemplates with pagination and filter
 * @param {Object} config Configuration object
 * @param {Object} reqQuery the query object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} searched timelineTemplates
 */
const searchTimelineTemplates = (config, reqQuery, jwt = null) => {
  const url = helper.buildURLwithParams(`${config.CHALLENGE_API_URL}/timelineTemplates`, reqQuery)
  return helper.reqToV5API(config, jwt, 'GET', url)
}

/**
 * Function to create the timelineTemplate.
 * @param {Object} config Configuration object
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} created timelineTemplate
 */
const createTimelineTemplate = (config, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'POST', `${config.CHALLENGE_API_URL}/timelineTemplates`, reqBody)
}

/**
 * Function to get the timelineTemplate by id.
 * @param {Object} config Configuration object
 * @param {String} timelineTemplateId the timelineTemplate id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} the timelineTemplate
 */
const getTimelineTemplate = (config, timelineTemplateId, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'GET', `${config.CHALLENGE_API_URL}/timelineTemplates/${timelineTemplateId}`)
}

/**
 * Function to fully update timelineTemplate by id.
 * @param {Object} config Configuration object
 * @param {String} timelineTemplateId the timelineTemplate id
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} updated timelineTemplate
 */
const updateTimelineTemplate = (config, timelineTemplateId, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'PUT', `${config.CHALLENGE_API_URL}/timelineTemplates/${timelineTemplateId}`, reqBody)
}

/**
 * Function to partially update timelineTemplate by id.
 * @param {Object} config Configuration object
 * @param {String} timelineTemplateId the timelineTemplate id
 * @param {Object} reqBody the request body object
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise} updated timelineTemplate
 */
const patchTimelineTemplate = (config, timelineTemplateId, reqBody, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'PATCH', `${config.CHALLENGE_API_URL}/timelineTemplates/${timelineTemplateId}`, reqBody)
}

/**
 * Function to delete the timelineTemplate by id.
 * @param {Object} config Configuration object
 * @param {String} timelineTemplateId the timelineTemplate id
 * @param {String} jwt The JWT to authenticate the request
 * @returns {Promise}
 */
const deleteTimelineTemplate = (config, timelineTemplateId, jwt = null) => {
  return helper.reqToV5API(config, jwt, 'DELETE', `${config.CHALLENGE_API_URL}/timelineTemplates/${timelineTemplateId}`)
}

module.exports = {
  searchTimelineTemplates,
  createTimelineTemplate,
  getTimelineTemplate,
  updateTimelineTemplate,
  patchTimelineTemplate,
  deleteTimelineTemplate
}
