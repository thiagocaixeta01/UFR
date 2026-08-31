// EXERCICIO 3
#include <stdio.h>

#define N 10  // Constante de tamanho do vetor

int main() {
    int vetor[N];
    int *ptr_int = vetor; // Ponteiro para caminhar no vetor de inteiros

    // --- LACUNA 1: Inicializacao ---
    // Use o ponteiro ptr_int para preencher o vetor com (indice * 128)
    for (int i = 0; i < N; i++) {
        // Seu codigo aqui: atribua o valor usando o ponteiro e incremente-o
        *(ptr_int + i) = i * 128;
    }

    printf("Impressao do primeiro byte de cada elemento:\n");

    // --- LACUNA 2: Leitura do Primeiro Byte ---
    // Para ler apenas um byte, precisamos de um ponteiro de tipo char (1 byte)
    // que aponte para o ini­cio do vetor.
    unsigned char *ptr_byte = (unsigned char *) vetor;

    for (int i = 0; i < N; i++) {
        // Seu codigo aqui:
        // 1. Imprima o valor apontado por ptr_byte (use %d ou %02x)
        printf("Int[%d] = %d  |  Byte[%d] = %d\n", i, *(ptr_int + i), i,*ptr_byte&0xFF);
        // 2. O ponteiro ptr_byte deve saltar para o inicio do PROXIMO inteiro
        ptr_byte += sizeof(int);
    }

    return 0;
}