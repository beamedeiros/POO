import serviceController from "../controller/serviceController"
import serviceInt from "../controller/serviceInt"
import Entrada from "../io/entrada"

export default class servicoView {
    private entrada: Entrada
    private sController: serviceInt = new serviceController()
    constructor() {
        this.entrada = new Entrada()
    }
    public createServico(){
        console.log(`\nInício do cadastro do servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do servico: `)
        try{
            this.sController.create(nome,valor)
        }catch(e){
            console.log(e)
        }
        console.log('\nNovo servico criado\n')
    }
    public listarServico(){
        console.log(`\nInício da listagem de servico`);
        try{
            let servicos = this.sController.index()
            if(servicos.length>0){
                servicos.forEach(s=>{
                    console.log("Nome: "+s.getNome)
                    console.log("Valor: "+s.getValor)
                    console.log('\n')
                })
            }else{
                console.log('\nNenhum servico criado\n')
            }
        }catch(e){
            console.log(e)
        }
    }
    public atualizarServico(){
        console.log(`\nInício da atualizacao do servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do servico: `)
        try{
            let servico = this.sController.update(nome,valor)
            console.log('\n')
            console.log("Nome: "+servico.getNome)
            console.log("Valor: "+servico.getValor)
            console.log('\n')
        }catch(e){
            console.log(e)
        }
    }
    public deletarServico(){
        console.log(`\nInício da exclusao do servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
        try{
            this.sController.delete(nome)
            console.log('\nServico Deletado\n')
        }catch(e){
            console.log(e)
        }
    }
}