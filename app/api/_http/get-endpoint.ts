import type { Url } from './types'
import { theOpenApi } from '../_lib/the-open-api-v2/constants'

const getEndpoint = (url: Url): string => {
  if (url === 'the-one-api') return theOpenApi.endpoint
  return ''
}

export { getEndpoint }
