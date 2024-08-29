function encontrarMaiorElemento<T>(array: T[]): T {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }

    return array.reduce((max, current) => (current > max ? current : max));
}

// Exemplo de uso:
const maiorNumero = encontrarMaiorElemento([10, 20, 30]);  // 30
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);  // 'zebra'

console.log(maiorNumero);  // Saída: 30
console.log(maiorPalavra); // Saída: 'zebra'
