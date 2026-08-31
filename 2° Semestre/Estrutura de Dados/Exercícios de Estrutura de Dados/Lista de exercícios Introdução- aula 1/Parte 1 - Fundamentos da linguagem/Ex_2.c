// 2. Fa¸ca um programa que leia a idade de uma pessoa e informe se ela pode votar (idade minima: 16 anos).

#include <locale.h>
#include <stdio.h>
int main() {
    setlocale(LC_ALL, "Portuguese");
    
    // Declaração de variáveis
    int idade = 0;
    
    // Entrada 
    printf ("Informe sua idade: ");
    scanf ("%d", &idade);
    
    // Processamento e saída
    if (idade >= 16){
        printf ("De acordo com a idade informada, já é permitido votar");
    }else{
        printf ("Você não possui a idade mínima para votar");
    }
    
    return 0;
}