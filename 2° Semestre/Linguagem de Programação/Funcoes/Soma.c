#include <stdio.h>

// Recursao
int soma(int n) {

    if (n <= 1){ // Se n for menor ou igual a 1, o resultado e o proprio n
        return n;
    }

    return n + soma(n - 1); // Soma n com o resultado da soma com n decrementado em 1, ate chegar a 1
}

int main() {

    int n;

    printf("Digite um numero inteiro: ");
    scanf("%d", &n);

    int resultado = soma(n);

    printf("A soma dos numeros de 1 a %d e: %d\n", n, resultado);

    return 0;
}