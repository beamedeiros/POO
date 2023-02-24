"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    //método
    fazAlgo() {
        console.log(`O meu bichinho ${this.nome} come alface.`);
    }
}
exports.default = Animal;
