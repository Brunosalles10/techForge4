"use strict";
class Funcionario {
    constructor(salario, nome) {
        this.salario = salario;
        this.nome = nome;
    }
    get Salario() {
        return this.salario;
    }
    set Salario(salario) {
        this.salario = salario;
    }
    get Nome() {
        return this.nome;
    }
    set Nome(nome) {
        this.nome = nome;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.Salario * 0.10;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.Salario * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    for (const funcionario1 of funcionarios) {
        const bonus = funcionario1.calcularBonus();
        const salarioF = funcionario1.Salario + bonus;
        console.log(`Funcionário: ${funcionario1.Nome}, Salário Final: ${salarioF}`);
    }
}
const fc = [
    new Gerente(3000, "bruno"),
    new Operario(1500, "ana")
];
calcularSalarioComBonus(fc);
