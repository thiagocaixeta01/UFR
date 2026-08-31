#include <stdio.h>                                   
#include <stdlib.h>  
#include <time.h>           

int main() {                           
    
    srand(time(NULL));                       
    int num_aleatorio = rand() %100 + 1;        
    printf("Numero gerado: %d\n", &num_aleatorio);   
    
    int num_digitado;
    
    do{
        printf ("Tente adivinhar uma número de 1 a 100: ");
        scanf ("%d", &num_digitado);
        
        if (num_digitado != num_aleatorio){
            if (num_digitado < num_aleatorio){
                printf ("O número deve ser maior.\n");
            }else{
                printf ("O número deve ser menor.\n");
            }
        }
    } while (num_digitado != num_aleatorio);
    
    printf ("Parabéns, você acertou\n");
    
    return 0;                             
}