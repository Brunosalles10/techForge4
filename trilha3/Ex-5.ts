abstract class Funcionario {
    private salario: number;
    private nome: string;
    constructor(salario: number, nome: string) {
        this.salario = salario
        this.nome = nome;

    }

    
    public get Salario() : number {
        return this.salario;
    }

    
    public set Salario(salario : number) {
        this.salario = salario;
    }

    
    public get Nome() : string {
        return this.nome
    }

    
    public set Nome(nome : string) {
        this.nome = nome;
    }

    abstract calcularBonus():number;

}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.Salario * 0.10;
    }

}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.Salario * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]){
    for (const funcionario1 of funcionarios) {
        const bonus = funcionario1.calcularBonus();
        const salarioF = funcionario1.Salario + bonus;
        console.log(`Funcionário: ${funcionario1.Nome}, Salário Final: ${salarioF}`);
    }
    }

const fc : Funcionario[] = [
    new Gerente(3000, "bruno"),
    new Operario(1500, "ana")
];
calcularSalarioComBonus(fc);