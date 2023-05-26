import Cliente from "../models/cliente";
import Empresa from "../models/empresa";
import Pet from "../models/pet";
import petInt from "./petInt";

export default class petController implements petInt {

    empresa: Empresa = Empresa.getEmpresa()
    private clientes: Array<Cliente> = this.empresa.getClientes

    create(cpf:string, nome: string, tipo: string, raca: string, genero: string): Pet {
        let cliente = this.clientes.filter(cli=>(cli.getCpf.getValor==cpf))
        if(cliente.length>0){
            let pet = new Pet(nome,raca,genero,tipo)
            cliente[0].appendPet(pet)
            return pet
        }else{
            throw new Error('Usuário não encontrado')
        }
    }
    index(): Pet[] {
        let pets:Array<Pet> = []
        this.clientes.forEach(cli=>{
            if(cli.getPets.length>0){
                cli.getPets.forEach(pet=>{
                    pets.push(pet)
                })
            }
        })
        return pets
    }
    find(nome:string):Pet{
        let pets = this.index()
        let pet = pets.find(p=>(p.getNome==nome))
        if(pet==null){
            throw new Error('Pet não encontrado')
        }else{
            return pet
        }
    }
    update(cpf:string, nome: string, tipo: string, raca: string, genero: string): Pet {
        let cliente = this.clientes.filter(cli=>(cli.getCpf.getValor==cpf))
        if(cliente.length>0){
            let pet =cliente[0].getPets.filter(p=>(p.getNome==nome))
            if(pet.length>0){
                pet[0].setTipo = tipo
                pet[0].setRaca = raca
                pet[0].setGenero = genero
                return pet[0]
            }else{
                throw new Error('Pet não encontrado')
            }
        }else{
            throw new Error('Usuário não encontrado')
        }
    }
    delete(cpf: string, nome:string): void {
        let cliente = this.clientes.filter(cli=>(cli.getCpf.getValor==cpf))
        if(cliente.length>0){
            let pet =cliente[0].getPets.filter(p=>(p.getNome==nome))
            if(pet.length>0){
                cliente[0].getPets.splice(0,1)
            }else{
                throw new Error('Pet não encontrado')
            }
        }else{
            throw new Error('Usuário não encontrado')
        }
    }
    
}