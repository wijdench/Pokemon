"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const PokemonType_1 = require("../model/PokemonType");
class ApiGetPokemonTypes {
    execute() {
        const pokemonTypes = JSON.parse(fs_1.default.readFileSync('data/types.json', 'utf8'));
        const result = pokemonTypes.map((p) => new PokemonType_1.PokemonType({ typeName: p }));
        return result;
    }
}
exports.default = ApiGetPokemonTypes;
//# sourceMappingURL=ApiGetPokemonTypes.js.map