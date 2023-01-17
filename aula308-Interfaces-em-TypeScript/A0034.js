"use strict";
/*
type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Dimas", "Capelari");
console.log(pessoa.nomeCompleto());
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa2 = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
exports.Pessoa = Pessoa;
class Pessoa2 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
exports.Pessoa2 = Pessoa2;
const pessoa = new Pessoa("Dimas", "Capelari");
const pessoaObj = {
    nome: "DIMAS",
    sobrenome: "CAPELARI",
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    },
};
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
