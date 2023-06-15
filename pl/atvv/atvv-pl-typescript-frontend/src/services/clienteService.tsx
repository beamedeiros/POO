import http from "../http-common"

const getAll = () => {
    return http.get("/cliente", {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const getById = (cpf: any) => {
    return http.get(`/cliente/${cpf}`, {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const create = (data: any) => {
    return http.post('/cliente', data)
}

const update = (cpf: any, data: any) => {
    return http.put(`/cliente/${cpf}`, data)
}

const remove = (cpf: any) => {
    return http.delete(`/cliente/${cpf}`)
}

const ClienteService = {
    getAll,
    getById,
    update,
    create,
    remove
}

export default ClienteService