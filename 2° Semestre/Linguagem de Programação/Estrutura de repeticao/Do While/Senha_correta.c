#include <stdio.h>                                   

int main() {                           
    
    int senha = 3122;
    int senha_informada;

    do {
        printf ("\nDigite a senha: ");
        scanf  ("%d", &senha_informada);

        if (senha_informada != senha){
            printf ("Senha incorreta, digite novamente...");
        }

    } while (senha_informada != senha);
    
    printf ("Senha correta, acesso liberado.");

    return 0;                             
}  