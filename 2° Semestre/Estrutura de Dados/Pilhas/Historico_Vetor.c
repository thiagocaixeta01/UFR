#include <stdio.h>
#include <string.h>

#define TAM 100

typedef struct {
char paginas[TAM][100];
int topo;
} Pilha;

void push(Pilha *p, char url[]) {
    if (p->topo < TAM) {
        p->topo++;
        strcpy(p->paginas[p->topo], url);
    } else {
        printf("Pilha cheia! Não é possível adicionar mais páginas.\n");
    }  
}


void pop(Pilha *p) {
    if (p->topo > 0) {
        p->topo--;
    } else {
        printf("Pilha vazia! Não há páginas para remover.\n");
    }
}


char* top(Pilha *p) {
    if (p->topo > 0) {
        return p->paginas[p->topo];
    } else {
        printf("Pilha vazia! Não há páginas para mostrar.\n");
        return NULL;
    }
}


int pilhaVazia(Pilha *p) {
    return p->topo == 0;
}


void imprimir(Pilha *p) {
    if (pilhaVazia(p)) {
        printf("Pilha vazia! Não há páginas para imprimir.\n");
    } else {
        printf("Histórico de navegação:\n");
        for (int i = p->topo; i > 0; i--) {
            printf("%d: %s\n", i, p->paginas[i]);
        }
    }
}

int main() {
    Pilha historico;
    historico.topo = 0;

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
                if (!pilhaVazia(&historico)) {
                    printf("Página removida: %s\n", top(&historico));
                    pop(&historico);
                }
                break;
            case 3:
                printf("Página atual: %s\n", top(&historico));
                break;
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