/* Código ajustado para as boas práticas do typescript, com o auxílio da IA, seguindo o mesmo intuíto 
dos exercícios anteriores. */

class Titular {
    constructor(public nome: string, public cpf: string){}
}

class Extrato {
    public lancamentos: string[] = []

    public registrar(texto: string): void {
        this.lancamentos.push(texto)
    }
}

abstract class Conta {
    protected extrato: Extrato

    constructor(
        protected numero: string,
        protected saldo: number,
        protected titular: Titular
        ){this.extrato = new Extrato()}

    public abstract taxaMensal(): number

    public sacar(valor: number): void{
        this.saldo -= valor
        this.extrato.registrar(
            `saque de R$${valor.toFixed(2)}, saldo de R$${this.saldoAtual().toFixed(2)}`)
    }

    public descricao(): string {
        return `Conta ${this.numero} - ${this.titular.nome}`
    }

    public imprimirExtrato(): void {
        for (const lancamento of this.extrato.lancamentos){
            console.log(lancamento)
        }
    }

    public saldoAtual(): number {
        return this.saldo
    }

    public pertenceAoTitular(t: Titular): boolean {
        return this.titular === t
    }
}

class ContaCorrente extends Conta {
    constructor(
        numero:string,
        saldo: number,
        titular: Titular,
        private limite: number
    ){super(numero, saldo, titular)}
    
    public taxaMensal(): number {
        return this.saldoAtual() > 5000 ? 15 : 30
    }

    public override descricao(): string {
        return super.descricao() + ` - limite: R$${this.limite.toFixed(2)}`
    }
}

class ContaPoupanca extends Conta{
    constructor(
        numero: string,
        saldo: number,
        titular: Titular,
        private rendimento: number
    ){super(numero, saldo, titular)}

    public taxaMensal(): number {
        return 0
    }

    public override descricao(): string {
        return super.descricao() + ` - rendimento: ${this.rendimento}%`
    }
}

const titular1 = new Titular("Ana", "123.456.789-00")
const titular2 = new Titular("Pedro", "123.456.789-01")
const listaTitulares: Titular[] = [titular1, titular2]

const listaContas: Conta[] = [
    new ContaCorrente("002", 1300, titular2, 2000),
    new ContaCorrente("002", 6000, titular2, 3000),
    new ContaPoupanca("003", 1400, titular1, 3),
    new ContaPoupanca("003", 1500, titular2, 4) 
]

for (const conta of listaContas){
    console.log(`\n${conta.descricao()}`)
    
    conta.sacar(100)
    conta.sacar(100)
    conta.sacar(100)

    conta.imprimirExtrato()
}

const totalTaxas = listaContas.reduce((tot, conta) => tot + conta.taxaMensal(), 0)
console.log(`\n-> arrecadação de taxas: R$${totalTaxas}\n`)

for (const titular of listaTitulares) {
    const saldoTotal = listaContas
    .filter(conta => conta.pertenceAoTitular(titular))
    .reduce((soma, conta) => soma + conta.saldoAtual(), 0)

    console.log(`Saldo de ${titular.nome}: R$${saldoTotal.toFixed(2)}`)
}

// =======================================================================================
// ------ Código desenvolvido -------

// class Titular {
//     constructor(public nome: string, public cpf: string){}
// }

// class Extrato {
//     public lancamentos: string[] = []

//     public registrar(texto: string): void {
//         this.lancamentos.push(texto)
//     }
// }

// abstract class Conta {
//     protected extrato: Extrato

//     constructor(
//         protected numero: string,
//         protected saldo: number,
//         protected titular: Titular
//         ){this.extrato = new Extrato()}

//     public abstract taxaMensal(): number

//     public sacar(valor: number): void{
//         this.saldo -= valor
//         this.extrato.registrar(`saque de R$${valor.toFixed(2)}, saldo de R$${this.saldoAtual().toFixed(2)}`)
//     }

//     public descricao(): string {
//         return `Conta ${this.numero} - ${this.titular.nome}`
//     }

//     public imprimirExtrato(): void {
//         for (const lancamento of this.extrato.lancamentos){
//             console.log(lancamento)
//         }
//     }

//     public saldoAtual(): number {
//         return this.saldo
//     }

//     public pertenceAoTitular(t: Titular): boolean {
//         return this.titular === t
//     }
// }

// class ContaCorrente extends Conta {
//     constructor(
//         numero:string,
//         saldo: number,
//         titular: Titular,
//         private limite: number
//     ){super(numero, saldo, titular)}
    
//     public taxaMensal(): number {
//         if(this.saldoAtual() >= 5000){
//             return 15
//         } else {
//             return 30
//         }
//     }

//     public override descricao(): string {
//         return super.descricao() + ` - limite: R$${this.limite.toFixed(2)}`
//     }
// }

// class ContaPoupanca extends Conta{
//     constructor(
//         numero: string,
//         saldo: number,
//         titular: Titular,
//         private rendimento: number
//     ){super(numero, saldo, titular)}

//     public taxaMensal(): number {
//         return 0
//     }

//     public override descricao(): string {
//         return super.descricao() + ` - rendimento: ${this.rendimento}%`
//     }
// }

// const titular1 = new Titular("Ana", "123.456.789-00")
// const titular2 = new Titular("Pedro", "123.456.789-01")
// const listaTitulares: Titular[] = [titular1, titular2]

// const conta1 = new ContaCorrente("001", 1200, titular1, 400)
// console.log(`${conta1.descricao()}`)
// console.log("Saldo Atual: R$", conta1.saldoAtual().toFixed(2))
// conta1.sacar(100)
// conta1.sacar(100)
// conta1.sacar(100)
// conta1.imprimirExtrato()

// const conta2 = new ContaCorrente("002", 1300, titular2, 500)
// console.log(`\n${conta2.descricao()}`)
// console.log("Saldo Atual: R$", conta2.saldoAtual().toFixed(2))
// conta2.sacar(100)
// conta2.sacar(100)
// conta2.sacar(100)
// conta2.imprimirExtrato()

// const conta3 = new ContaPoupanca("003", 1400, titular1, 3)
// console.log(`\n${conta3.descricao()}`)
// console.log("Saldo Atual: R$", conta3.saldoAtual().toFixed(2))
// conta3.sacar(100)
// conta3.sacar(100)
// conta3.sacar(100)
// conta3.imprimirExtrato()

// const conta4 = new ContaPoupanca("003", 1500, titular2, 4)
// console.log(`\n${conta4.descricao()}`)
// console.log("Saldo Atual: R$", conta4.saldoAtual().toFixed(2))
// conta4.sacar(100)
// conta4.sacar(100)
// conta4.sacar(100)
// conta4.imprimirExtrato()

// const listaContas: Conta[] = [conta1, conta2, conta3, conta4]

// const totalTaxas = listaContas.reduce((tot, conta) => tot + conta.taxaMensal(), 0)
// console.log(`\n==> Arrecadação de taxas: R$${totalTaxas.toFixed(2)}\n`)

// for (const titular of listaTitulares){
//     const saldoTotal = listaContas
//     .filter(conta => conta.pertenceAoTitular(titular))
//     .reduce((soma, conta) => soma + conta.saldoAtual(), 0)

//     console.log(`-> Saldo de ${titular.nome}: R$${saldoTotal.toFixed(2)}`)
// }