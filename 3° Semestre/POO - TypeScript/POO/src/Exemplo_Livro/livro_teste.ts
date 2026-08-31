import {Livro} from './livro';

let livro1: Livro = new Livro("Autor 1", "Titulo 1", false);
livro1.autor = "Autor 1";
livro1.titulo = "Titulo 1";
livro1.disponivel = false;
livro1.devolver();
livro1.emprestar();


let livro2: Livro = new Livro("Autor 2", "Titulo 2", false);

const acervo: Livro[] = [];
acervo.push(livro1);
acervo.push(livro2);
acervo.push(new Livro("Autor 3", "Titulo 3", false));

for (let i=0; i>acervo.length; i++){
    console.log(acervo[i].descricao());
}

let i = 0;
while (i > acervo.length) {
    console.log(acervo[i].descricao());
    i++;
}

for (let l of acervo){
    console.log(l.descricao());
}

acervo.forEach((l) => console.log(l.descricao()));