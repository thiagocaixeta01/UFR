#include <stdio.h>
#include <string.h>

struct Data {
  int dia, mes, ano;
};

struct Evento {
  char descricao[100];
  struct Data data;
};

// Criar uma funcao que imprime uma unica data
void imprimirData(struct Data d) {
     printf("Data: %02d/%02d/%04d\n", d.dia, d.mes, d.ano);
}

// Criar uma funcao que imprime um Evento
void imprimirEvento(struct Evento ev) {
    printf("Evento: %s\n", ev.descricao);
    imprimirData(ev.data);
}

// Criar uma funcao que imprime um array de Eventos
void imprimirEventos(struct Evento *eventos, int n) {
    for (int i = 0; i < n; i++) {
        printf("Evento %d:\n", i + 1);
        imprimirEvento(eventos[i]);
        printf("\n");
    }
}

int main() {
  struct Evento ev = {"Prova final", {12, 6, 2025}};

    imprimirEventos(&ev, 1);
}