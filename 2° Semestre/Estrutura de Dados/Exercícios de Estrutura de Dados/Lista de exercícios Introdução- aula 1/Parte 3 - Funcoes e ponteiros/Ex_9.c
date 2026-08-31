/* 9. Crie uma funçao que receba dois números inteiros e retorne o resultado da multiplicação sem usar o operador *.*/

#include <locale.h>
#include <stdio.h>

int multiplicar(int a, int b) {
    setlocale(LC_ALL, "Portuguese");

    // 1. O acumulador começa em 0 para não sujar a conta
    int resultado = 0;

    // 2. O loop repete 'a' vezes (de 0 até que i seja menor que a)
    for (int i = 0; i < a; i++) {
        // 3. Somamos 'b' ao valor que já tínhamos no resultado
        resultado = resultado + b; 
        // Dica: você também pode escrever como: resultado += b;
    }

    // 4. Retorna o valor acumulado após todas as somas
    return resultado;
}

int main() {
    int num1 = 5;
    int num2 = 4;
    
    int r = multiplicar(num1, num2);
    
    printf("O resultado de %d x %d e: %d\n", num1, num2, r);
    
    return 0;
}