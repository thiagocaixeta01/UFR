#include <locale.h>
#include <stdio.h>
#include <string.h>

struct Funcionario {
    int id;
    char nome[50];
    float salarioBruto;
    float desconto;
    float salarioLiquido;
};

void lerFuncionario(struct Funcionario *f);
float calcularSalarioLiquido(struct Funcionario f);
void imprimirFuncionario(struct Funcionario f);

int main() {
    setlocale(LC_ALL, "Portuguese");

    struct Funcionario equipe[3]; 

    printf("--- SISTEMA DE RH ---\n");

    for(int i = 0; i < 3; i++) {
        printf("\nCadastrando Funcionario %d:\n", i + 1);
        lerFuncionario(&equipe[i]);
        equipe[i].salarioLiquido = calcularSalarioLiquido(equipe[i]);
    }

    printf("\n--------- FOLHA DE PAGAMENTO ---------\n");

    for(int i = 0; i < 3; i++) {
        imprimirFuncionario(equipe[i]);
    }

    return 0;
}

void lerFuncionario(struct Funcionario *f) {
    printf("ID: ");
    scanf("%d", &f->id);
    
    printf ("Nome: ");
    getchar();
    fgets (f->nome, sizeof(f->nome), stdin);
    f->nome[strcspn(f->nome, "\n")] = '\0';
    
    printf("Salario Bruto (R$): ");
    scanf("%f", &f->salarioBruto);
    
    printf("Desconto (R$): ");
    scanf("%f", &f->desconto);
}

float calcularSalarioLiquido(struct Funcionario f) {
    return (f.salarioBruto - f.desconto);
}

void imprimirFuncionario(struct Funcionario f) {
    
    printf ("\n\tID: %d", f.id);
    printf ("\n\tNome: %s", f.nome); 
    printf ("\n\tSalário bruto: R$%.2f", f.salarioBruto); 
    printf ("\n\tDesconto: R$%.2f", f.desconto);
    printf ("\n\tSalário líquido: R$%.2f\n", f.salarioLiquido);
    printf ("--------------------------------------");
}