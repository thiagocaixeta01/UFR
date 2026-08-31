#include <stdio.h>

// Recursao
int potencia(int base, int expoente) {

    if (expoente == 0){ // Se o expoente for 0, o resultado e sempre 1
        return 1;
    }

    return base * potencia(base, expoente - 1); // Multiplica a base pelo resultado da potencia com o expoente decrementado em 1
}

int main() {

    int base, expoente;

    printf("Digite a base: ");
    scanf("%d", &base);

    printf("Digite o expoente: ");
    scanf("%d", &expoente);

    int resultado = potencia(base, expoente);

    printf("%d elevado a %d e: %d\n", base, expoente, resultado);

    return 0;
}