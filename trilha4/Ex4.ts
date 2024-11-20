interface Livro10 {
    titulo1: string;
    autor1: string;
    disponivel: boolean;
}

class Biblioteca10 {
    //constructor(public titulo1: string, public autor1: string, public disponivel: boolean){}
    public livros: Livro10[] = [];

    adicionarLivro(livro: Livro10): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro10[]{
        return this.livros.filter(livro => livro.disponivel)
    }
}

const biblioteca = new Biblioteca10();
biblioteca.adicionarLivro({ titulo1: "O Senhor dos Anéis", autor1: "J.R.R. Tolkien", disponivel: true });
biblioteca.adicionarLivro({ titulo1: "1984", autor1: "George Orwell", disponivel: false });
biblioteca.adicionarLivro({ titulo1: "Dom Quixote", autor1: "Miguel de Cervantes", disponivel: true });

const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log("Livros disponíveis:");
livrosDisponiveis.forEach(livro => {
    console.log(`Título=${livro.titulo1}, Autor=${livro.autor1}`);
});
