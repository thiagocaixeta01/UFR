// CÓDIGO EXEMPLO
#include <stdio.h>

int main() {
    
  int arr[] = {10, 20, 30, 40, 50};
  int* p_inicio = arr;
  int* p_fim = &arr[4];
  
  while(p_inicio <= p_fim){
      printf("Valor: %d\n", *p_inicio);
      p_inicio++;
  }
  return 0;
}