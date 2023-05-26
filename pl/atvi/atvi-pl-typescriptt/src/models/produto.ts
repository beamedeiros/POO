import Service from "./service"

export default class Produto implements Service  {
    public nome!: string
    public valor!: Number

    constructor(nome:string,valor:Number){
        this.nome = nome
        this.valor = valor
    }

    public get getNome():string{
        return this.nome
    }
    public get getValor():Number{
        return this.valor
    }
    public set setNome(nome:string){
        this.nome = nome
    }
    public set setValor(valor:Number){
        this.valor = valor
    }
}