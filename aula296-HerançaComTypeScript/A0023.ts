// export class Pessoa {
//   public nome: string;
//   public sobrenome: string;
//   private idade: number;
//   protected cpf: string;

//   constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//     this.cpf = cpf;
//   }
// }

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return "Isso vem do Aluno: " + this.nome + " " + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return "Isso vem do CLiente: " + this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Dimas", "Capelari", 40, "123.321.456-89");
const aluno = new Aluno("Dimas", "Capelari", 40, "123.321.456-89");
const cliente = new Cliente("Dimas", "Capelari", 40, "123.321.456-89");

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
