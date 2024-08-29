// Topico 7 

class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';
    }
}

function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoError('Email inválido: o endereço de email deve conter o caractere "@"');
    }
    console.log('Email válido');
}

// Exemplo de uso:
try {
    verificarEmail('usuario.com');
} catch (error) {
    if (error instanceof EmailInvalidoError) {
        console.error(error.message);  // Deve imprimir "Email inválido: o endereço de email deve conter o caractere '@'"
    } else {
        console.error('Erro inesperado:', error);
    }
}
