// index.ts

import { Financeiro } from './Financeiro';

const orcamento = new Financeiro.Orcamento(1000, ['Produto A', 'Produto B', 'Produto C']);

console.log(`Valor inicial: R$ ${orcamento.valorTotal.toFixed(2)}`);

// Aplicando imposto de 10%
orcamento.aplicarImposto(10);
console.log(`Valor após imposto de 10%: R$ ${orcamento.valorTotal.toFixed(2)}`);

// Aplicando desconto de 5%
orcamento.aplicarDesconto(5);
console.log(`Valor após desconto de 5%: R$ ${orcamento.valorTotal.toFixed(2)}`);

// Exibindo detalhes do orçamento
orcamento.exibirOrcamento();
