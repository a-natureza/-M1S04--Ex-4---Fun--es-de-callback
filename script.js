function adicao(num1, num2, callback) {
    const resultado = num1 + num2;
    callback(resultado);
}

// Exemplo de uso
adicao(10, 5, function(resultado) {
    console.log("O resultado da adição é:", resultado);
});