let titulo: string = "Nome do Autor";
let ano: number = 123;
let disponivel: boolean = true;

console.log(titulo, ano, disponivel);


function saudacao(nome: string): string {
  let s = "Ola, " + nome;
  return s;
}

console.log(saudacao("Pedro"));