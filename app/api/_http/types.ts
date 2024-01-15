type HttpResponse<T> = { get: () => Promise<T> }

type Url = 'the-one-api' | ''

export type { Url, HttpResponse }
