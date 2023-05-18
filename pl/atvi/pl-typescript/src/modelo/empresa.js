"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
        this.pets = [];
    }
    get getClientes() {
        return this.clientes;
    }
    get getProdutos() {
        return this.produtos;
    }
    get getServicos() {
        return this.servicos;
    }
    get getPets() {
        return this.pets;
    }
}
exports.default = Empresa;
