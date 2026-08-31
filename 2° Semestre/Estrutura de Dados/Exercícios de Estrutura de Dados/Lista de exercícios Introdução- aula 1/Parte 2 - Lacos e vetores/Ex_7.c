// 7. Escreva uma função em C que receba um vetor de inteiros e retorne o maior valor contido nele.

#include <locale.h>
#include <stdio.h>

// Função que recebe o vetor e retorna o maior valor
int encontrarMaior(int v[], int tamanho) {
    int maior = v[0];
    for (int i = 1; i < tamanho; i++) {
        if (v[i] > maior) {
            maior = v[i];
        }
    }
    return maior;
}

int main() {
    setlocale(LC_ALL, "Portuguese");
    
    int Vetor[5];
    int i;

    // Entrada de dados
    for (i = 0; i < 5; i++) {
        printf("Digite o %dº número: ", i + 1);
        scanf("%d", &Vetor[i]);
    }

    printf ("----Vetor formado----\n");
    for (i = 0; i < 5; i++){
        printf ("%d ", Vetor[i]);
    }

    // Chamada da função
    int resultado = encontrarMaior(Vetor, 5);

    // Saída
    printf("\nO maior número do vetor é: %d\n", resultado);

    return 0;
}