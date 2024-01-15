import type { HttpResponse, Url } from './types'

import { getHeaders } from './get-headers'
import { getEndpoint } from './get-endpoint'

const http = <T>(typeUrl: Url): HttpResponse<T> => {
  return {
    get: async (controller?: string) => {
      const endpoint = getEndpoint(typeUrl)
      const headers = getHeaders(typeUrl)

      const urlWithController = controller
        ? `${endpoint}/${controller}`
        : endpoint

      const response = await fetch(
        urlWithController,
        headers && {
          headers: getHeaders(typeUrl)
        }
      )

      return (await response.json()) as T
    }
  }
}

export { http }
