#include <stdio.h>
#include <stdlib.h>

typedef struct reg {
    int conteudo ;
    struct reg * prox ;
} celula ;

// Nova celula
celula* insere_inicio(celula *lst, int x) {
    celula *nova = malloc(sizeof(celula));
    if (nova == NULL) return lst;
    nova->conteudo = x;
    nova->prox = lst;
    return nova;
}

// Copiar lista encadeada
// ------ Forma iterativa ------
celula* copia_iterativa(celula *lst) {
    if (lst == NULL) return NULL;
    celula *nova_lista = NULL, *ultimo = NULL;
    
    for (celula *p = lst; p != NULL; p = p->prox) {
        celula *novo_no = malloc(sizeof(celula));
        novo_no->conteudo = p->conteudo;
        novo_no->prox = NULL;
        if (nova_lista == NULL) nova_lista = novo_no;
        else ultimo->prox = novo_no;
        ultimo = novo_no;
    }
    return nova_lista;
}

// ------ Forma recursiva ------
celula* copia_recursiva(celula *lst) {
    if (lst == NULL) return NULL;
    celula *novo_no = malloc(sizeof(celula));
    novo_no->conteudo = lst->conteudo;
    novo_no->prox = copia_recursiva(lst->prox);
    return novo_no;
}

// Conectar duas listas encadeadas
// ------ Forma iterativa ------
celula* concatena_iterativa(celula *l1, celula *l2) {
    if (l1 == NULL) return l2;
    celula *p = l1;
    while (p->prox != NULL) p = p->prox;
    p->prox = l2;
    return l1;
}

// ------ Forma recursiva ------
celula* concatena_recursiva(celula *l1, celula *l2) {
    if (l1 == NULL) return l2;
    l1->prox = concatena_recursiva(l1->prox, l2);
    return l1;
}

// Inserir após a k-ésima célula
// ------ Forma iterativa ------
void insere_apos_k(celula *lst, int k, int x) {
    celula *p = lst;
    for (int i = 1; i < k && p != NULL; i++) p = p->prox;
    
    if (p != NULL) {
        celula *nova = malloc(sizeof(celula));
        nova->conteudo = x;
        nova->prox = p->prox;
        p->prox = nova;
    }
}

// ------ Forma recursiva ------
void insere_apos_k_r(celula *lst, int k, int x) {
    if (lst == NULL) return;
    if (k == 1) {
        celula *nova = malloc(sizeof(celula));
        nova->conteudo = x;
        nova->prox = lst->prox;
        lst->prox = nova;
        return;
    }
    insere_apos_k_r(lst->prox, k - 1, x);
}

// Troca duas celulas
celula* troca_celulas(celula *lst, int x, int y) {
    if (x == y || lst == NULL) return lst;

    celula *preX = NULL, *currX = lst;
    while (currX && currX->conteudo != x) { preX = currX; currX = currX->prox; }

    celula *preY = NULL, *currY = lst;
    while (currY && currY->conteudo != y) { preY = currY; currY = currY->prox; }

    if (!currX || !currY) return lst; 

    if (preX) preX->prox = currY; else lst = currY;
    if (preY) preY->prox = currX; else lst = currX;

    celula *temp = currY->prox;
    currY->prox = currX->prox;
    currX->prox = temp;

    return lst;
}

// Inverte a lista
// ------ Forma iterativa ------
celula* inverte_iterativa(celula *lst) {
    celula *ant = NULL, *p = lst, *prox;
    while (p != NULL) {
        prox = p->prox; 
        p->prox = ant;  
        ant = p;       
        p = prox;      
    }
    return ant; 
}

// ------ Forma recursiva ------
celula* inverte_recursiva(celula *lst) {
    if (lst == NULL || lst->prox == NULL) return lst;
    
    celula *nova_lista = inverte_recursiva(lst->prox);
    lst->prox->prox = lst; 
    lst->prox = NULL;     
    
    return nova_lista;
}