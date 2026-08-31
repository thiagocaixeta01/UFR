#include <stdio.h>

int main(){
    int n;
    
    // Define o tamanho do array.
    printf ("Digite a quantidade de elementos (N): ");
    scanf ("%d", &n);

    // Cria o array com a quantidade de n elementos.
    int array[n];

    // Preenche o array com os valores passados pelo usuário.
    for (int i=0; i<n; i++){
        printf ("Digite o valor para a posição [%d]: ", i);
        scanf ("%d", &array[i]);
    }

    // Imprime o array.
    printf ("\nValores do Array\n");
    for (int i=0; i<n; i++){
        printf ("Posição %d: %d\n", i, array[i]);
    }

    return 0;
}