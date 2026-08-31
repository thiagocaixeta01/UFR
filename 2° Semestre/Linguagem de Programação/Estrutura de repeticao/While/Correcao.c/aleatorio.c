#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));
    int num_aleatorio = rand();
    printf("Numero gerado: %d\n", num_aleatorio);
    return 0;
}
