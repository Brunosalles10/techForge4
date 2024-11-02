"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    ValorDoEstoque() {
        return this.preco * this.quantidade;
    }
    exibir() {
        console.log(`O valor ${this.nome} : ${this.ValorDoEstoque()}`);
    }
}
const estoque = new Produto('toal do estoque', 50, 1000);
estoque.ValorDoEstoque();
estoque.exibir();
