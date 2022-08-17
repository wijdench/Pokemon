import { PokemonType }       from '../../model'
import PokemonTypesApi       from '.'
import { ApiLinks, API_URL } from '../../constants'
import { Name }              from '../../model/Name';

const fetchMock = jest.fn();
global.fetch = fetchMock;

const FAKE_POKEMONS_TYPE = new PokemonType({
    typeName: new Name({
        english: "Normal",
        chinese: "一般",
        japanese: "ノーマル"
    })
})

describe('Given Pokemon types api', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('When fetch pokemons types', () => {
        beforeEach(() =>{
            const json = jest.fn().mockResolvedValue([FAKE_POKEMONS_TYPE]);
            fetchMock.mockResolvedValue({ json });
        })

        it('Then it returns data', async() => {
            const result = await PokemonTypesApi.getTypes()

            expect(fetch).toHaveBeenCalledWith(
                `${API_URL}${ApiLinks.GetPokemonTypes.href}`, 
                {
                    "headers": { "Content-Type": "application/json" },
                }
            )

            expect(result).toBeInstanceOf(Array) 
            expect(result.length).toEqual(1)
            expect(result[0]).toEqual(FAKE_POKEMONS_TYPE)
        })
    })
})