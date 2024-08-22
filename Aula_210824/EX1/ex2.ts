// Definição do tipo Pessoa
type Pessoa = {
    nome: string;
    idade: number;
  };
  
  // Definição do tipo Empregado
  type Empregado = {
    empresa: string;
    salario: number;
  };
  
  // Criação do tipo combinado usando interseção
  type PessoaEmpregada = Pessoa & Empregado;
  
  // Função que recebe um objeto do tipo combinado e retorna uma mensagem
  function descreverPessoaEmpregada(pessoaEmpregada: PessoaEmpregada): string {
    return `Nome: ${pessoaEmpregada.nome}, Idade: ${pessoaEmpregada.idade}, Empresa: ${pessoaEmpregada.empresa}, Salário: R$ ${pessoaEmpregada.salario.toFixed(2)}.`;
  }
  
  // USO
  const empregado: PessoaEmpregada = {
    nome: 'João',
    idade: 30,
    empresa: 'TechCorp',
    salario: 5000,
  };
  
  console.log(descreverPessoaEmpregada(empregado));
  