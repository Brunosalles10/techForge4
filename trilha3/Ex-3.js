"use strict";
class Pagamento {
    Processar() {
    }
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    Processar() {
        let soma = 0;
        let alternar = false;
        for (let index = this.numeroCartao.length - 1; index >= 0; index--) {
            let digito = parseInt(this.numeroCartao[index]);
            if (alternar) {
                digito *= 2;
                if (digito > 9)
                    digito -= 9;
            }
            soma += digito;
            alternar = !alternar;
        }
        const valido = soma % 10 === 0;
        if (valido) {
            console.log('sucesso no processamento');
        }
        else {
            console.error('erro no precessamento');
        }
        return valido;
    }
}
class PagamentoBoleto extends Pagamento {
    Processar() {
        let gerarBoleto = Math.floor(Math.random() * 1000000000);
        console.log(`numero gerado com sucesso: ${gerarBoleto}`);
    }
}
function processarPagamento(pagamento) {
    pagamento.Processar();
}
const pag1 = new PagamentoCartao("4111111111111111");
console.log(pag1.Processar());
const pag2 = new PagamentoCartao("123456789");
console.log(pag2.Processar());
const pagBoleto = new PagamentoBoleto();
processarPagamento(pagBoleto);
