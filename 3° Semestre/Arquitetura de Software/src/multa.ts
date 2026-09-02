const MULTA_POR_DIA = 1.5;

export function calcularMulta(diasAtraso: number): number {
    return diasAtraso * MULTA_POR_DIA;
}