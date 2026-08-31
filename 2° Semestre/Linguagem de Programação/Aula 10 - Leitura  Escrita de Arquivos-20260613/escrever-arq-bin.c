#include <stdio.h>

int main(void) {
    int numeros[] = {1, 2, 3, 4, 5};
    size_t count = sizeof(numeros) / sizeof(numeros[0]);

    // Abre o arquivo binário para escrita
    FILE *arquivo = fopen("dados.bin", "wb");
    if (!arquivo) {
        perror("Erro ao abrir o arquivo");
        return 1;
    }

    // Escreve os dados no arquivo binário
    size_t escritos = fwrite(numeros, sizeof(int), count, arquivo);
    if (escritos != count) {
        perror("Erro ao escrever no arquivo");
        fclose(arquivo);
        return 1;
    }

    struct {
        int id;
        float altura;
        char nome[32];
    } pessoa = {1, 1.75, "João"};

    // Escreve a estrutura no arquivo binário
    escritos = fwrite(&pessoa, sizeof(pessoa), 1, arquivo);
    if (escritos != 1) {
        perror("Erro ao escrever a estrutura no arquivo");
        fclose(arquivo);
        return 1;
    }
    
    // Fecha o arquivo
    fclose(arquivo);
    
    return 0;
}
