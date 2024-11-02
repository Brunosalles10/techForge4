class Produto{
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco:number, quantidade: number){
        this.nome = nome;
        this.preco = preco
        this.quantidade = quantidade
    }

    public ValorDoEstoque(){
        return this.preco * this.quantidade
    }

    exibir(): void{
        console.log(`O valor ${this.nome} : ${this.ValorDoEstoque()}`);
        
    }


}

const estoque = new Produto('toal do estoque', 50, 1000)
estoque.ValorDoEstoque();
estoque.exibir();