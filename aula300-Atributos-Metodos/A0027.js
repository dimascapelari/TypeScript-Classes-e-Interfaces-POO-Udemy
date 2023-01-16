"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    static falaOi() {
        console.log("OI");
    }
    metodoNormal() {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
    static criaPessoa(nome, sobrenome) {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}
exports.Pessoa = Pessoa;
Pessoa.idadePadrao = 0;
Pessoa.cpfPadrao = "000.000.000-00";
const pessoa1 = new Pessoa("Dimas", "Capelari", 40, "123.321.456-00");
const pessoa2 = Pessoa.criaPessoa("Mariana", "Capelari");
console.log(pessoa1);
console.log(pessoa2);
Pessoa.falaOi();
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
