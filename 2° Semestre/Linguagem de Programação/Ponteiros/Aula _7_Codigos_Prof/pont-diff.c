#include <stdio.h>

int main() {
  char arr_char[] = {'a', 'b', 'c', 'd', 'e'};
  short int arr_short[] = {100, 200, 300, 400, 500};
  int arr_int[] = {10, 20, 30, 40, 50};
  double arr_double[] = {1.1, 2.2, 3.3, 4.4, 5.5};
  
  char* p_char = arr_char;
  short int* p_short = arr_short;
  int* p_int = arr_int;
  double* p_double = arr_double;

  printf("Diferença entre ponteiros char: %ld bytes\n", 
    (char*)(p_char + 1) - p_char); // Imprime 1
  printf("Diferença entre ponteiros short: %ld bytes\n",
    (char*)(p_short + 1) - (char*)p_short); // Imprime 2
  printf("Diferença entre ponteiros int: %ld bytes\n",
    (char*)(p_int + 1) - (char*)p_int); // Imprime 4
  printf("Diferença entre ponteiros double: %ld bytes\n",
    (char*)(p_double + 1) - (char*)p_double); // Imprime 8

  return 0;
}
