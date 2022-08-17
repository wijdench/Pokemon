"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonType = void 0;
const Name_1 = require("./Name");
class PokemonType {
    constructor({ typeName = new Name_1.Name(), } = {}) {
        this.typeName = typeName;
    }
}
exports.PokemonType = PokemonType;
//# sourceMappingURL=PokemonType.js.map