#include <stdio.h>
#include <stdlib.h>

typedef struct reg {
    int conteudo ;
    struct reg * prox ;
} celula ;

// Reescrita de busca para listas encadeadas com cabeça
celula* busca(int x, celula *le) {
    celula *p = le->prox;
    while (p != NULL && p->conteudo != x) {
        p = p->prox;
    }
    return p;
}

// Reescrita de busca_r para listas encadeadas com cabeça
celula* busca_r(int x, celula *le) {
    if (le == NULL || le->prox == NULL) {
        if (le != NULL && le->conteudo == x) return le; 
        return NULL;
    }
    
    celula *primeiro_util = le->prox;
    if (primeiro_util->conteudo == x) return primeiro_util;
    
    return busca_r(x, primeiro_util);
}

// Verificação da lista encadeada com cabeça para ver se está em ordem crescente
int esta_crescente_com_cabeca(celula *le) {
    celula *p = le->prox;

    while (p != NULL && p->prox != NULL) {
        if (p->conteudo > p->prox->conteudo) {
            return 0;
        }
        p = p->prox;
    }
    
    return 1;
}