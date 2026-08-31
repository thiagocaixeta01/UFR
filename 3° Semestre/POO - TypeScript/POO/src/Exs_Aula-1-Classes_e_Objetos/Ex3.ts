// class livro { // O nome da classe "livro" está diferente do que foi chamado na const l mais abaixo do código, portanto o correto é "class Livro".
//     titulo: string;
    
//     constructor(titulo: string) {
//     titulo = titulo; // A variável título não foi inicializada, pois falta adicionar o "this", portanto o correto é "this.titulo = titulo;".
//     }
    
//     emprestar(): void {
//     disponivel = false; /* Aqui a variável disponivel não foi inicializada e nem declarada na classe, portanto é preciso adiciona-lá na "class Livro" 
//     e informar seu formato, como ela está como "false" é uma variável booleana "boolen". Então após adicionar à classe é preciso iniciarliza-lá no
//     "contructor", assim como, o título (this.disponivel = false). */
//     }
// }
// const l = Livro('1984'); // Aqui para funcionar corretamente é preciso usar a sintaxe "new" para referenciar ao objeto "Livro".
// l.emprestar;

// console.log(l.titulo);

// -------- FORMAR CORRETA --------

/* class Livro {
    titulo: string;
    disponivel: boolean;

    constructor(titulo: string){
        this.titulo = titulo;
        this.disponivel = false;
    }

    emprestar() {
        this.disponivel = false;
    }
}

const l = new Livro("1984");

l.emprestar;

console.log(l.titulo); */