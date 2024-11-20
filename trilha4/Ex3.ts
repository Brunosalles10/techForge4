interface ProdutoLoja{
    codigo: number;
    nome: string;
}

class Loja implements ProdutoLoja{
    public produtos: ProdutoLoja[] = [];
    constructor(public codigo:number, public nome:string){}


    buscarProdutoPorCodigo(codigo:number): ProdutoLoja | undefined{
        return this.produtos.find( produto => produto.codigo === codigo);

    }
}

const loja1 = new Loja(1 ,"refigerador");
console.log(`busca ${loja1.buscarProdutoPorCodigo(1)}`);
