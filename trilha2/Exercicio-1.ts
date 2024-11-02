class ContaBancaria {
    private titula: string;
    private saldo: number;

    constructor(titula: string, saldo: number){
        this.titula = titula;
        this.saldo = saldo;

    }

    public Deposito(Valor: number) {
        return this.saldo += Valor;
    }

    public Sacar(saque: number){
        return this.saldo -= saque;

    }
    public exibirResumo(): void {
        console.log(`titular da conta: ${this.titula}`);
        console.log(`saldo da conta: ${this.saldo}`);
        

    }
}

const deposito1 = new ContaBancaria("bruno", 1000);
deposito1.Deposito(2000);
deposito1.Sacar(1000);
deposito1.exibirResumo();