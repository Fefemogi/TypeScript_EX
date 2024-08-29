function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const inicio = performance.now();  // Captura o tempo inicial
        const resultado = metodoOriginal.apply(this, args);  // Executa o método original
        const fim = performance.now();  // Captura o tempo final

        console.log(`${propertyKey} demorou ${fim - inicio} ms para ser executado.`);
        return resultado;
    };

    return descriptor;
}

class Calculadora {
    medirTempoDeExecucao
    somarNumeros(array: number[]): number {
        // Simula uma soma de números
        return array.reduce((a, b) => a + b, 0);
    }
}

// Exemplo de uso:
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);  // Deve exibir o tempo de execução
