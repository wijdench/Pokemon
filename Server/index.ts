import express       from 'express'
import bodyParser    from 'body-parser'
import cors          from 'cors'
import pokemonsRoute from './routes/pokemonRoute'

const PORT = process.env.PORT || 3001

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.use('/pokemons', pokemonsRoute)

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server listening on ${PORT}`)
});