"use strict";
class Inventory {
    constructor() {
        this.items = {};
    }
    addItem(item, quantity) { }
    removeItem(item) { }
    getInventory() {
        return this.items;
    }
}
class WarehouseInventory extends Inventory {
    addItem(item, quantity) {
        if (this.items[item]) {
            this.items[item] += quantity;
        }
        else {
            this.items[item] = quantity;
        }
        console.log(`Adicionado ${quantity} de "${item}" ao inventário.`);
    }
    removeItem(item) {
        if (this.items[item]) {
            delete this.items[item];
            console.log(`O item ${item} foi removido do iventario`);
        }
        else {
            console.log(`O item não existe ${item}`);
        }
    }
}
class StoreInventory extends Inventory {
    addItem(item, quantity) {
        if (quantity > 10) {
            console.log("quantida máxima atingida");
            return;
        }
        if (this.items[item]) {
            this.items[item] += quantity; //add a quantidade
        }
        else {
            this.items[item] = quantity; //add o item caso não exista
        }
        console.log(`Adicionado ${quantity} de "${item}" ao inventário.`);
    }
}
const iv1 = new WarehouseInventory();
iv1.addItem("BOLA", 8);
iv1.addItem("DOCES", 15);
iv1.addItem("AMORA", 2);
console.log(iv1.getInventory());
const iv2 = new StoreInventory();
iv2.addItem("limao", 5);
iv2.addItem("abacate", 6);
iv2.addItem("melancia", 8);
iv2.addItem("morango", 20);
console.log(iv2.getInventory());
