#include <stdio.h>

int soma_recursiva(int n) {
    if (n <= 1){
        return n;
    }

    return n + soma_recursiva (n - 1);
}