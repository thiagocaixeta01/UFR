#include <stdio.h>

int main() {
  int inicio, fim, n;
  printf("Digite o inicio: \n");
  scanf("%d", &inicio);
  printf("Digite o fim: \n");
  scanf("%d", &fim);
  printf("Digite o N: \n");
  scanf("%d", &n);

  printf("\n\n\n");
  
  while (inicio <= fim) {
    printf("%d\n", inicio);
    inicio += n;
  }

}