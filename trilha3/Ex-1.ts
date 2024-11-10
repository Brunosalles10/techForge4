class Veiculo_ {
    public mover():void{
        console.log(`O veículo está se movendo`);
        
    }


}
class Carro extends Veiculo_{
    public mover(): void {
        console.log(`O carro está dirigindo`);
        
    }

}

class Bicicleta extends Veiculo_{
    public mover(): void {
        console.log(`A bicicleta está pedalando`);
        
    }
    
}
const  v1 = new Veiculo_();
v1.mover();

const v2 = new Carro();
v2.mover();

const v3 = new Bicicleta();
v3.mover();