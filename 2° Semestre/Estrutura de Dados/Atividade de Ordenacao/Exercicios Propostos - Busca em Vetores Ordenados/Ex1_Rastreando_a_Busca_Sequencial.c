#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese");
    // Corrigido: sem tamanho fixo para acomodar todos os elementos
    int vetor[] = {25, 12, 7, 42, 18, 30}; 
    int tamanho = 6; 
    int valorBusca = 18;
    
    // 1. Declare aqui uma variável para contar as comparações (inicie em 0)
    int comparacoes = 0;
    
    // 2. Declare uma variável flag para saber se o valor foi encontrado (0 = não, 1 = sim)
    int encontrou = 0;   
    int posicao = -1;

    // 3. Loop: percorra de 0 até tamanho - 1
    for (int i = 0; i < tamanho; i++) {     
        // A. Incremente a variável de comparação aqui
        comparacoes++;       
        // B. Verifique se o elemento atual (vetor[i]) é igual ao valorBusca
        if (vetor[i]==valorBusca) {
            // C. Se encontrar: salve a posição, mude a flag para 1 e saia do loop
            posicao = i;
            encontrou = 1;
            break; 
        }
    }

    // 4. Verificação final: se encontrou, imprima a posição e o total de comparações
    // Caso contrário, imprima que não foi encontrado e o total de comparações
    if (encontrou == 1) {
        printf("Valor encontrado na posição [%d].\nTotal de comparações: %d.\n", posicao, comparacoes);
    } else {
        printf("Valor não encontrado.\nTotal de comparações: %d\n", comparacoes);
    }

    return 0;
}