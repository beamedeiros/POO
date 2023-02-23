const empresa = new Object()
empresa.nome = "Banco Nacional"
empresa.cnpj = "12345678912"
empresa.endereco = "Av. Brasil, n 541, RJ"

delete empresa.endereco
console.log(empresa.endereco)