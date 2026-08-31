#include <stdio.h>

int main() {
    int inicio, fim;
    
    printf ("Digite o inicio: ");
    scanf ("%d", &inicio);
    
    printf ("Digite o fim: ");
    scanf ("%d", &fim);
    
    printf ("\nIntervalo: %d a %d\n", inicio,fim);
    printf ("------------------------\n");
    
    while (fim >= inicio)
    {
        printf ("%d ", fim);
        fim--;
    }
    
    printf ("\n------------------------\n");

    return 0;
}