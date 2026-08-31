// EXERCICIO 2
#include <stdio.h>

int main() {
    
    int v[5] = {1, 2, 3, 4, 5};
    int* p_inicio = v;
    int* p_fim = &v[4];
  
  while(p_fim >= p_inicio){
      printf("Valor: %d\n", *p_fim);
      p_fim--;
  }
  return 0;
}
