#include <stdio.h>

int main(){

    int soma = 0;
    int num;

    printf ("Digite um número: ");
    scanf ("%d", &num);

    for (int i=1; i<=num; i++){
        soma += i;
    }

    printf ("Soma = %d", soma);
}