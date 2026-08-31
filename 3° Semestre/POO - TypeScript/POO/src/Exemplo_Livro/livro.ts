export class Livro {
  autor: string;
  titulo: string;
  disponivel: boolean;

  constructor(autor: string, titulo: string, disponivel: boolean) {
    this.autor = autor;
    this.titulo = titulo;
    this.disponivel = disponivel;
  }
  
  emprestar() {
    this.disponivel  = false;
  }

  devolver(): void {
    this.disponivel  = true;
  }

  descricao(): string {
    return `${this.autor} - ${this.titulo}`;
  }
}