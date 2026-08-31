class Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    emprestar(): void {
        this.disponivel = false;
    }

    devolver(): void {
        this.disponivel = true;
    }

    descricao(): string {
        return `${this.titulo}, de ${this.autor}`;
    }
}

const estante: Livro[] = [];

estante.push(new Livro("Dom Casmurro", "Machado de Assis"));
estante.push(new Livro("1984", "George Orwell"));
estante.push(new Livro("O Senhor dos Anéis", "J.R.R. Tolkien"));
estante.push(new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling"));


console.log(`Quantidade de livros na estante: ${estante.length}`);
console.log(`Título do terceiro livro: ${estante[2].titulo}`);
estante[1].emprestar();

for (let l of estante) {
    console.log(l.descricao());
}