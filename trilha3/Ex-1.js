"use strict";
class Veiculo_ {
    mover() {
        console.log(`O veículo está se movendo`);
    }
}
class Carro extends Veiculo_ {
    mover() {
        console.log(`O carro está dirigindo`);
    }
}
class Bicicleta extends Veiculo_ {
    mover() {
        console.log(`A bicicleta está pedalando`);
    }
}
const v1 = new Veiculo_();
v1.mover();
const v2 = new Carro();
v2.mover();
const v3 = new Bicicleta();
v3.mover();
