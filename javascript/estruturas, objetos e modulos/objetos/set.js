let empresa = {
    nome: 'Mercado Online',
    razaoSocial: 'ABC LTDA',
    set colocarNome(novoNome) {
        this.nome = novoNome
    }
}

empresa.colocarNome = 'Mercado Online Americano'

console.log('Qual o nome da empresa: ' + empresa.nome)