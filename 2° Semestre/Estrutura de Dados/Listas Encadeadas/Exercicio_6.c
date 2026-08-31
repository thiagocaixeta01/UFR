#include <stdio.h>
#include <stdlib.h>

typedef struct reg {
    int conteudo ;
    struct reg * prox ;
} celula ;

// Liberar memória de uma lista encadeada
// ------ Forma iterativa ------
void libera_iterativa(celula *lst) {
    celula *p = lst;
    while (p != NULL) {
        celula *t = p->prox;
        free(p);
        p = t;
    }
}

// ------ Forma recursiva ------
void libera_recursiva(celula *lst) {
    if (lst != NULL) {
        libera_recursiva(lst->prox);
        free(lst);                  
    }
}

// Problema de Josephus
int josephus(int n, int m) {
    if (n <= 0 || m <= 0) return -1;

    celula *inicio = malloc(sizeof(celula));
    inicio->conteudo = 1;
    celula *p = inicio;

    for (int i = 2; i <= n; i++) {
        p->prox = malloc(sizeof(celula));
        p = p->prox;
        p->conteudo = i;
    }
    p->prox = inicio; 

    celula *atual = inicio;
    celula *anterior = p; 

    while (atual->prox != atual) { 

        for (int count = 1; count < m; count++) {
            anterior = atual;
            atual = atual->prox;
        }

        anterior->prox = atual->prox;
        printf("Pessoa %d eliminada.\n", atual->conteudo);
        free(atual);

        atual = anterior->prox;
    }

    int sobrevivente = atual->conteudo;
    free(atual); 
    return sobrevivente;
}