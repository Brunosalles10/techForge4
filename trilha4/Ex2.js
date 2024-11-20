"use strict";
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    ;
    exibirTextos() {
        return `Titulo: ${this.titulo},  conteudo: ${this.conteudo}`;
    }
}
const texto01 = new Texto("MEU TITULO 1", "O JOGO DO MUNDO");
console.log(texto01.exibirTextos());
