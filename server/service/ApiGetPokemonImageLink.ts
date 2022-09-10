export default class ApiGetPokemonImageLink {
    execute({ id }: { id: string}) {
        const baseLink = './data/thumbnails/'
        const fileName = this._getFileName({ id })
        return `${baseLink}${fileName}.png`
    }

    private _getFileName({ id }: { id: string }): string {
        const fileNameLength = 3
        return id.padStart(fileNameLength, '0')
    }
}
