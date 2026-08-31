#include <stdio.h>

int main(){

    int num;

    printf ("Digite um número positivo: ");
    scanf ("%d", &num);

    for (int i=num; i>=1; i--){
        printf ("%d ", i);
    }
}