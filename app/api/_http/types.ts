type HttpResponse<T> = { get: (controller?: string) => Promise<T> }

type Url = 'the-one-api' | ''

export type { Url, HttpResponse }
