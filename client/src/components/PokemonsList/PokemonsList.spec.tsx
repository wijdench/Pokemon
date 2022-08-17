import React                   from 'react'
import { act, render, screen } from '@testing-library/react'
import PokemonDetailsApi       from '../../api/pokemonDetailsApi'
import PokemonDetailsResponse  from '../../api/pokemonDetailsApi/dto/PokemonDetailsResponse'
import { PokemonDetail }       from '../../model/PokemonDetail'
import { PokemonsList }        from '.'

const FAKE_POKEMONS_DETAILS = new PokemonDetailsResponse({
    pokemons: [new PokemonDetail({
      id     : 1,
      name   : {
        english: "Graveler"  ,
        japanese: "ゴローン"  ,
        chinese: "隆隆石"     ,
        french : "Gravalanch",
      },
      type   : ['Rock'],
      hp     : 2,
      attack : 3,
      defence: 4,
      speed  : 5,
    })],
    totalRecords: 1,
})

jest.mock('../../api/pokemonDetailsApi')
const PokemonDetailsApiMock = PokemonDetailsApi as jest.Mocked<typeof PokemonDetailsApi>

jest.mock('../PokemonsPagination', () => ({ PokemonsPagination : () => <div data-testid='PokemonsPaginationId' /> }))

jest.mock('../ImageCard', () => ({ ImageCard : () => <div data-testid='ImageCardId' /> }))

const renderPokemonsList = () => render(
  <PokemonsList type={'Rock'} />
)

describe("Pokemons List", () => {
  beforeEach(async () => {
    await act(async () => {
      PokemonDetailsApiMock.getDetails.mockResolvedValue(FAKE_POKEMONS_DETAILS)
      renderPokemonsList()
    })
  })

  it("should render image card component", () => {
    expect(screen.getByTestId('ImageCardId')).toBeInTheDocument()
  })

  it("should render Pokemons pagination component", () => {
    expect(screen.getByTestId('PokemonsPaginationId')).toBeInTheDocument()
  })
})
