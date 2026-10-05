/* Código ajustado para as boas práticas do typescript, com o auxílio da IA, seguindo o mesmo intuíto 
dos exercícios anteriores. */

class Endereco {
    constructor(
        public readonly cidade: string, 
        public readonly uf: string, 
        public readonly distanciaKm: number){}
}

class Transportadora {
    constructor(public readonly nome: string, public readonly taxaExtra: number){}
}

abstract class Entrega {
    protected endereco: Endereco

    constructor(protected codigo: string, cidade: string, uf: string, distanciaKm: number){
        this.endereco = new Endereco(cidade, uf, distanciaKm)
    }

    public abstract prazoDias(): number
    public abstract valor(): number

    public cotacaoPara(transportadora: Transportadora): number {
        return this.valor() + transportadora.taxaExtra
    }

    public descricao(): string {
        const prazoStr = `${this.prazoDias()} ${this.prazoDias() === 1 ? 'dias' : 'dias'}`
        return `${this.codigo} - ${this.endereco.cidade}/${this.endereco.uf} - ${prazoStr} - R$${this.valor().toFixed(2)}`
    }
}

class Expressa extends Entrega {
    constructor(codigo: string, cidade: string, uf: string, distanciaKm: number)
    {super(codigo, cidade, uf, distanciaKm)}

    public prazoDias(): number {
        return 1
    }

    public valor(): number {
        return 20 + (2 * this.endereco.distanciaKm)
    }
}

class Economica extends Entrega {
    constructor(codigo: string, cidade: string, uf: string, distanciaKm: number)
    {super(codigo, cidade, uf, distanciaKm)}

    public prazoDias(): number {
        return 5
    }

    public valor(): number {
        return 8 + (0.5 * this.endereco.distanciaKm)
    }
}

const transCorreio = new Transportadora("Correio", 10)
const transAmazon = new Transportadora("Amazon", 15)

const listaEntregas: Entrega[] = [
    new Economica("EC-001", "Jaciara", "MT", 80),
    new Expressa("EX-002", "Juscimeira", "MT", 70),
    new Economica("EC-003", "Rondonópolis", "MT", 90),
    new Expressa("EX-004", "Cuiabá", "MT", 150)
]

for (const entregas of listaEntregas){
    console.log(entregas.descricao())
}

console.log("\n------ Cotação da primeira entrega ------")
const primeiraEntrega = listaEntregas[0]
console.log(`Valor base: R$${primeiraEntrega.valor().toFixed(2)}`)
console.log(`Com ${transCorreio.nome}: R$${primeiraEntrega.cotacaoPara(transCorreio).toFixed(2)}`)
console.log(`Com ${transAmazon.nome}: R$${primeiraEntrega.cotacaoPara(transAmazon).toFixed(2)}`)

const somaPrazos = listaEntregas.reduce((soma, entregas) => soma + entregas.prazoDias(), 0)
const prazoMedio = somaPrazos/listaEntregas.length
console.log(`\n==> Prazo médio: ${prazoMedio}`)

const entregaExpressa = listaEntregas.find(entrega => entrega instanceof Expressa)
const entregaEconomica = listaEntregas.find(entrega => entrega instanceof Economica)

console.log("------ Qual é o mais rápido ------")
if(entregaEconomica && entregaExpressa){
    if(entregaEconomica.prazoDias() < entregaExpressa.prazoDias()){
        console.log(`A modalidade economica chega primeiro: ${entregaEconomica.prazoDias()} dia/s`)
    } else {
        console.log(`A modalidade expressa chega primeiro: ${entregaExpressa.prazoDias()} dia/s`)
    }
}

// ================================================================================================
// ------ Código que desenvolvi ------

// class Endereco {
//     constructor(public cidade: string, public uf: string, public distanciaKm: number){}
// }

// class Transportadora {
//     constructor(public nome: string, public taxaExtra: number){}
// }

// abstract class Entrega {
//     protected endereco: Endereco

//     constructor(protected codigo: string, cidade: string, uf: string, distanciaKm: number){
//         this.endereco = new Endereco(cidade, uf, distanciaKm)
//     }

//     public abstract prazoDias(): number
//     public abstract valor(): number

//     public cotacaoPara(transportadora: Transportadora): number {
//         return this.valor() + transportadora.taxaExtra
//     }

//     public descricao(): string {
//         return `Ex-${this.codigo} - ${this.endereco.cidade}/${this.endereco.uf} - ${this.prazoDias()} - R$${this.valor().toFixed(2)}`
//     }
// }

// class Expressa extends Entrega {
//     constructor(codigo: string, cidade: string, uf: string, distanciaKm: number)
//     {super(codigo, cidade, uf, distanciaKm)}

//     public prazoDias(): number {
//         return 1
//     }

//     public valor(): number {
//         return 20 + (2 * this.endereco.distanciaKm)
//     }
// }

// class Economica extends Entrega {
//     constructor(codigo: string, cidade: string, uf: string, distanciaKm: number)
//     {super(codigo, cidade, uf, distanciaKm)}

//     public prazoDias(): number {
//         return 5
//     }

//     public valor(): number {
//         return 8 + (0.5 * this.endereco.distanciaKm)
//     }
// }

// const transCorreio = new Transportadora("Correio", 10)
// const transAmazon = new Transportadora("Amazon", 15)

// const listaEntregas: Entrega[] = [
//     new Economica("001", "Jaciara", "MT", 80),
//     new Expressa("002", "Juscimeira", "MT", 70),
//     new Economica("003", "Rondonópolis", "MT", 90),
//     new Expressa("004", "Cuiabá", "MT", 150)
// ]

// for (const entregas of listaEntregas){
//     console.log(entregas.descricao())
// }

// console.log("\n------ Diferença de taxas no pedido (EX-001) ------")
// console.log(`Transportadora Correios: ` + listaEntregas[0].cotacaoPara(transCorreio))
// console.log(`Transportadora Amazon: ` + listaEntregas[0].cotacaoPara(transAmazon))

// const somaPrazos = listaEntregas.reduce((soma, entregas) => soma + entregas.prazoDias(), 0)
// const prazoMedio = somaPrazos/listaEntregas.length
// console.log(`\n==> Prazo médio: ${prazoMedio}`)

// const entregaExpressa = listaEntregas.find(entrega => entrega instanceof Expressa)
// const entregaEconomica = listaEntregas.find(entrega => entrega instanceof Economica)

// console.log("------ Qual é o mais rápido ------")
// if(entregaEconomica && entregaExpressa){
//     if(entregaEconomica.prazoDias() < entregaExpressa.prazoDias()){
//         console.log(`A modalidade economica chega primeiro: ${entregaEconomica.prazoDias()} dia/s`)
//     } else {
//         console.log(`A modalidade expressa chega primeiro: ${entregaExpressa.prazoDias()} dia/s`)
//     }
// }