// Definição da interface Produto
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
  }
  
  // Definição do tipo de união FormaPagamento
  type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  
  // Função que recebe um objeto do tipo Produto e a forma de pagamento, e retorna uma mensagem
  function exibirDetalhesProduto(produto: Produto, formaPagamento: FormaPagamento): string {
    return `O produto ${produto.nome}, da categoria ${produto.categoria}, custa R$ ${produto.preco.toFixed(2)}. Forma de pagamento escolhida: ${formaPagamento}.`;
  }
  
  // USO
  const produto: Produto = {
    nome: 'Smartphone',
    preco: 1999.99,
    categoria: 'Eletrônicos',
  };
  
  const pagamento: FormaPagamento = 'cartão';
  
  console.log(exibirDetalhesProduto(produto, pagamento));
  