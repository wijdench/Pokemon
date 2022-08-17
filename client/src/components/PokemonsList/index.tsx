import React, { useEffect, useState } from 'react'
import Grid                           from '@mui/material/Grid'
import { ImageCard }                  from '../ImageCard'
import { PokemonDetail }              from '../../model'
import PokemonDetailsApi              from '../../api/pokemonDetailsApi'
import { PokemonsPagination }         from '../PokemonsPagination'
import { RECORDS_PER_PAGE }           from '../../constants'

export type PokemonsListProps = {
  type: string,
}

export const PokemonsList = ({ type }: PokemonsListProps) => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([])
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
 
  const recordsPerPage = RECORDS_PER_PAGE

  useEffect(() => {
    if(type) {
      async function fetchPokemonsDetails() {
        const result = await PokemonDetailsApi.getDetails({ type, page })
        if(result) {
          setPokemons(result.pokemons.map(r => new PokemonDetail(r)))
          setTotalRecords(result.totalRecords)
        }
      }
      fetchPokemonsDetails()
    }
  }, [type, page]);

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, nextPage: number) => {
    setPage(nextPage);
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item container spacing={2} justifyContent="center">
        {pokemons.length !==0 && pokemons.map((pokemon: PokemonDetail, index: number) => (  
          <Grid item container justifyContent='center' xs={12} md={3} key={index}>
              <ImageCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <PokemonsPagination 
          totalRecords={totalRecords}
          page={page}
          pageSize={recordsPerPage}
          onChange={handlePaginationChange}
        />
      </Grid>
    </Grid>
  )
}

