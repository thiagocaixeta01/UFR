class Usuario {
    nome: string;
    matricula: string;
    livrosEmprestdos: number;

    constructor(nome: string, matricula: string){
    this.nome = nome;
    this.matricula = matricula;
    this.livrosEmprestdos = 0;
    }

    apresentar(): string {
       return `${this.nome} - ${this.matricula}`; 
    }

    pegarLivro(): void {
        this.livrosEmprestdos++;
    }

    devolverLivro(): void {
        this.livrosEmprestdos--;
    }
}

let usuario: Usuario = new Usuario("Maria", "matricula 2026001");
usuario.nome = "Maria";
usuario.matricula = "matricula 2026001";
usuario.livrosEmprestdos = 0;

let usuario2: Usuario = new Usuario("joao", "matricula 2026002");

let usuarios: Usuario[] = [usuario,usuario2];

for (let u of usuarios){
    for (let i=0; i<3; i++){
        u.pegarLivro();
    }

    u.devolverLivro();

    //console.log(u.nome + "(" + u.matricula + ")");
    console.log(`${u.apresentar()} - Livros Emprestados: (${u.livrosEmprestdos})`);
}