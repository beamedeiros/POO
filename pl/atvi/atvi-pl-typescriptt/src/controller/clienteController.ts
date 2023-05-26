import Entrada from "../io/entrada";
import Cliente from "../models/cliente";
import CPF from "../models/cpf";
import Empresa from "../models/empresa";
import clienteInt from "./clienteInt";

export default class clienteController implements clienteInt{
    
    empresa: Empresa = Empresa.getEmpresa()
    private clientes: Array<Cliente> = this.empresa.getClientes

    public find(cpf:string):Cliente{
        let cliente = this.clientes.filter(cli=>(cli.getCpf.getValor==cpf))
        if(cliente.length>0){
            return cliente[0]
        }else{
            throw new Error('Cliente nao encontrado')
        }
    }

    public create(nome:string,nomeSocial:string,valor:string,data:string): Cliente {
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente)
        return cliente
    }
    public index(): Array<Cliente> {
        return this.clientes
    }
    public update(nome:string,nomeSocial:string,valor:string): Cliente {
        let cliente = this.clientes.filter(cli=>(cli.getCpf.getValor==valor))
        if(cliente.length>0){
            cliente[0].setNome = nome
            cliente[0].setNomeSocial = nomeSocial
            return cliente[0]
        }else{
            throw new Error('Usuário não encontrado')
        }
    }
    public delete(cpf:string): void {
        let cliente = this.clientes.filter(cli=>(cli.getCpf.getValor==cpf))
        if(cliente.length>0){
            this.clientes.splice(0,1)
        }else{
            throw new Error('Usuário não encontrado')
        }
    }
    
}