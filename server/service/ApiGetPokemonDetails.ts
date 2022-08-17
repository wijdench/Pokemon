import fs                                from 'fs'
import { PokemonDetail }                 from '../model/PokemonDetail'
import { Name }                          from '../model/Name'
import { IApiInputFilterPokemonDetails } from './dto/ApiInputFilterPokemonDetails'
import ApiGetPokemonDetailsResponse      from './dto/ApiGetPokemonDetailsResponse'

export default class ApiGetPokemonDetails {
    execute({ type, page, recordsPerPage }: IApiInputFilterPokemonDetails ): ApiGetPokemonDetailsResponse {
        const pokemonDetails = JSON.parse(fs.readFileSync('data/pokedex.json', 'utf8'));
        const pokemonsDetails = pokemonDetails.map((p: any) => new PokemonDetail({
            id      : p.id,
            name    : new Name(p.name),
            type    : p.type          ,
            hp      : p.base.HP       ,
            attack  : p.base.Attack   ,
            defence : p.base.Defense  ,
            speed   : p.base.Speed    ,
        }))
        const resultByType = this._getpokemonsByType({ pokemons: pokemonsDetails, type })
        const totalRecords = resultByType.length
        const pokemons = this._paginate({ pokemons: resultByType, page, recordsPerPage})
        return new ApiGetPokemonDetailsResponse({ pokemons, totalRecords })
    }

    private _getpokemonsByType({ pokemons, type }: { pokemons: PokemonDetail[], type: string}) : PokemonDetail[] {
        const result = pokemons.filter(p => p.type.map(t => t.toLowerCase()).includes(type.toLowerCase()))
        return result
    }

    private _paginate = ({ pokemons, page, recordsPerPage}: { pokemons: PokemonDetail[], page: number, recordsPerPage: number }): PokemonDetail[] => {
        return pokemons.length >= recordsPerPage ? pokemons.slice((page - 1) * recordsPerPage, page * recordsPerPage) : pokemons
    }
}