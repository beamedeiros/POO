export default class Animal {
    public nome: string
    constructor(nome: string){
        this.nome = nome
    }

    //método
    public fazAlgo() {
        console.log(`O meu bichinho ${this.nome} come alface.`)
    }
}