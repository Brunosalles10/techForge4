"use strict";
class Agenda {
    constructor(compromissos) {
        this.compromissos = compromissos;
    }
    add(compromisso) {
        return this.compromissos.push(compromisso);
    }
    all() {
        return this.compromissos;
    }
    exibir() {
        for (const agenda of this.compromissos) {
            console.log(`compromissos`, (agenda));
        }
        ;
    }
}
const com1 = new Agenda([]);
com1.add('joga bola');
com1.add('correr');
com1.exibir();
