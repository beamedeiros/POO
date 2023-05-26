import Entrada from "../io/entrada";
import clienteView from "../view/clienteView";
import compraView from "../view/compraView";
import petView from "../view/petView";
import produtoView from "../view/produtoView";
import reportView from "../view/reportView";
import servicoView from "../view/servicoView";


console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let execucao = true
let cliente = true
let pet = true
let produto = true
let servico = true
let compra = true
let report = true
let clientView: clienteView = new clienteView()
let pView: petView = new petView()
let sView: servicoView = new servicoView()
let proView: produtoView = new produtoView()
let cView: compraView = new compraView()
let rView: reportView = new reportView()

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Pet`);
    console.log(`3 - Produto`);
    console.log(`4 - Servico`);
    console.log(`5 - Compra`);
    console.log(`6 - Reports`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            cliente = true
            while(cliente){
                console.log(`\nMenu do cliente:`);
                console.log(`1 - Cadastrar cliente`);
                console.log(`2 - Listar todos os clientes`);
                console.log(`3 - Atualizar cliente`);
                console.log(`4 - Deletar cliente`);
                console.log(`0 - Voltar`);
                let cliopcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch(cliopcao){
                    case 1:
                        clientView.createCliente()
                        break;
                    case 2:
                        clientView.listarcliente()
                        break;
                    case 3:
                        clientView.atualizarCliente()
                        break;
                    case 4:
                        clientView.deletarCliente()
                        break;
                    case 0:
                        cliente = false
                        console.log(`Voltando ao menu`)
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                        
                }
            }
            break;
        case 2:
            pet = true
            while(pet){
                console.log(`\nMenu do pet:`);
                console.log(`1 - Cadastrar pet`);
                console.log(`2 - Listar pets`);
                console.log(`3 - Atualizar pet`);
                console.log(`4 - Deletar pet`);
                console.log(`0 - Voltar`);
                let petopcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch(petopcao){
                    case 1:
                        pView.createPet()
                        break;
                    case 2:
                        pView.listarPets()
                        break;
                    case 3:
                        pView.updatePet()
                        break;
                    case 4:
                        pView.deletarPet()
                        break;
                    case 0:
                        pet = false
                        console.log(`Voltando ao menu`)
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                        
                }
            }
            break;
        case 3:
            produto = true
            while(produto){
                console.log(`\nMenu do produto:`);
                console.log(`1 - Cadastrar produto`);
                console.log(`2 - Listar produto`);
                console.log(`3 - Atualizar produto`);
                console.log(`4 - Deletar produto`);
                console.log(`0 - Voltar`);
                let seropcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch(seropcao){
                    case 1:
                        proView.createProduto()
                        break;
                    case 2:
                        proView.listarProduto()
                        break;
                    case 3:
                        proView.atualizarServico()
                        break;
                    case 4:
                        proView.deletarServico()
                        break;
                    case 0:
                        produto = false
                        console.log(`Voltando ao menu`)
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                        
                }
            }
            break;
        case 4:
            servico = true
            while(servico){
                console.log(`\nMenu do servico:`);
                console.log(`1 - Cadastrar servico`);
                console.log(`2 - Listar servico`);
                console.log(`3 - Atualizar servico`);
                console.log(`4 - Deletar servico`);
                console.log(`0 - Voltar`);
                let seropcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch(seropcao){
                    case 1:
                        sView.createServico()
                        break;
                    case 2:
                        sView.listarServico()
                        break;
                    case 3:
                        sView.atualizarServico()
                        break;
                    case 4:
                        sView.deletarServico()
                        break;
                    case 0:
                        servico = false
                        console.log(`Voltando ao menu`)
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                        
                }
            }
            break;
        case 5:
            compra = true
            while(compra){
                console.log(`\nMenu da Compra:`);
                console.log(`1 - Comprar serviço`);
                console.log(`2 - Comprar produto`);
                console.log(`3 - Listar compras`);
                console.log(`0 - Voltar`);
                let seropcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch(seropcao){
                    case 1:
                        cView.createCompraServico()
                        break;
                    case 2:
                        cView.createCompraProduto()
                        break;
                    case 3:
                        cView.listarCompra()
                        break;
                    case 0:
                        compra = false
                        console.log(`Voltando ao menu`)
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                        
                }
            }
            break;
        case 6:
            report = true
            while(report){
                console.log(`\nMenu de reports:`);
                console.log(`1 - Top 10 Clientes (quantidade)`);
                console.log(`2 - Top 5 Clientes (valor)`);
                console.log(`3 - Produtos/Serviços mais consumidos`);
                console.log(`4 - Produtos/Serviços mais consumidos por Raca e Tipo`);
                console.log(`0 - Voltar`);
                let seropcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch(seropcao){
                    case 1:
                        rView.topTenClient()
                        break;
                    case 2:
                        rView.topFiveClient()
                        break;
                    case 3:
                        rView.topServices()
                        break;
                    case 4:
                        rView.topPet()
                        break;
                    case 0:
                        report = false
                        console.log(`Voltando ao menu`)
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                        
                }
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}