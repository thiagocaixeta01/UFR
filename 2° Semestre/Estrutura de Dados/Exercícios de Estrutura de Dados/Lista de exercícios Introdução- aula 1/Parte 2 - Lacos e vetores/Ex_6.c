// 6. Modifique o programa anterior para contar quantos dos n´umeros lidos s?ao pares.

#include <locale.h>
#include <stdio.h>

int main() {
    setlocale(LC_ALL, "Portuguese");
    
    // Declaração de variáveis
    int numero;
    int soma = 0;
    int pares = 0;
    float media = 0;

    // Processamento 
    for (int i = 0; i < 10; i++) {
        printf("Digite o %dº número: ", i + 1);
        scanf("%d", &numero);

        soma += numero;

        if (numero % 2 == 0){
            pares++;
        }
    }

    // Cálculos e saídas fora do loop
    media = soma / 10.0; 

    // Saída
    printf("\n--- Resultado Final ---\n");
    printf("A soma dos números informados é: %d\n", soma);
    printf("A média dos números informados é: %.2f\n", media);
    printf("Quantidade de números pares: %d\n", pares);

    return 0;

}