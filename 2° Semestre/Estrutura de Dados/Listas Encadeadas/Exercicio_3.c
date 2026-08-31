#include <stdio.h>
#include <stdlib.h>

typedef struct celula {
    int conteudo;
    struct celula *prox;
} celula;

// Verificação ordem crescente
int esta_crescente(celula *lst) {
    celula *p = lst;
    while (p != NULL && p->prox != NULL) {
        if (p->conteudo > p->prox->conteudo) {
            return 0;
        }
        p = p->prox;
    }
    return 1;
}

// Busca em lista encadeada crescente

// ------ Forma iterativa ------
celula* busca_iterativa(celula *lst, int x) {
    celula *p = lst;
    while (p != NULL && p->conteudo < x) {
        p = p->prox;
    }
    if (p != NULL && p->conteudo == x) {
        return p;
    }
    return NULL;
}

// ------ Forma recursiva ------
celula* busca_recursiva(celula *lst, int x) {
    if (lst == NULL || lst->conteudo > x) return NULL;
    if (lst->conteudo == x) return lst;
    return busca_recursiva(lst->prox, x);
}

// Encontrar o menor valor

// ------ Forma iterativa ------
celula* menor_iterativo(celula *lst) {
    if (lst == NULL) return NULL;
    celula *menor = lst;
    for (celula *p = lst->prox; p != NULL; p = p->prox) {
        if (p->conteudo < menor->conteudo) {
            menor = p;
        }
    }
    return menor;
}

// ------ Forma recursiva ------
celula* menor_recursivo(celula *lst) {
    if (lst == NULL || lst->prox == NULL) return lst;
    celula *m = menor_recursivo(lst->prox);
    return (lst->conteudo < m->conteudo) ? lst : m;
}

// Comparar duas listas

// ------ Forma iterativa ------
int sao_iguais_iterativo(celula *l1, celula *l2) {
    while (l1 != NULL && l2 != NULL) {
        if (l1->conteudo != l2->conteudo) return 0;
        l1 = l1->prox;
        l2 = l2->prox;
    }
    return (l1 == NULL && l2 == NULL);
}

// ------ Forma recursiva ------
int sao_iguais_recursivo(celula *l1, celula *l2) {
    if (l1 == NULL && l2 == NULL) return 1;
    if (l1 == NULL || l2 == NULL || l1->conteudo != l2->conteudo) return 0;
    return sao_iguais_recursivo(l1->prox, l2->prox);
}

// Ponto médio
celula* ponto_medio(celula *lst) {
    if (lst == NULL) return NULL;
    
    celula *lento = lst;
    celula *rapido = lst;

    while (rapido != NULL && rapido->prox != NULL) {
        lento = lento->prox;        
        rapido = rapido->prox->prox; 
    }

    return lento;
}