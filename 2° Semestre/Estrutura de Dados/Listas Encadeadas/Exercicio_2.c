// Exerci­cio 2

#include <stdio.h>
#include <stdlib.h>

typedef struct reg {
    int conteudo ;
    struct reg * prox ;
} celula ;

int contagem_iterativa (celula *le){
    int n=0;
    celula *p;
    for (p = le; p != NULL; p = p->prox){
        n++;
    }
    return n;
}

int contagem_recursiva (celula *le){
    if (le == NULL){
        return 0;
    }
    return 1 + contagem_recursiva(le->prox);
}

int altura (celula *c){
    int h=0;
    celula *p=c;
    while (p->prox != NULL){
        p = p->prox;
        h++;
    }
    return h;
}

int profundidade (celula *inicio, celula *destino){
    int d=0;
    celula *p=inicio;
    while (p != destino){
        p = p->prox;
        d++;
    }
    return d;
}

int main() {

    // 1. Inicialização dos ponteiros
    celula *lista = NULL;  // Ponteiro de cabeça (início da lista)
    celula *ultimo = NULL; // Ponteiro auxiliar para o último nó inserido

    int num_elementos = 10;
    
    printf("--------- Criando lista encadeada com %d elementos ---------\n", num_elementos);

    // 2. CriaÃ§Ã£o e inserÃ§Ã£o dos 10 elementos
    for (int i = 0; i <= num_elementos; i++) {
        // Aloca memÃ³ria para uma nova cÃ©lula
        celula *nova_celula = (celula *)malloc(sizeof(celula));

        // VerificaÃ§Ã£o de erro de alocaÃ§Ã£o
        if (nova_celula == NULL) {
            printf("Erro de alocaÃ§Ã£o de memÃ³ria.\n");
            break; // Sai do loop
        }

        // Preenche o conteÃºdo e garante que o novo nÃ³ aponta para NULL
        nova_celula->conteudo = i * 10;
        nova_celula->prox = NULL;

        // Conecta a nova cÃ©lula Ã  lista
        if (lista == NULL) {
            // Se a lista estiver vazia, a nova cÃ©lula Ã© a cabeÃ§a
            lista = nova_celula;
        } else {
            // Se nção estiver vazia, o 'prox' do Ãºltimo nÃ³ aponta para o novo
            ultimo->prox = nova_celula;
        }

        // Atualiza o ponteiro 'ultimo' para o nÃ³ recÃ©m-adicionado
        ultimo = nova_celula;
    }
    
    // --- Exibição da Lista ---
    printf("\nElementos: \n");
    celula *atual = lista; // Ponteiro auxiliar para percorrer
    while (atual != NULL) {
        printf("%d -> ", atual->conteudo);
        atual = atual->prox;
    }
    printf("NULL\n");

    // ------ Exibição da contagem (Iterativa e Recursiva) ------
    printf("\n\tContagem iterativa das cÃ©lulas: %d\n", contagem_iterativa(lista));
    printf("\tContagem recursiva das cÃ©lulsa: %d\n", contagem_recursiva(lista));
    
    // ------ Exibição da altura e profundidade ------
    printf("\n\tAltura da cÃ©lula: %d\n", altura(lista));
    printf("\tProfundidade da cÃ©lula: %d\n", profundidade(lista, lista));
    
    return 0;
}