#include <stdio.h>

int main() {
  int op1, op2, res, opcao;

  do {
    printf("Digite uma opção: \n1 - Soma\n2 - Sub\n3 - Mult\n4 - Div\n0 - Sair\n");
    scanf("%d", &opcao);
  } while(! ((opcao>=0) && (opcao<=4)));

  if (opcao == 0) {
    return 0;
  }

  printf("Digite o operando 1: \n");
  scanf("%d", &op1);
  printf("Digite o operando 2: \n");
  scanf("%d", &op2);

  switch(opcao) {
    case 1: 
      res = op1 + op2;
      break;
    case 2: 
      res = op1 - op2;
      break;  
    case 3: 
      res = op1 * op2;
      break;  
    case 4: 
      if (op2 != 0)
        res = op1 / op2;
      else {
        printf("Divisao por zero.\n");
        return 1;
      }
      break;                  
  }

  printf("Resultado: %d\n", res);

}