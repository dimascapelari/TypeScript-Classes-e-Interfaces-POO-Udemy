// -------- Exemplo 1 --------

// export abstract class TipoPessoa {
//   protected abstract nome: string;
//   protected abstract sobrenome: string;
//   protected abstract nomeCompleto(): string;
// }

// export class Pessoa extends TipoPessoa {
//   constructor(public nome: string, public sobrenome: string) {
//     super();
//   }

//   nomeCompleto(): string {
//     return this.nome + " " + this.sobrenome;
//   }
// }

// const pessoa = new Pessoa("Dimas", "Capelari");
// console.log(pessoa.nomeCompleto());

// -------- Exemplo 2 --------
/*
type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Dimas", "Capelari");
console.log(pessoa.nomeCompleto());
*/

// -------- Exemplo 3 --------
type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Dimas", "Capelari");
console.log(pessoa.nomeCompleto());
