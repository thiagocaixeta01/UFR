#include <stdio.h>

int main(){

    int i = 0xAABBCCDD; // Variável do tipo inteiro com valor hexadecimal
    int* p = &i;

    char* pc = (char*)p; // Ponteiro para char apontando para o mesmo endereço de p
    
    *pc = 0x11;

    printf("Byte 0 de i como chaar: %x\n", *pc);
    printf("Byte 1 de i como char: %x\n", *(pc + 1));
    printf("Byte 2 de i como char: %x\n", *(pc + 2));
    printf("Byte 3 de i como char: %x\n", *(pc + 3));
    
    return 0;
}