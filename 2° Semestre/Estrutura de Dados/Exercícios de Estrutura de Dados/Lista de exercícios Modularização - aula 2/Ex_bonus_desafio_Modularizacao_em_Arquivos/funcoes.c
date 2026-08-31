#include <stdio.h>
#include <string.h>
#include <locale.h>
#include "funcoes.h"

void lerAluno(Aluno *a){
    printf ("Matrícula: ");
    scanf ("%d", &a->matricula);
    
    printf ("Nome: ");
    getchar();
    fgets (a->nome, sizeof(a->nome), stdin);
    a->nome[strcspn(a->nome, "\n")] = '\0';
    
    printf ("Nota 1: ");
    scanf ("%f", &a->nota1);
    
    printf ("Nota 2: ");
    scanf ("%f", &a->nota2);
}

float calcularMedia(Aluno a){
    return (a.nota1 + a.nota2)/2;
}

void imprimirAluno(Aluno a){
    printf ("\n\tMatrícula: %d\n", a.matricula);
    printf ("\tNome do aluno: %s\n", a.nome);
    printf ("\tMédia: %.2f\n", a.media);
}