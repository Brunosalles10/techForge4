"use strict";
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    marcaComoLido() {
        this.lido = true;
    }
    exibir() {
        const status = this.lido ? "sim" : "não";
        console.log(`O livro, ${this.titulo}  foi lido: ${this.autor} status do livro ${status}`);
    }
}
const livro1 = new Livro("biografia1", "bruno", 100);
livro1.exibir();
livro1.marcaComoLido();
livro1.exibir();
