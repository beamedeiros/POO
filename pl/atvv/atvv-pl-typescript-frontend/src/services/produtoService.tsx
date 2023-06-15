import http from "../http-common"

const getAll = () => {
    return http.get("/produto", {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const getById = (nome: any) => {
    return http.get(`/produto/${nome}`, {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const create = (data: any) => {
    return http.post('/produto', data)
}

const update = (nome: any, data: any) => {
    return http.put(`/produto/${nome}`, data)
}

const remove = (nome: any) => {
    return http.delete(`/produto/${nome}`)
}

const ProdutoService = {
    getAll,
    getById,
    update,
    create,
    remove
}

export default ProdutoService