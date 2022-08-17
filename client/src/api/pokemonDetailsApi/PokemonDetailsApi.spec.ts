import PokemonDetailsResponse                  from './dto/PokemonDetailsResponse'
import { PokemonDetail }                       from '../../model/PokemonDetail'
import PokemonDetailsApi                       from '.'
import { ApiLinks, API_URL, RECORDS_PER_PAGE } from '../../constants'

const fetchMock = jest.fn();
global.fetch = fetchMock;

const FAKE_POKEMONS_DETAILS = new PokemonDetailsResponse({
    pokemons: [new PokemonDetail({
       id     : 1,
       name   : {
        english: "Graveler"  ,
        japanese: "ゴローン"  ,
        chinese: "隆隆石"     ,
        french : "Gravalanch",
      },
       type   : ['Rock'],
       hp     : 2,
       attack : 3,
       defence: 4,
       speed  : 5,

    })],
    totalRecords: 1,
})

describe('Given Pokemon Details api', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    describe('When fetch pokemons details', () => {
        beforeEach(() =>{
            const json = jest.fn().mockResolvedValue(FAKE_POKEMONS_DETAILS)
            fetchMock.mockResolvedValue({ json });
        })

        it('Then it returns data', async() => {
            const type = 'Rock'
            const page = 1
            const result = await PokemonDetailsApi.getDetails({ type: 'Rock', page: 1 })

            expect(fetch).toHaveBeenCalledWith(`${API_URL}${ApiLinks.GetPokemonDetails.href}?type=${type}&page=${page}&recordsPerPage=${RECORDS_PER_PAGE}`, 
                {
                    "headers": { "Content-Type": "application/json" },
                })

            expect(result).toBe(FAKE_POKEMONS_DETAILS)
        })

    })
})