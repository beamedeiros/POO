let empresa = {
    nome: 'Mercado Online',
    razaoSocial: 'ABC LTDA'
}

empresa.detalhe = function() {
    return this.nome + '\n' + this.razaoSocial
};

console.log('Qual o nome da empresa: \n' + empresa.detalhe())