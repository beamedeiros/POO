import Cliente from "../models/cliente"
import Telefone from "../models/telefone"

export default interface clienteInt  {
    create(nome:string,nomeSocial:string,valor:string,data:string, estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string, telefone: Array<Telefone>):Cliente
    index():Array<Cliente>
    update(nome:string,nomeSocial:string,valor:string,data:string, estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string, telefone: Array<Telefone>):Cliente
    delete(cpf:string):void
}