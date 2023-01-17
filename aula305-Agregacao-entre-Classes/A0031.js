"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.CarrinhoDeCompras = void 0;
class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }
    inserirProduto(...produtos) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }
    quantidadeProdutos() {
        return this.produtos.length;
    }
    valorTotal() {
        let x = this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
        //   .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        //   .toFixed(2);
        return x;
        // return Math.round(x);
    }
}
exports.CarrinhoDeCompras = CarrinhoDeCompras;
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
exports.Produto = Produto;
const produto1 = new Produto("Camiseta", 49.9);
const produto2 = new Produto("Caneca", 1.9);
const produto3 = new Produto("Caneta", 0.9);
const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1, produto2, produto3);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());
// console.log(produto1.nome);
// console.log(produto1.preco);
