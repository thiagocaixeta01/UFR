class Usuario2 {
    readonly matricula: string;
    private _nome: string;
    private livrosEmprestados: number;

    constructor(matricula: string, nome: string){
        this.matricula = matricula;
        this.livrosEmprestados = 0;
    }

    set nome (valor: string){
        if()
    }

    pegarLivro(): void{
        if(this.livrosEmprestados <= 3){
            this.livrosEmprestados += 1;
        }
    }

    devolverlivro(): void{
        if(this.livrosEmprestados > 0){
            this.livrosEmprestados -= 1;
        }
    }

    podePegarMais(): boolean{
        if (this.livrosEmprestados < 3){
            return true;
        }

        return false;
    }

    
}

const u = new Usuario2 ("1234", "João", )