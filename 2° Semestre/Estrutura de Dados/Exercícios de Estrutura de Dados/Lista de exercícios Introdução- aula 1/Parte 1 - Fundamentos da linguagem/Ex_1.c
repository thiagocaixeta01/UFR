// 1. Escreva um programa em C que leia dois numeros inteiros e imprima o maior deles.

#include <locale.h>
#include <stdio.h>
int main() {
    setlocale(LC_ALL, "Portuguese");
    
    // Declaração de variáveis
    int Num1 = 0;
    int Num2 = 0;
    
    // Entrada 
    printf("Digite um número inteiro: ");
    scanf("%d", &Num1);
    
    printf("Digite um número inteiro: ");
    scanf("%d", &Num2);
    
    // Processamento e saída
    if (Num1 > Num2){
        printf("%d é maior que %d", Num1,Num2);
    }else{
        printf("%d é maior que %d", Num2,Num1);
    }
    
    return 0;
}