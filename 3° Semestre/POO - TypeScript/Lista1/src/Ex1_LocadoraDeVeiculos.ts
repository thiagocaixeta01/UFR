/* Código que "poli" com o auxílio da IA de acordo com o código base que desenvolvi, está no final 
do arquivo, a fim dela me dar um feedback da maneira que escrevi, o que fiz corretamente, como eu teria
que pensar para resolver a questão da forma que o enunciado pediu, como a forma de saber qual o veículo
mais caro. Me mostrar formas de tornar esse código mais eficiente e como ele seria desenvolvido de 
maneira mais profissional e limpa. */

class Veiculo {
  constructor(
    protected placa: string,
    protected diaria: number
  ) { }

  public descricao(): string {
    return ` - Diária: R$${this.diaria.toFixed(2)}`
  }

  public valorDiaria(): number {
    return this.diaria
  }
}

class Carro extends Veiculo {
  constructor(
    placa: string,
    diaria: number,
    private portas: number) { super(placa, diaria) }

  public override descricao(): string {
    return `Carro: Placa [${this.placa}], ${this.portas} portas ${super.descricao()}`
  }
}

class Moto extends Veiculo {
  constructor(
    placa: string,
    diaria: number,
    private cilindradas: number
  ) { super(placa, diaria) }

  public override descricao(): string {
    return `Moto: Placa [${this.placa}], ${this.cilindradas}cc ${super.descricao()}`
  }
}

const listaVeiculos: Veiculo[] = [
  new Carro("ABC-1234", 150.00, 4),
  new Carro("DEF-5678", 110.00, 2),
  new Moto("GHI-9012", 80.00, 300),
  new Moto("JKL-0253", 100.00, 650)
];

let somaDiarias = 0
let veiculoMaisCaro: Veiculo = listaVeiculos[0]

console.log("\t------ Lista de Veículos ------")
for (const veiculo of listaVeiculos) {
  console.log(veiculo.descricao())
  somaDiarias += veiculo.valorDiaria()

  if (veiculo.valorDiaria() > veiculoMaisCaro.valorDiaria()) {
    veiculoMaisCaro = veiculo
  }
}

console.log("\n\t------ Resumo ------")
console.log(`Soma das diárias: R$${somaDiarias.toFixed(2)}`)
console.log(`Veículo mais caro: (${veiculoMaisCaro.descricao()})`)

// ====================================================================

// --- Código original que desenvolvi ---
// class Veiculo {
//   constructor(
//     protected placa: string,
//     protected diaria: number
//   ) 
//   {
//     this.placa = placa
//     this.diaria = diaria
//   }

//   public descricao(): string {
//     return `Placa [${this.placa}] - Diária: R$${this.diaria}`
//   }

//   public valorDiaria(): number {
//     return this.diaria
//   }
// }

// class Carro extends Veiculo {
//   constructor(
//     protected placa: string,
//     protected diaria: number,
//     private portas: number
//   ) 
//   {
//     super(placa, diaria)
//     this.portas = portas
//   }

//   public descricao(): string {
//     return `Carro: Placa [${this.placa}], ${this.portas} portas - Diária: R$${this.diaria}`
//   }
// }

// class Moto extends Veiculo {
//   constructor(
//     protected placa: string,
//     protected diaria: number,
//     private cilindradas: number
//   ) 
//   {
//     super(placa, diaria)
//     this.cilindradas = cilindradas
//   }

//   public descricao(): string {
//     return `Moto: Placa [${this.placa}], ${this.cilindradas}cc - Diária: R$${this.diaria}`
//   }
// }

// let listaVeiculos: Veiculo[] = [
//   new Carro("ABC-1234", 150.00, 4),
//   new Carro("DEF-5678", 110.00, 2),
//   new Moto("GHI-9012", 80.00, 300),
//   new Moto("JKL-0253", 100.00, 650)
// ];

// let soma = 0
// let maisCaro = 0

// for (const l of listaVeiculos) {
//   console.log(l.descricao())
//   soma += l.valorDiaria()

//   if (maisCaro < l.valorDiaria()) {
//     maisCaro = l.valorDiaria()
//   }
// }

// console.log(`Soma das diárias: ${soma}`)
// console.log(`Veículo mais caro por dia: ${maisCaro}`) 