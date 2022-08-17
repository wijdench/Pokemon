import express                      from 'express'
import fs                           from 'fs'
import ApiInputFilterPokemonDetails from '../service/dto/ApiInputFilterPokemonDetails'
import ApiGetPokemonDetails         from '../service/ApiGetPokemonDetails'
import ApiGetPokemonImageLink       from '../service/ApiGetPokemonImageLink'
import ApiGetPokemonTypes           from '../service/ApiGetPokemonTypes'

const router = express.Router()
const apiGetPokemonDetails   = new ApiGetPokemonDetails()
const apiGetPokemonImageLink = new ApiGetPokemonImageLink()
const apiGetPokemonTypes     = new ApiGetPokemonTypes()

router.get('/types', (req, res) => {
    const result = apiGetPokemonTypes.execute()
    res.status(200).json(result)
})

router.get('/details', (req, res) => {
    const data = req.query
    const filter = new ApiInputFilterPokemonDetails(data)
    const result = apiGetPokemonDetails.execute(filter)
    res.status(200).json(result)
})

router.get('/:id/image', (req, res) => {
    const { id } = req.params
    const imageLink = apiGetPokemonImageLink.execute({ id })

    fs.readFile(imageLink, (err, data) => {
        if (err) throw err;
          res.writeHead(200, {'Content-Type': 'image/png'});
          res.end(data);
      })
})

export default router