class Pilha<T> {
    private itens: T[] = []

    empilhar(item: T): void {
        this.itens.push(item)
    }

    desempilhar(): T {
        const ultimo = this.itens[this.itens.length - 1]
        this.itens.length--
        return ultimo
    }

    vazia(): boolean {
        return this.itens.length === 0
    }

    tamaho(): number {
        return this.itens.length
    }
}
console.log("====== Pilha Strings ======")

const pilhaNomes = new Pilha<string>()

pilhaNomes.empilhar("Ana")
pilhaNomes.empilhar("Bruno")
pilhaNomes.empilhar("Carla")

console.log(`tamanho: ${pilhaNomes.tamaho()}`)

console.log(pilhaNomes.desempilhar())
console.log(pilhaNomes.desempilhar())
console.log(pilhaNomes.desempilhar())

console.log(`vazia: ${pilhaNomes.vazia()}`)

console.log("\n====== Pilha Numbers ======")

const pilhaNumbers = new Pilha<number>()

pilhaNumbers.empilhar(10)
pilhaNumbers.empilhar(25)
pilhaNumbers.empilhar(7)

let soma = 0

while(!pilhaNumbers.vazia()){
    soma += pilhaNumbers.desempilhar()
}

console.log(`soma: ${soma}`)
console.log(`vazia: ${pilhaNumbers.vazia()}`)