/*
 * Index file
 */

const _ = require('lodash')
const joi = require('@hapi/joi')

module.exports = (allConfig) => {
  /**
   * The configuration object schema.
   * AUTH0_URL: the auth0 url
   * AUTH0_AUDIENCE: the auth0 audience
   * TOKEN_CACHE_TIME: the token cache time, it is optional field.
   * AUTH0_CLIENT_ID: the auth0 client id, used as credential
   * AUTH0_CLIENT_SECRET: the auth0 client secret, used as credential
   * CHALLENGE_API_URL: the Topcoder v5 challenge api base url.
   * AUTH0_PROXY_SERVER_URL: the auth0 proxy server url, it is optional field.
   */
  const m2mSchema = joi.object().keys({
    AUTH0_URL: joi.string().uri().trim().required(),
    AUTH0_AUDIENCE: joi.string().uri().trim().required(),
    TOKEN_CACHE_TIME: joi.number().integer().min(0),
    AUTH0_CLIENT_ID: joi.string().required(),
    AUTH0_CLIENT_SECRET: joi.string().required(),
    CHALLENGE_API_URL: joi.string().uri().trim().required(),
    AUTH0_PROXY_SERVER_URL: joi.string()
  })

  /**
   * The user credentials schema.
   * USERNAME: the username
   * PASSWORD: the user password
   * TC_AUTHN_URL: the tc authn url
   * TC_AUTHZ_URL: the tc authz url
   * TC_CLIENT_ID: the tc client id
   * TC_CLIENT_V2CONNECTION: the tc client v2connection
   */
  const credentialsSchema = joi.object().keys({
    USERNAME: joi.string().trim().required(),
    PASSWORD: joi.string().trim().required(),
    TC_AUTHN_URL: joi.string().trim().uri().required(),
    TC_AUTHZ_URL: joi.string().trim().uri().required(),
    TC_CLIENT_ID: joi.string().trim().required(),
    TC_CLIENT_V2CONNECTION: joi.string().trim().required(),
    CHALLENGE_API_URL: joi.string().uri().trim().required()
  })

  /**
   * The JWT method argument config schema
   */
  const jwtMethodArgSchema = joi.object().keys({
    CHALLENGE_API_URL: joi.string().uri().trim().required()
  }).unknown(false)

  let schema = jwtMethodArgSchema
  let schemaType = 'JWT Method Argument'

  // Pick auth config
  const config = _.pick(allConfig, [
    'AUTH0_URL',
    'AUTH0_AUDIENCE',
    'TOKEN_CACHE_TIME',
    'AUTH0_CLIENT_ID',
    'AUTH0_CLIENT_SECRET',
    'CHALLENGE_API_URL',
    'AUTH0_PROXY_SERVER_URL',
    'USERNAME',
    'PASSWORD',
    'TC_AUTHN_URL',
    'TC_AUTHZ_URL',
    'TC_CLIENT_ID',
    'TC_CLIENT_V2CONNECTION'
  ])
  if (_.has(config, 'AUTH0_URL')) {
    schema = m2mSchema
    schemaType = 'M2M Configuration'
  } else if (_.has(config, 'USERNAME')) {
    schema = credentialsSchema
    schemaType = 'User Credentials Configuration'
  }

  // Validate the arguments
  const result = schema.validate(config)
  if (result.error) {
    throw new Error(`[${schemaType}] ${result.error.details[0].message}`)
  }

  // Export functions
  return {
    // -- challenge APIs --
    // Search challenges
    searchChallenges: (reqQuery, jwt) => {
      return require('./src/ChallengesApi').searchChallenges(config, reqQuery, jwt)
    },
    // Create challenge
    createChallenge: (reqFormData, jwt) => {
      return require('./src/ChallengesApi').createChallenge(config, reqFormData, jwt)
    },
    // Get challenge
    getChallenge: (challengeId, jwt) => {
      return require('./src/ChallengesApi').getChallenge(config, challengeId, jwt)
    },
    // Fully update challenge
    updateChallenge: (challengeId, reqBody, jwt) => {
      return require('./src/ChallengesApi').updateChallenge(config, challengeId, reqBody, jwt)
    },
    // Partially update challenge
    patchChallenge: (challengeId, reqBody, jwt) => {
      return require('./src/ChallengesApi').patchChallenge(config, challengeId, reqBody, jwt)
    },
    // -- challengeType APIs --
    // Search challengeTypes
    searchChallengeTypes: (reqQuery, jwt) => {
      return require('./src/ChallengeTypesApi').searchChallengeTypes(config, reqQuery, jwt)
    },
    // Create challengeType
    createChallengeType: (reqFormData, jwt) => {
      return require('./src/ChallengeTypesApi').createChallengeType(config, reqFormData, jwt)
    },
    // Get challengeType
    getChallengeType: (challengeTypeId, jwt) => {
      return require('./src/ChallengeTypesApi').getChallengeType(config, challengeTypeId, jwt)
    },
    // Fully update challengeType
    updateChallengeType: (challengeTypeId, reqBody, jwt) => {
      return require('./src/ChallengeTypesApi').updateChallengeType(config, challengeTypeId, reqBody, jwt)
    },
    // Partially update challengeType
    patchChallengeType: (challengeTypeId, reqBody, jwt) => {
      return require('./src/ChallengeTypesApi').patchChallengeType(config, challengeTypeId, reqBody, jwt)
    },
    // -- challengeSetting APIs --
    // Search challengeSettings
    searchChallengeSettings: (reqQuery, jwt) => {
      return require('./src/ChallengeSettingsApi').searchChallengeSettings(config, reqQuery, jwt)
    },
    // Create challengeSetting
    createChallengeSetting: (reqFormData, jwt) => {
      return require('./src/ChallengeSettingsApi').createChallengeSetting(config, reqFormData, jwt)
    },
    // Get challengeSetting
    getChallengeSetting: (challengeSettingId, jwt) => {
      return require('./src/ChallengeSettingsApi').getChallengeSetting(config, challengeSettingId, jwt)
    },
    // Fully update challengeSetting
    updateChallengeSetting: (challengeSettingId, reqBody, jwt) => {
      return require('./src/ChallengeSettingsApi').updateChallengeSetting(config, challengeSettingId, reqBody, jwt)
    },
    // -- challengePhase APIs --
    // Search challengePhases
    searchChallengePhases: (reqQuery, jwt) => {
      return require('./src/ChallengePhasesApi').searchChallengePhases(config, reqQuery, jwt)
    },
    // Create challengePhase
    createChallengePhase: (reqFormData, jwt) => {
      return require('./src/ChallengePhasesApi').createChallengePhase(config, reqFormData, jwt)
    },
    // Get challengePhase
    getChallengePhase: (challengePhaseId, jwt) => {
      return require('./src/ChallengePhasesApi').getChallengePhase(config, challengePhaseId, jwt)
    },
    // Fully update challengePhase
    updateChallengePhase: (challengePhaseId, reqBody, jwt) => {
      return require('./src/ChallengePhasesApi').updateChallengePhase(config, challengePhaseId, reqBody, jwt)
    },
    // Partially update challengePhase
    patchChallengePhase: (challengePhaseId, reqBody, jwt) => {
      return require('./src/ChallengePhasesApi').patchChallengePhase(config, challengePhaseId, reqBody, jwt)
    },
    // Get challengePhase
    deleteChallengePhase: (challengePhaseId, jwt) => {
      return require('./src/ChallengePhasesApi').deleteChallengePhase(config, challengePhaseId, jwt)
    }
  }
}
