// Pedido.ts

import { Cliente } from './cliente';

export class Pedido {
  cliente: Cliente;
  produto: string;
  valor: number;

  constructor(cliente: Cliente, produto: string, valor: number) {
    this.cliente = cliente;
    this.produto = produto;
    this.valor = valor;
  }

  exibirPedido(): void {
    console.log(`Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$ ${this.valor.toFixed(2)}`);
  }
}
