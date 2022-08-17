import React              from 'react'
import { render, screen } from '@testing-library/react'
import { Home }           from '.'

jest.mock('../../components/DropDownType', () => ({ DropDownType : () => <div data-testid='DropDownTypeId' /> }))
jest.mock('../../components/PokemonsList', () => ({ PokemonsList : () => <div data-testid='PokemonsListId' /> }))

const renderHome = () => render(<Home />)

describe('Home', () => {
    beforeEach(() => {
        renderHome()
    })

  it('Should render DropDownType component', () => {
    expect(screen.getByTestId('DropDownTypeId')).toBeInTheDocument()
  })
    
  it('Should render PokemonsList component', () => {
    expect(screen.getByTestId('PokemonsListId')).toBeInTheDocument()
  })
})
