/* Código ajustado para as boas práticas do typescript, com o auxílio da IA, seguindo o mesmo intuíto 
dos exercícios anterior. */

class Protocolo {
    public numero: string;
    public abertoEm: string;
    
    private static contador = 1

    constructor(){
        this.numero = `PROT-${Protocolo.contador++}`;
        this.abertoEm = new Date().toLocaleDateString('pt-BR');
    }
}

class Chamado {
    protected protocolo: Protocolo
    
    constructor(protected titulo: string){
        this.protocolo = new Protocolo();
    }

    public resumo(): string {
        return `${this.titulo}`
    }

    public numeroProtocolo(): string {
      return this.protocolo.numero  
    }
}

class ChamadoBug extends Chamado {
    constructor(titulo: string, private severidade: string){super(titulo)}

    public override resumo(): string {
        return `ChamadoBug: [Bug ${this.severidade}] ${super.resumo()}`
    }
}

class ChamadoDuvida extends Chamado {
    constructor(titulo: string, private assusnto: string){super(titulo)}

    public override resumo(): string {
        return `ChamadoDuvida: [Dúvida sobre ${this.assusnto}] ${super.resumo()}`
    }
}

const listaChamados: Chamado[] = [
    new ChamadoBug("Login não funciona", "alta"),
    new ChamadoBug("Aplicativo fecha ao abrir", "alta"),
    new ChamadoBug("Word fechando sozinho", "media"),
    new ChamadoDuvida("Como emitir boleto", "financeiro"),
    new ChamadoDuvida("Como faço para exportar uma planilha", "sistema")
];

const qtdBugs = listaChamados.filter(chamado => chamado instanceof ChamadoBug).length;

for (const chamado of listaChamados) {
  console.log(`${chamado.numeroProtocolo()}: ${chamado.resumo()}`);
}

console.log(`\n==> bugs: ${qtdBugs}`);

/* --- O que acontece com o protocolo se o chamado for apagado? ---
    -> O protocolo também é deletado, pois como o protocolo foi criado dentro do chamado e nenhuma 
variável externa guarda ele, quando a instância do chamado for removida o objeto protocolo também
será removido junto ao chamado. */

// ===================================================================================
// ------ Código que desenvolvi ------

// class Protocolo {
//     public numero: string;
//     public abertoEm: string;
    
//     private static contador = 1

//     constructor(){
//         this.numero = `PROT-${Protocolo.contador}`;
//         this.abertoEm = "30-09-2026";
//         Protocolo.contador++;
//     }

// }

// class Chamado {
//     protected protocolo: Protocolo
    
//     constructor(protected titulo: string){
//         this.protocolo = new Protocolo();
//     }

//     public resumo(): string {
//         return `${this.titulo}`
//     }

//     public numeroProtocolo(): string {
//       return this.protocolo.numero  
//     }
// }

// class ChamadoBug extends Chamado {
//     constructor(titulo: string, private severidade: string){super(titulo)}

//     public override resumo(): string {
//         return `CahamdoBug: [${this.severidade}] ${super.resumo()}`
//     }
// }

// class ChamadoDuvida extends Chamado {
//     constructor(titulo: string, private assusnto: string){super(titulo)}

//     public override resumo(): string {
//         return `ChamadoDuvida: [${this.assusnto}] ${super.resumo()}`
//     }
// }

// const listaChamados: Chamado[] = [
//     new ChamadoBug("Login não funciona", "Bug alta"),
//     new ChamadoBug("Aplicativo fecha ao abrir", "Bug alta"),
//     new ChamadoBug("Word fechando sozinho", "Bug media"),
//     new ChamadoDuvida("Como emitir boleto", "Dúvida sobre financeiro"),
//     new ChamadoDuvida("Como faço para exportar uma planilha", "Dúvida sobre o sistema")
// ];

// let qtdBugs = 0
// console.log("\t ------ Lista de Chamados ------")
// for (const chamado of listaChamados){
//     console.log (`${chamado.numeroProtocolo()}: ${chamado.resumo()}`)

//     if(chamado instanceof ChamadoBug){
//         qtdBugs++
//     }
// }

// console.log(`==> Quantidade de bugs: ${qtdBugs}`)