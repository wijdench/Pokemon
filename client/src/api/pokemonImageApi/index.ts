import { ApiLinks, API_URL } from '../../constants'

export default class PokemonImageApi {
    static async getImage({ id }: { id: number }): Promise<Blob> {
        const result = await fetch(`${API_URL}${ApiLinks.GetPokemonImage.href}`.replace('{id}', id.toString()), {
            headers: {
                'Content-Type': 'image/png'
            }
        })
        return await result.blob()
    }
}