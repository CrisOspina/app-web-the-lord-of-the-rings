import { test, describe, expect } from 'vitest'
import { render } from '@testing-library/react'

import Text from '.'

describe('_components/text', () => {
  test('should render the component text', () => {
    const { getByRole } = render(<Text as='h1'>Children</Text>)

    const label = getByRole('heading', {
      level: 1
    })

    expect(label).toBeInTheDocument()
  })
})
