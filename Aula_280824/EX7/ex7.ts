// Topico 8
async function buscarDadosDaAPI(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.3;  // Simula 70% de chance de sucesso

            if (sucesso) {
                resolve('Dados recebidos da API');
            } else {
                reject('Erro na busca de dados da API');
            }
        }, 2000);  // Simula 2 segundos de espera
    });
}

async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();
        console.log(dados);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

executarBusca();  // Simula a busca de dados com async/await
