#include <stdio.h>

int main(void) {
    int numeros[5];
    size_t count = sizeof(numeros) / sizeof(numeros[0]);

    // Abre o arquivo binário para leitura
    FILE *arquivo = fopen("dados.bin", "rb");
    if (!arquivo) {
        perror("Erro ao abrir o arquivo");
        return 1;
    }

    // Lê os dados do arquivo binário
    size_t lidos = fread(numeros, sizeof(int), count, arquivo);
    if (lidos != count) {
        perror("Erro ao ler do arquivo");
        fclose(arquivo);
        return 1;
    }

    // Exibe os números lidos
    for (size_t i = 0; i < count; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\n");

    struct {
        int id;
        float altura;
        char nome[32];
    } pessoa;

    // Lê a estrutura do arquivo binário
    lidos = fread(&pessoa, sizeof(pessoa), 1, arquivo);
    if (lidos != 1) {
        perror("Erro ao ler a estrutura do arquivo");
        fclose(arquivo);
        return 1;
    }

    printf("ID: %d, Altura: %.2f, Nome: %s\n", pessoa.id, pessoa.altura, pessoa.nome);

    // Fecha o arquivo
    fclose(arquivo);
    
    return 0;
}