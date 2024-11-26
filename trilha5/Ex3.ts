abstract class FavoriteManager {
    protected listaFavorito: string[] = [];

   abstract addFavorite(item: string): void

    abstract getFavorites(): string[] 
}

class MoviesFavoriteManager extends FavoriteManager{
    addFavorite(item: string): void {
        if (!this.listaFavorito.includes(item)) {
           
            this.listaFavorito.push(item);
           
            

        }
            
        
        
    }

    getFavorites(): string[] {
        return this.listaFavorito.sort();
    }

}

class BooksFavoriteManager extends FavoriteManager{
    addFavorite(item: string): void {
        this.listaFavorito.unshift(item)
    }
    getFavorites(): string[] {
        return this.listaFavorito
    }

}

const filme1 = new MoviesFavoriteManager();
filme1.addFavorite("a volta dos ladroes")
filme1.addFavorite("velozes e furiosos")
filme1.addFavorite("as 2 torres ")
filme1.addFavorite("jogos vorazes")
filme1.addFavorite("velozes e furiosos")
console.log(filme1.getFavorites());


const filme2 = new BooksFavoriteManager();
filme2.addFavorite("1911")
filme2.addFavorite("naruto")
filme2.addFavorite("boruto")
filme2.addFavorite("1911")
console.log(filme2.getFavorites());


