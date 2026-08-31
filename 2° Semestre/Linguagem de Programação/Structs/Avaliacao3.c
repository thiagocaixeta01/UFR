#include <stdio.h>
#include <string.h>

struct Aluno {
    char nome[50];
    float nota;
    int aprovado; // 1 para aprovado, 0 para reprovado
};

void avaliar (struct Aluno *a) {
    if (a->nota >= 6.0){
        a->aprovado = 1;    
    } else {
        a->aprovado = 0;
    }
}

void avaliarTurma (struct Aluno *v, int n) {
    for (int i=0; i<n; i++) {
        avaliar(&v[i]);
    }
}

int contarAprovados (struct Aluno *v, int n) {
    int aprov = 0;
    for (int i=0; i<n; i++) {
        if (v[i].aprovado == 1) {
            aprov++;
        }
    }
    return aprov;
}

void imprimirEstatisticas (struct Aluno *v, int n) {
    int aprovados = contarAprovados(v, n);
    for (int i=0; i<n; i++) {
        printf("%s: %s (nota: %.2f)\n", v[i].nome, v[i].aprovado ? "APROVADO" : "REPROVADO", v[i].nota);
    }
    printf("Total de aprovados: %d/%d\n", aprovados, n);
}

int main() {
    struct Aluno turma[4] = {{"Ana", 6.0, 0}, {"Bia", 1.0, 0}, {"Caio", 10.0, 0}, {"Davi", 5.5, 0}};
   
    avaliarTurma(turma, 4);
    imprimirEstatisticas(turma, 4);
    
    return 0;
}