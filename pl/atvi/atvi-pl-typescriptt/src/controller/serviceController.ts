import Empresa from "../models/empresa";
import Servico from "../models/servico";
import serviceInt from "./serviceInt";

export default class serviceController extends serviceInt{

    empresa: Empresa = Empresa.getEmpresa()
    private servicos: Array<Servico> = this.empresa.getServicos

    create(nome:string,valor:Number): Servico {
        let servico = new Servico(nome,valor)
        this.servicos.push(servico)
        return servico   
    }
    index(): Servico[] {
        return this.servicos
    }
    update(nome:string,valor:Number): Servico {
        let servico = this.servicos.filter(s=>(s.getNome==nome))
        if(servico.length>0){
            servico[0].setValor = valor
            return servico[0]
        }else{
            throw new Error('Servico não encontrado')
        }
    }
    delete(nome:string): void {
        let servico = this.servicos.filter(s=>(s.getNome==nome))
        if(servico.length>0){
            this.servicos.splice(0,1)
        }else{
            throw new Error('Servico não encontrado')
        }
    }
    
}