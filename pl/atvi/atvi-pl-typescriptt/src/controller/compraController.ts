import Cliente from "../models/cliente"
import compra from "../models/compra"
import Empresa from "../models/empresa"
import Produto from "../models/produto"
import Servico from "../models/servico"
import petController from "./petController"

export default class compraController {

    empresa: Empresa = Empresa.getEmpresa()
    private clientes: Array<Cliente> = this.empresa.getClientes
    private produtos: Array<Produto> = this.empresa.getProdutos
    private servicos: Array<Servico> = this.empresa.getServicos
    private pController:petController = new petController()

    public compraServico(cpf:string, serv:string, qtd:number, tipo:string, raca:string){
        let cliente = this.clientes.find(cli=>(cli.getCpf.getValor == cpf))
        if(cliente != null){
            let servico = this.servicos.find(s=>(s.getNome==serv))
            if(servico != null){
                cliente.getServicosConsumidos.push(new compra(servico,qtd,tipo,raca))
            }else{
                throw new Error('Serviço não encontrado')
            }
        }else{
            throw new Error('Cliente não encontrado')
        }
    }

    public compraProduto(cpf:string, prod:string, qtd:number, tipo:string, raca:string):void{
        let cliente = this.clientes.find(cli=>(cli.getCpf.getValor == cpf))
        if(cliente != null){
            let produto = this.produtos.find(s=>(s.getNome==prod))
            if(produto != null){
                cliente.getProdutosConsumidos.push(new compra(produto,qtd,tipo,raca))
            }else{
                throw new Error('Produto não encontrado')
            }
        }else{
            throw new Error('Cliente não encontrado')
        }
    }

}