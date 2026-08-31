#ifndef FUNCOES_H
#define FUNCOES_H

typedef struct {
    int matricula;
    char nome[50];
    float nota1;
    float nota2;
    float media;
} Aluno;

void lerAluno(Aluno *a);
float calcularMedia(Aluno a);
void imprimirAluno(Aluno a);

#endif