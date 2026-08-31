#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));
    int num_aleatorio = rand() % 100 + 1;
    printf("Numero gerado: %d\n", num_aleatorio);
    int num_digitado;

    do {
      printf("Digite um numero entre 1 e 100\n");
      scanf("%d", &num_digitado);

      if (num_digitado != num_aleatorio) {
        if (num_digitado < num_aleatorio)
          printf("O numero deve ser maior\n");
        else
          printf("O numero deve ser menor\n");
        
      }
    } 
    while(num_digitado != num_aleatorio);

    printf("Parabens, voce acertou\n");

    return 0;
}
