import { PokemonDetail } from '../../../model/PokemonDetail'

interface IPokemonDetailsResponse {
    pokemons     : PokemonDetail[]
    totalRecords : number
}

export default class PokemonDetailsResponse implements IPokemonDetailsResponse {
    pokemons     : PokemonDetail[]
    totalRecords : number

    constructor({
        pokemons     = [],
        totalRecords = 0 ,
    }: Partial<IPokemonDetailsResponse> = {}) {
        this.pokemons      = pokemons
        this.totalRecords  = totalRecords
    }
}