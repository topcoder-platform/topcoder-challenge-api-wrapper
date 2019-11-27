/*
 * Test data.
 */
const url = require('url')

const CHALLENGE_API_URL = 'https://api.topcoder.com/v5'

const M2M_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiZW5qdzE4MTBlRHozWFR3U08yUm4yWTljUVRyc3BuM0JAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNTUyMTE5NDQ4LCJleHAiOjU1NjIyMDU4NDgsImF6cCI6ImVuancxODEwZUR6M1hUd1NPMlJuMlk5Y1FUcnNwbjNCIiwic2NvcGUiOiJhbGw6cmV2aWV3IGFsbDpyZXZpZXdfc3VtbWF0aW9uIGFsbDpyZXZpZXdfdHlwZSBhbGw6c3VibWlzc2lvbiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.uJE97vctfpmzA0HrK9rcmrfWVHZNzERrI-qag3fm_lc'
const USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJUb3Bjb2RlciBVc2VyIiwiQ29ubmVjdCBTdXBwb3J0IiwiYWRtaW5pc3RyYXRvciIsInRlc3RSb2xlIiwiYWFhIiwidG9ueV90ZXN0XzEiLCJDb25uZWN0IE1hbmFnZXIiLCJDb25uZWN0IEFkbWluIiwiY29waWxvdCIsIkNvbm5lY3QgQ29waWxvdCBNYW5hZ2VyIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLWRldi5jb20iLCJoYW5kbGUiOiJUb255SiIsImV4cCI6MTU2NDA2NjkzOCwidXNlcklkIjoiODU0Nzg5OSIsImlhdCI6MTU2NDA2NjMzOCwiZW1haWwiOiJhamVmdHNAdG9wY29kZXIuY29tIiwianRpIjoiMTRkNTliZjctMWI5Ny00Y2ZjLWE3OWUtZmY3NjI2YjI2MzRjIn0.Krh9nQY7M-mpQzbjwKrD_eTSDF7ra8GY-kSY-rstcEg'
const JWT_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLmNvbSIsImhhbmRsZSI6IlRvbnlKIiwiZXhwIjo1NTUzMDE5OTI1OSwidXNlcklkIjoiNDA0MzMyODgiLCJpYXQiOjE1MzAxOTg2NTksImVtYWlsIjoiYWRtaW5AdG9wY29kZXIuY29tIiwianRpIjoiYzNhYzYwOGEtNTZiZS00NWQwLThmNmEtMzFmZTk0Yjk1NjFjIn0.pIHUtMwIV07ZgfaUk9916X49rgjKclM9kzQP419LBo0'
const USER_TOKEN_V2 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6IlRvbnlKIiwiZW1haWwiOiJhamVmdHNAdG9wY29kZXIuY29tIiwibmFtZSI6ImFqZWZ0c0B0b3Bjb2Rlci5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvZjExODkyYzM4MTQwMzZjNjhjNzhmNGNlMGY2Yzg3NjE_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZhai5wbmciLCJyb2xlcyI6WyJ1c2VyIl0sImFwcF9tZXRhZGF0YSI6eyJyb2xlcyI6WyJ1c2VyIl19LCJjbGllbnRJRCI6IkpGRG83SE1rZjBxMkNrVkZIb2p5M3pIV2FmemlwcmhUIiwidXBkYXRlZF9hdCI6IjIwMTktMDctMjVUMTQ6MzY6NDkuNjQzWiIsInVzZXJfaWQiOiJhdXRoMHw4NTQ3ODk5IiwiaWRlbnRpdGllcyI6W3sidXNlcl9pZCI6Ijg1NDc4OTkiLCJwcm92aWRlciI6ImF1dGgwIiwiY29ubmVjdGlvbiI6IlRDLVVzZXItRGF0YWJhc2UiLCJpc1NvY2lhbCI6ZmFsc2V9XSwiY3JlYXRlZF9hdCI6IjIwMTctMDEtMDhUMTA6MzM6MzAuODQzWiIsImlzcyI6Imh0dHBzOi8vdG9wY29kZXItZGV2LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw4NTQ3ODk5IiwiYXVkIjoiSkZEbzdITWtmMHEyQ2tWRkhvankzekhXYWZ6aXByaFQiLCJpYXQiOjE1NjQwNjU0MDksImV4cCI6MTkyNDA2NTQwOX0.RUk8nieOdRPj4dj-ZUhgFrdcAszU9EHW2fFlDul8RH0'

// m2m related configuration
const AUTH0_URL = 'https://topcoder-dev.auth0.com/oauth/token'
const AUTH0_CLIENT_ID = '8QovDh27SrDu1XSs68m21A1NBP8isvOt'
const AUTH0_CLIENT_SECRET = '3QVxxu20QnagdH-McWhVz0WfsQzA1F8taDdGDI4XphgpEYZPcMTF4lX3aeOIeCzh'
const AUTH0_AUDIENCE = 'https://m2m.topcoder-dev.com/'

