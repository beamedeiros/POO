import http from "../http-common"

const compraServ = (cpf: any, servico: any, pet: any, data: any) => {
    return http.put(`/compra/servico/${cpf}/${servico}/${pet}`, data)
}

const compraProd = (cpf: any, produto: any, pet: any, data: any) => {
    return http.put(`/compra/produto/${cpf}/${produto}/${pet}`, data)
}

const CompraService = {
    compraServ,
    compraProd
}

export default CompraService