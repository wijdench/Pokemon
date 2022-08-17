import React                      from 'react'
import { PokemonContextProvider } from './contexts/PokemonContext'
import { AppRouter }              from './routes/AppRouter'

export const App: React.FC = () => (
  <PokemonContextProvider>
    <AppRouter />
  </PokemonContextProvider>
)

