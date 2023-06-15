import { RequestHandler } from 'express'
import produtoController from "../controller/produtoController";
import serviceInt from "../controller/serviceInt";

const prodController: serviceInt = new produtoController()

export const getProdId:RequestHandler = (req, res, next) => {
    const { nome } = req.params
    let prod = prodController.index().find(p => p.getNome === nome);
    if (prod) {
        res.send(prod).status(200)
    }
}

export const listarProduto: RequestHandler = (req, res, next) => {
    let produtos = prodController.index()
    res.send(produtos).status(200)
}

export const createProduto: RequestHandler = (req, res, next) => {
    const data = (req.body as {nome:string,valor:number})
    try{
        prodController.create(data.nome, data.valor)
        res.send(true).status(200)
    }catch(e){
        res.send(false).status(409)
    }
}

export const updateProduto: RequestHandler = (req, res, next) => {
    const { nome } = req.params
    const data = (req.body as {valor: number})
    try{
        let produto = prodController.update(nome, data.valor)
        res.send(produto).status(200)
    }catch(e){
        res.send(e).status(404)
    }
}

export const deleteProduto: RequestHandler = (req, res, next) => {
    const { nome } = req.params
    try {
        prodController.delete(nome)
        res.send(true).status(200)
    }catch(e) {
        res.send(e).status(404)
    }
}