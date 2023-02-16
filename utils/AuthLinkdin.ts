import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export const LINKEDIN_STATE = process.env.LINKEDIN_STATE
const LINKEDIN_SCOPE = process.env.LINKEDIN_SCOPE
const LINKEDIN_REDIRECT = process.env.LINKEDIN_REDIRECT
const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID
// https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id={your_client_id}&redirect_uri=https%3A%2F%2Fdev.example.com%2Fauth%2Flinkedin%2Fcallback&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social
// https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id={your_client_id}&redirect_uri=https%3A%2F%2Fdev.example.com%2Fauth%2Flinkedin%2Fcallback&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social
export const getURLWithQueryParams = (base: string, params: Params) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')

  return `${base}?${query}`
}

export const LINKEDIN_URL = getURLWithQueryParams(
  'https://www.linkedin.com/oauth/v2/authorization',
  {
    response_type: 'code',
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: LINKEDIN_REDIRECT,
    state: LINKEDIN_STATE,
    scope: LINKEDIN_SCOPE
  }
)
