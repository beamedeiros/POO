const empresa = new Object()
empresa.nome = 'Banco Nacional'
empresa.cnpj = '12345678910'

const empresa2 = empresa
empresa2['nome'] = 'Banco Internacional'

console.log(empresa.nome)