import type { Url } from './types'
import { theOpenApi } from '../_external-libs/the-open-api-v2'

const getEndpoint = (url: Url): string => {
  if (url === 'the-one-api') return theOpenApi.endpoint
  return ''
}

export { getEndpoint }
