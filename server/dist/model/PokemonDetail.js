"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonDetail = void 0;
const Name_1 = require("./Name");
class PokemonDetail {
    constructor({ id = '', name = new Name_1.Name(), type = [], hp = 0, attack = 0, defence = 0, speed = 0, } = {}) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.attack = attack;
        this.defence = defence;
        this.speed = speed;
    }
}
exports.PokemonDetail = PokemonDetail;
//# sourceMappingURL=PokemonDetail.js.map