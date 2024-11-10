abstract class figuraGeometrica {
    abstract cacularArea_1(): number;
}

class Circulo_1 extends figuraGeometrica {
    private raio: number;
    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    cacularArea_1(): number {
        return Math.PI * (this.raio ** 2);
    }

    exibirC() {
        console.log(`O calculo do circulo é: ${this.cacularArea_1().toFixed(2)}`);

    }

}

class Quadrado_1 extends figuraGeometrica {
    private lado: number;
    constructor(lado: number) {
        super();
        this.lado = lado;
    }
    cacularArea_1(): number {
        return this.lado ** 2;
    }

    exibirQ() {
        console.log(`O calculo do Quadrado é: ${this.cacularArea_1()}`);

    }
}

class Triangulo extends figuraGeometrica {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super()
        this.base = base
        this.altura = altura

    }
    cacularArea_1(): number {
        return (this.base * this.altura) / 2
    }

    exibirTr() {
        console.log(`O calculo do Triangulo é: ${this.cacularArea_1()}`);

    }
}

function imprimir2(figuras_0:figuraGeometrica[]){
    for(const figuras_8 of figuras_0 ){
        console.log(`figuras: ${figuras_8.cacularArea_1()}`);
        
    }
}

function Imprimir(fig: figuraGeometrica[]): void {
    fig.forEach((figuras, index) => {
        console.log(`resultado da figura: ${index + 1}): ${figuras.cacularArea_1()}`)
         });


}


const Cir = new Circulo_1(10);
Cir.exibirC();

const Qr = new Quadrado_1(10);
Qr.exibirQ();

const Tr = new Triangulo(10, 10)
Tr.exibirTr();

const figuras_4 :figuraGeometrica[] = [
    new Circulo_1(20), 
    new Quadrado_1(20),
    new Triangulo(20,20)


]

Imprimir(figuras_4);

imprimir2(figuras_4);
