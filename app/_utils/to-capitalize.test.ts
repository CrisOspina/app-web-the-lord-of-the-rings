import { test, expect, describe } from 'vitest'
import { toCapitalize } from '.'

describe('utils/toCapitalize.ts', () => {
  test('Capitalize letter valid', () => {
    const value = 'hello'
    expect(toCapitalize(value)).toBe('Hello')
  })

  test('Capitalize only first letter', () => {
    const value = 'hello world people'
    const expected = 'Hello world people'
    expect(toCapitalize(value, { onlyFirstWord: true })).toBe(expected)
  })
})
