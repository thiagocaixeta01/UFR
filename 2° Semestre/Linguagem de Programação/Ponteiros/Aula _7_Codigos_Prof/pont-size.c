#include <stdio.h>

int main() {
    int* p;     // Declara um ponteiro para um inteiro
    float* pf;  // Declara um ponteiro para um float
    char* pc;   // Declara um ponteiro para um char
    double* pd; // Declara um ponteiro para um double
    long long* pll; // Declara um ponteiro para um long long
    char **pp;  // Declara um ponteiro para um ponteiro de char

    printf("Tamanho do ponteiro int: %lu bytes | Tamanho do int: %lu bytes\n", 
      sizeof(p), sizeof(int));
    printf("Tamanho do ponteiro float: %lu bytes | Tamanho do float: %lu bytes\n", 
      sizeof(pf), sizeof(float));
    printf("Tamanho do ponteiro char: %lu bytes | Tamanho do char: %lu bytes\n", 
      sizeof(pc), sizeof(char));
    printf("Tamanho do ponteiro double: %lu bytes | Tamanho do double: %lu bytes\n", 
      sizeof(pd), sizeof(double));
    printf("Tamanho do ponteiro long long: %lu bytes | Tamanho do long long: %lu bytes\n", 
      sizeof(pll), sizeof(long long));
    printf("Tamanho do ponteiro char**: %lu bytes | Tamanho do char*: %lu bytes\n",
      sizeof(pp), sizeof(char*));    

    return 0;
}
