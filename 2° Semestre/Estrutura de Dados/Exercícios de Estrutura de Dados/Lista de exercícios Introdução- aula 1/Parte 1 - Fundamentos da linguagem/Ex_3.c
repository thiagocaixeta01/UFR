// 3. Elabore um algoritmo que calcule a média de 4 notas e imprima se o aluno foi 
// aprovado (média ? 6), reprovado ou em recuperação (média entre 4 e 5.9).

#include <locale.h>
#include <stdio.h>
int main() {
    setlocale(LC_ALL, "Portuguese");
    
    // Declaração de variáveis
    float Nota1 = 0;
    float Nota2 = 0;
    float Nota3 = 0;
    float Nota4 = 0;
    float Soma = 0;
    float Media = 0;

    // Entrada 
    printf ("Digite a primeira nota: ");
    scanf ("%f", &Nota1);

    printf ("Digite a segunda nota: ");
    scanf ("%f", &Nota2);

    printf ("Digite a terceira nota: ");
    scanf ("%f", &Nota3);

    printf ("Digite a quarta nota: ");
    scanf ("%f", &Nota4);

    // Processamento 
    Soma = Nota1 + Nota2 + Nota3 + Nota4;
    Media = Soma / 4;

    // Saída
   if (Media >= 6.0){
    printf ("Aprovado");
   }else{
    printf ("Reprovado ou em recuperação");
   }

   return 0;
}