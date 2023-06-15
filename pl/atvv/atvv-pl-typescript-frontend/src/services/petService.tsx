import http from "../http-common"

const getAll = () => {
    return http.get("/pet", {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const getById = (cpf: any, nome: any) => {
    return http.get(`/pet/${cpf}/${nome}`, {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const create = (cpf: any, data: any) => {
    return http.post(`/pet/${cpf}`, data)
}

const update = (cpf: any, nome: any, data: any) => {
    return http.put(`/pet/${cpf}/${nome}`, data)
}

const remove = (cpf: any, nome: any) => {
    return http.delete(`/pet/${cpf}/${nome}`)
}

const PetService = {
    getAll,
    getById,
    update,
    create,
    remove
}

export default PetService