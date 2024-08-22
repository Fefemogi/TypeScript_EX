// index.ts

import { Cliente } from './cliente';
import { Pedido } from './pedido';

const cliente1 = new Cliente('Ana', 'ana@example.com');
const pedido1 = new Pedido(cliente1, 'Notebook', 3000.00);

const cliente2 = new Cliente('João', 'joao@example.com');
const pedido2 = new Pedido(cliente2, 'Smartphone', 1500.00);

pedido1.exibirPedido();
pedido2.exibirPedido();
