import { test, describe, vi, expect } from 'vitest'
import { renderWithClient } from '@/app/../__mocks__/render-with-client'
import { fireEvent } from '@testing-library/react'

import Form from './form'

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn()
  })
}))

const store = {
  user: 'USER',
  password: 'PASSWORD',
  button: 'LOGIN'
}

describe('auth/signin-form', () => {
  test('should render the component form', () => {
    const props = renderWithClient(<Form />)
    const { getByRole, getByText, getByPlaceholderText, container } = props

    const formElement = container.querySelector('form')
    expect(formElement).toBeInTheDocument()

    const usernameInput = getByPlaceholderText('User')
    expect(usernameInput).toBeInTheDocument()

    const passwordInput = getByPlaceholderText('Password')
    expect(passwordInput).toBeInTheDocument()

    const button = getByRole('button')
    expect(button).toBeInTheDocument()

    const usernameLabel = getByText(store.user)
    expect(usernameLabel).toBeInTheDocument()

    const passwordLabel = getByText(store.password)
    expect(passwordLabel).toBeInTheDocument()
  })

  test('should render input with data', () => {
    const props = renderWithClient(<Form />)
    const { getByRole, getByPlaceholderText } = props

    const usernameInput = getByPlaceholderText('User') as HTMLInputElement
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement

    fireEvent.change(usernameInput, { target: { value: 'user' } })
    expect(usernameInput).toHaveValue('user')

    fireEvent.change(passwordInput, { target: { value: 'password' } })
    expect(passwordInput).toHaveValue('password')

    const button = getByRole('button', {
      name: 'Login'
    })

    expect(button).toBeInTheDocument()
  })
})
