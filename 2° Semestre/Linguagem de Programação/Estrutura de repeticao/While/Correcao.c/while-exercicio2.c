#include <stdio.h>

int main() {
  int inicio, fim;
  printf("Digite o inicio: \n");
  scanf("%d", &inicio);
  printf("Digite o fim: \n");
  scanf("%d", &fim);
  printf("\n\n\n");
  if (inicio >= fim)  {
    printf("Intervalo invalido.\n");
    return 0;
  }

  if (inicio % 2 == 1)
    inicio++;
  
  while (inicio <= fim) {
    printf("%d\n", inicio);
    inicio += 2;
  }

}