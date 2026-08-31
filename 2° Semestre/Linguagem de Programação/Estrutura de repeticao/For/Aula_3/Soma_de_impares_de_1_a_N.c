#include <stdio.h>

int main(){

    int num, soma = 0;

    printf ("Digite um número: ");
    scanf ("%d", &num);

    for (int i=0; i<=num; i++){
        if (i % 2 == 1){
            soma += i;
        }
    }
    printf ("Soma = %d", soma);
}