export class Disciplina {
    private _nomeDisciplina: string;

    constructor (nomeDisciplina: string) {
        this._nomeDisciplina = nomeDisciplina;
    }

    get nomeDisciplina(): string {
        return this._nomeDisciplina;
    }
}