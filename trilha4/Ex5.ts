interface LivroBiblioteca{
    titulo: string;
    autor: string;
    genero:string;
    disponivel: boolean;
}

class BibliotecaGestao{
    public Livros: LivroBiblioteca[]=[];

    adicionarLivro(livro: LivroBiblioteca): void {
        this.Livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[]{
        return this.Livros.filter(livro => livro.genero === genero)
    }

    buscaPorAutor(autor: string): LivroBiblioteca[]{
        return this.Livros.filter(livro => livro.autor === autor)
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.Livros.filter(livro => livro.disponivel).sort((a,b) => a.titulo.localeCompare(b.titulo));
    }
}

const biblioteca25 = new BibliotecaGestao();
biblioteca25.adicionarLivro({titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true})
biblioteca25.adicionarLivro({titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false})

console.log(`segue a buca por autor: `,biblioteca25.buscaPorAutor("George Orwell"));
console.log(`segue a buca por genero: `,biblioteca25.filtrarPorGenero("Fantasia"));
console.log(`segue a buca ordenada: `,biblioteca25.obterLivrosDisponiveisOrdenados());

