import { RequestHandler } from 'express'
import petInt from "../controller/petInt";
import petController from "../controller/petController";

const pController: petInt = new petController()

export const getPetId:RequestHandler = (req, res, next) => {
    const { nome } = req.params
    let pet = pController.index().find(p => p.getNome === nome);
    if (pet) {
        res.send(pet).status(200)
    }
}

export const listarPet: RequestHandler = (req, res, next) => {
    let pets = pController.index()
    res.send(pets).status(200)
}

export const createPet: RequestHandler = (req, res, next) => {
    const { cpf } = req.params
    const data = (req.body as {nome: string, tipo: string, raca: string, genero: string})
    try{
        pController.create(cpf,data.nome,data.tipo,data.raca,data.genero)
        res.send(true).status(200)
    }catch(e){
        res.send(false).status(409)
    }
}

export const updatePet: RequestHandler = (req, res, next) => {
    const { cpf,nome } = req.params
    const data = (req.body as {tipo: string, raca: string, genero: string})
    try{
        pController.update(cpf,nome,data.tipo,data.raca,data.genero)
        res.send(true).status(200)
    }catch(e){
        res.send(false).status(409)
    }
}

export const deletePet: RequestHandler = (req, res, next) => {
    const { cpf, nome } = req.params
    try {
        pController.delete(cpf,nome)
        res.send(true).status(200)
    }catch(e) {
        res.send(e).status(404)
    }
}