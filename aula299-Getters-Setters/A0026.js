"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, 
    // private cpf: string -------- Maneira Antiga --------
    _cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this._cpf = _cpf;
        this.cpf = _cpf;
    }
    // -------- Maneira Antiga --------
    /*
    setCpf(valor: string): void {
      this.cpf = valor;
    }
  
    getCpf(): string {
      return this.cpf.replace(/\D/g, "");
    }
    */
    set cpf(cpf) {
        console.log("SETTER CHAMADO");
        this._cpf = cpf;
    }
    get cpf() {
        console.log("GETTER CHAMADO");
        return this._cpf.replace(/\D/g, "");
    }
}
exports.Pessoa = Pessoa;
const pessoa = new Pessoa("Dimas", "Capelari", 40, "123.321.456-00");
// pessoa.setCpf("123.321.456-99"); -------- Maneira Antiga --------
pessoa.cpf = "123.321.456-99"; // usar sinal de = para set
// console.log(pessoa.getCpf()); -------- Maneira Antiga --------
console.log(pessoa.cpf);
