"use strict";
class Oder {
    constructor() {
        this.listaDeItens10 = [];
        this.preco = 0;
    }
    addItens(item) {
        this.listaDeItens10.push(item);
    }
    cauculoPrecoTotal(total, quantidade) {
        total = this.preco + quantidade;
    }
    processarPagamento(tipo, status) {
        const mensagem = `O tipo de Pagamento é ${tipo} o status do pedido: ${status}`;
        console.log(mensagem);
        return mensagem;
    }
}
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
}
class Payment {
    processPayment(type, status) {
        return `Payment processed: type=${type}, status=${status}`;
    }
}
class Shipping {
    calculateShippingCost(items) {
        return 10;
    }
}
class Order {
    constructor(cart, payment, shipping) {
        this.cart = cart;
        this.payment = payment;
        this.shipping = shipping;
    }
    calculateTotalPrice() {
        return this.cart.getItems().length * 10;
    }
    processOrder() {
    }
}
