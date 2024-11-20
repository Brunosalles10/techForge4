"use strict";
class ItemLoja10 {
    constructor(id = 1, nome1 = "bruno", preco1 = 25) {
        this.id = id;
        this.nome1 = nome1;
        this.preco1 = preco1;
    }
}
const it = new ItemLoja10();
console.log(`os item da loja: ${JSON.stringify(it)}`);
