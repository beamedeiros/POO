import clienteController from "../controller/clienteController";
import clienteInt from "../controller/clienteInt";
import compraController from "../controller/compraController";
import petController from "../controller/petController";
import { RequestHandler } from 'express'

const cService: compraController = new compraController()
const pService:petController = new petController()

export const createCompraServico:RequestHandler = (req,res,next)=>{
    const { cpf, servico, pet } = req.params
    const data = (req.body as {qtd:number})
    try{
        let p = pService.find(pet)
        cService.compraServico(cpf,servico,data.qtd,p.getTipo,p.getRaca)
        res.send(true).status(200)
    }catch(e){
        res.send(e).status(404)
    }
} 

export const createCompraProduto:RequestHandler = (req,res,next)=>{
    const { cpf, produto, pet } = req.params
    const data = (req.body as {qtd:number})
    try{
        let p = pService.find(pet)
        cService.compraProduto(cpf,produto,data.qtd,p.getTipo,p.getRaca)
        res.send(true).status(200)
    }catch(e){
        res.send(e).status(404)
    }
} 