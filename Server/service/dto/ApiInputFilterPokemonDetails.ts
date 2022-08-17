interface IApiFilterPokemonDetails {
    type          : string
    page          : string
    recordsPerPage: string
}

export interface IApiInputFilterPokemonDetails {
    type          : string
    page          : number
    recordsPerPage: number
}

export default class ApiInputFilterPokemonDetails implements IApiInputFilterPokemonDetails {
    type          : string
    page          : number
    recordsPerPage: number

    constructor({
        type           = '',
        page           = '',
        recordsPerPage = '',
    }: Partial<IApiFilterPokemonDetails> = {}) {
        this.type            = type
        this.page            = parseInt(page, 10)
        this.recordsPerPage  = parseInt(recordsPerPage, 10)
    }
}