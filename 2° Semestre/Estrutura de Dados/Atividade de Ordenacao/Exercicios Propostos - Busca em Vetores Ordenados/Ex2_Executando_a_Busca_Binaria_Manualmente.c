#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese");

    int vetor[] = {5, 10, 15, 20, 25, 30, 35, 40, 45, 50};
    int tamanho = 10;
    int valorBusca = 35;

    int inicio = 0;
    int fim = tamanho - 1;
    int meio;
    int posicao = -1;

    printf("Iniciando busca binaria por %d...\n", valorBusca);

    // O loop continua enquanto a area de busca existir
    while (inicio <= fim) {
        // 1. Calcule o meio
        meio = (inicio + fim) / 2;

        printf("Passo: Inicio=%d, Fim=%d, Meio=%d (Vetor[meio]=%d)\n", inicio, fim, meio, vetor[meio]);

        // 2. Verifique se o valor do meio e o que voce busca
        if (vetor[meio] == valorBusca) {
            posicao = meio;
            break;
            
        } 
        // 3. Se o valor do meio for MENOR que o buscado, ignore a metade esquerda
        else if (vetor[meio] < valorBusca) {
            inicio = meio +1;
            
        } 
        // 4. Se o valor do meio for MAIOR que o buscado, ignore a metade direita
        else {
            fim = meio - 1;
            
        }
    }

    if (posicao != -1) {
        printf("\nValor encontrado na posicao: %d\n", posicao);
    } else {
        printf("\nValor nao encontrado no vetor.\n");
    }

    return 0;
}