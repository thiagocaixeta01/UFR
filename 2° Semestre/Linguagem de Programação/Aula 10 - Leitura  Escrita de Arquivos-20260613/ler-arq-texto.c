#include <stdio.h>
#include <string.h>

#define BUFFER_SIZE 256

int main(void) {
    char buffer[BUFFER_SIZE];
    int linha = 1;
    int nova_linha = 1;

    // Abre o arquivo para leitura
    FILE *arquivo = fopen("arquivo.txt", "r");
    if (!arquivo) {
        perror("Erro ao abrir o arquivo");
        return 1;
    }

    // Leitura linha por linha, tratando linhas longas
    while (fgets(buffer, BUFFER_SIZE, arquivo)) {
        if (nova_linha) {
            printf("%d: ", linha);
            nova_linha = 0;
        }

        fputs(buffer, stdout);

        // Se terminou com '\n', a linha foi lida por completo
        size_t len = strlen(buffer);
        if (len > 0 && buffer[len - 1] == '\n') {
            linha++;
            nova_linha = 1;
        }
    }

    fclose(arquivo);
    return 0;
}
