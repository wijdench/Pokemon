"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const PokemonDetail_1 = require("../model/PokemonDetail");
const Name_1 = require("../model/Name");
const ApiGetPokemonDetailsResponse_1 = __importDefault(require("./dto/ApiGetPokemonDetailsResponse"));
class ApiGetPokemonDetails {
    constructor() {
        this._paginate = ({ pokemons, page, recordsPerPage }) => {
            return pokemons.length >= recordsPerPage ? pokemons.slice((page - 1) * recordsPerPage, page * recordsPerPage) : pokemons;
        };
    }
    execute({ type, page, recordsPerPage }) {
        const pokemonDetails = JSON.parse(fs_1.default.readFileSync('data/pokedex.json', 'utf8'));
        const pokemonsDetails = pokemonDetails.map((p) => new PokemonDetail_1.PokemonDetail({
            id: p.id,
            name: new Name_1.Name(p.name),
            type: p.type,
            hp: p.base.HP,
            attack: p.base.Attack,
            defence: p.base.Defense,
            speed: p.base.Speed,
        }));
        const resultByType = this._getpokemonsByType({ pokemons: pokemonsDetails, type });
        const totalRecords = resultByType.length;
        const pokemons = this._paginate({ pokemons: resultByType, page, recordsPerPage });
        return new ApiGetPokemonDetailsResponse_1.default({ pokemons, totalRecords });
    }
    _getpokemonsByType({ pokemons, type }) {
        const result = pokemons.filter(p => p.type.map(t => t.toLowerCase()).includes(type.toLowerCase()));
        return result;
    }
}
exports.default = ApiGetPokemonDetails;
//# sourceMappingURL=ApiGetPokemonDetails.js.map