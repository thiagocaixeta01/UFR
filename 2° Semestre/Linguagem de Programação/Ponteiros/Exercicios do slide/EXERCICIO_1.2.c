// EXERCICIO 1.2
#include <stdio.h>

int main() {
    
    int a=10, b=20;
    
    int* p1 = &a;
    int* p2 = &b;
    
    *p1 = *p1 + *p2;
    *p2 = *p1 - *p2;
    *p1 = *p1 - *p2;
    
    printf("Valor de A(10) e B(20), invertidos: A = %d e B = %d\n", a, b);
    
    return 0;
    
}
