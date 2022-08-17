import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { PokemonType }                                          from '../model'
import PokemonTypesApi                                          from '../api/pokemonTypesApi'

type ContextProps = {
    pokemonTypes: PokemonType[],
}

export type PokemonContextProviderProps = {
  children: NonNullable<ReactNode>,
}

export const PokemonContext = createContext<ContextProps>({
    pokemonTypes : [],
})

export const PokemonContextProvider = ({ children }: PokemonContextProviderProps) => {
  const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([])

  useEffect(() => {
    async function fetchPokemonTypes() {
      const result = await PokemonTypesApi.getTypes()
      setPokemonTypes(result.map(r => new PokemonType(r)))
    }
    fetchPokemonTypes()
  }, [])

  return (
    <PokemonContext.Provider
      value={{ pokemonTypes }}
    >
      {children}
    </PokemonContext.Provider>
  )
}