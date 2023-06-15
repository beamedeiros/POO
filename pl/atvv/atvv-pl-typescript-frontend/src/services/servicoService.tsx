import http from "../http-common"

const getAll = () => {
    return http.get("/servico", {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const getById = (nome: any) => {
    return http.get(`/servico/${nome}`, {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const create = (data: any) => {
    return http.post('/servico', data)
}

const update = (nome: any, data: any) => {
    return http.put(`/servico/${nome}`, data)
}

const remove = (nome: any) => {
    return http.delete(`/servico/${nome}`)
}

const ServicoService = {
    getAll,
    getById,
    update,
    create,
    remove
}

export default ServicoService