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

int busca_Fila(Fila* fi, int matricula) {
    if(fi == NULL || Fila_vazia(fi))
        return 0;

    int i = fi->inicio;
    for(int j = 0; j < fi->qtd; j++) {
        if(fi->dados[i].matricula == matricula) {
            return 1; 
        }
        i = (i + 1) % MAX;
    }
    return 0; 
}

void imprimir_aluno(Aluno al) {
    printf("Matricula: %d\n", al.matricula);
    printf("Nome: %s\n", al.nome);
    printf("Notas: %.2f, %.2f, %.2f\n", al.n1, al.n2, al.n3);
    printf("-------------------------\n");
}

void libera_Fila(Fila* fi) {
    if(fi != NULL) {
        free(fi);
    }
}

int main() {
    Fila* fi = cria_Fila();
    int matricula;

    Aluno al1 = {123, "Joao", 7.5, 8.0, 9.0};
    Aluno al2 = {456, "Maria", 6.0, 7.0, 8.5};
    Aluno al3 = {789, "Pedro", 9.0, 9.5, 10.0};

    insere_Fila(fi, al1);
    insere_Fila(fi, al2);
    insere_Fila(fi, al3);

    printf("Qual matricula deseja buscar? ");
    scanf("%d", &matricula);

    printf("--- Busca de elemento ---\n");
    printf("===============================\n");
    if(busca_Fila(fi, matricula)) {
        printf("-- Aluno encontrado ---\n");
        for(int i = 0; i < fi->qtd; i++) {
            int index = (fi->inicio + i) % MAX;
            if(fi->dados[index].matricula == matricula) {
                imprimir_aluno(fi->dados[index]);
                break;
            }
        }
    } else {
        printf("Aluno com matricula %d nao encontrado.\n", matricula);
    }

    libera_Fila(fi);
    return 0;
}