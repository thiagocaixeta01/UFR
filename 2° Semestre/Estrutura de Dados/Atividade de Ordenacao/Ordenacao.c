#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <locale.h>

#define TAMANHO 100000 // Ajuste conforme a memória do seu dispositivo

void troca(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 1. Implementação Bubble Sort
void bubbleSort(int v[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (v[j] > v[j + 1]) {
                troca(&v[j], &v[j + 1]);
            }
        }
    }
}

// 2. Implementação Quick Sort (Partition)
int partition(int v[], int inicio, int fim) {
    int pivo = v[fim];
    int i = (inicio - 1);
    for (int j = inicio; j <= fim - 1; j++) {
        if (v[j] < pivo) {
            i++;
            troca(&v[i], &v[j]);
        }
    }
    troca(&v[i + 1], &v[fim]);
    return (i + 1);
}

void quickSort(int v[], int inicio, int fim) {
    if (inicio < fim) {
        int pi = partition(v, inicio, fim);
        quickSort(v, inicio, pi - 1);
        quickSort(v, pi + 1, fim);
    }
}

int main() {
    setlocale(LC_ALL, "Portuguese");

    int *vetorBubble = malloc(TAMANHO * sizeof(int));
    int *vetorQuick = malloc(TAMANHO * sizeof(int));
    clock_t t;

    // 3. Preenchimento aleatório
    srand(time(NULL));
    for (int i = 0; i < TAMANHO; i++) {
        int num = rand() % TAMANHO;
        vetorBubble[i] = num;
        vetorQuick[i] = num; // Ambos iniciam com os mesmos dados
    }

    // 4. Medição Bubble Sort
    t = clock();
    bubbleSort(vetorBubble, TAMANHO);
    t = clock() - t;
    printf("Tempo Bubble Sort: %lf ms\n", ((double)t)/((CLOCKS_PER_SEC/1000)));

    // Medição Quick Sort
    t = clock();
    quickSort(vetorQuick, 0, TAMANHO - 1);
    t = clock() - t;
    printf("Tempo Quick Sort: %lf ms\n", ((double)t)/((CLOCKS_PER_SEC/1000)));

    free(vetorBubble);
    free(vetorQuick);
    return 0;
}