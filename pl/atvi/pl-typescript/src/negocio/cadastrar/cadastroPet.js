"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const pet_1 = __importDefault(require("../../modelo/pet/pet"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroPet extends cadastro_1.default {
    constructor(pets) {
        super();
        this.pets = pets;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `);
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `);
        let raca = this.entrada.receberTexto(`Por favor informe a raça: `);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero: `);
        let pet = new pet_1.default(nome, tipo, raca, genero);
        this.pets.push(pet);
        console.log(`\nCadastro concluído :)\n`);
    }
}
exports.default = CadastroPet;
