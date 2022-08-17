import React                       from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import { PokemonContext }          from './PokemonContext'
import { PokemonType, Name }       from '../model'

const FAKE_POKEMONS_TYPES = [
    new PokemonType({
      typeName: new Name({
        english: "Normal",
        chinese: "一般",
        japanese: "ノーマル"
      })
    }),
    new PokemonType({
      typeName: new Name({
        english: "Fighting",
        chinese: "格斗",
        japanese: "かくとう"
      })
    })
]

const renderWithContext = () => {
    const ChildComponent: React.FC  = () => {
      const { pokemonTypes } = React.useContext(PokemonContext);
      return (
        <div>
          <p>{pokemonTypes[0].typeName.english}</p>
          <p>{pokemonTypes[0].typeName.chinese}</p>
          <p>{pokemonTypes[0].typeName.japanese}</p>
          <p>{pokemonTypes[1].typeName.english}</p>
          <p>{pokemonTypes[1].typeName.chinese}</p>
          <p>{pokemonTypes[1].typeName.japanese}</p>
        </div>
      )
    }
  
    render(
      <PokemonContext.Provider
        value={{
            pokemonTypes: FAKE_POKEMONS_TYPES,
        }}
      >
        <ChildComponent />
      </PokemonContext.Provider>
    )
  }

  describe("PokemonContext", () => {
    afterEach(cleanup);
  
    it("should provide context data to child component", () => {
      renderWithContext();
  
      expect(screen.getByText(FAKE_POKEMONS_TYPES[0].typeName.english)).toBeInTheDocument()
      expect(screen.getByText(FAKE_POKEMONS_TYPES[0].typeName.chinese)).toBeInTheDocument()
      expect(screen.getByText(FAKE_POKEMONS_TYPES[0].typeName.japanese)).toBeInTheDocument()
      expect(screen.getByText(FAKE_POKEMONS_TYPES[1].typeName.english)).toBeInTheDocument()
      expect(screen.getByText(FAKE_POKEMONS_TYPES[1].typeName.chinese)).toBeInTheDocument()
      expect(screen.getByText(FAKE_POKEMONS_TYPES[1].typeName.japanese)).toBeInTheDocument()
    })
  })