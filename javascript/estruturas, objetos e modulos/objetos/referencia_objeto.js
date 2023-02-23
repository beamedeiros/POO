let valorReferencia = {'valor': 10}

function aumentarMaisDez(referencia) {
    referencia.valor = referencia.valor + 10
}

aumentarMaisDez(valorReferencia)

console.log('Este é o valor da variável: '+valorReferencia.valor)