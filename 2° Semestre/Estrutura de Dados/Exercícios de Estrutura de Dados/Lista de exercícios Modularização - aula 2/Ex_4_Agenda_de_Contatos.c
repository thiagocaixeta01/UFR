#include <locale.h>
#include <stdio.h>
#include <string.h>

struct Contato {
    char nome[50];
    char telefone[20];
    char email[50];
};

void cadastrarContato(struct Contato *c);
void listarContatos(struct Contato contatos[], int n);
int buscarContato(struct Contato contatos[], int n, char nomeBusca[]);

int main() {
    setlocale(LC_ALL, "Portuguese");

    struct Contato agenda[10]; 
    int cadastrados = 0;       
    char nomeParaBuscar[50];
    int posicaoEncontrada;

    printf("------ MINHA AGENDA ------\n");

    for(int i = 0; i < 2; i++) {
        printf("\nNovo Contato %d:\n", i + 1);
        cadastrarContato(&agenda[cadastrados]);
        cadastrados++;
    }

    printf("\n--------- LISTA DE CONTATOS ---------\n");

    listarContatos(agenda, cadastrados);

    printf("\n----------- BUSCAR CONTATO -----------\n");
    printf("Digite o nome exato para buscar: ");
    fgets (nomeParaBuscar, sizeof(nomeParaBuscar), stdin);
    nomeParaBuscar[strcspn(nomeParaBuscar, "\n")] = '\0';

    posicaoEncontrada = buscarContato(agenda, cadastrados, nomeParaBuscar);

    if (posicaoEncontrada != -1) {
        printf("\n\tCONTATO ENCONTRADO!\n");
        printf("\tNome: %s\n", agenda[posicaoEncontrada].nome);
        printf("\tTelefone: %s\n", agenda[posicaoEncontrada].telefone);
        printf("\tEmail: %s\n", agenda[posicaoEncontrada].email);
        printf ("-------------------------------------\n");
    } else {
        printf("\nContato nao encontrado na agenda.\n");
        printf ("-------------------------------------\n");
    }

    return 0;
}

void cadastrarContato(struct Contato *c) {
    printf("Nome: ");
    fgets (c->nome, sizeof(c->nome), stdin);
    c->nome[strcspn(c->nome, "\n")] = '\0';
    
    printf("Telefone: ");
    fgets (c->telefone, sizeof(c->telefone), stdin);
    c->telefone[strcspn(c->telefone, "\n")] = '\0';
    
    printf("Email: ");
    fgets (c->email, sizeof(c->email), stdin);
    c->email[strcspn(c->email, "\n")] = '\0';
}

void listarContatos(struct Contato contatos[], int n) {
    
    for (int i = 0; i < n; i++){
        printf ("\tNome: %s\n", contatos[i].nome);
        printf ("\tTelefone: %s\n", contatos[i].telefone);
        printf ("--------------------------------------\n");
    }
}

int buscarContato(struct Contato contatos[], int n, char nomeBusca[]) {

    for (int i = 0; i < n; i++){
        if (strcmp(contatos[i].nome, nomeBusca) == 0){
            return i;
        }
    }
    return -1; 
}