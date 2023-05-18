"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor(nome, tipo, raca, genero) {
        this.nome = nome;
        this.tipo = tipo;
        this.raca = raca;
        this.genero = genero;
    }
    get getNome() { return this.nome; }
    get getTipo() { return this.tipo; }
    get getRaca() { return this.raca; }
    get getGenero() { return this.genero; }
}
exports.default = Pet;
