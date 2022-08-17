interface IName {
    english : string
    chinese : string
    japanese: string
    french  : string
}

export class Name implements IName {
    english : string
    chinese : string
    japanese: string
    french  : string

    constructor({
        english  = '',
        chinese  = '',
        japanese = '',
        french   = '',
    }: Partial<IName> = {}) {
        this.english  = english
        this.chinese  = chinese
        this.japanese = japanese
        this.french   = french
    }
}