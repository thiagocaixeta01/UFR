#include <stdio.h>

int main() {
    int inicio, fim;
    
    printf ("Digite o inicio: ");
    scanf ("%d", &inicio);
    
    printf ("Digite o fim: ");
    scanf ("%d", &fim);
    
    printf ("\nIntervalo: %d a %d\n", inicio,fim);
    printf ("\n------------------------\n");
    
    if (inicio < fim){
        
        while (inicio <= fim){
            printf ("%d ", inicio);
            inicio++;
        }
    }else{
        printf ("Intervalo inválido\n");
    }
    
    printf ("\n------------------------\n");

    return 0;
}