import { RequestHandler } from 'express'
import serviceInt from "../controller/serviceInt";
import serviceController from '../controller/serviceController';

const sController: serviceInt = new serviceController()

export const getServId:RequestHandler = (req, res, next) => {
    const { nome } = req.params
    let servico = sController.index().find(s => s.getNome === nome);
    if (servico) {
        res.send(servico).status(200)
    }
}

export const listarService: RequestHandler = (req, res, next) => {
    let services = sController.index()
    res.send(services).status(200)
}

export const createService: RequestHandler = (req, res, next) => {
    const data = (req.body as {nome:string,valor:number})
    try{
        sController.create(data.nome, data.valor)
        res.send(true).status(200)
    }catch(e){
        res.send(false).status(409)
    }
}

export const updateService: RequestHandler = (req, res, next) => {
    const { nome } = req.params
    const data = (req.body as {valor: number})
    try{
        let service = sController.update(nome, data.valor)
        res.send(service).status(200)
    }catch(e){
        res.send(e).status(404)
    }
}

export const deleteService: RequestHandler = (req, res, next) => {
    const { nome } = req.params
    try {
        sController.delete(nome)
        res.send(true).status(200)
    }catch(e) {
        res.send(e).status(404)
    }
}