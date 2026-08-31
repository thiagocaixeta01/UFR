#include <stdio.h>

int main() {
  int arr[] = {10, 20, 30, 40, 50};
  int* p = arr; // Ponteiro para o primeiro elemento do array
  
  p[2] = 80;

  // Acessa o primeiro elemento
  printf("Primeiro elemento: %d\n", *p); // Imprime 10

  // Move o ponteiro para o próximo elemento
  p++; 
  printf("Segundo elemento: %d\n", *p); // Imprime 20

  // Move o ponteiro para o quarto elemento
  p += 2; 
  printf("Quarto elemento: %d\n", *p); // Imprime 40

  for (int i = 0; i < 5; i++) {
    printf("Elemento %d: %d\n", i, arr[i]);
  }

  return 0;
}
