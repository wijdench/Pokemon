export default class ApiGetPokemonImageLink {
    execute({ id }: { id: string}) {
        const baseLink = './data/thumbnails/'
        const fileName = this._getFileName({ id })
        return `${baseLink}${fileName}.png`
    }

    private _getFileName({ id }: { id: string }): string{
        switch (true) {
            case (id.length === 1) :
                return `00${id}`
            case (id.length === 2) :
                return `0${id}`
            default:
                return id
        }
    }
}