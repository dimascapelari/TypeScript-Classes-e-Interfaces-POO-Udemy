export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa("Udemy", "11.111.111/0001-11");
const colaborador1 = new Colaborador("Dimas", "Capelari");
const colaborador2 = new Colaborador("Maria Luiza", "Capelari");
const colaborador3 = new Colaborador("Mariana", "Capelari");
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
// empresa1.adicionaColaborador({
//   nome: "Teste",
//   sobrenome: "Testando",
// });
console.log(empresa1);
empresa1.mostrarColaboradores();
