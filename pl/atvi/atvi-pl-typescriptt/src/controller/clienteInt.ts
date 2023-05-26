import Cliente from "../models/cliente"

export default interface clienteInt  {
    create(nome:string,nomeSocial:string,valor:string,data:string):Cliente
    index():Array<Cliente>
    update(nome:string,nomeSocial:string,valor:string):Cliente
    delete(cpf:string):void
}