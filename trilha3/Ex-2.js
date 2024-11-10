"use strict";
class figuraGeometrica {
}
class Circulo_1 extends figuraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    cacularArea_1() {
        return Math.PI * (this.raio ** 2);
    }
    exibirC() {
        console.log(`O calculo do circulo é: ${this.cacularArea_1().toFixed(2)}`);
    }
}
class Quadrado_1 extends figuraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    cacularArea_1() {
        return this.lado ** 2;
    }
    exibirQ() {
        console.log(`O calculo do Quadrado é: ${this.cacularArea_1()}`);
    }
}
class Triangulo extends figuraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    cacularArea_1() {
        return (this.base * this.altura) / 2;
    }
    exibirTr() {
        console.log(`O calculo do Triangulo é: ${this.cacularArea_1()}`);
    }
}
function imprimir2(figuras_0) {
    for (const figuras_8 of figuras_0) {
        console.log(`figuras: ${figuras_8.cacularArea_1()}`);
    }
}
function Imprimir(fig) {
    fig.forEach((figuras, index) => {
        console.log(`resultado da figura: ${index + 1}): ${figuras.cacularArea_1()}`);
    });
}
const Cir = new Circulo_1(10);
Cir.exibirC();
const Qr = new Quadrado_1(10);
Qr.exibirQ();
const Tr = new Triangulo(10, 10);
Tr.exibirTr();
const figuras_4 = [
    new Circulo_1(20),
    new Quadrado_1(20),
    new Triangulo(20, 20)
];
Imprimir(figuras_4);
imprimir2(figuras_4);
