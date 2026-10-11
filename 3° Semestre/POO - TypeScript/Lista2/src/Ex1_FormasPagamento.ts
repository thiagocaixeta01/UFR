interface FormaPagamento {
    nome(): string;
    valorFinal(Valor: number): number;
}

class Dinheiro implements FormaPagamento {
    nome(): string {
        return `Dinheiro`
    }

    valorFinal(valor: number): number {
        return valor - (valor/20)
    }
}

class Cartao implements FormaPagamento {
    nome(): string {
        return `Cartão`
    }

    valorFinal(valor: number): number {
        return valor + (valor/10)
    }
}

class Pix implements FormaPagamento {
    nome(): string {
        return `Pix`
    }

    valorFinal(valor: number): number {
        return valor
    }
}

const listaFormaPagamento: FormaPagamento[] = [
    new Dinheiro(),
    new Cartao(),
    new Pix()
]
const valorCompra = 200

for (const forma of listaFormaPagamento) {
    console.log(`${forma.nome()}: R$ ${forma.valorFinal(valorCompra)}`)
}

let menorValor = listaFormaPagamento[0].valorFinal(valorCompra)
let maisBarata = listaFormaPagamento[0]

for(const forma of listaFormaPagamento){
    
    if(forma.valorFinal(valorCompra) < menorValor) {
        menorValor = forma.valorFinal(valorCompra)
        maisBarata = forma
    } 
}
console.log(`Mais barata: ${maisBarata.nome()}`)