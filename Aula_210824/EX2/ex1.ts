// Definição da classe Funcionario
class Funcionario {
    nome: string;
    cargo: string;
    salario: number;
  
    constructor(nome: string, cargo: string, salario: number) {
      this.nome = nome;
      this.cargo = cargo;
      this.salario = salario;
    }
  
    // Método que retorna uma descrição do funcionário
    descrever(): string {
      return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$ ${this.salario.toFixed(2)}`;
    }
  }
  
  // Definição da subclasse Gerente que herda de Funcionario
  class Gerente extends Funcionario {
    departamento: string;
  
    constructor(nome: string, cargo: string, salario: number, departamento: string) {
      super(nome, cargo, salario);
      this.departamento = departamento;
    }
  
    // Método que retorna uma descrição detalhada do gerente
    descreverDetalhado(): string {
      return `${this.descrever()}, Departamento: ${this.departamento}`;
    }
  }
  
  // Exemplo de uso
  const funcionario = new Funcionario('Carlos', 'Desenvolvedor', 7000);
  console.log(funcionario.descrever());
  
  const gerente = new Gerente('Ana', 'Gerente de Projetos', 10000, 'TI');
  console.log(gerente.descreverDetalhado());
  