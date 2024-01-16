import { EndpointExternalLordOfTheRings } from '../_external-libs/the-open-api-v2/types-url'

import { EndpointAuth } from '../auth/_types-url'
import { EndpointLordOfTheRings } from '../lord-of-the-rings/_types-url'

type Controller = string

type HttpResponse<T> = { get: (controller?: Controller) => Promise<T> }

type Url =
  | EndpointExternalLordOfTheRings
  | EndpointLordOfTheRings
  | EndpointAuth
  | ''

export type { Url, HttpResponse, Controller }
