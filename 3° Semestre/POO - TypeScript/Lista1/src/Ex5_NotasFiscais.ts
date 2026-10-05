/* Código ajustado para as boas práticas do typescript, com o auxílio da IA, seguindo o mesmo intuíto 
dos exercícios anteriores. */

class Cliente {
    constructor(public nome: string, public cnpj: string){}
}

class ItemNota {
    constructor(public descricao: string, public valor: number){}
}

class Nota {
    private itens: ItemNota[] = []

    constructor(protected numero: string, protected cliente: Cliente){}

    public adicionarItem(desc: string, valor: number): void {
        const novoItem = new ItemNota(desc, valor)
        this.itens.push(novoItem)
    }

    public total(): number {
        return this.itens.reduce((soma, item) => soma + item.valor, 0)
    }

    public descricao(): string {
        return `NF-${this.numero} - ${this.cliente.nome} - R$${this.total().toFixed(2)}`
    }

    public pertenceAoCliente(cliente: Cliente): boolean {
        return this.cliente === cliente
    }
}

class NotaProduto extends Nota {
    constructor(private transportadora: string, numero: string, cliente: Cliente){super(numero, cliente)}

    public override descricao(): string {
        return `${super.descricao()} (produto, via ${this.transportadora})`
    }
}

class NotaServico extends Nota {
    constructor(private competencia: string, numero: string, cliente: Cliente){super(numero, cliente)}

    public override descricao(): string {
        return `${super.descricao()} (serviço, competência ${this.competencia})`
    }
}

const clienteA = new Cliente("Pedro", "12.345.678/001-90")
const clienteB = new Cliente("João", "12.345.678/002-91")
const listaClientes: Cliente[] = [clienteA, clienteB]

const nota1 = new NotaProduto("Correios","001", clienteA)
nota1.adicionarItem("Pão de Forma", 10.00)
nota1.adicionarItem("Leite Integral", 15.00)
nota1.adicionarItem("Queijo Mussarela", 225.00)

const nota2 = new NotaServico("2026-10-01","002", clienteB)
nota2.adicionarItem("Serviço A", 200)
nota2.adicionarItem("Serviço B", 150)
nota2.adicionarItem("Serviço C", 100)

const nota3 = new NotaProduto("Amazon","003", clienteA)
nota3.adicionarItem("Toddy", 20.00)
nota3.adicionarItem("Bolacha", 15.00)
nota3.adicionarItem("Picanha", 130)

const nota4 = new NotaServico("2026-09-31","004", clienteB)
nota4.adicionarItem("Serviço D", 300)
nota4.adicionarItem("Serviço E", 120)
nota4.adicionarItem("Serviço F", 210)

const listaNotas: Nota[] = [nota1, nota2, nota3, nota4]

for(const nota of listaNotas){
    console.log(nota.descricao())
}

const faturamento = listaNotas.reduce((fat, nota) => fat + nota.total(), 0)
console.log(`\nFaturamento: R$${faturamento.toFixed(2)}`)

const clienteMaisComprou = listaClientes.map(cliente => {
    const totalGasto = listaNotas.filter(nota => nota.pertenceAoCliente(cliente)).reduce(
        (total, nota) => total + nota.total(), 0)
    
    return {cliente, totalGasto}
}).reduce((maior, atual) => (atual.totalGasto > maior.totalGasto ? atual : maior))

console.log(`Comprou mais: ${clienteMaisComprou.cliente.nome} (R$${clienteMaisComprou.totalGasto.toFixed(2)})`)

// ==============================================================================
// ------ Código que desenvolvi ------

// class Cliente {
//     constructor(public nome: string, public cnpj: string){}
// }

// class ItemNota {
//     constructor(public descricao: string, public valor: number){}
// }

// class Nota {
//     protected itens: ItemNota[] = []

//     constructor(protected numero: string, protected cliente: Cliente){}

//     public adicionarItem(desc: string, valor: number): void {
//         const novoItem = new ItemNota(desc, valor)
//         this.itens.push(novoItem)
//     }

//     public total(): number {
//         let total = 0
//         for (const soma of this.itens){
//             total += soma.valor
//         }

//         return total
//     }

//     public descricao(): string {
//         return `NF-${this.numero} - ${this.cliente.nome} - R$${this.total()}`
//     }

//     public pertenceAoCliente(cliente: Cliente): boolean {
//         return this.cliente === cliente
//     }
// }

// class NotaProduto extends Nota {
//     constructor(private transportadora: string, numero: string, cliente: Cliente){super(numero, cliente)}

//     public override descricao(): string {
//         return `${super.descricao()} (produto, via ${this.transportadora})`
//     }
// }

// class NotaServico extends Nota {
//     constructor(private competencia: string, numero: string, cliente: Cliente){super(numero, cliente)}

//     public override descricao(): string {
//         return `${super.descricao()} - ${this.competencia}`
//     }
// }

// const clienteA = new Cliente("Pedro", "12.345.678/001-90")
// const clienteB = new Cliente("João", "12.345.678/002-91")

// const listaClientes: Cliente[] = [clienteA, clienteB]

// const nota1 = new NotaProduto("Correios","001", clienteA)
// nota1.adicionarItem("Pão de Forma", 10.00)
// nota1.adicionarItem("Leite Integral", 15.00)
// nota1.adicionarItem("Queijo Mussarela", 225.00)

// const nota2 = new NotaServico("2026-10-01","002", clienteB)
// nota2.adicionarItem("Serviço A", 200)
// nota2.adicionarItem("Serviço B", 150)
// nota2.adicionarItem("Serviço C", 100)

// const nota3 = new NotaProduto("Amazon","003", clienteA)
// nota3.adicionarItem("Toddy", 20.00)
// nota3.adicionarItem("Bolacha", 15.00)
// nota3.adicionarItem("Picanha", 130)

// const nota4 = new NotaServico("2026-09-31","004", clienteB)
// nota4.adicionarItem("Serviço D", 300)
// nota4.adicionarItem("Serviço E", 120)
// nota4.adicionarItem("Serviço F", 210)

// const listaNotas: Nota[] = [nota1, nota2, nota3, nota4]

// let totalClienteA = 0
// let totalClienteB = 0
// for (const nota of listaNotas) {
//     console.log(nota.descricao())
    
//     if(nota.pertenceAoCliente(clienteA)){
//         totalClienteA += nota.total()
//     } else if(nota.pertenceAoCliente(clienteB)){
//         totalClienteB += nota.total()
//     }
// }

// const faturamento = listaNotas.reduce((fat, notas) => fat + notas.total(), 0)
// console.log(`Faturamento: ${faturamento.toFixed(2)}`)

// if(totalClienteA > totalClienteB){
//     console.log(`Comprou mais: ${clienteA.nome} (R$${totalClienteA})`)
// } else {
//     console.log(`Comprou mais: ${clienteB.nome} (R$${totalClienteB})`)
// }