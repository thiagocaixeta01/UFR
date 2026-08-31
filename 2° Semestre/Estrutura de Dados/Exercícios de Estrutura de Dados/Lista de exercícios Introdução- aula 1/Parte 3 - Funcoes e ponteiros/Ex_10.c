/* 10. Implemente um programa que utilize ponteiros para trocar o valor de duas variáveis 
(dica: use uma função void troca(int *a, int *b)). */

#include <locale.h>
#include <stdio.h>

// Função que recebe ENDEREÇOS de memória
void troca(int *a, int *b) {
    int temp;
    
    // 1. Guarda o valor apontado por 'a' na variável temporária
    temp = *a;
    
    // 2. O valor apontado por 'a' recebe o valor apontado por 'b'
    *a = *b;
    
    // 3. O valor apontado por 'b' recebe o que guardamos em 'temp'
    *b = temp;
}

int main() {
    setlocale(LC_ALL, "Portuguese");

    int x = 10;
    int y = 20;

    printf("Antes: x = %d, y = %d\n", x, y);

    // 4. Chamamos a função passando o ENDEREÇO das variáveis
    troca(&x, &y);

    printf("Depois: x = %d, y = %d\n", x, y);

    return 0;
}  