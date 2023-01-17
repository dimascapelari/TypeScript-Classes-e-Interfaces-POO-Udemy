"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.CarrinhoDeCompras = void 0;
class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }
}
exports.CarrinhoDeCompras = CarrinhoDeCompras;
class Produto {
    constructor(_nome, preco) {
        this._nome = _nome;
        this.preco = preco;
    }
    get nome() {
        return this._nome;
    }
}
exports.Produto = Produto;
const produto1 = new Produto("Camiseta", 49.9);
console.log(produto1.nome);
