import React              from 'react';
import { render, screen } from '@testing-library/react';
import { App }            from './App';

jest.mock('./routes/AppRouter', () => ({ AppRouter : () => <div data-testid='AppRouterId' /> }))

const renderApp = () => render(<App />)

describe('App', () => {
  it('Should render AppRouter component', () => {
    renderApp()

    expect(screen.getByTestId('AppRouterId')).toBeInTheDocument()
  })
})

