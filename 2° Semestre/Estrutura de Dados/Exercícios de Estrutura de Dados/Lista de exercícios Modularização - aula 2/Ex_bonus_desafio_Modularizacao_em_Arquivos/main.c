#include <stdio.h>
#include <string.h>
#include <locale.h>
#include "funcoes.h"

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