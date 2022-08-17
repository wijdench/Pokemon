"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiGetPokemonImageLink {
    execute({ id }) {
        const baseLink = './data/thumbnails/';
        const fileName = this._getFileName({ id });
        return `${baseLink}${fileName}.png`;
    }
    _getFileName({ id }) {
        switch (true) {
            case (id.length === 1):
                return `00${id}`;
            case (id.length === 2):
                return `0${id}`;
            default:
                return id;
        }
    }
}
exports.default = ApiGetPokemonImageLink;
//# sourceMappingURL=ApiGetPokemonImageLink.js.map