#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "FilaEstatica.h"

#define MAX 100

typedef struct fila {
    int inicio;
    int final;
    int qtd;
    Cliente dados[MAX];
} Fila;

Fila* cria_Fila() {
    Fila *fi = (Fila*) malloc(sizeof(Fila));

    if(fi != NULL) {
        fi->inicio = 0;
        fi->final = 0;
        fi->qtd = 0;
    }

    return fi;
}

int Fila_vazia(Fila *fi) {
    if(fi == NULL)
        return 1;

    return (fi->qtd == 0);
}

int Fila_cheia(Fila *fi) {
    if(fi == NULL)
        return 0;

    return (fi->qtd == MAX);
}

int inserir_cliente(Fila *fi, Cliente cl) {
    if(fi == NULL || Fila_cheia(fi))
        return 0;

    fi->dados[fi->final] = cl;

    fi->final = (fi->final + 1) % MAX;

    fi->qtd++;

    return 1;
}

int atender_cliente(Fila *fi) {
    if(fi == NULL || Fila_vazia(fi))
        return 0;

    Cliente cl = fi->dados[fi->inicio];

    printf("\nCliente atendido:\n");
    printf("Senha: %d\n", cl.senha);
    printf("Nome: %s\n", cl.nome);

    fi->inicio = (fi->inicio + 1) % MAX;

    fi->qtd--;

    return 1;
}

void exibir_fila(Fila *fi) {
    if(fi == NULL || Fila_vazia(fi)) {
        printf("\nFila vazia!\n");
        return;
    }

    int i = fi->inicio;

    printf("\n=== FILA ATUAL ===\n");

    for(int cont = 0; cont < fi->qtd; cont++) {
        printf("Senha: %d | Nome: %s\n",
               fi->dados[i].senha,
               fi->dados[i].nome);

        i = (i + 1) % MAX;
    }
}

int quantidade_clientes(Fila *fi) {
    if(fi == NULL)
        return 0;

    return fi->qtd;
}

void libera_Fila(Fila *fi) {
    if(fi != NULL) {
        free(fi);
    }
}

int main() {
    Fila *fi = cria_Fila();

    int opcao;
    int senha = 1;

    do {
        printf("\n+------ SISTEMA DE ATENDIMENTO ------+\n");
        printf("| 1 - Adicionar cliente              |\n");
        printf("| 2 - Realizar atendimento           |\n");
        printf("| 3 - Exibir fila                    |\n");
        printf("| 4 - Quantidade de clientes         |\n");
        printf("| 0 - Sair                           |\n");
        printf("+------------------------------------+\n");

        printf("Opcao: ");
        scanf("%d", &opcao);

        switch(opcao) {

            case 1: {
                Cliente cl;

                cl.senha = senha++;

                printf("Nome do cliente: ");
                getchar();
                fgets(cl.nome, sizeof(cl.nome), stdin);
                cl.nome[strcspn(cl.nome, "\n")] = '\0';

                if(inserir_cliente(fi, cl))
                    printf("Cliente adicionado!\n");
                else
                    printf("Fila cheia!\n");

                break;
            }

            case 2:
                if(!atender_cliente(fi))
                    printf("Fila vazia!\n");
                break;

            case 3:
                exibir_fila(fi);
                break;

            case 4:
                printf("\nClientes aguardando: %d\n",
                       quantidade_clientes(fi));
                break;

            case 0:
                printf("Encerrando...\n");
                break;

            default:
                printf("Opcao invalida!\n");
        }

    } while(opcao != 0);

    libera_Fila(fi);
    return 0;
}