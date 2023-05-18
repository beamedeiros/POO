import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviços`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let desc = this.entrada.receberTexto(`Por favor informe a descrição do serviço (opcional): `)
        let valor = this.entrada.receberTexto(`Por favor informe o valor do serviço: `)
        let servico = new Servico(nome, desc, valor);
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }
}