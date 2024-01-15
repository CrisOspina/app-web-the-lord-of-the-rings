import type { Url } from './types'
import { theOpenApi } from '../_external-libs/the-open-api-v2'

const getHeaders = (url: Url) => {
  if (url === 'the-one-api') {
    return { Authorization: theOpenApi.apiKey }
  }

  return undefined
}

export { getHeaders }
