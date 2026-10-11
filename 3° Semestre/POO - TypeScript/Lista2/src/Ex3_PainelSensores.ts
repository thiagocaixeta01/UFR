interface Sensor {
    nome(): string
    ler(): number
    unidade(): string
}

class Temperatura implements Sensor {
    constructor(private valor: number){}

    nome(): string {
        return `Temperatura`
    }

    ler(): number {
        return this.valor
    }

    unidade(): string {
        return `°C`
    }
}

class Umidade implements Sensor {
    constructor(private valor: number){}

    nome(): string {
        return `Umidade`
    }

    ler(): number {
        return this.valor
    }

    unidade(): string {
        return `%`
    }
}

class Pressao implements Sensor {
    constructor(private valor: number){}

    nome(): string {
        return `Preção Atmosférica`
    }

    ler(): number {
        return this.valor
    }

    unidade(): string {
        return ` atm`
    }
}

class Painel {
    mostrar(sensor: Sensor): void {
        console.log(`${sensor.nome()}: ${sensor.ler()}${sensor.unidade()}`)
    }
}

const painel = new Painel()

const sensores: Sensor[] = [
    new Temperatura(23.5),
    new Umidade(61),
    new Pressao(1.2)
]

for(const sensor of sensores) {
    painel.mostrar(sensor)
}