// 8. Implemente um programa que leia 5 nomes e os imprima em ordem inversa.

#include <locale.h>
#include <stdio.h>

int main() {
    setlocale(LC_ALL, "Portuguese");

    // Declaração de variáveis
    char nomes[5][30];
    int i;

    // Processamento e entrada
    printf("Digite 5 nomes:\n");
    for (i = 0; i < 5; i++) {
        printf("%dº nome: ", i + 1);
        scanf("%s", nomes[i]); 
    }

    // Saída
    printf("\nNomes em ordem inversa:\n");
    for (i = 4; i >= 0; i--) {
        printf("%s\n", nomes[i]);
    }

    return 0;
}