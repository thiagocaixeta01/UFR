#include <stdio.h>

int main(){

    int num;

    printf ("Digite um número: ");
    scanf ("%d", &num);

    for (int i=0; i<=num; i++){
        
        if (i % 2 == 1){
            printf ("%d ", i);
        }
    }
}