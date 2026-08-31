#include <stdio.h>

int main() {
    int inicio, fim;
    
    printf ("Digite o inicio: ");
    scanf ("%d", &inicio);
    
    printf ("Digite o fim: ");
    scanf ("%d", &fim);
    
    printf ("\nIntervalo: %d a %d\n", inicio,fim);
    printf ("------------------------\n");
    
    if (inicio > fim){
        printf ("Intervalo inválido\n");
        return 0;
    }

    if (inicio % 2 == 1){
        inicio++;
    }

    while (inicio <= fim) {
       printf ("%d ", inicio);
       inicio += 2;    }
    
    
    printf ("\n------------------------\n");

    return 0;
}