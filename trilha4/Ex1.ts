interface Produto10 {
    id: number;
    nome1:string;
    preco1:number;

}

class ItemLoja10 implements Produto10{
    constructor(public id: number = 1
        , public nome1: string = "bruno"
        , public preco1: number = 25
    ){}
}

const it = new ItemLoja10();
console.log(`os item da loja: ${JSON.stringify(it)}`);
