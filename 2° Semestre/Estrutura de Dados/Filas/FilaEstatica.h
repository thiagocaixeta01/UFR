#ifndef FILAESTATICA_H
#define FILAESTATICA_H

#define MAX 100

typedef struct {
    int matricula;
    char nome[30];
    float n1, n2, n3;
} Aluno;

typedef struct fila Fila;

Fila* cria_Fila();
void libera_Fila(Fila* fi);

int insere_Fila(Fila* fi, Aluno al);
int remove_Fila(Fila* fi);

int tamanho_Fila(Fila* fi);
int Fila_vazia(Fila* fi);
int Fila_cheia(Fila* fi);

int busca_Fila(Fila* fi, int matricula);
int consulta_Fila(Fila* fi, Aluno *al);

void inverte_Fila(Fila* fi);
void imprime_Fila(Fila* fi);
void imprimir_aluno(Aluno al);
void imprime_maior_nota(Fila* fi);

// Exercício 8 - Simulação de Atendimento
typedef struct {
    int senha;
    char nome[50];
} Cliente;

void libera_Fila(Fila *fi);

int inserir_cliente(Fila *fi, Cliente cl);
int atender_cliente(Fila *fi);
void exibir_fila(Fila *fi);
int quantidade_clientes(Fila *fi);


#endif 