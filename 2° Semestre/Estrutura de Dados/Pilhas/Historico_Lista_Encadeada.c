#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct No {
    char url[100];
    struct No *prox;
} No;

typedef struct {
    No *topo;
} Pilha;

void push(Pilha *p, char url[]) {
    No *novoNo = (No *)malloc(sizeof(No));
    if (novoNo != NULL) {
        strcpy(novoNo->url, url);
        novoNo->prox = p->topo;
        p->topo = novoNo;
    } else {
        printf("Erro ao alocar memória para nova página.\n");
    }
}


void pop(Pilha *p) {
    if (p->topo != NULL) {
        No *temp = p->topo;
        p->topo = p->topo->prox;
        free(temp);
    } else {
        printf("Pilha vazia! Não há páginas para remover.\n");
    }
}


char* top(Pilha *p) {
    if (p->topo != NULL) {
        return p->topo->url;
    } else {
        printf("Pilha vazia! Não há páginas para mostrar.\n");
        return NULL;
    }
}


int pilhaVazia(Pilha *p) {
    return p->topo == NULL;
}


void imprimir(Pilha *p) {
    if (pilhaVazia(p)) {
        printf("Pilha vazia! Não há páginas para imprimir.\n");
    } else {
        printf("Histórico de navegação:\n");
        No *atual = p->topo;
        int contador = 1;
        while (atual != NULL) {
            printf("%d: %s\n", contador, atual->url);
            atual = atual->prox;
            contador++;
        }
    }
}


int main() {
    Pilha historico;
    historico.topo = NULL;

    printf("+--- Escolha a opção desejada ---+\n");
    printf("| 1. Visitar uma nova página     |\n");
    printf("| 2. Voltar página               |\n");
    printf("| 3. Mostrar página atual        |\n");
    printf("| 4. Mostrar histórico           |\n");
    printf("| 5. Sair                        |\n");
    printf("+--------------------------------+\n");

    int opcao;
    char url[100];

    do {
        printf("Digite a opção: ");
        scanf("%d", &opcao);
        getchar();

        switch (opcao) {
            case 1:
                printf("Digite a URL da nova página: ");
                fgets(url, sizeof(url), stdin);
                url[strcspn(url, "\n")] = '\0';
                push(&historico, url);
                break;
            case 2:
                printf("Página removida: %s\n", top(&historico));
                pop(&historico);
                break;
            case 3: {
                char *paginaAtual = top(&historico);
                if (paginaAtual != NULL) {
                    printf("Página atual: %s\n", paginaAtual);
                }
                break;
            }
            case 4:
                imprimir(&historico);
                break;
            case 5:
                printf("Saindo...\n");
                break;
            default:
                printf("Opção inválida! Tente novamente.\n");
        }
    } while (opcao != 5);
}    