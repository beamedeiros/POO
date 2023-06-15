import clienteInt from "../controller/clienteInt";
import clienteController from "../controller/clienteController";
import { RequestHandler } from 'express'
import Telefone from "../models/telefone";

const cController: clienteInt = new clienteController()

export const getClientId:RequestHandler = (req, res, next) => {
    const { cpf } = req.params
    let clientes = cController.index().find(user => user.getCpf.getValor === cpf);
    if (clientes) {
        res.send(clientes).status(200)
    }
}

export const listarCliente: RequestHandler = (req, res, next) => {
    let clientes = cController.index()
    res.send(clientes).status(200)
}

export const createCliente: RequestHandler = (req, res, next) => {
    const data = (req.body as {nome:string,nomeSocial:string,valor:string,data:string, estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string, telefone: [Telefone]})
    try{
        cController.create(data.nome, data.nomeSocial, data.valor, data.data, data.estado, data.cidade, data.bairro, data.rua, data.numero, data.codigoPostal, data.informacoesAdicionais, data.telefone)
        res.send(true).status(200)
    }catch(e){
        res.send(false).status(409)
    }
}

export const updateCliente: RequestHandler = (req, res, next) => {
    const { cpf } = req.params
    const data = (req.body as {nome:string,nomeSocial:string,data:string, estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string, telefone: [Telefone]})
    try{
        let cliente = cController.update(data.nome, data.nomeSocial, cpf, data.data, data.estado, data.cidade, data.bairro, data.rua, data.numero, data.codigoPostal, data.informacoesAdicionais, data.telefone)
        res.send(cliente).status(200)
    }catch(e){
        res.send(e).status(404)
    }
}

export const deleteCliente: RequestHandler = (req, res, next) => {
    const { cpf } = req.params
    try {
        cController.delete(cpf)
        res.send(true).status(200)
    }catch(e) {
        res.send(e).status(404)
    }
}