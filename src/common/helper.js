const m2mAuth = require('tc-core-library-js').auth.m2m
const request = require('superagent')
const _ = require('lodash')

const constants = require('./constants')

let m2m = null

/*
 * Function to get M2M token
 * @returns {Promise}
 */
const getM2Mtoken = async (config) => {
  if (_.isNull(m2m)) {
    m2m = m2mAuth(_.pick(config, ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME', 'AUTH0_PROXY_SERVER_URL']))
  }
  return m2m.getMachineToken(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_SECRET)
}

/**
 * Create token from credentials.
 *
 * @param {String} username the TC login username
 * @param {String} password the TC login password
 * @returns {String} JWT token that can be used in fetching TC resources.
 */
const tokenFromCredentials = async (config) => {
  const v2Token = await request
    .post(config.TC_AUTHN_URL)
    .send({
      username: config.USERNAME,
      password: config.PASSWORD,
      client_id: config.TC_CLIENT_ID,
      sso: constants.sso,
      scope: constants.scope,
      response_type: constants.responseType,
      connection: config.TC_CLIENT_V2CONNECTION,
      grant_type: constants.grantType,
      device: constants.device
    })
    .set('cache-control', constants.cacheControl.noCache)
    .set('content-type', constants.contentType.json)
  const token = _.get(await _tokenV3FromV2(config, v2Token.body), 'body.result.content.token')
  return token
}

/**
 * Fetch v3 token.
 *
 * @param {Object} v2Token the v2 token
 * @returns {Object} response that contains v3 token
 */
const _tokenV3FromV2 = async (config, v2Token) => {
  return request
    .post(config.TC_AUTHZ_URL)
    .set('cache-control', constants.cacheControl.noCache)
    .set('authorization', `Bearer ${v2Token.id_token}`)
    .set('content-type', constants.contentType.json)
    .send({
      param: {
        externalToken: v2Token.id_token,
        refreshToken: _.get(v2Token, 'refresh_token', '')
      }
    })
}

/**
 * Get authentication token for config
 * @param {Object} config The token configuration
 * @param {String} jwt The JWT
 * @returns {Promise} resolves to token or error if something went wrong
 */
const getToken = (config, jwt = null) => {
  if (_.has(config, 'AUTH0_URL')) {
    return getM2Mtoken(config)
  }
  if (_.has(config, 'USERNAME')) {
    return tokenFromCredentials(config)
  }
  if (jwt !== null) {
    return Promise.resolve(jwt)
  }
}

/**
 * Function to send request to V5 API
 * @param {Object} config Configuration object
 * @param {String} jwt The JWT
 * @param{String} reqType Type of the request POST / PATCH / PUT / GET / DELETE / HEAD
 * @param(String) path Complete path of the API URL
 * @param{Object} reqBody Body of the request
 * @returns {Promise}
 */
const reqToV5API = async (config, jwt, reqType, path, reqBody) => {
  const token = await getToken(config, jwt)
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {}
  // Based on request type perform necessary action
  switch (reqType) {
    case 'GET':
      return request
        .get(path)
        .set(authHeader)
        .set('Content-Type', 'application/json')
    case 'HEAD':
      return request
        .head(path)
        .set(authHeader)
        .set('Content-Type', 'application/json')
    case 'POST':
      return request
        .post(path)
        .set(authHeader)
        .set('Content-Type', 'application/json')
        .send(reqBody)
    case 'PUT':
      return request
        .put(path)
        .set(authHeader)
        .set('Content-Type', 'application/json')
        .send(reqBody)
    case 'PATCH':
      return request
        .patch(path)
        .set(authHeader)
        .set('Content-Type', 'application/json')
        .send(reqBody)
    case 'DELETE':
      return request
        .delete(path)
        .set(authHeader)
        .set('Content-Type', 'application/json')
    default:
      throw new Error('Invalid request type')
  }
}

/*
 * Function to build URL with query parameters
 * @param {String} url Bus API URL
 * @param {Object} params Query parameters
 * @returns {String} URL with query parameters
 */
const buildURLwithParams = (url, params) => {
  let queryParams = '?'
  if (params) {
    for (const key in params) {
      queryParams += `${key}=${params[key]}&`
    }
  }
  return url + queryParams
}

module.exports = {
  reqToV5API,
  buildURLwithParams,
  getToken
}
