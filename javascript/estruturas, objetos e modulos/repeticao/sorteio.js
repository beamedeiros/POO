//sortear
let sortear = (possibilidades) => {
    let numeroSorteado = Math.floor(Math.random() * possibilidades);
    return numeroSorteado
}

//remover elemento
let removeElemento = (numeros, elemento) => {
    for (var indice = 0; indice < numeros.length; indice++){
        if (numeros[indice] === elemento) {
            numeros.splice(indice, 1)
        }
    }
}

//do-while
let sorteio = (numeros, quantidadeSorteios) => {
    let numeroSorteados = []
    do {
        let indiceSorteado = sortear(numeros.length)
        let numeroSorteado = numeros[indiceSorteado]
        numeroSorteados.push(numeroSorteado)
        removeElemento(numeros, numeroSorteado)
    }
    while (numeroSorteados.length < quantidadeSorteios);
    return numeroSorteados
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let resultado = sorteio(numeros, 3)

console.log(resultado)