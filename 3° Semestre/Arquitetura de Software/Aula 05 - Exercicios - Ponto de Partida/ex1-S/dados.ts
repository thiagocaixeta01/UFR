export interface Emprestimo {
  leitor: string;
  titulo: string;
  diasAtraso: number;
}

export const emprestimos: Emprestimo[] = [
  { leitor: 'Ana', titulo: 'Dom Casmurro', diasAtraso: 0 },
  { leitor: 'Bruno', titulo: '1984', diasAtraso: 4 },
  { leitor: 'Carla', titulo: 'O Cortiço', diasAtraso: 12 },
];
