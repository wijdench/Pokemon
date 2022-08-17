"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiInputFilterPokemonDetails {
    constructor({ type = '', page = '', recordsPerPage = '', } = {}) {
        this.type = type;
        this.page = parseInt(page, 10);
        this.recordsPerPage = parseInt(recordsPerPage, 10);
    }
}
exports.default = ApiInputFilterPokemonDetails;
//# sourceMappingURL=ApiInputFilterPokemonDetails.js.map