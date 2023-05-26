import produtoController from "../controller/produtoController";
import serviceInt from "../controller/serviceInt";
import Entrada from "../io/entrada";

export default class produtoView {
    private entrada: Entrada
    private pController: serviceInt = new produtoController()
    constructor() {
        this.entrada = new Entrada()
    }
    public createProduto(){
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
        try{
            this.pController.create(nome,valor)
        }catch(e){
            console.log(e)
        }
        console.log('\nNovo produto criado\n')
    }
    public listarProduto(){
        console.log(`\nInício da listagem de produto`);
        try{
            let servicos = this.pController.index()
            if(servicos.length>0){
                servicos.forEach(s=>{
                    console.log("Nome: "+s.getNome)
                    console.log("Valor: "+s.getValor)
                    console.log('\n')
                })
            }else{
                console.log('\nNenhum produto criado\n')
            }
        }catch(e){
            console.log(e)
        }
    }
    public atualizarServico(){
        console.log(`\nInício da atualizacao do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
        try{
            let servico = this.pController.update(nome,valor)
            console.log('\n')
            console.log("Nome: "+servico.getNome)
            console.log("Valor: "+servico.getValor)
            console.log('\n')
        }catch(e){
            console.log(e)
        }
    }
    public deletarServico(){
        console.log(`\nInício da exclusao do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        try{
            this.pController.delete(nome)
            console.log('\nPoduto Deletado\n')
        }catch(e){
            console.log(e)
        }
    }
}