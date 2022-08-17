import React                              from 'react'
import { act, render, screen, fireEvent } from '@testing-library/react'
import PokemonImageApi                    from '../../api/pokemonImageApi'
import { PokemonDetail }                  from '../../model/PokemonDetail'
import { ImageCard }                      from '.'

const FAKE_POKEMON = new PokemonDetail({
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

   })

jest.mock('../../api/pokemonImageApi')
const PokemonImageApiMock = PokemonImageApi as jest.Mocked<typeof PokemonImageApi>

const createObjectURLMock = jest.fn()
window.URL.createObjectURL = createObjectURLMock

const renderImageCard = () => render(
  <ImageCard pokemon={FAKE_POKEMON} />
);


describe("Image card", () => {
    beforeEach(async () => {
        await act(async () => {
            createObjectURLMock.mockReturnValue('imageLink')
            PokemonImageApiMock.getImage.mockResolvedValue(new Blob())
            renderImageCard()
        })
    })

    it("should render Pokemons data", () => {
        const expandButton = screen.getByRole("button", { name: 'show more' })
        fireEvent.click(expandButton)

        expect(screen.getByText(`ID: ${FAKE_POKEMON.id}`)).toBeInTheDocument()
        expect(screen.getByText(`Name: ${FAKE_POKEMON.name.english}`)).toBeInTheDocument()
        expect(screen.getByText(`Types: ${FAKE_POKEMON.type[0]}`)).toBeInTheDocument()
        expect(screen.getByText(`HP: ${FAKE_POKEMON.hp}`)).toBeInTheDocument()
        expect(screen.getByText(`Attack: ${FAKE_POKEMON.attack}`)).toBeInTheDocument()
        expect(screen.getByText(`Defense: ${FAKE_POKEMON.defence}`)).toBeInTheDocument()
        expect(screen.getByText(`Speed: ${FAKE_POKEMON.speed}`)).toBeInTheDocument()   
    })    
})