// user credentials related configuration
const USERNAME = 'aaron'
const PASSWORD = 'xxx123'
const TC_AUTHN_URL = 'https://topcoder-dev.auth0.com/oauth/ro'
const TC_AUTHZ_URL = 'https://api.topcoder-dev.com/v3/authorizations'
const TC_CLIENT_ID = 'JFDo7HMkf0q2CkVFHojy3zHWafziprhT'
const TC_CLIENT_V2CONNECTION = 'TC-User-Database'

// ChallengesApi
const createChallengeRequestBody = require('./createChallengeRequestBody.json')
const updateChallengeRequestBody = Object.assign({}, createChallengeRequestBody, { name: 'test-update' })
const patchChallengeRequestBody = Object.assign({}, createChallengeRequestBody, { name: 'test-patch' })

const searchChallengesResponse = require('./searchChallengesResponse.json')
const getChallengeResponse = searchChallengesResponse[0]
const createChallengeResponse = require('./createChallengeResponse.json')
const updateChallengeResponse = require('./updateChallengeResponse.json')
const patchChallengeResponse = require('./patchChallengeResponse.json')

// challengeTypesApi
const createChallengeTypeRequestBody = require('./createChallengeTypeRequestBody.json')
const updateChallengeTypeRequestBody = Object.assign({}, createChallengeTypeRequestBody, { name: 'F2F', description: 'First 2 Finish' })
const patchChallengeTypeRequestBody = Object.assign({}, createChallengeTypeRequestBody, { isActive: false })

const searchChallengeTypesResponse = require('./searchChallengeTypesResponse.json')
const getChallengeTypeResponse = searchChallengeTypesResponse[0]
const createChallengeTypeResponse = require('./createChallengeTypeResponse.json')
const updateChallengeTypeResponse = require('./updateChallengeTypeResponse.json')
const patchChallengeTypeResponse = require('./patchChallengeTypeResponse.json')

// challengeSettingsApi
const createChallengeSettingRequestBody = { name: 'challenge-setting-name' }
const updateChallengeSettingRequestBody = { name: 'challenge-setting-name-update' }

const createChallengeSettingResponse = Object.assign({}, createChallengeSettingRequestBody, {
  id: '9c5f6840-219b-45c4-8826-ff18fa012346'
})
const getChallengeSettingResponse = createChallengeSettingResponse
const updateChallengeSettingResponse = Object.assign({}, getChallengeSettingResponse, updateChallengeSettingRequestBody)
const searchChallengeSettingsResponse = [getChallengeSettingResponse]

// challengePhasesApi
const createChallengePhaseRequestBody = require('./createChallengePhaseRequestBody.json')
const updateChallengePhaseRequestBody = Object.assign({}, createChallengePhaseRequestBody, { name: 'review' })
const patchChallengePhaseRequestBody = { isActive: false }

const createChallengePhaseResponse = require('./createChallengePhaseResponse.json')
const getChallengePhaseResponse = createChallengePhaseResponse
const searchChallengePhasesResponse = [createChallengePhaseResponse]
const updateChallengePhaseResponse = Object.assign({}, createChallengePhaseResponse, updateChallengePhaseRequestBody)
const patchChallengePhaseResponse = Object.assign({}, createChallengePhaseResponse, patchChallengePhaseRequestBody)
const deleteChallengePhaseResponse = createChallengePhaseResponse

// timelineTemplatesApi
const createTimelineTemplateRequestBody = require('./createTimelineTemplateRequestBody.json')
const updateTimelineTemplateRequestBody = Object.assign({}, createTimelineTemplateRequestBody, { description: 'description' })
const patchTimelineTemplateRequestBody = Object.assign({}, createTimelineTemplateRequestBody, { isActive: false })

const searchTimelineTemplatesResponse = require('./searchTimelineTemplatesResponse.json')
const getTimelineTemplateResponse = searchTimelineTemplatesResponse[0]
const createTimelineTemplateResponse = searchTimelineTemplatesResponse[0]
const updateTimelineTemplateResponse = require('./updateTimelineTemplateResponse.json')
const patchTimelineTemplateResponse = require('./patchTimelineTemplateResponse.json')
const deleteTimelineTemplateResponse = patchTimelineTemplateResponse

// challengeAuditLogsApi
const searchChallengeAuditLogsResponse = require('./searchChallengeAuditLogsResponse.json')

// challengeAttachmentsApi
const createChallengeAttachmentResponse = require('./createChallengeAttachmentResponse.json')

