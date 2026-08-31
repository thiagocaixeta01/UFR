/***********************************************************************************************************************************
 1. Cenário A: Array NÃO Ordenado (Busca Sequencial)
 
 Na busca sequencial, se você der azar, o CPF que você procura pode ser o último da 
 lista ou nem estar lá.
 - Máximo de comparações por busca: $1.000.000$ (você olha cada um dos registros).
 - Total para 100 buscas: 100 x 1.000.000 = 100.000.000 de comparações.
 - Nota: Cem milhões de operações é algo que um computador faz rápido, mas se o sistema escalar para mais usuários ou mais buscas, ele 
 começará a travar.2. 
 
 Cenário B: Array ORDENADO (Busca Binária)
 
 A busca binária funciona dividindo o milhão por 2 sucessivamente. Como $2^{20} \approx 1.048.576$, precisamos de, no máximo, 20 
 divisões para encontrar qualquer número ou ter certeza de que ele não existe.
 - Máximo de comparações por busca: 20 comparações.
 - Total para 100 buscas: 100 x 20 = \2.000 comparações.

 Comparação de Escala
 
 Método         Comparações por Busca       Total (100 buscas)
 Sequencial         1.000.000                   100.000.000
 Binária                20                          2.000

 3. Análise: Qual cenário é mais rápido?
 
 O cenário Ordenado (Busca Binária) é muito mais rápido.
 
 Por que?
 Mesmo que ordenar o array tenha um custo inicial alto (usando algoritmos como o QuickSort, o custo seria de aproximadamente 
 N.log_2.N, ou seja, cerca de 20 milhões de operações), esse esforço é feito uma única vez.
 
 Após a ordenação:
 - As buscas tornam-se quase instantâneas (2.000 vs 100.000.000).
 - A economia de processamento é de 99,99% em relação à busca sequencial.
 - Em sistemas reais (como bancos de dados), os dados são mantidos ordenados (índices) justamente para que as buscas sejam 
 feitas em tempo logarítmico.
 *************************************************************************************************************************************/

#include <stdio.h>
#include <math.h>

int main() {
    long registros = 1000000;
    int buscas = 100;

    // Calculando o pior caso da Sequencial
    long totalSequencial = registros * buscas;

    // Calculando o pior caso da Binaria
    // log2(1000000) é aproximadamente 20
    int comparacoesPorBuscaBinaria = 20; 
    long totalBinaria = buscas * comparacoesPorBuscaBinaria;

    printf("Total Sequencial: %ld comparacoes\n", totalSequencial);
    printf("Total Binaria: %ld comparacoes\n", totalBinaria);
    
    long economia = totalSequencial - totalBinaria;
    printf("A Busca Binaria economizou %ld operacoes!\n", economia);

    return 0;
}