/*
 * Test helper functions.
 */

/**
 * Extract jwt token from request headers.
 */
function tokenFromHeaders (headers) {
  const authorization = headers.authorization || headers.Authorization
  if (!authorization.startsWith('Bearer ')) {
    return ''
  }
  return authorization.split(' ')[1]
}

/**
 * Get request details to be used as nock response.
 */
function collectRequestDetails (_uri, body) {
  return {
    method: this.req.method,
    path: this.req.path,
    token: tokenFromHeaders(this.req.headers),
    body: body
  }
}

module.exports = {
  tokenFromHeaders,
  collectRequestDetails
}
