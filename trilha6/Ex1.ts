class Oder {
    protected listaDeItens10: string[] = [];
    protected preco: number = 0;

    public addItens(item: string): void{
       this.listaDeItens10.push(item)
    }

    public cauculoPrecoTotal(total: number, quantidade:number): void{
        total= this.preco + quantidade ;

    }

    public processarPagamento(tipo: string, status: string): string{

        const mensagem = `O tipo de Pagamento é ${tipo} o status do pedido: ${status}`;
        console.log(mensagem);
        return mensagem
        
    }


}


class Cart {
    private items: string[] = [];

    addItem(item: string) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }
}

class Payment {
    processPayment(type: string, status: string): string {
        return `Payment processed: type=${type}, status=${status}`;
    }
}

class Shipping {
    calculateShippingCost(items: string[]): number {
        return 10;
    }
}

class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;

    constructor(cart: Cart, payment: Payment, shipping: Shipping) {
        this.cart = cart;
        this.payment = payment;
        this.shipping = shipping;
    }

    calculateTotalPrice(): number {
        return this.cart.getItems().length * 10; 
    }

    processOrder(): void {
        
    }
}