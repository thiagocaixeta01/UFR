#include <stdio.h>
#include <locale.h>

void espelho_recursivo(int n) {
    if (n == 0) {
        return;
    }
    printf("%d", n % 10);

    espelho_recursivo(n / 10);
}
int main() {
    setlocale(LC_ALL, "Portuguese");

    int numero;

    printf("Digite um número inteiro positivo: ");
    scanf("%d", &numero);

    printf("O número invertido é: ");
    
    if (numero == 0) {
        printf("0");
    } else {
        espelho_recursivo(numero);
    }

    return 0;
}