module.exports = {
  Url: {
    CHALLENGE_API_URL
  },
  Token: {
    M2M_TOKEN,
    USER_TOKEN,
    JWT_TOKEN,
    USER_TOKEN_V2
  },
  ClientConfig: {
    m2mClient: {
      AUTH0_URL,
      AUTH0_CLIENT_ID,
      AUTH0_CLIENT_SECRET,
      AUTH0_AUDIENCE,
      CHALLENGE_API_URL
    },
    userClient: {
      USERNAME,
      PASSWORD,
      TC_AUTHN_URL,
      TC_AUTHZ_URL,
      TC_CLIENT_ID,
      TC_CLIENT_V2CONNECTION,
      CHALLENGE_API_URL
    },
    jwtClient: {
      CHALLENGE_API_URL
    }
  },
  CHALLENGE_API_PATH: (new url.URL(CHALLENGE_API_URL)).pathname,
  AUTH_PATH: (new url.URL(AUTH0_URL)).pathname,
  AUTHN_PATH: (new url.URL(TC_AUTHN_URL)).pathname,
  AUTHZ_PATH: (new url.URL(TC_AUTHZ_URL)).pathname,
  RequestBody: {
    createChallengeRequestBody,
    updateChallengeRequestBody,
    patchChallengeRequestBody,
    createChallengeTypeRequestBody,
    updateChallengeTypeRequestBody,
    patchChallengeTypeRequestBody,
    createChallengeSettingRequestBody,
    updateChallengeSettingRequestBody,
    createChallengePhaseRequestBody,
    updateChallengePhaseRequestBody,
    patchChallengePhaseRequestBody,
    createTimelineTemplateRequestBody,
    updateTimelineTemplateRequestBody,
    patchTimelineTemplateRequestBody
  },
  ResponseBody: {
    Authv2: {
      id_token: USER_TOKEN_V2,
      refresh_token: 'kpHUTupKo7z6dRNdGpPOeIZtaCQg3Se0wit0vQWaABsdS',
      access_token: 'IU9HcR5jOrk7LmEzJe43ybE6m8AUZj4D',
      token_type: 'bearer'
    },
    Authv3: {
      result: {
        content: {
          token: USER_TOKEN
        }
      }
    },
    M2MAuth: {
      access_token: M2M_TOKEN,
      scope: 'all:review all:review_summation all:review_type all:submission',
      expires_in: 864000,
      token_type: 'Bearer'
    },
    searchChallengesResponse,
    getChallengeResponse,
    createChallengeResponse,
    updateChallengeResponse,
    patchChallengeResponse,
    searchChallengeTypesResponse,
    getChallengeTypeResponse,
    createChallengeTypeResponse,
    updateChallengeTypeResponse,
    patchChallengeTypeResponse,
    createChallengeSettingResponse,
    searchChallengeSettingsResponse,
    getChallengeSettingResponse,
    updateChallengeSettingResponse,
    createChallengePhaseResponse,
    getChallengePhaseResponse,
    searchChallengePhasesResponse,
    updateChallengePhaseResponse,
    patchChallengePhaseResponse,
    deleteChallengePhaseResponse,
    searchTimelineTemplatesResponse,
    getTimelineTemplateResponse,
    createTimelineTemplateResponse,
    updateTimelineTemplateResponse,
    patchTimelineTemplateResponse,
    deleteTimelineTemplateResponse,
    searchChallengeAuditLogsResponse,
    createChallengeAttachmentResponse
  },
  RequestQuery: {
    searchChallenges: {
      page: 1,
      perPage: 10,
      id: '64abe45b-406e-42a4-9ac5-74994b343f42',
      track: 'track',
      name: 'TEST',
      description: 'test',
      reviewType: 'review type',
      tag: 'tag3',
      projectId: '123',
      createdDateStart: '2017-02-22T00:00:00Z',
      createdDateEnd: '2022-03-22T00:00:00Z',
      updatedDateStart: '2017-02-22T00:00:00Z',
      updatedDateEnd: '2028-02-22T00:00:00Z',
      createdBy: 'Tonyj',
      updatedBy: 'Tonyj',
      memberId: '40309246'
    },
    searchChallengeTypes: {
      page: 1,
      perPage: 10,
      name: 'Code',
      description: 'Code',
      isActive: true
    },
    searchChallengeSettings: {
      page: 1,
      perPage: 10,
      name: 'Code'
    },
    searchChallengePhases: {
      page: 1,
      perPage: 10,
      name: 'Registration'
    },
    searchTimelineTemplates: {
      page: 1,
      perPage: 10,
      name: 'template-1'
    },
    searchChallengeAuditLogs: {
      page: 1,
      perPage: 10,
      challengeId: '64abe45b-406e-42a4-9ac5-74994b343f42',
      createdDateStart: '2017-02-22T00:00:00Z',
      createdDateEnd: '2022-03-22T00:00:00Z'
    }
  }
}
