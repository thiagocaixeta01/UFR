/************************************************************************************************************************ 
- Questões para reflexão (Responda às perguntas abaixo no envio da atividade:)

- Como os ponteiros ant e prox são atualizados durante a remoção de um nó intermediário?

Na remoção de um nó intermediário, os ponteiros dos nós vizinhos são redirecionados para pulá-lo: o prox do nó anterior 
passa a apontar para o nó posterior (atual->ant->prox = atual->prox), e o ant do nó posterior passa a apontar para o 
anterior (atual->prox->ant = atual->ant), isolando o elemento antes de sua liberação.

- Qual a principal vantagem da lista duplamente encadeada em relação à lista simplesmente encadeada?

A principal vantagem é a bidirecionalidade, que permite percorrer a lista tanto para frente quanto para trás. Isso elimina 
a necessidade de reiniciar a busca do topo para encontrar um elemento anterior, tornando operações de inserção e remoção 
muito mais rápidas quando você já está posicionado no nó.


- Por que é importante liberar toda a memória antes do encerramento do programa?

É vital para evitar vazamentos de memória (memory leaks), garantindo que a memória RAM alocada dinamicamente seja devolvida 
ao sistema. Essa prática previne o travamento de programas de longa execução (como servidores) e assegura que o código seja 
eficiente, limpo e portável.

************************************************************************************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

typedef struct No {
    int valor;
    struct No* prox;
    struct No* ant;
} No;

// Protótipos das funções
void inserirInicio(No** inicio, int valor);
void inserirFim(No** inicio, int valor);
void remover(No** inicio, int valor);
void exibirDireto(No* inicio);
void exibirReverso(No* inicio);
void liberarLista(No** inicio);

// Função de inserção no início - (Esta função permite que o usuário insira um valor no início da lista, ajustando os 
// ponteiros adequadamente para manter a integridade da estrutura.)
void inserirInicio(No** inicio, int valor) {

    No* novo = malloc(sizeof(No));

    if (novo == NULL) {
        printf("Erro de alocação de memória.\n");
        return;
    }

    novo->valor = valor;
    novo->ant = NULL;
    novo->prox = *inicio;

    // Atualiza o ponteiro anterior do antigo primeiro nó
    if (*inicio != NULL)
        (*inicio)->ant = novo;

    // Atualiza o início da lista
    *inicio = novo;
}

// Função de inserção no fim - (Esta função permite que o usuário insira um valor no final da lista, percorrendo até o 
// último nó e ajustando os ponteiros.)
void inserirFim(No** inicio, int valor) {

    No* novo = malloc(sizeof(No));

    if (novo == NULL) {
        printf("Erro de alocação de memória.\n");
        return;
    }

    novo->valor = valor;
    novo->prox = NULL;

    // Lista vazia
    if (*inicio == NULL) {
        novo->ant = NULL;
        *inicio = novo;
        return;
    }

    // Percorre até o último nó
    No* atual = *inicio;

    while (atual->prox != NULL)
        atual = atual->prox;

    // Ajusta os ponteiros
    atual->prox = novo;
    novo->ant = atual;
}

// Função de remoção - (Esta função permite que o usuário remova um valor da lista, ajustando os ponteiros dos nós vizinhos 
// para manter a integridade da estrutura.)
void remover(No** inicio, int valor) {

    No* atual = *inicio;

    // Percorre a lista até encontrar o valor ou o final
    while (atual != NULL && atual->valor != valor)
        atual = atual->prox;

    // Valor não encontrado
    if (atual == NULL)
        return;

    // Ajusta o encadeamento do nó anterior
    if (atual->ant != NULL)
        atual->ant->prox = atual->prox;
    else
        *inicio = atual->prox;

    // Ajusta o encadeamento do próximo nó
    if (atual->prox != NULL)
        atual->prox->ant = atual->ant;

    // Libera a memória do nó removido
    free(atual);
}

// Função para exibir a lista do início ao fim (DIRETO) - (Esta função percorre a lista do início ao fim, exibindo os 
// valores dos nós na ordem em que foram inseridos.)
void exibirDireto(No* inicio) {

    No* atual = inicio;

    while (atual != NULL) {
        printf("%d ", atual->valor);
        atual = atual->prox;
    }

    printf("\n");
}

// Função para exibir a lista do fim ao início (REVERSO) - (Esta função percorre a lista do fim ao início, exibindo os 
// valores dos nós na ordem inversa à que foram inseridos.)
void exibirReverso(No* inicio) {

    No* atual = inicio;

    if (atual == NULL)
        return;

    // Vai até o último nó
    while (atual->prox != NULL)
        atual = atual->prox;

    // Percorre no sentido reverso
    while (atual != NULL) {
        printf("%d ", atual->valor);
        atual = atual->ant;
    }

    printf("\n");
}

// Função para liberar toda a memória alocada pela lista - (Esta função percorre a lista, liberando a memória de cada nó 
// para evitar vazamentos de memória antes do encerramento do programa.)
void liberarLista(No** inicio) {

    No* atual = *inicio;

    while (atual != NULL) {
        No* temp = atual;
        atual = atual->prox;
        free(temp);
    }

    *inicio = NULL;
}

// Função adicional - Buscar um valor na lista - (Esta função percorre a lista em busca de um valor específico, retornando 
// o ponteiro para o nó encontrado ou NULL caso não seja localizado.)
No* buscar(No* inicio, int valor) {

    No* atual = inicio;

    while (atual != NULL) {

        if (atual->valor == valor)
            return atual;

        atual = atual->prox;
    }

    return NULL;
}

int main() {
    setlocale(LC_ALL, "Portuguese");

    No* lista = NULL;

    int opcao;
    int valor;

    do {

        printf("\n+------------ MENU ------------+\n");
        printf("| 1 - Inserir no início        |\n");
        printf("| 2 - Inserir no fim           |\n");
        printf("| 3 - Remover valor            |\n");
        printf("| 4 - Mostrar lista (direto)   |\n");
        printf("| 5 - Mostrar lista (reverso)  |\n");
        printf("| 6 - Buscar valor (Bônus)     |\n");
        printf("| 0 - Sair                     |\n");
        printf("+------------------------------+\n");

        printf("Opção: ");
        scanf("%d", &opcao);

        switch(opcao) {

            case 1:
                printf("Valor: ");
                scanf("%d", &valor);

                inserirInicio(&lista, valor);
                break;

            case 2:
                printf("Valor: ");
                scanf("%d", &valor);

                inserirFim(&lista, valor);
                break;

            case 3:
                printf("Valor a remover: ");
                scanf("%d", &valor);

                remover(&lista, valor);
                break;

            case 4:
                printf("Lista (direto): ");
                exibirDireto(lista);
                break;

            case 5:
                printf("Lista (reverso): ");
                exibirReverso(lista);
                break;

            case 0:
                liberarLista(&lista);
                printf("Encerrando programa...\n");
                break;

            case 6:
                printf("Valor a buscar: ");
                scanf("%d", &valor);
                No* encontrado = buscar(lista, valor);
                if (encontrado != NULL)
                    printf("Valor %d encontrado na lista.\n", valor);
                else
                    printf("Valor %d não encontrado na lista.\n", valor);
                break;

            default:
                printf("Opção inválida!\n");
        }

    } while(opcao != 0);

    return 0;
}