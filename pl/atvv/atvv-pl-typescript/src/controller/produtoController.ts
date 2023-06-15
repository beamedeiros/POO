import Empresa from "../models/empresa";
import Produto from "../models/produto";
import Servico from "../models/servico";
import serviceInt from "./serviceInt";

export default class produtoController extends serviceInt {
    
    empresa: Empresa = Empresa.getEmpresa()
    private produtos: Array<Produto> = this.empresa.getProdutos

    create(nome:string,valor:number): Produto {
        let servico = new Servico(nome,valor)
        this.produtos.push(servico)
        return servico   
    }
    index(): Produto[] {
        return this.produtos
    }
    update(nome:string,valor:Number): Produto {
        let servico = this.produtos.filter(s=>(s.getNome==nome))
        if(servico.length>0){
            servico[0].setValor = valor
            return servico[0]
        }else{
            throw new Error('Servico não encontrado')
        }
    }
    delete(nome:string): void {
        let servico = this.produtos.filter(s=>(s.getNome==nome))
        if(servico.length>0){
            this.produtos.splice(0,1)
        }else{
            throw new Error('Servico não encontrado')
        }
    }

}