class Emprestimo {
    nomeUsuario: string;
    tituloLivro: string;
    diasEmprestado: number;

    constructor(nomeUsuario: string, titulolivro: string, diasEmprestado: number){
        this.nomeUsuario = nomeUsuario;
        this.tituloLivro = titulolivro;
        this.diasEmprestado = diasEmprestado;
    }

    estaAtrasado(): boolean {
        if (this.diasEmprestado > 14){
            return true;
        } else {
            return false;
        }
    }

    multa(): number {
        if (this.estaAtrasado()) {
            let multa = (this.diasEmprestado - 14) * 2;
            return multa;
        } else {
            return 0;
        }
    }
}

let emprestimo: Emprestimo = new Emprestimo("Maria", "1984", 20);
let emprestimo2: Emprestimo = new Emprestimo("João", "O Senhor dos Anéis", 10);

let emprestimos: Emprestimo[] = [emprestimo, emprestimo2];

for (let e of emprestimos) {
    console.log(`${e.nomeUsuario} - ${e.tituloLivro} - Dias Emprestado: ${e.diasEmprestado} - Atrasado: ${e.estaAtrasado()} - Multa: R$${e.multa()}`);
}