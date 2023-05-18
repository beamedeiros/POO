import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastrar/cadastroCliente";
import CadastroPet from "../negocio/cadastrar/cadastroPet";
import CadastroProduto from "../negocio/cadastrar/cadastroProduto";
import CadastroServico from "../negocio/cadastrar/cadastroServico";
import ListagemClientes from "../negocio/listar/listagemClientes";
import ListagemPets from "../negocio/listar/listagemPets";
import ListagemProdutos from "../negocio/listar/listagemProdutos";
import ListagemServico from "../negocio/listar/listagemServico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

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

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemCliente = new ListagemClientes(empresa.getClientes)
            listagemCliente.listar()
            break;
        case 3:
            let cadastroPet = new CadastroPet(empresa.getPets)
            cadastroPet.cadastrar()
            break;
        case 4:
            let listagemPets = new ListagemPets(empresa.getPets)
            listagemPets.listar()
            break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
        break;
        case 6:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listar()
        break;
        case 7:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
        break;
        case 8:
            let listagemServico = new ListagemServico(empresa.getServicos)
            listagemServico.listar()
        break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}