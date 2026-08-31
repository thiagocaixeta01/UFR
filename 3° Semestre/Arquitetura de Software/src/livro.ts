import { Autor } from './autor';

    export class Livro {
        codigo: string;
        titulo: string;
        ano: number;
        autor: Autor;
        
    
    constructor(codigo: string, titulo: string, ano: number, autor: Autor) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.ano = ano;
        this.autor = autor;

    autor.adicionarLivro(this);
    }

    descricao(): string{
        return `${this.titulo} (${this.ano}), de ${this.autor.nome}`;
    }
}