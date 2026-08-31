import { ContaBancaria } from "./conta-bancaria";

const conta = new ContaBancaria ("1", 100.00);

conta.depositar(50);
console.log(`Saldo: ${conta.consultarSaldo()}`);

conta.sacar(500);
console.log(`Saldo: ${conta.consultarSaldo()}`);

conta.depositar(-30);
console.log(`Saldo: ${conta.consultarSaldo()}`);

// conta.saldo = 1000000; 