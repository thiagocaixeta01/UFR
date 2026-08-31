export class ContaBancaria {
    // private titular: string;
    // private saldo: number;

    constructor(private titular: string, private saldo: number) {
        // this.titular = titular;
        // this.saldo = saldo;
    }

    depositar(valor:number): void{
        if(valor > 0){
            this.saldo += valor;
        }
    }

    sacar(valor: number): void {
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    consultarSaldo(): number {
        return this.saldo; 
    }
}