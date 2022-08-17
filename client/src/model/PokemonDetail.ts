import { Name } from './Name'

interface IPokemonDetail {
    id     : number
    name   : Name
    type   : string[]
    hp     : number
    attack : number
    defence: number
    speed  : number
}

export class PokemonDetail implements IPokemonDetail {
    id     : number
    name   : Name
    type   : string[]
    hp     : number
    attack : number
    defence: number
    speed  : number

    constructor({
        id      = 0,
        name    = new Name(),
        type    = [],
        hp      = 0 ,
        attack  = 0 ,
        defence = 0 ,
        speed   = 0 ,
    }: Partial<IPokemonDetail> = {}) {
        this.id      = id
        this.name    = name
        this.type    = type
        this.hp      = hp
        this.attack  = attack
        this.defence = defence
        this.speed   = speed
    }
}