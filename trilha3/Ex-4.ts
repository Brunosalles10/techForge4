class Animal {
    private energia: number;
    constructor(energia: number) {
        this.energia = energia
    }

    public comer(aumentaEnergia: number) {
        this.energia += aumentaEnergia;
        return this.energia;
    }


    public get energia1(): number {
        return this.energia;
    }

}

class Leao extends Animal {
    constructor() {
        super(100);

    }


    public comer(aumentaEnergia: number): number {
        let caçar = 20;
        
        const energiaAtual = super.comer(aumentaEnergia - caçar); 
        return energiaAtual;


    }

    statusEnergia():void{
        console.log(`A energia do leao: ${this.comer(50)}`);
        
    }
}

class Passaro extends Animal {
    constructor() {
        super(100);

    }
    public comer(aumentaEnergia: number): number {
        return super.comer(aumentaEnergia);
    }

    statusEnergia():void{
        console.log(`A energia do passaro: ${this.comer(50)}`);
        
    }
}

const eng = new Leao();
eng.statusEnergia();

const eng2 = new Passaro();
eng2.statusEnergia();