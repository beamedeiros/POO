import Cliente from "../models/cliente";
import CPF from "../models/cpf";
import Empresa from "../models/empresa";
import Endereco from "../models/endereco";
import Telefone from "../models/telefone";
import clienteInt from "./clienteInt";

export default class clienteController implements clienteInt {

    empresa: Empresa = Empresa.getEmpresa()
    private clientes: Array<Cliente> = this.empresa.getClientes

    public find(cpf: string): Cliente {
        let cliente = this.clientes.filter(cli => (cli.getCpf.getValor == cpf))
        if (cliente.length > 0) {
            return cliente[0]
        } else {
            throw new Error('Cliente nao encontrado')
        }
    }

    public create(nome: string, nomeSocial: string, valor: string, data: string, estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string, telefone: Array<Telefone>): Cliente {
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let endereco = new Endereco(estado, cidade, bairro, rua, numero, codigoPostal, informacoesAdicionais)
        let cliente = new Cliente(nome, nomeSocial, cpf, telefone, endereco);
        this.clientes.push(cliente)
        return cliente
    }
    public index(): Array<Cliente> {
        return this.clientes
    }
    public update(nome: string, nomeSocial: string, valor: string, data: string, estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string, telefone: Array<Telefone>): Cliente {
        let cliente = this.clientes.filter(cli => (cli.getCpf.getValor == valor))
        if (cliente.length > 0) {
            cliente[0].setNome = nome
            cliente[0].setNomeSocial = nomeSocial
            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia)
            cliente[0].getCpf.setData = dataEmissao
            cliente[0].getEndereco.setEstado = estado
            cliente[0].getEndereco.setCidade = cidade
            cliente[0].getEndereco.setBairro = bairro
            cliente[0].getEndereco.setRua = rua
            cliente[0].getEndereco.setNumero = numero
            cliente[0].getEndereco.setCodigoPostal = codigoPostal
            cliente[0].getEndereco.setInformacoesAdicionais = informacoesAdicionais
            cliente[0].setTelefones = telefone
            return cliente[0]
        } else {
            throw new Error('Usuário não encontrado')
        }
    }
    public delete(cpf: string): void {
        let cliente = this.clientes.filter(cli => (cli.getCpf.getValor == cpf))
        if (cliente.length > 0) {
            this.clientes.splice(0, 1)
        } else {
            throw new Error('Usuário não encontrado')
        }
    }

}