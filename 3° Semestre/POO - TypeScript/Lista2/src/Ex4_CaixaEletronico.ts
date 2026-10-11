class CaixaError extends Error {
    constructor(mensagem: string) {super(mensagem)}
}

class ValorInvalidoError extends CaixaError {}
class SaldoInsuficienteError extends CaixaError {}

class CaixaEletronico {
    constructor(private saldo: number){}

    sacar(valor: number): void {
        if(valor <= 0){
            throw new ValorInvalidoError(`valor inválido: ${valor}`)
        } 
        if (valor > this.saldo) {
            throw new SaldoInsuficienteError(`saldo de ${this.saldo} menor que ${valor}`)
        } else {
            console.log(`Saque de ${valor}, saldo agora: ${this.saldo -= valor}`)     
        }
    }
}

const caixa = new CaixaEletronico(100)

try {
    caixa.sacar(30)
} catch (erro) {
    if (erro instanceof ValorInvalidoError) console.log(`recusado: valor invalido`)
    else if (erro instanceof SaldoInsuficienteError) console.log(`recusado: saldo insuficiente`)
}

try {
    caixa.sacar(0)
} catch (erro) {
    if (erro instanceof ValorInvalidoError) console.log(`recusado: valor invalido`)
    else if (erro instanceof SaldoInsuficienteError) console.log(`recusado: saldo insuficiente`)
}

try {
    caixa.sacar(500)
} catch (erro) {
    if (erro instanceof ValorInvalidoError) console.log(`recusado: valor invalido`)
    else if (erro instanceof SaldoInsuficienteError) console.log(`recusado: saldo insuficiente`)
}

try {
    caixa.sacar(-10)
} catch (erro) {
    if (erro instanceof CaixaError){
        console.log(`erro do caixa: ${erro.message}`)
    }
}