// Definição da classe ContaBancaria
class ContaBancaria {
    titular: string;
    saldo: number;
  
    constructor(titular: string, saldo: number) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    // Método que exibe o saldo atual da conta
    exibirSaldo(): void {
      console.log(`Saldo atual de ${this.titular}: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  
  // Definição da subclasse ContaCorrente que herda de ContaBancaria
  class ContaCorrente extends ContaBancaria {
    limiteCredito: number;
  
    constructor(titular: string, saldo: number, limiteCredito: number) {
      super(titular, saldo);
      this.limiteCredito = limiteCredito;
    }
  
    // Sobrescrita do método exibirSaldo para incluir o limite de crédito
    exibirSaldo(): void {
      const saldoDisponivel = this.saldo + this.limiteCredito;
      console.log(
        `Saldo atual de ${this.titular}: R$ ${this.saldo.toFixed(2)} (Limite de crédito disponível: R$ ${this.limiteCredito.toFixed(2)}, Saldo total: R$ ${saldoDisponivel.toFixed(2)})`
      );
    }
  }
  
  // Exemplo de uso
  const contaBancaria = new ContaBancaria('João', 500);
  contaBancaria.exibirSaldo(); // Chama o método original da classe base
  
  const contaCorrente = new ContaCorrente('Maria', 1000, 500);
  contaCorrente.exibirSaldo(); // Chama o método sobrescrito na subclasse  