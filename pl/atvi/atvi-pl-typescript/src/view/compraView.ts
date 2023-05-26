import clienteController from "../controller/clienteController";
import clienteInt from "../controller/clienteInt";
import compraController from "../controller/compraController";
import petController from "../controller/petController";
import Entrada from "../io/entrada"

export default class compraView{
    private entrada: Entrada
    private cService: compraController = new compraController()
    private clienteService: clienteController = new clienteController()
    private pService:petController = new petController()
    constructor() {
        this.entrada = new Entrada()
    }

    public createCompraServico():void{
        console.log(`\nCompra de Serviço`);
        let valor = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `);
        let servico = this.entrada.receberTexto(`Por favor informe nome do serviço: `);
        let qtd = this.entrada.receberNumero('Por favor insira a quantidade: ')
        let pet = this.entrada.receberTexto('Por favor informe o nome do pet: ')
        try{
            let p = this.pService.find(pet)
            this.cService.compraServico(valor,servico,qtd,p.getTipo,p.getRaca)
            console.log('\nNova compra\n')
        }catch(e){
            console.log(e+"\n")
        }
    }

    public createCompraProduto():void{
        console.log(`\nCompra de Produto`);
        let valor = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `);
        let servico = this.entrada.receberTexto(`Por favor informe nome do produto: `);
        let qtd = this.entrada.receberNumero('Por favor insira a quantidade: ')
        let pet = this.entrada.receberTexto('Por favor informe o nome do pet: ')
        try{
            let p = this.pService.find(pet)
            this.cService.compraProduto(valor,servico,qtd,p.getTipo,p.getRaca)
            console.log('\nNova compra\n')
        }catch(e){
            console.log(e+"\n")
        }
    }

    public listarCompra():void{
        console.log('\nListar Compra')
        let valor = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `);
        try{
            let cliente = this.clienteService.find(valor)
            console.log("\nNome: "+cliente.getNome)
            console.log("Nome social: "+cliente.getNomeSocial)
            if(cliente.getServicosConsumidos.length>0){
                console.log("Serviços:\n")
                cliente.getServicosConsumidos.forEach(s=>{
                    let total = s.getQtd.valueOf()*s.getService.getValor.valueOf()
                    console.log("Serviço: "+s.getService.getNome+" | Quantidade:"+s.getQtd+" | Valor: "+s.getService.getValor+" | Valor Total: "+total)
                })
            }
            if(cliente.getProdutosConsumidos.length>0){
                console.log("Produtos:\n")
                cliente.getProdutosConsumidos.forEach(s=>{
                    let total = s.getQtd.valueOf()*s.getService.getValor.valueOf()
                    console.log("Serviço: "+s.getService.getNome+" | Quantidade:"+s.getQtd+" | Valor: "+s.getService.getValor+" | Valor Total: "+total)
                })
            }
        }catch(e){
            console.log(e+"\n")
        }
    }
}