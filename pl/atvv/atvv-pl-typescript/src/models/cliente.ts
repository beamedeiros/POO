import compra from "./compra"
import CPF from "./cpf"
import Endereco from "./endereco"
import Pet from "./pet"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private endereco: Endereco
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<compra>
    private servicosConsumidos: Array<compra>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF, telefone: Array<Telefone>, endereco: Endereco) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.endereco = endereco
        this.dataCadastro = new Date()
        this.telefones = telefone
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getNome(): string {
        return this.nome
    }
    public get getNomeSocial(): string {
        return this.nomeSocial
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getEndereco(): Endereco {
        return this.endereco
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<compra> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<compra> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public set setNome(nome:string){
        this.nome = nome
    }
    public set setNomeSocial(nomeSocial:string){
        this.nomeSocial = nomeSocial
    }
    public set setTelefones(telefones: Array<Telefone>){
        this.telefones = telefones
    }
    public appendPet(pet:Pet){
        this.pets.push(pet)
    }
}