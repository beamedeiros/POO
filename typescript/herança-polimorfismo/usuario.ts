import Login from "./login"

export default class Usuario implements Login{
    //private nome:string -> subclasses e classes externas não conseguem acessar sem outros métodos como get e set
    
    //protected faz as subclasses herdarem o atributo da classe mãe, mas não pode ser acessado por classes externas
    protected nome:string 

    constructor(nome:string) {
        this.nome = nome
    }

    fazerLogin(): void {
        console.log('Tentando fazer login...')
    }
}