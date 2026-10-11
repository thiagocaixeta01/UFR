abstract class Certificado {
    constructor(protected aluno: string){}

    abstract corpo(): string

    public emitir(): void {
        console.log(`=== ${this.aluno} ===\n${this.corpo()}`)
    }
}

class CertificadoCurso extends Certificado{
    constructor(aluno: string, private horas: number){super(aluno)}

    public corpo(): string {
        return `Concluiu o curso com ${this.horas} horas`
    }
}

class CertificadoPalestra extends Certificado {
    constructor(aluno: string, private tema: string){super(aluno)}

    public corpo(): string {
        return `Assistiu à palestra ${this.tema}`
    }
}

const certificados: Certificado[] = [
    new CertificadoCurso("Ana Souza", 40), 
    new CertificadoPalestra("Bruno Lima", "Arquitetura de Software")
]

for(const emitir of certificados) {
    emitir.emitir()
}