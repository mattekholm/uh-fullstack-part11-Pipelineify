/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import Button from './Button'

test('renders button with correct label', () => {
  render(<Button label="Click Me" />)
  const buttonElement = screen.getByRole('button', { name: /click me/i })
  expect(buttonElement).toBeInTheDocument()
})