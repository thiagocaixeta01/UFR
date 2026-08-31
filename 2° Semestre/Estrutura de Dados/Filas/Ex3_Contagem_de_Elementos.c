#include <stdio.h>
#include <stdlib.h>
#include "FilaEstatica.h"

struct fila {
    int inicio;
    int final;
    int qtd;
    Aluno dados[MAX];
};

Fila* cria_Fila() {
    Fila *fi;
    fi = (Fila*) malloc(sizeof(struct fila));

    if(fi != NULL) {
        fi->inicio = 0;
        fi->final = 0;
        fi->qtd = 0;
    }
    return fi;
}

int Fila_cheia(Fila* fi) {
    if(fi == NULL)
        return -1;
    return (fi->qtd == MAX);
}

int Fila_vazia(Fila* fi) {
    if(fi == NULL)
        return -1;
    return (fi->qtd == 0);
}

int insere_Fila(Fila* fi, Aluno al) {

    if(fi == NULL || Fila_cheia(fi))
        return 0;

    fi->dados[fi->final] = al;
    fi->final = (fi->final + 1) % MAX;
    fi->qtd++;

    return 1;
}

int tamanho_Fila(Fila* fi) {
    if(fi == NULL)
        return -1;
    return fi->qtd;
}

void libera_Fila(Fila* fi) {
    if(fi != NULL) {
        free(fi);
    }
}

int main() {
    Fila* fi = cria_Fila();

    Aluno al1 = {123, "Joao", 7.5, 8.0, 9.0};
    Aluno al2 = {456, "Maria", 6.0, 7.0, 8.5};
    Aluno al3 = {789, "Pedro", 9.0, 9.5, 10.0};

    insere_Fila(fi, al1);
    insere_Fila(fi, al2);
    insere_Fila(fi, al3);

    printf("--- Contagem de elementos ---\n");
    printf("===============================\n");
    printf("Tamanho da fila: %d\n", tamanho_Fila(fi));

    libera_Fila(fi);
    return 0;
}