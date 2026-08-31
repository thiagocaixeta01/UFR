#include <locale.h>
#include <stdio.h>
#include <string.h>

typedef struct{
    int matricula;
    char nome[50];
    float nota1, nota2, media;
}Aluno;

void lerAluno(Aluno *a);
float calcularMedia(Aluno a);
void imprimirAluno(Aluno a);

int main() {
   setlocale(LC_ALL, "Portuguese");

   Aluno turma[5];
   
   printf("--- Cadastro de Alunos ---\n");

    for(int i = 0; i < 5; i++) {
        printf("\nAluno %d:\n", i + 1);
        lerAluno(&turma[i]);
        
        turma[i].media = calcularMedia(turma[i]);
    }
    
    printf("\n-------------- Relatorio de Notas ---------------\n");
    printf("-------------------------------------------------\n");
    
    for(int i = 0; i < 5; i++) {
        imprimirAluno(turma[i]);
    }
    
    printf("\n-------------------------------------------------\n");

    return 0;
}

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