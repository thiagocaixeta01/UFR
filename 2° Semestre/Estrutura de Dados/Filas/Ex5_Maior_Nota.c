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

int consulta_Fila(Fila* fi, Aluno *al) {
    if(fi == NULL || Fila_vazia(fi))
        return 0;

    *al = fi->dados[fi->inicio];
    return 1;
}

void imprime_maior_nota(Fila* fi) {
    if(fi == NULL || Fila_vazia(fi)) {
        printf("Fila vazia.\n");
        return;
    }

    Aluno maior = fi->dados[fi->inicio];
    int i = fi->inicio;

    for(int j = 0; j < fi->qtd; j++) {
        Aluno al = fi->dados[i];
        float media_al = (al.n1 + al.n2 + al.n3) / 3.0;
        float media_maior = (maior.n1 + maior.n2 + maior.n3) / 3.0;

        if(media_al > media_maior) {
            maior = al;
        }
        i = (i + 1) % MAX;
    }

    printf("Matricula: %d\n", maior.matricula);
    printf("Nome: %s\n", maior.nome);
    printf("Notas: %.2f, %.2f, %.2f\n", maior.n1, maior.n2, maior.n3);
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


    printf("--- Aluno com a maior nota ---\n");
    printf("===============================\n");

    imprime_maior_nota(fi);

    libera_Fila(fi);
    return 0;
}