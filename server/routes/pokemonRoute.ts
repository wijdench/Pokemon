import express                      from 'express'
import fs                           from 'fs'
import ApiInputFilterPokemonDetails from '../service/dto/ApiInputFilterPokemonDetails'
import ApiGetPokemonDetails         from '../service/ApiGetPokemonDetails'
import ApiGetPokemonImageLink       from '../service/ApiGetPokemonImageLink'
import ApiGetPokemonTypes           from '../service/ApiGetPokemonTypes'

const router = express.Router()

router.get('/types', (req, res) => {
    const apiGetPokemonTypes = new ApiGetPokemonTypes()
    const result = apiGetPokemonTypes.execute()
    res.status(200).json(result)
})

router.get('/details', (req, res) => {
    const apiGetPokemonDetails = new ApiGetPokemonDetails()
    const data = req.query
    const filter = new ApiInputFilterPokemonDetails(data)
    const result = apiGetPokemonDetails.execute(filter)
    res.status(200).json(result)
})

router.get('/:id/image', (req, res) => {
    const { id } = req.params
    const apiGetPokemonImageLink = new ApiGetPokemonImageLink()
    const imageLink = apiGetPokemonImageLink.execute({ id })

    fs.readFile(imageLink, (err, data) => {
        if (err) throw err;
          res.writeHead(200, {'Content-Type': 'image/png'});
          res.end(data);
      })
})

export default router
