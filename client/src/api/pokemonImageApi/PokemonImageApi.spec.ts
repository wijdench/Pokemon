import PokemonImageApi       from '.'
import { ApiLinks, API_URL } from '../../constants'

const fetchMock = jest.fn();
global.fetch = fetchMock;

const BLOB = new Blob()
const BLOB_IMAGE = { blob: () => BLOB }

describe('Given Pokemon image api', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('When fetch pokemon image', () => {
        beforeEach(() =>{
            fetchMock.mockResolvedValue(BLOB_IMAGE)
        })

        it('Then it returns data', async() => {
            const id = 1
            const result = await PokemonImageApi.getImage({ id })
            const url = `${API_URL}${ApiLinks.GetPokemonImage.href}`.replace('{id}', id.toString())
            expect(fetch).toHaveBeenCalledWith(
                url, 
                {
                    "headers": { "Content-Type": 'image/png' },
                }
            )
            expect(result).toBe(BLOB)
        })

    })
})