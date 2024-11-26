"use strict";
class FavoriteManager {
    constructor() {
        this.listaFavorito = [];
    }
}
class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        if (!this.listaFavorito.includes(item)) {
            this.listaFavorito.push(item);
        }
    }
    getFavorites() {
        return this.listaFavorito.sort();
    }
}
class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        this.listaFavorito.unshift(item);
    }
    getFavorites() {
        return this.listaFavorito;
    }
}
const filme1 = new MoviesFavoriteManager();
filme1.addFavorite("a volta dos ladroes");
filme1.addFavorite("velozes e furiosos");
filme1.addFavorite("as 2 torres ");
filme1.addFavorite("jogos vorazes");
filme1.addFavorite("velozes e furiosos");
console.log(filme1.getFavorites());
const filme2 = new BooksFavoriteManager();
filme2.addFavorite("1911");
filme2.addFavorite("naruto");
filme2.addFavorite("boruto");
filme2.addFavorite("1911");
console.log(filme2.getFavorites());
