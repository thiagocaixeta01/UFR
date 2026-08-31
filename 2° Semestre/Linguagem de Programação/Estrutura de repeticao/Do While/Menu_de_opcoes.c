#include <stdio.h>

int main(){
    int opcao, num1, num2, resultado;
    
    do{
        printf ("------ Escolha uma opção no menu ------\n");
        printf ("\t1 - Soma\n\t2 - Subtração\n\t3 - Multiplicação\n\t4 - Divisão\n\t0 - Sair\n");
        printf ("----------------------------------------\n");
        scanf ("%d", &opcao);
        
    } while ((opcao > 4) || (opcao < 0));
    
    switch (opcao){
        case 0:
            printf ("Saindo...\n");
            break;
            
        case 1:
            printf ("Digite o primeiro número: ");
            scanf ("%d",&num1);
            
            printf ("Digite o primeiro número: ");
            scanf ("%d",&num2);
            
            resultado = num1 + num2;
            
            printf ("Soma = %d", resultado);
            break;
        
        case 2:
            printf ("Digite o primeiro número: ");
            scanf ("%d",&num1);
            
            printf ("Digite o primeiro número: ");
            scanf ("%d",&num2);
            
            resultado = num1 - num2;
            
            printf ("Subtração = %d", resultado);
            break;
            
        case 3:
            printf ("Digite o primeiro número: ");
            scanf ("%d",&num1);
            
            printf ("Digite o primeiro número: ");
            scanf ("%d",&num2);
            
            resultado = num1 * num2;
            
            printf ("Divisão: %d", resultado);
            break;
        
        case 4:
            printf ("Digite o primeiro número: ");
            scanf ("%d",&num1);
            
            printf ("Digite o primeiro número: ");
            scanf ("%d",&num2);
            
            float resultado;
            
            if (num2 != 0){
                resultado = (float) num1 / num2;
            }else{
                printf ("Divisão por zero");
            }
            
            printf ("Divisão: %.2f", resultado);
            break;
    }
}