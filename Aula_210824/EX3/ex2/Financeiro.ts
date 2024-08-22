// Financeiro.ts

export namespace Financeiro {
  export function calcularImposto(valor: number, taxa: number): number {
    return valor * (taxa / 100);
  }

  export function calcularDesconto(valor: number, taxa: number): number {
    return valor * (taxa / 100);
  }

  export class Orcamento {
    valorTotal: number;
    itens: string[];

    constructor(valorTotal: number, itens: string[]) {
      this.valorTotal = valorTotal;
      this.itens = itens;
    }

    aplicarImposto(taxa: number): void {
      this.valorTotal += calcularImposto(this.valorTotal, taxa);
    }

    aplicarDesconto(taxa: number): void {
      this.valorTotal -= calcularDesconto(this.valorTotal, taxa);
    }

    exibirOrcamento(): void {
      console.log(`Itens: ${this.itens.join(", ")}`);
      console.log(`Valor Total: R$ ${this.valorTotal.toFixed(2)}`);
    }
  }
}
