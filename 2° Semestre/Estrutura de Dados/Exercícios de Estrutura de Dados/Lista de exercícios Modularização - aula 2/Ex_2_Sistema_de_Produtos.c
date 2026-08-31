#include <locale.h>
#include <stdio.h>
#include <string.h>

struct Produto {
    int codigo;
    char nome[50];
    float preco;
    int quantidade;
};

void cadastrarProduto(struct Produto *p);
float calcularValorEstoque(struct Produto p);
void mostrarProduto(struct Produto p);

int main(){
    setlocale(LC_ALL, "Portuguese");

    struct Produto lista[4];
    float valorTotalGeral = 0;

    printf("--- SISTEMA DE ESTOQUE ---\n");

    for(int i = 0; i < 4; i++) {
        printf("\nProduto #%d", i + 1);
        cadastrarProduto(&lista[i]);
    }

    printf("\n--- RELATORIO DE PRODUTOS ---\n");

    for(int i = 0; i < 4; i++) {
        
        mostrarProduto(lista[i]);
        
        valorTotalGeral += calcularValorEstoque(lista[i]);
    }

    printf ("\n--- Valor total dos produtos: %.2f ---\n",valorTotalGeral);
    
    return 0;
}

void cadastrarProduto(struct Produto *p) {
    printf("\nCodigo: ");
    scanf("%d", &p->codigo);
    
    printf ("Nome: ");
    getchar();
    fgets (p->nome, sizeof(p->nome), stdin);
    p->nome[strcspn(p->nome, "\n")] = '\0';
    
    printf("Preco: ");
    scanf("%f", &p->preco);
    
    printf("Quantidade: ");
    scanf("%d", &p->quantidade);
}

float calcularValorEstoque(struct Produto p) {
    return (p.preco * p.quantidade);
}

void mostrarProduto(struct Produto p) {
    
    printf ("\n\tCódigo: %d", p.codigo);
    printf ("\n\tNome: %s", p.nome);
    printf ("\n\tPreço: R$%.2f", p.preco);
    printf ("\n\tQuantidade: %d\n", p.quantidade);

    printf ("\n----------------------------\n");

}