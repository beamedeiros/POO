import http from "../http-common"

const getAll = () => {
    return http.get("/cliente/clientes", {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const getById = (id: any) => {
    return http.get(`/cliente/${id}`, {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const create = (data: any) => {
    return http.post('/cliente/cadastrar', data)
}

const update = (data: any) => {
    return http.put('/cliente/atualizar', data)
}

const remove = (id: any) => {
    return http.delete(`/cliente/excluir`, { data: { id } })
}

const ClienteService = {
    getAll,
    getById,
    update,
    create,
    remove
}

export default ClienteService