export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    // private cpf: string -------- Maneira Antiga --------
    private _cpf: string
  ) {
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

  set cpf(cpf: string) {
    console.log("SETTER CHAMADO");
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log("GETTER CHAMADO");
    return this._cpf.replace(/\D/g, "");
  }
}

const pessoa = new Pessoa("Dimas", "Capelari", 40, "123.321.456-00");
// pessoa.setCpf("123.321.456-99"); -------- Maneira Antiga --------
pessoa.cpf = "123.321.456-99"; // usar sinal de = para set

// console.log(pessoa.getCpf()); -------- Maneira Antiga --------
console.log(pessoa.cpf);
