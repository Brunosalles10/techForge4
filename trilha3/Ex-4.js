"use strict";
class Animal {
    constructor(energia) {
        this.energia = energia;
    }
    comer(aumentaEnergia) {
        this.energia += aumentaEnergia;
        return this.energia;
    }
    get energia1() {
        return this.energia;
    }
}
class Leao extends Animal {
    constructor() {
        super(100);
    }
    comer(aumentaEnergia) {
        let caçar = 20;
        const energiaAtual = super.comer(aumentaEnergia - caçar);
        return energiaAtual;
    }
    statusEnergia() {
        console.log(`A energia do leao: ${this.comer(50)}`);
    }
}
class Passaro extends Animal {
    constructor() {
        super(100);
    }
    comer(aumentaEnergia) {
        return super.comer(aumentaEnergia);
    }
    statusEnergia() {
        console.log(`A energia do passaro: ${this.comer(50)}`);
    }
}
const eng = new Leao();
eng.statusEnergia();
const eng2 = new Passaro();
eng2.statusEnergia();
