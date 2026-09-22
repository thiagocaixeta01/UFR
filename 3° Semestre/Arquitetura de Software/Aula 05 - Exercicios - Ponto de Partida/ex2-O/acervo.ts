export interface Livro {
  codigo: string;
  titulo: string;
  ano: number;
}

export const livros: Livro[] = [
  { codigo: 'L001', titulo: 'Dom Casmurro', ano: 1899 },
  { codigo: 'L002', titulo: '1984', ano: 1949 },
];
