import type { Url } from './types'
import { theOpenApi } from '../_lib/the-open-api-v2/constants'

const getHeaders = (url: Url) => {
  if (url === 'the-one-api') {
    return { Authorization: theOpenApi.apiKey }
  }

  return undefined
}

export { getHeaders }
