#include <stdio.h>
#include <string.h>
#include <locale.h>

struct Livro {
    int codigo;
    char titulo[100];
    char autor[50];
    int ano;
};

void cadastrarLivro(struct Livro *l);
void listarLivros(struct Livro livros[], int n);
void buscarPorAutor(struct Livro livros[], int n, char autorBusca[]);

int main() {
    setlocale(LC_ALL, "Portuguese");
    
    struct Livro estante[5];
    char autorProcurado[50];

    printf("------ CADASTRO DE BIBLIOTECA ------\n");

    for(int i = 0; i < 5; i++) {
        printf("\nLivro %d\n", i + 1);
        cadastrarLivro(&estante[i]);
    }

    printf("\n------ ACERVO COMPLETO ------\n");
    listarLivros(estante, 5);

    printf("\n------ BUSCA POR AUTOR ------\n");
    
    printf("Digite o nome do autor: ");
    fgets(autorProcurado, sizeof(autorProcurado), stdin);
    autorProcurado[strcspn(autorProcurado, "\n")] = '\0';

    buscarPorAutor(estante, 5, autorProcurado);

    return 0;
}

void cadastrarLivro(struct Livro *l) {
    printf("Código: ");
    scanf("%d", &l->codigo);
    getchar();

    printf("Título: ");
    fgets(l->titulo, sizeof(l->titulo), stdin);
    l->titulo[strcspn(l->titulo, "\n")] = '\0';

    printf("Autor: ");
    fgets(l->autor, sizeof(l->autor), stdin);
    l->autor[strcspn(l->autor, "\n")] = '\0';

    printf("Ano de Lancamento: ");
    scanf("%d", &l->ano);
    getchar();
}

void listarLivros(struct Livro livros[], int n) {

    for (int i = 0; i < n; i++){
        printf ("\n------ Lista de Livros ------\n");
        printf ("\n\tCódigo: %d", livros[i].codigo);
        printf ("\n\tTítulo: %s", livros[i].titulo);
        printf ("\n\tAutor: %s", livros[i].autor);
        printf ("\n\tAno: %d", livros[i].ano);
        printf ("\n-----------------------------\n");
    }
}

void buscarPorAutor(struct Livro livros[], int n, char autorBusca[]) {
    int encontrados = 0;

    for (int i = 0; i < n; i++){
        if (strcmp(livros[i].autor, autorBusca) == 0){
            printf ("\n------ Dados do Livro ------\n");
            printf ("\n\tCódigo: %d", livros[i].codigo);
            printf ("\n\tTítulo: %s", livros[i].titulo);
            printf ("\n\tAutor: %s", livros[i].autor);
            printf ("\n\tAno: %d", livros[i].ano);
            printf ("\n-----------------------------\n");

            encontrados++;
        }
    }

    if(encontrados == 0) {
        printf("\nNenhum livro encontrado para o autor: %s\n", autorBusca);
    } else {
        printf("\nTotal de livros encontrados para este autor: %d\n", encontrados);
    }
}