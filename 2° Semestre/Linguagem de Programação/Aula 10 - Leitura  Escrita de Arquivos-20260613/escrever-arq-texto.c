#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define BUFFER_SIZE 256

int main(void) {
    char buffer[BUFFER_SIZE];

    // Abre o arquivo para escrita
    FILE *arquivo = fopen("saida.txt", "w");
    if (!arquivo) {
        perror("Erro ao abrir o arquivo");
        return 1;
    }

    // Escreve dados no arquivo
    fprintf(arquivo, "Escrevendo no arquivo de texto: %s, %d\n", "Exemplo", 50);
    fputs("Outra linha de texto.\n", arquivo);

    // Fecha o arquivo
    fclose(arquivo);
    
    return 0;
}