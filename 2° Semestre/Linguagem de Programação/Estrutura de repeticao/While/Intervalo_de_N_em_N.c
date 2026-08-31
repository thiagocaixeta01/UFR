#include <stdio.h>

int main() {
    int inicio, fim, n;
    
    printf ("Digite o inicio: ");
    scanf ("%d", &inicio);
    
    printf ("Digite o fim: ");
    scanf ("%d", &fim);

    printf ("Digite o N: ");
    scanf ("%d", &n);
    
    printf ("\nIntervalo: %d a %d\n", inicio,fim);
    printf ("------------------------\n");

    while (inicio <= fim) {
       printf ("%d ", inicio);
       inicio += n;    
    }
    
    printf ("\n------------------------\n");

    return 0;
}