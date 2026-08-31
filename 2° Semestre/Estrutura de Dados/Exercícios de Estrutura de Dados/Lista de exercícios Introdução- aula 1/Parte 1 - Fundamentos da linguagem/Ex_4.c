// 4. Utilize o comando switch para criar um pequeno menu com 3 opções:
// ? 1 - Novo cadastro
// ? 2 - Consultar
// ? 3 - Sair

#include <locale.h>
#include <stdio.h>

int main() {
    setlocale(LC_ALL, "Portuguese");
    
    // Declaração de variáveis
    int opcao = 0;
    
    // Entrada 
    printf ("Menu\n 1 - Novo cadastro\n 2 - Consultar\n 3 - Sair\n");
    scanf ("%d", &opcao);

    // Processamento e saída
    switch (opcao){
        case 1: printf ("Opção escolhida foi: 1 - Novo cadastro");
                break;
        case 2: printf ("Opção escolhida foi: 2 - Consultar");
                break;
        case 3: printf ("Opção escolhida foi: 3 - Sair");
                break;
        default: printf ("Opção inválida");
                break;
    }

    return 0;
}