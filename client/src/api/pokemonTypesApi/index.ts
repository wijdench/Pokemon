import { PokemonType }       from '../../model'
import { ApiLinks, API_URL } from '../../constants'

export default class PokemonTypesApi {
    static async getTypes(): Promise<PokemonType[]> {
        const result = await fetch(`${API_URL}${ApiLinks.GetPokemonTypes.href}`, {
        headers: {
            'Content-Type':'application/json'
        }})
        return await result.json()
    }
}