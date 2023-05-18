import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet/pet"
import Cadastro from "./cadastro"

export default class CadastroPet extends Cadastro {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça: `);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero: `);
        let pet = new Pet(nome, tipo, raca, genero);
        this.pets.push(pet)
        console.log(`\nCadastro concluído :)\n`);
    }
}