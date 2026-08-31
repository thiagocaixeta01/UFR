import {Livro} from './livro';

export class Autor {
    nome: string;
    livros: Livro[];
    

    constructor(nome: string){
        this.nome = nome;
        this.livros = [];
    }

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    quantidadeLivros(): number {
        return this.livros.length;
    } 
}