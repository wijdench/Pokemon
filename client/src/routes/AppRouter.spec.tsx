import React              from 'react'
import { render, screen } from '@testing-library/react'
import { AppRouter }      from './AppRouter'

jest.mock('../pages', () => ({ Home : () => <div data-testid='HomeId' /> }))

const renderAppRouter = () => render(<AppRouter />)

describe('AppRouter', () => {
  it('Should render Home page', () => {
    renderAppRouter()

    expect(screen.getByTestId('HomeId')).toBeInTheDocument()
  })
})

