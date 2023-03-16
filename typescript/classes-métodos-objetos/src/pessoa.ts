import Telefone from "./telefone"

export default class Pessoa{
    public nome: string
    public idade: string
    public telefone: Telefone
    constructor(nome: string, idade: string, telefone: Telefone) {
        this.nome = nome
        this.idade = idade
        this.telefone = telefone
    }
}