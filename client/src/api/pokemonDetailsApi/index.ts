import PokemonDetailsResponse                  from './dto/PokemonDetailsResponse'
import { ApiLinks, API_URL, RECORDS_PER_PAGE } from '../../constants'

export default class PokemonTypesApi {
    static async getDetails({ type, page, recordsPerPage = RECORDS_PER_PAGE }: { type: string, page: number, recordsPerPage?: number }): Promise<PokemonDetailsResponse> {
        const url = `${API_URL}${ApiLinks.GetPokemonDetails.href}`
        const urlWithParams = (type && page && recordsPerPage) ? `${url}?type=${type}&page=${page}&recordsPerPage=${recordsPerPage}` : url
        const result = await fetch(urlWithParams, {
            headers: {
                'Content-Type':'application/json'
            }
        })
        return await result.json()
    }
}