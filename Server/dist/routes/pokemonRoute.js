"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const ApiInputFilterPokemonDetails_1 = __importDefault(require("../service/dto/ApiInputFilterPokemonDetails"));
const ApiGetPokemonDetails_1 = __importDefault(require("../service/ApiGetPokemonDetails"));
const ApiGetPokemonImageLink_1 = __importDefault(require("../service/ApiGetPokemonImageLink"));
const ApiGetPokemonTypes_1 = __importDefault(require("../service/ApiGetPokemonTypes"));
const router = express_1.default.Router();
const apiGetPokemonDetails = new ApiGetPokemonDetails_1.default();
const apiGetPokemonImageLink = new ApiGetPokemonImageLink_1.default();
const apiGetPokemonTypes = new ApiGetPokemonTypes_1.default();
router.get('/types', (req, res) => {
    const result = apiGetPokemonTypes.execute();
    res.status(200).json(result);
});
router.get('/details', (req, res) => {
    const data = req.query;
    const filter = new ApiInputFilterPokemonDetails_1.default(data);
    const result = apiGetPokemonDetails.execute(filter);
    res.status(200).json(result);
});
router.get('/:id/image', (req, res) => {
    const { id } = req.params;
    const imageLink = apiGetPokemonImageLink.execute({ id });
    fs_1.default.readFile(imageLink, (err, data) => {
        if (err)
            throw err;
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data);
    });
});
exports.default = router;
//# sourceMappingURL=pokemonRoute.js.map