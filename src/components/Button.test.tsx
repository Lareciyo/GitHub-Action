import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { Button } from './Button'
import '@testing-library/jest-dom'

test('it renders the button label correctly', () => {
  render(<Button label="Submit" />)
  expect(screen.getByText('Submit')).toBeInTheDocument()
})