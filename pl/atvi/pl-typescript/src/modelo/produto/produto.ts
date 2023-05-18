export default class Produto {
    public nome!: string
    public tipo !: string
    public valor!: string

    constructor(nome: string, tipo: string, valor: string) {
        this.nome = nome
        this.tipo = tipo
        this.valor = valor
    }

    public get getNome() {
        return this.nome
    }

    public get getTipo() {
        return this.tipo
    }

    public get getValor() {
        return this.valor
    }
}