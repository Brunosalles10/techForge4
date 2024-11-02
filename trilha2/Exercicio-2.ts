class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    public marcaComoLido(): void{
        this.lido = true;
        
    }
    public exibir(): void{
        const status = this.lido ? "sim" : "não";
        console.log(`O livro, ${this.titulo}  foi lido: ${this.autor} status do livro ${status}`);
        
    }


}
const livro1 = new Livro("biografia1","bruno",100)

livro1.exibir();
livro1.marcaComoLido();
livro1.exibir();