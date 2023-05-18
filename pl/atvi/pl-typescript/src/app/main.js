"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const cadastroCliente_1 = __importDefault(require("../negocio/cadastrar/cadastroCliente"));
const cadastroPet_1 = __importDefault(require("../negocio/cadastrar/cadastroPet"));
const cadastroProduto_1 = __importDefault(require("../negocio/cadastrar/cadastroProduto"));
const cadastroServico_1 = __importDefault(require("../negocio/cadastrar/cadastroServico"));
const listagemClientes_1 = __importDefault(require("../negocio/listar/listagemClientes"));
const listagemPets_1 = __importDefault(require("../negocio/listar/listagemPets"));
const listagemProdutos_1 = __importDefault(require("../negocio/listar/listagemProdutos"));
const listagemServico_1 = __importDefault(require("../negocio/listar/listagemServico"));
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`);
let empresa = new empresa_1.default();
let execucao = true;
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar pets`);
    console.log(`4 - Listar todos os pets`);
    console.log(`5 - Cadastrar produtos`);
    console.log(`6 - Listar produtos`);
    console.log(`7 - Cadastrar serviços`);
    console.log(`8 - Listar serviços`);
    console.log(`0 - Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    switch (opcao) {
        case 1:
            let cadastroCliente = new cadastroCliente_1.default(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case 2:
            let listagemCliente = new listagemClientes_1.default(empresa.getClientes);
            listagemCliente.listar();
            break;
        case 3:
            let cadastroPet = new cadastroPet_1.default(empresa.getPets);
            cadastroPet.cadastrar();
            break;
        case 4:
            let listagemPets = new listagemPets_1.default(empresa.getPets);
            listagemPets.listar();
            break;
        case 5:
            let cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 6:
            let listagemProduto = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProduto.listar();
            break;
        case 7:
            let cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 8:
            let listagemServico = new listagemServico_1.default(empresa.getServicos);
            listagemServico.listar();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
