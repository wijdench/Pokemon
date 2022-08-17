import fs              from 'fs'
import { PokemonType } from '../model/PokemonType'

export default class ApiGetPokemonTypes {
    execute(): PokemonType[] {
        const pokemonTypes = JSON.parse(fs.readFileSync('data/types.json', 'utf8'))
        const result = pokemonTypes.map((p: any) => new PokemonType({ typeName: p }))
        return result
    }
}