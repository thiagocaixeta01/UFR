import {Livro} from './livro';

export function titulos(livros: Livro[]): string[] { 
    let titulos: string[] = [];
    for (let livro of livros) {
        titulos.push(livro.titulo);
    }
    
    return titulos;
}

export function publicadosDepoisDe(livros: Livro[], ano: number): Livro[] { 
    let livrosFiltrados: Livro[] = [];
    for (let livro of livros) {
        if (livro.ano > ano) {
            livrosFiltrados.push(livro);
        } 
    }

    return livrosFiltrados;
}

export function maisAntigo(livros: Livro[]): Livro {
    let antigo = livros[0];
    for (let livro of livros) {
        if (livro.ano < antigo.ano) {
            antigo = livro;
        }
    }

    return antigo;
}