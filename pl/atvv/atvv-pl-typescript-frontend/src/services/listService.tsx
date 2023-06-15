import http from "../http-common"

const topTenClient = () => {
    return http.get("/report/topTenClient", {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const topServices = () => {
    return http.get("/report/topServices", {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const topPet = () => {
    return http.get("/report/topPet", {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const topFiveClient = () => {
    return http.get("/report/topFiveClient", {
        validateStatus: (status) => status >= 200 && status < 400
    })
}

const ListaService = {
    topTenClient,
    topServices,
    topPet,
    topFiveClient
}

export default ListaService