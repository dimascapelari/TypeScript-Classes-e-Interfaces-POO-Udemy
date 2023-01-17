export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    let x = this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    //   .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    //   .toFixed(2);
    return x;
    // return Math.round(x);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}

  /*
   constructor(private _nome: string, private preco: number) {}

   get nome(): string {
     return this._nome;
   }
  
  get preco(): number {
    return this._preco;
  } 
  */
}

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
