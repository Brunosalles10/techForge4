"use strict";
class ContaBancaria {
    constructor(titula, saldo) {
        this.titula = titula;
        this.saldo = saldo;
    }
    Deposito(Valor) {
        return this.saldo += Valor;
    }
    Sacar(saque) {
        return this.saldo -= saque;
    }
    exibirResumo() {
        console.log(`titular da conta: ${this.titula}`);
        console.log(`saldo da conta: ${this.saldo}`);
    }
}
const deposito1 = new ContaBancaria("bruno", 1000);
deposito1.Deposito(2000);
deposito1.Sacar(1000);
deposito1.exibirResumo();
