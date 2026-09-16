const MULTA_POR_DIA = 1.5;

export interface PoliticaMulta {
  aplicar(valorBase: number): number;
}

export class PoliticaIntegral implements PoliticaMulta {
  aplicar(valorBase: number): number {
  return valorBase;
  } 
}

export class PoliticaMetade implements PoliticaMulta {
  aplicar(valorBase: number): number {
  return valorBase / 2;
  }
}

export class PoliticaIsenta implements PoliticaMulta {
  aplicar(valorBase: number): number {
  return 0;
  }
}

export function calcularMulta(diasAtraso: number,
  politica: PoliticaMulta): number {
  const valorBase = diasAtraso * MULTA_POR_DIA;
  return politica.aplicar(valorBase);
}