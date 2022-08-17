import { PokemonDetail } from '../../model/PokemonDetail'

interface IApiGetPokemonDetailsResponse {
    pokemons     : PokemonDetail[]
    totalRecords : number
}

export default class ApiGetPokemonDetailsResponse implements IApiGetPokemonDetailsResponse {
    pokemons     : PokemonDetail[]
    totalRecords : number

    constructor({
        pokemons     = [],
        totalRecords = 0 ,
    }: Partial<IApiGetPokemonDetailsResponse> = {}) {
        this.pokemons      = pokemons
        this.totalRecords  = totalRecords
    }
}