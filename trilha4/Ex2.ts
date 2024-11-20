interface Documento {
    titulo: string;
    conteudo:string;
}

class Texto implements Documento{
    constructor(public titulo: string, public conteudo:string){};

    exibirTextos(): string {
        return `Titulo: ${this.titulo},  conteudo: ${this.conteudo}`;
        
    }
}

const texto01 = new Texto("MEU TITULO 1","O JOGO DO MUNDO")
console.log(texto01.exibirTextos());
