/* 11. (Desafio) Faça um programa que leia uma string e use ponteiros para contar quantas vogais ela contém. */

#include <locale.h>
#include <stdio.h>

int main() {
    setlocale(LC_ALL, "Portuguese");

    char texto[100];
    char *ptr; // Este é o nosso "dedo" que vai apontar para cada letra
    int contador = 0;

    printf("Digite uma frase: ");
    // fgets é melhor que scanf para ler frases com espaços
    fgets(texto, sizeof(texto), stdin);

    // Inicializamos o ponteiro no começo da string
    ptr = texto;

    // Enquanto o conteúdo de ptr não for o fim da string...
    while (*ptr != '\0') {
        
        // Verificamos se o caractere atual é uma vogal
        // Dica: use o caractere apontado por *ptr
        if (*ptr == 'a' || *ptr == 'A' || 
            *ptr == 'e' || *ptr == 'E' ||
            *ptr == 'i' || *ptr == 'I' || 
            *ptr == 'o' || *ptr == 'O' ||
            *ptr == 'u' || *ptr == 'U') {
            
            contador++; // Encontrou uma vogal!
        }

        // Movemos o ponteiro para o PRÓXIMO caractere na memória
        ptr++; 
    }

    printf("A frase contem %d vogais.\n", contador);

    return 0;
}