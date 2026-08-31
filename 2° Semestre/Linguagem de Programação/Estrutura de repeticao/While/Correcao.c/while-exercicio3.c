#include <stdio.h>

int main() {
  int inicio, fim;
  printf("Digite o inicio: \n");
  scanf("%d", &inicio);
  printf("Digite o fim: \n");
  scanf("%d", &fim);

  printf("\n\n\n");
  
  while (fim >= inicio) {
    printf("%d\n", fim);
    fim--;
  }

}