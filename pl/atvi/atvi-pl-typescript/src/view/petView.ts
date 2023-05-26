import petInt from "../controller/petInt"
import petController from "../controller/petController"
import Entrada from "../io/entrada"

export default class petView {
    private entrada: Entrada
    private pController: petInt = new petController()
    constructor() {
        this.entrada = new Entrada()
    }
    public createPet():void{
        console.log(`\nInício do cadastro do pet`);
        let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `);
        let raca = this.entrada.receberTexto(`Por favor informe a raca do pet: `);
        let genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `);
        try{
            this.pController.create(cpf,nome,tipo,raca,genero)
        }catch(e){
            console.log(e)
        }
        console.log('\nNovo pet criado\n')
    }
    public listarPets():void{
        console.log(`\nListagem de pet`);
        let pets = this.pController.index()
        if(pets.length>0){
            pets.forEach(pet=>{
                console.log('Nome: '+pet.getNome)
                console.log('Tipo: '+pet.getTipo)
                console.log('Raca: '+pet.getRaca)
                console.log('Genero: '+pet.getGenero)
                console.log('\n')
            })
        }else{
            console.log('\nNenhum pet cadastrado\n')
        }
    }
    public updatePet():void{
        console.log(`\nAtualizar pet`);
        let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `);
        let raca = this.entrada.receberTexto(`Por favor informe a raca do pet: `);
        let genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `);
        try{
            let pet = this.pController.update(cpf,nome,tipo,raca,genero)
            console.log('\n')
            console.log('Nome: '+pet.getNome)
            console.log('Tipo: '+pet.getTipo)
            console.log('Raca: '+pet.getRaca)
            console.log('Genero: '+pet.getGenero)
            console.log('\n')
        }catch(e){
            console.log(e)
        }
    }
    public deletarPet():void{
        console.log(`\nDeletar pet`);
        let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        try{
            this.pController.delete(cpf,nome)
            console.log('\nPet deletado\n')
        }catch(e){
            console.log(e)
        }
    }
}