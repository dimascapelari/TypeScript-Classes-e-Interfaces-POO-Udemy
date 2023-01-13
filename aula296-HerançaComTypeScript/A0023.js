"use strict";
// export class Pessoa {
//   public nome: string;
//   public sobrenome: string;
//   private idade: number;
//   protected cpf: string;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.Aluno = exports.Pessoa = void 0;
//   constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//     this.cpf = cpf;
//   }
// }
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getIdade() {
        return this.idade;
    }
    getCpf() {
        return this.cpf;
    }
    getNomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
exports.Pessoa = Pessoa;
class Aluno extends Pessoa {
    getNomeCompleto() {
        return "Isso vem do Aluno: " + this.nome + " " + this.sobrenome;
    }
}
exports.Aluno = Aluno;
class Cliente extends Pessoa {
    getNomeCompleto() {
        return "Isso vem do CLiente: " + this.nome + " " + this.sobrenome;
    }
}
exports.Cliente = Cliente;
const pessoa = new Pessoa("Dimas", "Capelari", 40, "123.321.456-89");
const aluno = new Aluno("Dimas", "Capelari", 40, "123.321.456-89");
const cliente = new Cliente("Dimas", "Capelari", 40, "123.321.456-89");
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
