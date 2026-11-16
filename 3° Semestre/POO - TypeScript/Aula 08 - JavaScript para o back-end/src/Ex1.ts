function somarA(x: number, y: number): number {
    return x+y
}

const somarB = (x: number, y: number): number => x+y;

function executar(acao: (x: number, y: number) => number, a:number, b:number): void {
    console.log(acao(a,b))
}

executar(somarA, 10, 20)
executar(somarB, 1,2)
executar((x:number, y:number): number => x+y, 5, 5)