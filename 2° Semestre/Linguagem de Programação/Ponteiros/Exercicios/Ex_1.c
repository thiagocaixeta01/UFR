#include <stdio.h>

int main () {

    int x = 10;
    int* px = &x; // Ponteiro para a variável x

    // Acessa o valor armazenado em x usando o ponteiro
    // No endereço apontado por pi
    
    int valor_x = *px; // Desreferencia o ponteiro para obter o valor de x
    printf("Valor de x: %d\n", valor_x); // Imprime o valor de x

    int y = 10;
    int* py = &y; // Ponteiro para a variável y

    // Modifica o valor de i usando o ponteiro
    *py = 20; // Atribui um novo valor a y através do ponteiro
    printf("Novo valor de y: %d\n", y); // Imprime o novo valor de y


    return 0;
}