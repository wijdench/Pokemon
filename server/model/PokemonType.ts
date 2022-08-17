import { Name } from './Name'

interface IPokemonType {
    typeName : Name
}

export class PokemonType implements IPokemonType {
    typeName : Name

    constructor({
        typeName  = new Name(),
    }: Partial<IPokemonType> = {}) {
        this.typeName  = typeName
    }
}