export default class Servico {
    public nome!: string
    public desc!: string
    public valor!: string

    constructor(nome: string, desc: string, valor: string) {
        this.nome = nome
        this.desc = desc
        this.valor = valor
    }

    public get getNome() {
        return this.nome
    }

    public get getDesc() {
        return this.desc
    }

    public get getValor() {
        return this.valor
    }
}