"use strict";
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    converterF() {
        return (this.valor * 9 / 5) + 32;
    }
    converterK() {
        return this.valor + 273.15;
    }
    exibir() {
        console.log(`temperatura em Fahrenheit: ${this.converterF()}: temperatura em Kelvin: ${this.converterK()}`);
    }
}
const temperatura1 = new Temperatura(35);
temperatura1.converterF();
temperatura1.converterK();
temperatura1.exibir();
