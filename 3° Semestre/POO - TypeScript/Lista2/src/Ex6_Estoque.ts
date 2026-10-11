class Estoque {
    private itens: Map<string, number> = new Map()

    entrada(codigo: string, qtd: number): void {
        if(this.itens.has(codigo)){
            const atual = this.itens.get(codigo)!
            this.itens.set(codigo, atual + qtd)
        } else {
            this.itens.set(codigo, qtd)
        }
    }

    saida(codigo: string, qtd: number): void {
        if(!this.itens.has(codigo)){
            console.log(`codigo nao encontrado: ${codigo}`)
            return
        } 

        const atual = this.itens.get(codigo)!
        const novaQtd = atual - qtd

        this.itens.set(codigo, novaQtd < 0 ? 0 : novaQtd)
    }

    quantidade(codigo: string): number {
        return this.itens.get(codigo) ?? 0
    }

    relatorio(): void {
        for (const [codigo, qtd] of this.itens) {
            console.log(`${codigo}: ${qtd}`)
        }
    }

    codigosDiferentes(): number {
        return this.itens.size
    }
}

const estoque = new Estoque()

estoque.entrada("LIV-001", 10)
estoque.entrada("LIV-002", 4)
estoque.entrada("LIV-001", 5)

estoque.saida("LIV-002", 1)
estoque.saida("LIV-999", 1)

estoque.relatorio()
console.log(`quantidade LIV-001: ${estoque.quantidade("LIV-001")}`)
console.log(`quantidade LIV-999: ${estoque.quantidade("LIV-999")}`)
console.log(`codigos diferentes: ${estoque.codigosDiferentes()}`)