"use strict";
class Loja {
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
        this.produtos = [];
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const loja1 = new Loja(1, "refigerador");
console.log(`busca ${loja1.buscarProdutoPorCodigo(1)}`);
