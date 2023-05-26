import clienteInt from "../controller/clienteInt";
import clienteController from "../controller/clienteController";
import Entrada from "../io/entrada";

export default class clienteView {
    private entrada: Entrada
    private clienteController: clienteInt = new clienteController()
    constructor() {
        this.entrada = new Entrada()
    }
    public createCliente():void{
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let cliente = this.clienteController.create(nome,nomeSocial,valor,data)
        console.log('\nNovo cliente criado\n')
    }
    public listarcliente():void{
        console.log(`\nListagem de cliente`);
        let clientes = this.clienteController.index()
        clientes.forEach(cli=>{
            console.log('Nome do cliente: '+cli.getNome)
            console.log('Nome Social do cliente: '+cli.getNomeSocial)
            console.log('CPF do cliente: '+cli.getCpf.getValor)
            if(cli.getPets.length>0){
                console.log("Pets:")
                cli.getPets.forEach(pet=>{
                    console.log("   nome: "+pet.getNome)
                    console.log("   tipo: "+pet.getTipo)
                    console.log("   raca: "+pet.getRaca)
                    console.log("   genero: "+pet.getGenero)
                    console.log('\n')
                })
            }else{
                console.log('\n')
            }
        })
    }
    public atualizarCliente():void{
        console.log(`\nAtualizar cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        try{
            let cliente = this.clienteController.update(nome,nomeSocial,valor)
            console.log('\n')
            console.log('Nome do cliente: '+cliente.getNome)
            console.log('Nome Social do cliente: '+cliente.getNomeSocial)
            console.log('CPF do cliente: '+cliente.getCpf.getValor)
            console.log('\n')
        }catch(e){
            console.log(e)
        }
    }
    public deletarCliente():void{
        console.log(`\nAtualizar cliente`);
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        try{
            this.clienteController.delete(valor)
            console.log('\nCliente deletado\n')
        }catch(e){
            console.log(e)
        }
    }
}